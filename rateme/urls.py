from django.conf.urls import *
from rateme.views import *

urlpatterns = patterns('ratemesite.rateme.views',
    url(r'^$', index, name='index'),
    url(r'^details/$', details, name='details'),
    url(r'^tutorial/$', basicgrid, name='basic.grid'),
    url(r'^forum/$', forum_home, name='forum.home'),
    url(r'^details/suppliers.json$', suppliers_json, name='suppliers.json')
)  