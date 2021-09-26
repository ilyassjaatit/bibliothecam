"""api URL Configuration
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from apps.users.views import UserViewSet
from apps.libraries.views import BookViewSet

urlpatterns = [
                  path("admin/", admin.site.urls),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# api Urls
router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"libraries/books", BookViewSet)

urlpatterns += [
    # DRF auth token
    path("auth-token/", obtain_auth_token),
    path("api/", include((router.urls, "api"))),
]
