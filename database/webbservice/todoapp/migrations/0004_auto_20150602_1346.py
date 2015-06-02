# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0003_auto_20150601_1347'),
    ]

    operations = [
        migrations.AddField(
            model_name='need',
            name='imgfile',
            field=models.CharField(max_length=256, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='offer',
            name='imgfile',
            field=models.CharField(max_length=256, blank=True),
            preserve_default=True,
        ),
    ]
