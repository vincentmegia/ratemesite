# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from rateme.models import Supplier
#from django.core import serializers
#from rateme.utilities import JSON


def details(request):
    '''
    Handles rateme/details Url
    '''
    suppliers = Supplier.objects.all()
    context = {"suppliers": suppliers}
    return render(request, "rateme/supplier.html", context)


def index(request):
    '''
    Handles the default rateme/ Url
    '''
    suppliers = Supplier.objects.all()
    output = ','.join([supplier.name for supplier in suppliers])
    return HttpResponse(output)


def basicgrid(request):
    '''
    Handles the rateme/basicgrid url
    '''
    return render(request, "rateme/bootstrap.tutorial.grid.html")


def suppliersJson(request):
    keyword = request.GET["keyword"]
    try:
        suppliers = Supplier.objects.filter(name__istartswith=keyword)
    except Exception as exception:
        print(exception)
    #jsonData = serializers.serialize("json", suppliers)
    jsonData = JSONSerializer().serialize("json", suppliers)
    return HttpResponse(jsonData, content_type="application/json")