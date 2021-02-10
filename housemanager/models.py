from django.db import models
from django.contrib.auth.models import AbstractUser, User
from datetime import datetime

# Create your models here.


class Dogs(models.Model):
    dog_name = models.CharField(max_length=200)
    dog_birthdate = models.DateTimeField(auto_now=False, auto_now_add=False)
    dog_weight = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.dog_name}"