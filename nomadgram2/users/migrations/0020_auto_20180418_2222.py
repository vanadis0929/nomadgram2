# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-04-18 13:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0019_auto_20180406_2336'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('not-specified', 'Not specified'), ('male', 'Male'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]