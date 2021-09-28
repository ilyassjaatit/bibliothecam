import pytest
from rest_framework.test import APIClient
from pytest_factoryboy import register

from tests.factories import UserFactory, BookFactory, CategoryFactory

# Register factories to pytest global namespace.
register(UserFactory)
register(BookFactory)
register(CategoryFactory)


@pytest.fixture(autouse=True)
def media_storage(settings, tmpdir):
    settings.MEDIA_ROOT = tmpdir.strpath


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def create_books(db, book_factory):
    def _create_books(size=10):
        return book_factory.simple_generate_batch(create=True, size=size)

    return _create_books


@pytest.fixture
def create_categories(db, category_factory):
    def _create_categories(size=10):
        return category_factory.simple_generate_batch(create=True, size=size)

    return _create_categories
