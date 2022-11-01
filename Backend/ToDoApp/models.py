from asyncio.windows_events import NULL
from email.policy import default
from tkinter import Image
from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser


class MyUser(AbstractBaseUser):
    email = models.EmailField(unique=True, max_length=255)
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False) 
    admin = models.BooleanField(default=False)
    time = models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD = 'email' 
    REQUIRED_FIELDS = ('email',)
    def __str__(self):
        return self.email
    def get_full_name(self):
        return self.email
    def get_short_name(self):
        return self.email

    @property
    def is_staff(self):
        return self.staff
    @property
    def is_admin(self):
        return self.admin
    @property
    def is_active(self):
        return self.active
        
class User(models.Model):
    Name = models.CharField(max_length=50)
    Image = models.ImageField(null=True, blank=True, upload_to='static/')
    email = models.ForeignKey(MyUser, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.Name

class Foreign(models.Model):
    User = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    Age = models.IntegerField(default=NULL)
    
    def __str__(self):
        return self.Age