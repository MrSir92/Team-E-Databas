from django.contrib import admin
from todoapp.models import Offer, Need, User

class UserInline(admin.StackedInline):
    model = User
    verbose_name = 'User'
    can_delete = True

class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ['title', 'created_at']
    inlines = [UserInline]
    verbose_name = 'title'

class NeedAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ['title', 'created_at']
    inlines = [UserInline]
    verbose_name = 'title'    
    
admin.site.register(Offer, OfferAdmin)
admin.site.register(Need, NeedAdmin)