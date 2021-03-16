# Generated by Django 3.1.1 on 2021-03-14 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('housemanager', '0015_auto_20210218_0847'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='items',
            name='baby_items',
        ),
        migrations.RemoveField(
            model_name='items',
            name='dog_items',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='baby_todo',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='dogs_todo',
        ),
        migrations.AddField(
            model_name='todo',
            name='todo_cat',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
