from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("dogs", views.dogs, name="dogs"), 
    path("dogs/<str:name>", views.dog_name, name="dog_name"),
    path("baby", views.baby, name="baby"),
    path("bills", views.bills, name="bills"),
    path("todo", views.todo, name="todo"),

    #js paths

    path("update_todo", views.update_todo, name="update-todo"),
    path("add_dog", views.add_dog, name="add-dog"),
    path("todo_done", views.todo_done, name="todo_done"),
    path("dog_weight", views.dog_weight, name="dog-weight"),

    
    
] 