from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from todoapp import views


urlpatterns = [
    # url(r'^tasks/$', views.TaskList.as_view()),
    # url(r'^tasks/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),
    url(r'^lists/$', views.ListList.as_view()),
    url(r'^lists/(?P<pk>[0-9]+)/$', views.ListDetail.as_view()),
    url(r'^lists/(?P<pk>[0-9]+)/tasks/$', views.ListTasks.as_view()),
    url(r'^lists/(?P<list_pk>[0-9]+)/tasks/(?P<pk>[0-9]+)/$', views.ListTaskDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)