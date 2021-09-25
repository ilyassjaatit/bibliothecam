from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class LibrariesConfig(AppConfig):
    name = "apps.libraries"
    verbose_name = _("libraries")
