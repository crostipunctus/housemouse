# Generated by Django 3.1.1 on 2021-03-22 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('housemanager', '0023_notes_user_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='bills',
            name='bill_paid',
            field=models.BooleanField(default=False),
        ),
    ]
