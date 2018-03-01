# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-03-01 14:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_auto_20180301_1720'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('male', 'Male'), ('not-specified', 'Not specified'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]
