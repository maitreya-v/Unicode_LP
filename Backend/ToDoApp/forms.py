from django import forms
from django import forms
# from .models import Boss
from django.core import validators
from django.contrib.auth.forms import UserCreationForm;
from django.contrib.auth.models import User
from .models import User, MyUser
from django.forms import ModelForm

from ToDoApp.models import MyUser
class UserForm(ModelForm):
    class Meta:
        model = User
        fields = '__all__'