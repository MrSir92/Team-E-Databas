# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0003_auto_20150525_1116'),
    ]

    operations = [
        migrations.AlterField(
            model_name='need',
            name='user_id',
            field=models.ForeignKey(to='todoapp.User'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='offer',
            name='user_id',
            field=models.ForeignKey(to='todoapp.User'),
            preserve_default=True,
        ),
    ]
