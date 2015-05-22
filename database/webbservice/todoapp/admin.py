from django.contrib import admin
from todoapp.models import Task, List

class TaskInline(admin.StackedInline):
    model = Task
    verbose_name = 'Task'
    can_delete = True

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title','done', 'created_at')
    search_fields = ['title', 'done', 'created_at']
    list_filter = ('done',)
    verbose_name = 'title'

class ListAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ['title', 'created_at']
    inlines = [TaskInline]
    verbose_name = 'title'    
    
admin.site.register(Task, TaskAdmin)
admin.site.register(List, ListAdmin)