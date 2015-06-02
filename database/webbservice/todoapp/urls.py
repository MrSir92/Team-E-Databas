from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from todoapp import views


urlpatterns = [
    # url(r'^tasks/$', views.TaskList.as_view()),
    # url(r'^tasks/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),
    url(r'^$', views.Index.as_view()),
    url(r'^needs/$', views.ListNeed.as_view()),
    url(r'^offers/$', views.ListOffer.as_view()),
    url(r'^users/$', views.CreateUser.as_view()),
    url(r'^needs/filter/$', views.FilterNeed.as_view()),
    url(r'^offers/filter/$', views.FilterOffer.as_view()),
    url(r'^needs/(?P<pk>[0-9]+)/$', views.NeedDetail.as_view(template_name = 'front/needdetail.html'), name="needdetail"),
    url(r'^offers/(?P<pk>[0-9]+)/$', views.OfferDetail.as_view(template_name = 'front/offerdetail.html'), name="offerdetail"),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/needs/$', views.ListUserNeed.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/offers/$', views.ListUserOffer.as_view()),
    url(r'^needs/(?P<pk>\w+)/$', views.ListNeedCategory.as_view()),
    url(r'^offers/(?P<pk>[a-z0-9]+)/$', views.ListOfferCategory.as_view()),
    url(r'^needs/location/(?P<pk>[a-z0-9]+)/$', views.ListNeedLocation.as_view()),
    url(r'^offers/location/(?P<pk>[a-z0-9]+)/$', views.ListOfferLocation.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)