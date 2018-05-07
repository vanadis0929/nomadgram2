# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-05-07 05:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0024_auto_20180419_2255'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='push_token',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('not-specified', 'Not specified')], max_length=80, null=True),
        ),
    ]
