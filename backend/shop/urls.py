from django.urls import path
from .views import ProductListView, UserCartView, UserAddressView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('cart/', UserCartView.as_view(), name='cart'),
    path('address/', UserAddressView.as_view(), name='address')
]
