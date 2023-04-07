from django.db import models

#If new user, create a db entry anonimized.
# We might have to store user information like that
# Store user Id sepereate from db data? check if in set or not

# Create your models here.
class Data(models.Model):
    id = models.IntegerField(unique=True)