from course.views import CourseViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', CourseViewSet, basename='CourseModel')

urlpatterns = [
] + router.urls
