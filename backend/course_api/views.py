from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import CourseSerializer
from .models import Course
from django.db.models import Q

from functools import reduce

'''    
    viewsets.ModelViewSet = mixins.CreateModelMixin, 
                            mixins.RetrieveModelMixin, 
                            mixins.UpdateModelMixin,
                            mixins.DestroyModelMixin,
                            mixins.ListModelMixin,
                            GenericViewSet
'''


class CourseViewSet(viewsets.ModelViewSet):

    serializer_class = CourseSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['get', 'head']

    def get_queryset(self):
        # reduce(lambda x, y: x | y, [Q(name__icontains=word) for word in list]))
        queryset = Course.objects.all()
        search = self.request.query_params.get('description', None)
        if search:
            queryset = queryset.filter(reduce(lambda x, y: x & y, [Q(
                title__icontains=word) for word in search.split(' ')]))
        return queryset.prefetch_related('tags')
