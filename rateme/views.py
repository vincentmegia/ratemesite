# Create your views here.
from django.template import loader, Context
from django.http import HttpResponse
from rateme.models import Supplier

def supplierview(request):
    supplier = Supplier.objects.all()
    template = loader.get_template("supplier.html")
    context = Context({ 'supplier' : supplier})
    return HttpResponse(template.render(context))