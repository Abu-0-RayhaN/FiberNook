from django.contrib import admin
from .models import Cart, Category, Product, Size, Address


class cartAdmin(admin.ModelAdmin):
    list_display = ['user', 'product', 'quantity', 'total_sum']


admin.site.register(Cart, cartAdmin)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Size)
admin.site.register(Address)
# Register your models here.
