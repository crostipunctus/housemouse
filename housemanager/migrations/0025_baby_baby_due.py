# Generated by Django 3.1.1 on 2021-03-22 15:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('housemanager', '0024_bills_bill_paid'),
    ]

    operations = [
        migrations.AddField(
            model_name='baby',
            name='baby_due',
            field=models.DateField(blank=True, default=datetime.datetime.now),
        ),
    ]
