# Generated by Django 3.1.1 on 2021-02-18 03:17

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('housemanager', '0014_auto_20210218_0844'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bills',
            name='bill_due',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='dogs',
            name='dog_birthdate',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='todo',
            name='todo_date',
            field=models.DateField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='vaccine',
            name='vaccine_duedate',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='vaccine',
            name='vaccine_lastdate',
            field=models.DateField(),
        ),
    ]
