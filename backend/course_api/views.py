from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import CourseSerializer, FavoriteSerializer, EnrollSerializer
from .models import Course, Favorite, Enroll
from django.db.models import Q, Count

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

        user = self.request.user.id if self.request.user.id else 0

        queryset = queryset.annotate(is_favorite=Count(
            'favorite__user', filter=Q(favorite__user=user)))

        search = self.request.query_params.get('description', None)
        if search:
            queryset = queryset.filter(reduce(lambda x, y: x & y, [Q(
                title__icontains=word) for word in search.split(' ')]))
        return queryset.prefetch_related('tags')


@permission_classes([IsAuthenticated])
class FavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteSerializer
    http_method_names = ['post', 'delete']
    queryset = Favorite.objects.all()


class EnrollViewSet(viewsets.ModelViewSet):
    serializer_class = EnrollSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['post', 'delete']
    queryset = Enroll.objects.all()
