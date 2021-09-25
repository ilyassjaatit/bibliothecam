from django.db import models

from treebeard.mp_tree import MP_Node


class Category(MP_Node):
    name = models.CharField(max_length=255)

    node_order_by = ['name']

    def __str__(self):
        return 'Category: {}'.format(self.name)


class Book(models.Model):
    title = models.CharField(max_length=255)
    publication_year = models.IntegerField(null=True, blank=True)
    description = models.TextField(max_length=500)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.title


class Author(models.Model):
    name = models.CharField(max_length=255)
    biography = models.TextField(max_length=500, null=True, blank=True)
    books = models.ManyToManyField(Book, related_name='authors')
