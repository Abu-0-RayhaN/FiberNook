from .serializers import CartSerializer
from .models import Cart
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import Product, Cart, Category
from .serializers import ProductSerializer, CartSerializer, CategorySerializer
from rest_framework.views import APIView


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class UserCartView(generics.ListCreateAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retrieve carts only for the authenticated user
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Associate the cart with the authenticated user during creation
        serializer.save(user=self.request.user)


class aUserCartView(APIView):
    # renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        Serializer = UserProfileSerializer(request.user)
        return Response(Serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = UserPasswordResetSerializer(
            data=request.data, context={'uid': uid, 'token': token})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password Reset Successfully'}, status=status.HTTP_200_OK)


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
