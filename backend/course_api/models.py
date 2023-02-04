from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User


def upload_image_curso(instance, filename):
    return f'{instance.id}-{filename}'


class Tag(models.Model):
    title = models.CharField(max_length=80)
    create_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title


class Course(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(
        upload_to=upload_image_curso, blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title


class Favorite(models.Model):
    course = models.ForeignKey(to=Course, on_delete=models.PROTECT)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Favorite course {self.course.title} for {self.user.username} at {self.create_at}'

    class Meta:
        unique_together = ['course', 'user']


class Enroll(models.Model):
    course = models.ForeignKey(to=Course, on_delete=models.PROTECT)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Enrrol course {self.course.title} for {self.user.username} at {self.create_at}'

    class Meta:
        unique_together = ['course', 'user']
