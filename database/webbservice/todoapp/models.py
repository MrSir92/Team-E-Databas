from django.db import models

# Our todo-list requires a set of lists and tasks.

class User(models.Model):
    """
    Our User model is a representaiton of the companies in this community.
    """
    created_at = models.DateField(auto_now_add=True, blank=True, null=True, editable=False)
    name = models.CharField(max_length=128, blank=False, null=False)
    phone = models.CharField(max_length=128, blank=False)
    adress = models.CharField(max_length=128, blank=False)
    description = models.TextField(blank=True)
    email = models.CharField(max_length=128, blank=False)

    def __unicode__(self):
        return self.name

class Need(models.Model):
    """
    Our Need is a model of something a company has in abundant and wants to share.
    """
    created_at = models.DateField(auto_now_add=True, null=True)
    updated_at = models.DateField(auto_now_add=True, auto_now=True)
    title = models.CharField(max_length=128, blank=False)
    user_id = models.ForeignKey(User, blank=False)
    description = models.TextField(blank=False)
    category = models.CharField(max_length=128, blank=False)
    subcategory = models.CharField(max_length=128, blank=False)
    location = models.CharField(max_length=128, blank=False)

    def __unicode__(self):
        return self.title

class Offer(models.Model):
    """
    Our Offer model is a representaiton of something a company has a need of.
    """
    created_at = models.DateField(auto_now_add=True, null=True)
    updated_at = models.DateField(auto_now_add=True, auto_now=True)
    title = models.CharField(max_length=128, blank=False)
    user_id = models.ForeignKey(User, blank=False)
    description = models.TextField(blank=False)
    category = models.CharField(max_length=128, blank=False)
    subcategory = models.CharField(max_length=128, blank=False)
    location = models.CharField(max_length=128, blank=False)
    
    def __unicode__(self):
        return self.title

