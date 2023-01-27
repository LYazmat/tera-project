from curso.views import CursoViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', CursoViewSet, basename='CursoModel')

urlpatterns = [
] + router.urls
