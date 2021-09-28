import pytest
from django.urls import reverse

from rest_framework import status

pytestmark = pytest.mark.django_db
NUM_OF_CREATE = 15


def test_get_list_books_status_200(create_books, api_client):
    create_books(NUM_OF_CREATE)
    req = api_client.get(reverse("api:book-list"))
    assert len(req.json()) == NUM_OF_CREATE
    assert req.status_code == status.HTTP_200_OK


def test_get_list_books_category_status_200(api_client, create_categories):
    create_categories(NUM_OF_CREATE)
    req = api_client.get(reverse("api:category-list"))
    assert len(req.json()) == NUM_OF_CREATE
    assert req.status_code == status.HTTP_200_OK
