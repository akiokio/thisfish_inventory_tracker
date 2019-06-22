from django.db import models


class Product(models.Model):
    T1 = 'T1'
    T2 = 'T2'
    T3 = 'T3'
    T4 = 'T4'

    TYPES_CHOICES = [
        (T1, 'Type 01'),
        (T2, 'Type 02'),
        (T3, 'Type 03'),
        (T4, 'Type 04'),
    ]

    name = models.CharField(max_length=255)
    sku = models.CharField(max_length=25)
    quantity = models.PositiveIntegerField(default=0)
    type = models.CharField(
        max_length=2,
        choices=TYPES_CHOICES,
        default=T1,
    )

    def __str__(self):
        return f'{self.sku} - {self.name}'
