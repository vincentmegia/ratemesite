from django.conf.urls.defaults import *
from ratemesite.rateme.views import supplierview

urlpatterns = patterns('',
    url(r'^$', supplierview),
)