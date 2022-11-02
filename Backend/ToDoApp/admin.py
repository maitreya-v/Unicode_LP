from django.contrib import admin
from .models import MyUser
from django.contrib.auth.admin import UserAdmin
from .models import Boss
from django.contrib import admin

# Register your models here.
# @admin.register(Boss)
# class BossAdmin(admin.ModelAdmin):
    # list_display = ('your_todo',)



# admin.site.register(Boss,BossAdmin)

class UserAdminConfig(UserAdmin):
    model=MyUser
    list_display = ('email','username','first_name','is_active','is_staff','is_admin',)
    search_fields = ('email','username','first_name',)
    # list_filter = ('email','user_name','first_name','is_active','is_staff')
    ordering = ('email',)
    fieldsets = ()

admin.site.register(MyUser,UserAdminConfig)
admin.site.register(Boss)