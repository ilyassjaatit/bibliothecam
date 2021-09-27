import pytest
from django.urls import reverse

from rest_framework import status

pytestmark = pytest.mark.django_db


def test_get_list_books_404(create_books, api_client):
    num_of_books_create = 15
    create_books(num_of_books_create)
    req = api_client.get(reverse("api:book-list"))
    assert len(req.json()) == num_of_books_create
    assert req.status_code == status.HTTP_200_OK
