from rest_framework import serializers

from .models import Category, Book, Author


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["id", "name"]
        extra_kwargs = {'books': {'required': False}}


class BookSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField('get_category_name')
    authors = AuthorSerializer(many=True, read_only=True)
    short_description = serializers.SerializerMethodField('get_short_description')

    def get_category_name(self, obj):
        return obj.category.name

    def get_short_description(self, obj):
        return obj.description[0:100]

    class Meta:
        model = Book
        fields = "__all__"
        extra_kwargs = {'authors': {'required': False}}
