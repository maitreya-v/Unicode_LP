from django.contrib import admin
from .models import Boss

# Register your models here.
@admin.register(Boss)
class BossAdmin(admin.ModelAdmin):
    list_display = ('your_todo',)