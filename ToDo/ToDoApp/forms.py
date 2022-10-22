from django import forms
from django import forms
from .models import Boss
from django.core import validators

class BossForm(forms.ModelForm):
    class Meta:
        model=Boss
        fields=['your_todo',]
        widgets={
            'your_todo':forms.TextInput(attrs={'class':'form-control'})
        }