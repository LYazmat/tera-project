from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CourseSerializer
from .models import Course
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password

from functools import reduce


class CourseViewSet(viewsets.ModelViewSet):

    serializer_class = CourseSerializer

    def get_queryset(self):
        # reduce(lambda x, y: x | y, [Q(name__icontains=word) for word in list]))
        queryset = Course.objects.all()
        search = self.request.query_params.get('description', None)
        if search:
            queryset = queryset.filter(reduce(lambda x, y: x & y, [Q(
                title__icontains=word) for word in search.split(' ')]))
        return queryset.prefetch_related('areas')
