# Generated by Django 3.1.1 on 2021-02-17 06:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('housemanager', '0007_delete_house'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='todo_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]
