# Generated by Django 3.1.1 on 2021-03-18 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('housemanager', '0019_auto_20210318_1614'),
    ]

    operations = [
        migrations.AddField(
            model_name='vaccine',
            name='v_done',
            field=models.BooleanField(default=False),
        ),
    ]