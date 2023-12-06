from django.urls import path, include
from authentication.views import UserRegistrationView
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name="register")
]
