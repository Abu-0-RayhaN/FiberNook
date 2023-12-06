from rest_framework import serializers
from authentication.models import User
from django.contrib.auth.hashers import check_password


class UserRegistrationSerializer(serializers.ModelSerializer):
    # We are writing this because we need confirm password field in our Registration Request
    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'name', 'password', 'password2', 'tc']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    # Validataing Password and Confirm Password while Registration

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError(
                "Password and Confirm Password Doesn't Match")
        return attrs
    # Using this create method because we're using custom user model

    def create(self, validate_data):
        return User.objects.create_user(**validate_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = User
        fields = ['email', 'password']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name',]


class UserChangePasswordSerializer(serializers.Serializer):
    oldPassword = serializers.CharField(
        max_length=255, style={'input_type': 'password'}, write_only=True)
    password2 = serializers.CharField(
        max_length=255, style={'input_type': 'password'}, write_only=True)
    password3 = serializers.CharField(
        max_length=255, style={'input_type': 'password'}, write_only=True)

    class Meta:
        fields = ['oldPassword', 'password2', 'password3']

    def validate(self, attrs):
        password2 = attrs.get('password2')
        password3 = attrs.get('password3')
        oldPassword = attrs.get('oldPassword')
        user = self.context.get('user')
        # Check if old_password matches the current user's password
        if not check_password(oldPassword, user.password):
            raise serializers.ValidationError("Current password is incorrect")

        # Check if password2 and password3 match
        if password2 != password3:
            raise serializers.ValidationError(
                "Password and Confirm Password don't match")

        # Set the new password for the user
        user.set_password(password2)
        user.save()
        return attrs
