from django.contrib import admin
from todoapp.models import Offer, Need, User

class UserInline(admin.TabularInline):
    model = User
    extra = 1

class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ['title', 'created_at']
    """inlines = [UserInline]"""
    verbose_name = 'title'

class NeedAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ['title', 'created_at']
    """inlines = [UserInline]"""
    verbose_name = 'title'

class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ['name', 'created_at']
    verbose_name = 'name'    
    
admin.site.register(Offer, OfferAdmin)
admin.site.register(Need, NeedAdmin)
admin.site.register(User, UserAdmin)