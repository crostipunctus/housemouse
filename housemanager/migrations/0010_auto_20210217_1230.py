# Generated by Django 3.1.1 on 2021-02-17 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('housemanager', '0009_auto_20210217_1225'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='items',
            name='baby_items',
        ),
        migrations.AddField(
            model_name='items',
            name='baby_items',
            field=models.ManyToManyField(blank=True, related_name='Baby_items', to='housemanager.Baby'),
        ),
        migrations.RemoveField(
            model_name='todo',
            name='baby_todo',
        ),
        migrations.AddField(
            model_name='todo',
            name='baby_todo',
            field=models.ManyToManyField(related_name='Baby_todo', to='housemanager.Baby'),
        ),
    ]
