"""api URL Configuration
"""
from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from apps.users.views import UserViewSet
urlpatterns = [
    path('admin/', admin.site.urls),
]

# api Urls
router = routers.DefaultRouter()
router.register(r"users", UserViewSet)

urlpatterns += [
    # DRF auth token
    path("auth-token/", obtain_auth_token),
    path("api/", include((router.urls, "api"))),
]
