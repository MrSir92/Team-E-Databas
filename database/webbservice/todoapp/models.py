from django.db import models

# Our todo-list requires a set of lists and tasks.
class UserManager(models.Manager):
    def get_by_natural_key(self, email, phone):
        return self.get(email=email, phone=phone)

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

    def natural_key(self):
        return(self.email, phone)

    class Meta:
        unique_together = (('email', 'phone'),)

    def __unicode__(self):
        return self.name

class Need(models.Model):
    """
    Our Need is a model of something a company has in abundant and wants to share.
    """
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now_add=True, auto_now=True)
    title = models.CharField(max_length=128, blank=False)
    user_id = models.ForeignKey(User, blank=False)
    description = models.TextField(blank=False)
    category = models.CharField(max_length=128, blank=False)
    subcategory = models.CharField(max_length=128, blank=False)
    location = models.CharField(max_length=128, blank=False)
    imgfile = models.CharField(max_length=256, blank=True)

    def __unicode__(self):
        return self.title

class Offer(models.Model):
    """
    Our Offer model is a representaiton of something a company has a need of.
    """
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now_add=True, auto_now=True)
    title = models.CharField(max_length=128, blank=False)
    user_id = models.ForeignKey(User, blank=False)
    description = models.TextField(blank=False)
    category = models.CharField(max_length=128, blank=False)
    subcategory = models.CharField(max_length=128, blank=False)
    location = models.CharField(max_length=128, blank=False)
    imgfile = models.CharField(max_length=256, blank=True)

    def natural_key(self):
        return(self.title,) + self.user_id.natural_key()
    natural_key.dependencies = ['example_app.person']
    
    def __unicode__(self):
        return self.title

