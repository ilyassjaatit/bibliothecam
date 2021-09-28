"""api URL Configuration
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from apps.users.views import UserViewSet
from apps.libraries.views import BookViewSet, CategoryViewSet

urlpatterns = [
    path("admin/", admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# api Urls
router_v1 = routers.DefaultRouter()
router_v1.register(r"users", UserViewSet)
router_v1.register(r"libraries/books", BookViewSet)
router_v1.register(r"libraries/categories", CategoryViewSet)

urlpatterns += [
    # DRF auth token
    path("auth-token/", obtain_auth_token),
    path("api/v1/", include((router_v1.urls, "api"))),
]
