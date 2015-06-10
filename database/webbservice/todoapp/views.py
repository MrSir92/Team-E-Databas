from django.shortcuts import render
from todoapp.models import Need, Offer, User
from todoapp.serializers import NeedSerializer, UserSerializer, OfferSerializer, UserDetailSerializer, UserOfferListSerializer, UserNeedListSerializer, OfferDetailSerializer, OfferCategorySerializer, NeedDetailSerializer, NeedCategorySerializer, NeedFilterSerializer, OfferFilterSerializer
from rest_framework.views import APIView
from rest_framework import generics, permissions, pagination
from django.views.generic import ListView, CreateView, DetailView
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.db.models import Count

# Create your views here.
class Index(ListView):
    template_name = 'index.html'
    queryset = User.objects.all().order_by('id')[:1]

class FilterNeed(generics.ListAPIView):
    serializer_class = NeedFilterSerializer
    queryset = Need.objects.all()

class FilterOffer(generics.ListAPIView):
    serializer_class = OfferFilterSerializer
    queryset = Offer.objects.all()

class ListNeed(generics.ListCreateAPIView):
    """
    An APIView to list all Needs and to create new
    Need.
    """
    """serializer_class = NeedSerializer
    def get_paginated_response(self.data):
        return ({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'results': data
            })
    """
    serializer_class = NeedSerializer
    paginate_by = 20
    queryset = Need.objects.all().order_by('-created_at')
    """model = Need
    success_url = 'listview'
    serializer_class = NeedSerializer
    template_name = 'front/needs.html'
    def get_context_data(self, **kwargs):
        kwargs['object_list'] = Need.objects.all().order_by('created_at')[:20]
        return super(ListNeed, self).get_context_data(**kwargs)"""


class CreateUser(generics.CreateAPIView):
    """
    An APIView to create a new User.
    """
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    An APIView to retrive, update or delete a specific User.
    """
    serializer_class = UserDetailSerializer
    queryset = User.objects.all()

class NeedDetail(DetailView):
    """
    An APIView to retrive, update or delete a specific Need.
    """
    model = Need
    """def get_queryset(self):
        task = get_object_or_404(Need, id=self.kwargs[0])
        return task
    
    model = Need
    def get_queryset(self):
        task= get_object_or_404(Need,id=self.kwargs['pk'])
        return task
    """

class ListOffer(generics.ListCreateAPIView):
    """
    An APIView to list all Offers or create an Offer.
    """
    serializer_class = OfferSerializer
    paginate_by = 20
    queryset = Offer.objects.all().order_by('-created_at')
    """model = Offer
    success_url = 'listview'
    serializer_class = OfferSerializer
    template_name = 'front/offers.html'
    def get_context_data(self, **kwargs):
        kwargs['object_list'] = Offer.objects.all().order_by('created_at')[:20]
        return super(ListNeed, self).get_context_data(**kwargs)"""
    """
    def perform_create(self, serializer):
        try:
            serializer.save(todo_list=List.objects.get(pk=self.kwargs['pk']))
        except:
            serializer.save(todo_list=None)

    def get_queryset(self):
        list = get_object_or_404(List.objects.all(), pk=self.kwargs['pk'])
        return list.task_set.all() 
    """    
class OfferDetail(DetailView):
    """
    An APIView to retrive, update or delete a specific Offer.
    """
    model = Offer
    
    """serializer_class = OfferDetailSerializer

    queryset = Offer.objects.all()"""

class ListUserOffer(generics.RetrieveAPIView):
    """
    An APIView to retrieve a list of offers made by the User.
    """        
    serializer_class = UserOfferListSerializer
    queryset = Offer.objects.all()

class ListUserNeed(generics.RetrieveAPIView):
    """
    An APIView to retrieve a list of needs made by the User.
    """
    serializer_class = UserNeedListSerializer
    queryset = Need.objects.all()

class ListNeedCategory(generics.ListAPIView):
    """
    An APIView to retrieve a list of needs of the same category.
    """
    serializer_class = NeedCategorySerializer
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Need.objects.filter(category=pk)

class ListOfferCategory(generics.ListAPIView):
    """
    An APIView to retrieve a list of offers of the same category.
    """
    serializer_class = OfferCategorySerializer
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Offer.objects.filter(category=pk)

class ListNeedLocation(generics.ListAPIView):
    """
    An APIView to retrieve a list of needs of the same category.
    """
    serializer_class = NeedCategorySerializer
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Need.objects.filter(location=pk)

class ListOfferLocation(generics.ListAPIView):
    """
    An APIView to retrieve a list of offers of the same category.
    """
    serializer_class = OfferCategorySerializer
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Need.objects.filter(location=pk)