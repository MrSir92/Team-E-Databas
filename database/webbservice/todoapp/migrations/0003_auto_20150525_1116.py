# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0002_auto_20150525_1114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='need',
            name='location',
            field=models.TextField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='offer',
            name='location',
            field=models.TextField(),
            preserve_default=True,
        ),
    ]
