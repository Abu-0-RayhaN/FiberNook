from django.urls import path
from .views import ProductListView, UserCartView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('cart/', UserCartView.as_view(), name='cart'),
]
