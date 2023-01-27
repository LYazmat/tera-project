from django.contrib import admin
from .models import Curso, Area

@admin.register(Curso)
class CursorAdmin(admin.ModelAdmin):
    pass

@admin.register(Area)
class AreaAdmin(admin.ModelAdmin):
    pass
