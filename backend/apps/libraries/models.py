from django.db import models
from django.conf.global_settings import LANGUAGES
from treebeard.mp_tree import MP_Node


class Category(MP_Node):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    node_order_by = ["name"]

    def __str__(self):
        return "Category: {}".format(self.name)


class Book(models.Model):
    title = models.CharField(max_length=400)
    publication_year = models.IntegerField(null=True, blank=True)
    description = models.TextField(max_length=1000)
    language = models.CharField(max_length=7, choices=LANGUAGES)
    front_cover = models.ImageField(blank=True, null=True)
    back_cover = models.ImageField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    pages = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Author(models.Model):
    name = models.CharField(max_length=255)
    biography = models.TextField(max_length=500, null=True, blank=True)
    books = models.ManyToManyField(Book, related_name="authors")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
