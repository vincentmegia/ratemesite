# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from rateme.models import Supplier
from rateme.utilities.serializers import CleanJsonSerializer


def details(request):
    """
    Handles rateme/details Url
    """
    suppliers = Supplier.objects.all()
    context = {"suppliers": suppliers}
    return render(request, "rateme/supplier.html", context)


def index(request):
    """
    Handles the default rateme/ Url
    """
    suppliers = Supplier.objects.all()
    output = ','.join([supplier.name for supplier in suppliers])
    return HttpResponse(output)


def basicgrid(request):
    """
    Handles the rateme/basicgrid url
    """
    return render(request, "rateme/bootstrap.tutorial.grid.html")


def suppliers_json(request):
    keyword = request.GET["keyword"]
    try:
        suppliers = Supplier.objects.filter(name__istartswith=keyword)
        serializer = CleanJsonSerializer()
        json_data = serializer.serialize(suppliers)
    except Exception as exception:
        print(exception)

    return HttpResponse(json_data, content_type="application/json")


def forum_home(request):
    """
    Handles the rateme/forum url
    """
    return render(request, "rateme/index.html")