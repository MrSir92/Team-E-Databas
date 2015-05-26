from django.shortcuts import render
from todoapp.models import Need, Offer, User
from todoapp.serializers import NeedSerializer, UserSerializer, OfferSerializer, UserDetailSerializer, UserOfferListSerializer, UserNeedListSerializer, OfferDetailSerializer, OfferCategorySerializer, NeedDetailSerializer, NeedCategorySerializer
from rest_framework.views import APIView
from rest_framework import generics, permissions
from django.views.generic import ListView, CreateView
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

# Create your views here.
class ListNeed(CreateView):
    """
    An APIView to list all Needs and to create new
    Need.
    """
    model = Need
    success_url = 'listview'
    serializer_class = NeedSerializer
    template_name = 'front/needs.html'
    def get_context_data(self, **kwargs):
        kwargs['object_list'] = Need.objects.all()
        return super(ListNeed, self).get_context_data(**kwargs)

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

class NeedDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    An APIView to retrive, update or delete a specific Need.
    """
    serializer_class = NeedDetailSerializer
    """def get_queryset(self):
        task = get_object_or_404(Need, id=self.kwargs[0])
        return task
    
    model = Need
    def get_queryset(self):
        task= get_object_or_404(Need,id=self.kwargs['pk'])
        return task
    """
    queryset = Need.objects.all()

class ListOffer(generics.ListCreateAPIView):
    """
    An APIView to list all Offers or create an Offer.
    """
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()
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
class OfferDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    An APIView to retrive, update or delete a specific Offer.
    """
    serializer_class = OfferDetailSerializer
    queryset = Offer.objects.all()

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