from django.contrib import admin
from .models import Cart, Category, Product, Size


class cartAdmin(admin.ModelAdmin):
    list_display = ['user', 'product', 'quantity', 'total_sum']


admin.site.register(Cart, cartAdmin)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Size)
# Register your models here.
