# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='need',
            old_name='sub_category',
            new_name='subcategory',
        ),
        migrations.RenameField(
            model_name='offer',
            old_name='sub_category',
            new_name='subcategory',
        ),
    ]
