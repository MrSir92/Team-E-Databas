# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Need',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created_at', models.DateField(auto_now_add=True, null=True)),
                ('updated_at', models.DateField(auto_now=True, auto_now_add=True)),
                ('title', models.CharField(max_length=128)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=128)),
                ('sub_category', models.CharField(max_length=128)),
                ('location', models.CharField(max_length=128)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Offer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created_at', models.DateField(auto_now_add=True, null=True)),
                ('updated_at', models.DateField(auto_now=True, auto_now_add=True)),
                ('title', models.CharField(max_length=128)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=128)),
                ('sub_category', models.CharField(max_length=128)),
                ('location', models.CharField(max_length=128)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created_at', models.DateField(auto_now_add=True, null=True)),
                ('name', models.CharField(max_length=128)),
                ('phone', models.CharField(max_length=128)),
                ('adress', models.CharField(max_length=128)),
                ('description', models.TextField(blank=True)),
                ('email', models.CharField(max_length=128)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='offer',
            name='user_id',
            field=models.ForeignKey(to='todoapp.User'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='need',
            name='user_id',
            field=models.ForeignKey(to='todoapp.User'),
            preserve_default=True,
        ),
    ]
