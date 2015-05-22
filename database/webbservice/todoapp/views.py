from django.shortcuts import render
from todoapp.models import List, Task
from todoapp.serializers import ListSerializer, ListDetailSerializer, TaskSerializer, NestedTaskSerializer
from rest_framework.views import APIView
from rest_framework import generics, permissions
from django.shortcuts import get_object_or_404

# Create your views here.
class ListList(generics.ListCreateAPIView):
    """
    An APIView to list all ToDo-lists and to create new
    lists.
    """
    serializer_class = ListSerializer
    queryset = List.objects.all()

class ListDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    An APIView to retrive, update or delete a specific list.
    """
    serializer_class = ListDetailSerializer
    queryset = List.objects.all()

class ListTasks(generics.ListCreateAPIView):
    """
    An APIView to list all tasks or create a task in specific list.
    """
    serializer_class = TaskSerializer

    
    def perform_create(self, serializer):
        try:
            serializer.save(todo_list=List.objects.get(pk=self.kwargs['pk']))
        except:
            serializer.save(todo_list=None)

    def get_queryset(self):
        list = get_object_or_404(List.objects.all(), pk=self.kwargs['pk'])
        return list.task_set.all() 
        
class ListTaskDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    An APIView to display a specific task.
    """
    serializer_class = TaskSerializer

    def get_queryset(self):
        pk = self.kwargs['list_pk']
        return Task.objects.filter(todo_list=pk)        
