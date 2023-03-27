from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Product
from base.serializers import ProductSerializer

from rest_framework import status

#To get the product list
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

#To get the single product
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)    
    