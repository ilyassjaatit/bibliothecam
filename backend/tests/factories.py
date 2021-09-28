from django.contrib.auth import get_user_model

import factory

from apps.libraries.models import Book, Author, Category


class UserFactory(factory.django.DjangoModelFactory):
    username = factory.Faker("user_name")
    email = factory.Faker("email")
    first_name = factory.Faker("name")

    @factory.post_generation
    def password(self, create, extracted, **kwargs):
        password = (
            extracted
            if extracted
            else factory.Faker(
                "password",
                length=42,
                special_chars=True,
                digits=True,
                upper_case=True,
                lower_case=True,
            ).evaluate(None, None, extra={"locale": None})
        )
        self.set_password(password)

    class Meta:
        model = get_user_model()
        django_get_or_create = ["email"]


class FactoryAuthor(factory.django.DjangoModelFactory):
    class Meta:
        model = Author


class CategoryFactory(factory.django.DjangoModelFactory):
    name = "The name category 1"
    description = "description "

    class Meta:
        model = Category


class BookFactory(factory.django.DjangoModelFactory):
    title = "Title Book "
    publication_year = 1269
    description = factory.Faker('text')
    pages = 365
    category = factory.SubFactory(CategoryFactory)

    class Meta:
        model = Book
