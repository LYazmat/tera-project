from django.db import models
from django.contrib.auth.models import User

# Change email as required field when register

User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False
