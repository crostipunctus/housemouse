from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime

# Create your models here.


class Todo(models.Model):
    todo = models.CharField(max_length = 200)
    done = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.todo}"

class Items(models.Model):
    item_name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.item_name}"


class Dogs(models.Model):
    dog_name = models.CharField(max_length=200)
    dog_birthdate = models.DateTimeField(auto_now=False, auto_now_add=False)
    dog_weight = models.IntegerField(default=0)
    dog_todo = models.ForeignKey(Todo, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.dog_name}"


class Baby(models.Model):
    baby_names = models.CharField(max_length=1000)
    baby_todo = models.ForeignKey(Todo, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.baby_names}"




class House(models.Model):
    house_todo = models.ForeignKey(Todo, on_delete=models.CASCADE)
    house_items = models.ForeignKey(Items, on_delete=models.CASCADE)

    def __str__(self):
        return f"These items are in the house: {self.house_items}. These tasks need to be completed: {self.house_todo}"





