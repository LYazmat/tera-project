from .views import CourseViewSet, FavoriteViewSet, EnrollViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('course', CourseViewSet, basename='CourseModel')
router.register('favorite', FavoriteViewSet, basename='FavoriteModel')
router.register('enroll', EnrollViewSet, basename='EnrollModel')

urlpatterns = [
] + router.urls
