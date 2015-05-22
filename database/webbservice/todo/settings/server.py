from .base import *  # noqa

DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'todo',
        'HOST': 'localhost',
        'USER': 'todo',
        'PASSWORD': 'todo',
    }
}

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    )
}

# Removed STATIC_ROOT since collect static didn't collect the css in deployment.
# Is this suppose to handle different css/static-files for server and local usage?
# If this is enabled fab -R dev deploy will not have css.

# STATIC_ROOT = BASE_DIR.ancestor(1).child('static')
MEDIA_ROOT = BASE_DIR.ancestor(1).child('media')

