from django.conf.urls.defaults import *
from rateme.views import supplierview

urlpatterns = patterns('',
    url(r'^$', supplierview),
)  