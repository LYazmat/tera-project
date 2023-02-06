"""cursos_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView, TemplateView

from django.conf.urls.static import static
from django.conf import settings

from backend.settings import MEDIA_ROOT

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('', RedirectView.as_view(url='admin/', permanent=True)),
    path('admin/', admin.site.urls),
    path('course/', include('course_api.urls')),
    path('auth/', include('auth_api.urls')),

    # OpenAPI 3 documentation with Swagger UI
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "docs/",
        SpectacularSwaggerView.as_view(
            template_name="swagger-ui.html", url_name="schema"
        ),
        name="swagger-ui",
    ),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
