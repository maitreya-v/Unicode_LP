# admin_username=maitreya
# admin_password=maitreya

from django.shortcuts import render,HttpResponseRedirect
from .forms import UserForm
# from ToDoApp.models import Boss
# from .forms import BossForm
from django.contrib.auth import authenticate,login,logout
# Create your views here.

# def add(request):
#     if request.method=='POST' :
#       ins = BossForm(request.POST)
#       if ins.is_valid():
#         ins.save()
#       ins = BossForm()
#     else:
#       ins=BossForm()    
#     todos=Boss.objects.all()  
    # return render(request,'add.html',{'form':ins,'todos':todos}) 

# def update(request,id):
#   if request.method=='POST':
#     inst=Boss.objects.get(pk=id)
#     obj=BossForm(request.POST,instance=inst)
#     if obj.is_valid():
#       obj.save()
#   else:
#     inst=Boss.objects.get(pk=id)
#     obj=BossForm(instance=inst)

  # return render(request,'update.html',{'obj':obj})    

# def delete(request,id):
#    if request.method=='POST':
#     obj=Boss.objects.get(pk=id)
#     obj.delete()
    # return HttpResponseRedirect('/')
  
def login(request):
  username=request.POST.get('username')
  password=request.POST.get('password')
  user=authenticate(username=username,password=password)
  if user is not None:
    return HttpResponseRedirect('http://127.0.0.1:8000/toDo/')
    # login(request,user)
  else:
    return HttpResponseRedirect('http://127.0.0.1:8000/')  
  return render(request,'login_page.html')

def register(request):
#   if request.method=='POST':
#     form=UserForm(request.POST) 
#     if form.is_valid():
#       form.save()
#       return HttpResponseRedirect('login/')
#   else:
#     form=UserForm()    
  return render(request,'register_page.html',{'regForm':form})  