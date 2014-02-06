from django.conf.urls.defaults import *
from rateme.views import *

urlpatterns = patterns('ratemesite.rateme.views',
    url(r'^$', index), 
    url(r'^$', supplierview),
)  