from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from datetime import datetime
from django.core.paginator import Paginator
from django.http import JsonResponse 
from .models import Dogs, Todo, Items, Baby, Vaccine, Bills
from django.views.decorators.csrf import csrf_exempt
import json 

def index(request):
    dogs = Dogs.objects.all()
    todo = Todo.objects.all()
    items = Items.objects.all()
    user = request.user
    return render(request, "housemanager/index.html", {
        "dogs": dogs,
        "user": user, 
        "todo": todo, 
        "items": items
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


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "housemanager/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "housemanager/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "housemanager/register.html")


def dogs(request):
    dogs = Dogs.objects.all()
    todo = Todo.objects.all()
    return render(request, "housemanager/dogs.html", {
        "dogs": dogs, 
        "todo": todo
    })

def dog_name(request, name):
    dog_details = Dogs.objects.filter(dog_name=name)
    dog_id = Dogs.objects.get(dog_name = name)
    all_dogs = Dogs.objects.all()
    dog_todo = Todo.objects.filter(dogs_todo=dog_id)
    print(dog_todo)
    try:
        dog_vac = Vaccine.objects.get(vaccine_dog = dog_id)
        return render(request, "housemanager/dog_name.html", {
        "dog_details": dog_details, 
        "vaccine": dog_vac,
        "dog_todo": dog_todo
    })
    except:
        return render(request, "housemanager/dog_name.html", {
        "dog_details": dog_details, 
        "dog_todo": dog_todo

        })

def baby(request):
    return render(request, "housemanager/baby.html")


def bills(request):
    return HttpResponse("bills")


def todo(request):
    todolist = Todo.objects.all()
    return render(request, "housemanager/todo.html", {
        "todo": todolist
    })

@csrf_exempt
def update_todo(request):
    data = json.loads(request.body)
    text = data.get("todo")
    date = data.get("date")
    new_todo = Todo(todo=text, todo_date=date)
    new_todo.save()
    return JsonResponse({"message": "Todo added."}, status=201)


@csrf_exempt
def add_dog(request):
    data = json.loads(request.body)
    name = data.get("dog_name")
    date = data.get("dog_date")
    weight = data.get("dog_weight") 
    new_dog = Dogs(dog_name=name, dog_birthdate = date, dog_weight = weight)
    new_dog.save()
    return JsonResponse({"message": "Dog added."}, status=201)
 
