from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from datetime import datetime
from django.core.paginator import Paginator
from django.http import JsonResponse 
from .models import Dogs
import json 

def index(request):
    dogs = Dogs.objects.all()
    print(dogs)
    user = request.user
    return render(request, "housemanager/index.html", {
        "dogs": dogs,
        "user": user
    })
    
def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "housemanager/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse("index"))
        else: 
            return render(request, "housemanager/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index")) 


def dogs(request):
    dogs = Dogs.objects.all()
    return render(request, "housemanager/dogs.html", {
        "dogs": dogs
    })


def baby(request):
    return HttpResponse("baby")



def house(request):
    return HttpResponse("house")