from rest_framework import serializers
from todoapp.models import List, Task

class NestedTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields= ('id','title', 'done')

class TaskSerializer(serializers.ModelSerializer):
    """
    A serialzier for our Task-model.
    """

    class Meta:
        model = Task
        fields = (
            'title',
            'done',
            'description',
            'id',
        )

class ListSerializer(serializers.ModelSerializer):
    """
    A serializer for listing our List-models.
    """

    class Meta:
        model = List
        fields = (
            'created_at',
            'title',
            'id',
        )

class ListDetailSerializer(serializers.ModelSerializer):
    """
    A serializer for our List-model.
    """

    task_set = NestedTaskSerializer(many=True, read_only=True)
    class Meta:
        model = List
        fields = (
            'created_at',
            'title',
            'id',
            'task_set',
        )



