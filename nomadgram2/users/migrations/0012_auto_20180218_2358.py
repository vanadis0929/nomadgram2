# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-02-18 14:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_auto_20180218_2355'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('female', 'Female'), ('not-specified', 'Not specified'), ('male', 'Male')], max_length=80, null=True),
        ),
    ]
