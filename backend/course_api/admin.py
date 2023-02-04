from django.contrib import admin
from .models import Course, Tag, Favorite, Enroll


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    pass


@admin.register(Enroll)
class EnrollAdmin(admin.ModelAdmin):
    pass
