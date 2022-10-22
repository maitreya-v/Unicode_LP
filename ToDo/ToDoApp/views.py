# admin_username=maitreya
# admin_password=maitreya

from django.shortcuts import render,HttpResponseRedirect

from ToDoApp.models import Boss
from .forms import BossForm
# Create your views here.

def add(request):
    if request.method=='POST' :
      ins = BossForm(request.POST)
      if ins.is_valid():
        ins.save()
      ins = BossForm()
    else:
      ins=BossForm()    
    todos=Boss.objects.all()  
    return render(request,'add.html',{'form':ins,'todos':todos})    

def update(request,id):
  if request.method=='POST':
    inst=Boss.objects.get(pk=id)
    obj=BossForm(request.POST,instance=inst)
    if obj.is_valid():
      obj.save()
  else:
    inst=Boss.objects.get(pk=id)
    obj=BossForm(instance=inst)

  return render(request,'update.html',{'obj':obj})    

def delete(request,id):
   if request.method=='POST':
    obj=Boss.objects.get(pk=id)
    obj.delete()
    return HttpResponseRedirect('/')