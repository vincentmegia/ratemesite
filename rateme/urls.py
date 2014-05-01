from django.conf.urls import *
from rateme.views import *

urlpatterns = patterns('ratemesite.rateme.views',
    url(r'^$', index, name='index'),
    url(r'^details/$', details, name='details'),
    url(r'^tutorial/$', basicgrid, name='basicgrid'),
    url(r'^details/suppliers.json$', suppliers_json, name='suppliers.json')
)  