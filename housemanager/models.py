from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime

from django.db.models.deletion import CASCADE

# Create your models here.


class Dogs(models.Model):
    dog_name = models.CharField(max_length=200)
    dog_birthdate = models.DateTimeField(auto_now=False, auto_now_add=False)
    dog_weight = models.IntegerField(default=0)
   
    def __str__(self):
        return f"{self.dog_name}"



class Baby(models.Model):
    baby_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.baby_name}"


class Items(models.Model):
    item_name = models.CharField(max_length=200)
    dog_items = models.ManyToManyField(Dogs, related_name="Dog_items", blank=True)
    baby_items = models.ManyToManyField(Baby, related_name="Baby_items", blank=True)

    def __str__(self):
        return f"{self.item_name}"




class Todo(models.Model):
    todo = models.CharField(max_length = 200)
    done = models.BooleanField(default=False)
    todo_date = models.DateTimeField(default=datetime.now, blank=True)
    dogs_todo = models.ManyToManyField(Dogs, related_name="Dogs_todo", blank=True)
    baby_todo = models.ManyToManyField(Baby, related_name="Baby_todo", blank=True)

    def __str__(self):
        return f"{self.todo}"
















