# Generated by Django 3.1.1 on 2021-03-19 06:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('housemanager', '0022_notes'),
    ]

    operations = [
        migrations.AddField(
            model_name='notes',
            name='user_note',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
            preserve_default=False,
        ),
    ]
