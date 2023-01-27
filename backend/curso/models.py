from django.db import models
from uuid import uuid4

def upload_image_curso(instance, filename):
    return f'{instance.id}-{filename}'


class Area(models.Model):
    title = models.CharField(max_length=80)
    create_at = models.DateTimeField(auto_now_add=True)
    modified_at= models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title


class Curso(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()    
    image = models.ImageField(upload_to=upload_image_curso, blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    modified_at= models.DateTimeField(auto_now=True)
    areas = models.ManyToManyField(Area)
    
    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title

