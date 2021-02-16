from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("dogs", views.dogs, name="dogs"), 
    path("baby", views.baby, name="baby"),
    path("house", views.house, name="house")
] 