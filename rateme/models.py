from django.db import models
from django.contrib import admin


# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=150)
    createddate = models.DateTimeField()

    def __repr__(self):
        return self.name


class Supplier(Item, models.Model):
    rating = models.IntegerField()
    
admin.site.register(Supplier)