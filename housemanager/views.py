from django.shortcuts import render
from django.http import HttpResponse
from .models import Dogs

def index(request):
    dogs = Dogs.objects.all()
    return render(request, 'housemanager/index.html', {
        "dogs": dogs
    })
    
