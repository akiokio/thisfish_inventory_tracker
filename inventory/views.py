from rest_framework import viewsets, permissions, pagination, decorators, response, status

from .models import Product
from .serializers import ProductSerializer

class LargeResultsSetPagination(pagination.PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 10000

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.get_queryset().order_by('-id')
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = LargeResultsSetPagination

    @decorators.action(detail=True, methods=["post"])
    def add_to_inventory(self, request, pk=None):
        print(request.data)
        product = self.get_object()
        product.quantity += int(request.data['quantity'])
        product.save()
        return response.Response({'status': 'ok'})
        # if serializer.is_valid():
        #
        # else:
        #     return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

