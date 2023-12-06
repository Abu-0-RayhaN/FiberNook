from rest_framework import serializers
from authentication.models import User


class UserRegistrationSerializer(serializers):
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
        return super().validate(attrs)
