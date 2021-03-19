from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from datetime import datetime, timedelta
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.decorators import csrf 
from .models import Dogs, Todo, Items, Baby, Vaccine, Bills
from django.views.decorators.csrf import csrf_exempt
import json 

@login_required(login_url="/login")
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

@login_required(login_url="/login")
def dogs(request):
    dogs = Dogs.objects.all()
    todo = Todo.objects.filter(todo_cat="Dogs", done=False)
    return render(request, "housemanager/dogs.html", {
        "dogs": dogs, 
        "todo": todo
    })

@login_required(login_url="/login")
def dog_name(request, name):
    if request.method == "GET":
        dog_details = Dogs.objects.filter(dog_name=name)
        dog_id = Dogs.objects.get(dog_name = name)
        
    
        try:
            dog_vac = Vaccine.objects.get(vaccine_dog = dog_id)
            return render(request, "housemanager/dog_name.html", {
            "dog_details": dog_details, 
            "vaccine": dog_vac,
            
        })
        except:
            return render(request, "housemanager/dog_name.html", {
            "dog_details": dog_details, 
        

            })
   
@login_required(login_url="/login")
@csrf_exempt
def baby(request):
    if request.method == "GET":
        baby = Baby.objects.all()
        print(baby)
        baby_todo = Todo.objects.filter(todo_cat="Baby", done=False)
        return render(request, "housemanager/baby.html", {
            "baby_todo": baby_todo,
            "baby": baby
        })
    else:
        data = json.loads(request.body)
        note = data.get("note")
        baby_note = Baby(baby_note=note)
        baby_note.save()
        return JsonResponse({"message": "Note added"}, status=201)

@csrf_exempt
@login_required(login_url="/login")
def bills(request):
    bills = Bills.objects.all()
    return render(request, "housemanager/bills.html", {
        "bills": bills,
    })

@csrf_exempt
@login_required(login_url="/login")
def add_bill(request):
    data = json.loads(request.body)
    name = data.get("name")
    amount = data.get("amount")
    due = data.get("due")
    b = Bills(bill_name=name, bill_amount=amount, bill_due=due)
    b.save()
    return JsonResponse({"message": "Bill added"}, status=201)

@csrf_exempt
def bill_paid(request):
    data = json.loads(request.body)
    bill_id = data.get("id")
    Bills.objects.get(id=bill_id).delete()
    return JsonResponse({"message": "Bill paid"}, status=201)

@login_required(login_url="/login")
def todo(request):
    todolist = Todo.objects.filter(done=False)
    print(todolist)
    return render(request, "housemanager/todo.html", {
        "todo": todolist
    })

@csrf_exempt
@login_required(login_url="/login")
def update_todo(request):
    data = json.loads(request.body)
    text = data.get("todo")
    date = data.get("date")
    option = data.get("category")
    new_todo = Todo(todo=text, todo_date=date, todo_cat = option)
    new_todo.save()
    return JsonResponse({"message": "Todo added."}, status=201)


@csrf_exempt
@login_required(login_url="/login")
def add_dog(request):
    data = json.loads(request.body)
    name = data.get("dog_name")
    date = data.get("dog_date")
    weight = data.get("dog_weight") 
    new_dog = Dogs(dog_name=name, dog_birthdate = date, dog_weight = weight)
    new_dog.save()
    return JsonResponse({"message": "Dog added."}, status=201)
 

@csrf_exempt
@login_required(login_url="/login")
def todo_done(request):
    
    data = json.loads(request.body)
    todo_id = data.get("id")
    Todo.objects.filter(id=todo_id).update(done=True)
    
    return JsonResponse({"Message": "Todo done"}, status=201)
    
@csrf_exempt
@login_required(login_url="/login")
def dog_weight(request):    
    data = json.loads(request.body)
    name = data.get("dog_name")
    print(name)
    weight = data.get("weight")
    print(weight)
    Dogs.objects.filter(dog_name=name).update(dog_weight=weight)
    return JsonResponse({"message": "Success"}, status=201)

@csrf_exempt
def vac_done(request, dog):
    data = json.loads(request.body)
    dog_id = Dogs.objects.get(dog_name=dog)
    Vaccine.objects.filter(vaccine_dog=dog_id).update(v_done=True)
    date = datetime.now()
    Vaccine.objects.filter(vaccine_dog=dog_id).update(vaccine_lastdate=date, vaccine_duedate=date+timedelta(365))
    return JsonResponse({"message": "done"}, status=201)