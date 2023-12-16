from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from authentication.serializers import UserRegistrationSerializer, UserLoginSerializer, UserProfileSerializer, UserChangePasswordSerializer, SendPasswordResetEmailSerializer, UserPasswordResetSerializer
from django.contrib.auth import authenticate
from authentication.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


def get_tokens_for_user(user):  # generating tokens for registration,login
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# User Registration


class UserRegistrationView(APIView):
    # Renderer class to render message with key value with key as error if there's error
    renderer_classes = [UserRenderer]

    # Handles Post request with the acccount creation data
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)  # Generating token with jwt
        return Response({"token": token, "message": "Registration Has been successful"}, status=status.HTTP_201_CREATED)

# User Login


class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            token = get_tokens_for_user(user)  # Generating token with jwt
            return Response({'token': token, 'msg': 'Login Success'}, status=status.HTTP_200_OK)
        else:
            return Response({"errors": {"non_field_errors": ["Email or Password is not Valid"]}}, status=status.HTTP_404_NOT_FOUND)

        # class UserLoginView(APIView):
        #     renderer_classes = [UserRenderer]

        #     def post(self, request, format=None):
        #         serializer = UserLoginSerializer(data=request.data)
        #         if serializer.is_valid(raise_exception=True):
        #             email = serializer.data.get('email')
        #             password = serializer.data.get('password')
        #             user = authenticate(email=email, password=password)
        #             if user is not None:
        #                 token = get_tokens_for_user(user)  # Generating token with jwt
        #                 return Response({'token': token, 'msg': 'Login Success'}, status=status.HTTP_200_OK)
        #             else:
        #                 return Response({"errors": {"non_field_errors": ["Email or Password is not Valid"]}}, status=status.HTTP_404_NOT_FOUND)
        #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User Profile acces with token


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        Serializer = UserProfileSerializer(request.user)
        return Response(Serializer.data, status=status.HTTP_200_OK)

# Password changing View with current pass and new pass and confirm pass


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    # permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={'user': request.user})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': "Password changed"}, status=status.HTTP_200_OK)

# This view sends email with link to reset password.


class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, formate=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)

# Reset password by the link sent to your email


class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(
            data=request.data, context={'uid': uid, 'token': token})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password Reset Successfully'}, status=status.HTTP_200_OK)
