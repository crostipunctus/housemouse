from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime
from django.contrib.auth.models import User


from django.db.models.deletion import CASCADE

# Create your models here.

class Dogs(models.Model):
    dog_name = models.CharField(max_length=200)
    dog_birthdate = models.DateField(auto_now=False, auto_now_add=False)
    dog_weight = models.IntegerField(default=0)
    
   
    def __str__(self):
        return f"{self.dog_name}"



class Baby(models.Model):
    baby_name = models.CharField(max_length=100)
    baby_due = models.DateField(default=datetime.now, blank=True)

    def __str__(self):
        return f"{self.baby_name}"

class Notes(models.Model):
    note = models.TextField(blank=True)
    user_note = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.note}"


class Items(models.Model):
    item_name = models.CharField(max_length=200)
   

    def __str__(self):
        return f"{self.item_name}"




class Todo(models.Model):
    todo = models.CharField(max_length = 200)
    done = models.BooleanField(default=False)
    todo_date = models.DateField(default=datetime.now, blank=True)
    todo_cat = models.CharField(max_length=200, blank = True)

    def __str__(self):
        return f"{self.todo}"


class Vaccine(models.Model):
    vaccine_dog = models.ForeignKey(Dogs, on_delete=models.CASCADE)
    vaccine_type = models.CharField(max_length=200)
    vaccine_lastdate = models.DateField(auto_now=False, auto_now_add=False)
    vaccine_duedate = models.DateField(auto_now=False, auto_now_add=False)
    v_done = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.vaccine_dog} took {self.vaccine_type} on {self.vaccine_lastdate}. Due on {self.vaccine_duedate}"




class Bills(models.Model):
    bill_name = models.CharField(max_length=200)
    bill_amount = models.IntegerField(default=0)
    bill_due = models.DateField(auto_now=False, auto_now_add=False)
    bill_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.bill_name}"








