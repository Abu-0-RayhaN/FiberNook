from django.db import models
from authentication.models import User


class Size(models.Model):
    name = models.CharField(max_length=5, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/product_images/')
    stock = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    sizes = models.ManyToManyField(Size, blank=True)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    total_sum = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    date_added = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Calculate total_sum before saving
        self.total_sum = self.quantity * self.product.price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user} - {self.product} - {self.quantity} - {self.total_sum}"


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    additional_info = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.street_address}, {self.city}, {self.state}, {self.postal_code}, {self.country}"

    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses"
