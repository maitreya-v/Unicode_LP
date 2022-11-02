from django import forms
from django import forms
# from .models import Boss
from django.core import validators
from django.contrib.auth.forms import UserCreationForm;
from django.contrib.auth.models import User
from .models import MyUser
from django.forms import ModelForm

# from ToDoApp.models import MyUser
from django import forms
from django import forms
from .models import Boss
from django.core import validators

class BossForm(ModelForm):
    class Meta:
        model=Boss
        fields=['your_todo',]
        widgets={
            'your_todo':forms.TextInput(attrs={'class':'form-control'})
        }
        
class UserForm(UserCreationForm):
    class Meta:
        model = MyUser
        fields = '__all__'

        def save(self, commit=True):
         user = super(UserForm, self).save(commit=False)
         # first_name, last_name = self.cleaned_data["fullname"].split()
         user.username = self.cleaned_data['username']
         user.password = self.cleaned_data['password']
         user.email = self.cleaned_data["email"]
         if commit:
            user.save()
         return user

    