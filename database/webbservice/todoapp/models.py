from django.db import models

# Our todo-list requires a set of lists and tasks.

class List(models.Model):
    """
    Our List is a model of a paper. On this paper we want
    write down all our tasks to be done.
    """
    created_at = models.DateField(auto_now_add=True, null=True)
    updated_at = models.DateField(auto_now_add=True, auto_now=True)
    title = models.CharField(max_length=128, blank=False)

    def __unicode__(self):
        return self.title

class Task(models.Model):
    """
    Our Task model is a representaiton of the task to be done.
    """
    created_at = models.DateField(auto_now_add=True, blank=True, null=True, editable=False)
    updated_at = models.DateField(auto_now_add=True, auto_now=True)
    title = models.CharField(max_length=128, blank=False, null=False)
    done = models.BooleanField(blank=False, default=False)
    todo_list = models.ForeignKey(List, blank=False)
    description = models.TextField(blank=True)

    def __unicode__(self):
        return self.title
