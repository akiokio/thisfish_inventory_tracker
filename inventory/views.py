from rest_framework import viewsets, permissions

from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.get_queryset().order_by('-id')
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)
