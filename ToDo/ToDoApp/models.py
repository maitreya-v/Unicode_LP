from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.
class Boss(models.Model):
    your_todo=models.CharField(max_length=60)
    date_posted=models.DateField(default=timezone.now)
    priority=models.IntegerField()
    doneOrNot=models.BooleanField()
    # author=models.ForeignKey(User,on_delete=models.CASCADE)
    
def __str__(self):
    return self.your_todo
