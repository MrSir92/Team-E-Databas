from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from todoapp import views


urlpatterns = [
    # url(r'^tasks/$', views.TaskList.as_view()),
    # url(r'^tasks/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),
    url(r'^needs/$', views.ListNeed.as_view()),
    url(r'^offers/$', views.ListOffer.as_view()),
    url(r'^users/$', views.CreateUsers.as_view()),
    url(r'^needs/(?P<pk>[0-9]+)/$', views.NeedDetail.as_view()),
    url(r'^offers/(?P<pk>[0-9]+)/$', views.OfferDetail.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/needs/$', views.ListUserNeed.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/offers/$', views.ListUserOffer.as_view()),
    url(r'^needs/(?P<list_pk>[0-9]+[a-z])/$', views.ListNeedCategory.as_view()),
    url(r'^offers/(?P<list_pk>[0-9]+[a-z])/$', views.ListOfferCategory.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)