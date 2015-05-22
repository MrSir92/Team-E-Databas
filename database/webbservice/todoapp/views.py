from django.shortcuts import render
from todoapp.models import Need, Offer, User
from todoapp.serializers import NeedSerializer, UserSerializer, OfferSerializer, NestedTaskSerializer
from rest_framework.views import APIView
from rest_framework import generics, permissions
from django.shortcuts import get_object_or_404

# Create your views here.
class ListNeeds(generics.ListCreateAPIView):
    """
    An APIView to list all Needs and to create new
    Need.
    """
    serializer_class = NeedSerializer
    queryset = List.objects.all()

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
    queryset = List.objects.all()

class NeedDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    An APIView to retrive, update or delete a specific Need.
    """
    serializer_class = NeedDetailSerializer
    queryset = List.objects.all()

class ListOffer(generics.ListCreateAPIView):
    """
    An APIView to list all Offers or create an Offer.
    """
    serializer_class = OfferSerializer
    queryset = List.objects.all()
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
    queryset = List.objects.all()

class ListUserOffer(generics.RetrieveAPIView):
    """
    An APIView to retrieve a list of offers made by the User.
    """        
    serializer_class = UserOfferListSerializer
    queryset = List.objects.all()

class ListUserNeed(generics.RetrieveAPIView):
    """
    An APIView to retrieve a list of needs made by the User.
    """
    serializer_class = UserNeedListSerializer
    queryset = List.objects.all()

class ListNeedCategory(generics.RetrieveAPIView):
    """
    An APIView to retrieve a list of needs of the same category.
    """
    serializer_class = NeedCategorySerializer
    queryset = List.objects.all()

class ListOfferCategory(generics.RetrieveAPIView):
    """
    An APIView to retrieve a list of offers of the same category.
    """
    serializer_class = OfferCategorySerializer
    queryset = List.objects.all()