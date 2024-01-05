from .serializers import CartSerializer
from .models import Cart
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import Product, Cart, Category
from .serializers import ProductSerializer, CartSerializer, CategorySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class UserCartView(generics.ListCreateAPIView, generics.DestroyAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retrieve carts only for the authenticated user
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        product = serializer.validated_data['product']

        try:
            # Try to get the product instance based on the provided ID
            product_instance = Product.objects.get(id=product.id)

            # Check if the user already has a cart object for the same product
            existing_cart = Cart.objects.filter(
                user=self.request.user, product=product_instance).first()

            if existing_cart:
                # Update the quantity on the existing cart object
                existing_cart.quantity += serializer.validated_data['quantity']
                existing_cart.save()
            else:
                # Associate the cart with the authenticated user during creation
                serializer.save(user=self.request.user)

        except Product.DoesNotExist:
            # Product does not exist, return a custom response
            return Response({"detail": f"Product with ID {product.id} does not exist."}, status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, *args, **kwargs):
        product_id = request.data.get('id', None)

        if product_id:
            # Delete the specific product from the user's cart
            try:
                cart_item = Cart.objects.get(
                    product__id=product_id, user=request.user)
                cart_item.delete()
                return Response({"detail": f"Product with ID {product_id} deleted from the cart."})
            except Cart.DoesNotExist:
                return Response({"detail": f"Product with ID {product_id} not found in the user's cart."}, status=400)
            # Delete all cart items for the user
        else:
            # Delete all cart items for the user
            carts_to_delete = Cart.objects.filter(user=request.user)
            carts_to_delete.delete()
            return Response({"detail": "All cart items deleted successfully."})


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
