from asyncio.windows_events import NULL
from email.policy import default
from tkinter import Image
from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.conf import settings

class CustomManager(BaseUserManager):
    use_in_migrations=True
    def create_superuser(self,email,user_name,first_name,password,**other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must be assigned to is_staff=True.'))
        if other_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must be assigned to is_superuser=True.'))
        return self.create_user(email,user_name,first_name,password,**other_fields)   

    def create_user(self,email,user_name,first_name,password,**other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email=self.normalize_email(email)
        user=self.model(email=email,user_name=user_name,first_name=first_name,**other_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user     

class MyUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(_('email address'),unique=True)
    username=models.CharField(max_length=150,unique=True)
    password=models.CharField(max_length=100,blank=True)
    first_name=models.CharField(max_length=150,blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about=models.TextField(
        _('about'),max_length=500,blank=True
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False) 
    is_admin = models.BooleanField(default=False)
    USERNAME_FIELD = 'email' 
    REQUIRED_FIELDS = ['user_name','first_name','password']
    object=CustomManager()

    def __str__(self):
        return self.username
        

class Boss(models.Model):
    your_todo=models.CharField(max_length=60)
    # date_posted=models.DateField(default=timezone.now)
    # priority=models.IntegerField(blank=True)
    # doneOrNot=models.BooleanField(default=False)
    user=models.ForeignKey(settings.AUTH_USER_MODEL,default='1',on_delete=models.CASCADE)

    def __str__(self):
     return self.your_todo
