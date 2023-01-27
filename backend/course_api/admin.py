from django.contrib import admin
from .models import Course, Tag


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass
