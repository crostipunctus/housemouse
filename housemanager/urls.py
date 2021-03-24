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
    path("baby_name/<str:baby_name>", views.baby_name, name="baby_name"),
    path("bills", views.bills, name="bills"),
    path("todo", views.todo, name="todo"),
 

    #js paths

    path("update_todo", views.update_todo, name="update-todo"),
    path("add_dog", views.add_dog, name="add-dog"),
    path("todo_done", views.todo_done, name="todo_done"),
    path("dog_weight", views.dog_weight, name="dog-weight"),
    path("add_bill", views.add_bill, name="add-bill"),
    path('bill_paid', views.bill_paid, name="bill-paid"),
    path('vac_done/<str:dog>', views.vac_done, name="vaccine-done"),
    path("note_add", views.note_add, name="note_add"),
    path("change_due_date", views.change_due_date, name="change_due_date")
 
    
    
] 