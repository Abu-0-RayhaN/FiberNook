from rest_framework import serializers
from .models import Product, Cart, Category, Address


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price',
                  'category', 'image', 'is_active', 'stock', 'sizes']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'id']


class CartSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(
        source='product.title', read_only=True)

    class Meta:
        model = Cart
        fields = ['product', 'product_name', 'quantity', 'total_sum']


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street_address', 'city', 'state',
                  'postal_code', 'country', "additional_info"]
