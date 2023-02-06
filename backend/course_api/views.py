from django.shortcuts import render
from django.shortcuts import get_object_or_404

from django.db import models

from rest_framework import status
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import CourseSerializer, FavoriteSerializer, EnrollSerializer
from .models import Course, Favorite, Enroll
from django.db.models import Q, Count, F

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
        '''
        Need override get_queryset for purposes bellow
        1. Need to include user from request
        2. Need to include favorite and enroll
        3. Need to filter using description param
        '''
        queryset = Course.objects.all()
        user = self.request.user.id if self.request.user.id else 0

        # Querysets for subqueries

        favorite = Favorite.objects.filter(
            user=user, course=models.OuterRef('pk'))

        enroll = Enroll.objects.filter(
            user=user, course=models.OuterRef('pk'))

        # Annotate favorite and enroll pks when they exist

        queryset = queryset.annotate(
            favorited=models.Subquery(favorite.values('pk')[:1]),
            enrolled=models.Subquery(enroll.values('pk')[:1]))

        # Apply filter to description get param

        search = self.request.query_params.get('description', None)

        if search:
            queryset = queryset.filter(reduce(lambda x, y: x & y, [Q(
                title__icontains=word) for word in search.split(' ')]))

        # Prefetch tags

        queryset = queryset.prefetch_related('tags')

        return queryset

    @action(detail=False, methods=['get'])
    def favorite(self, request):
        self.queryset = queryset.filter(favorite__user=request.user.id)
        super().list(request, *ags, **kwargs)
        return Response({'msg': 'ok'}, status=status.HTTP_200_OK)


@permission_classes([IsAuthenticated])
class FavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete']

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)


class EnrollViewSet(viewsets.ModelViewSet):
    serializer_class = EnrollSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete']

    def get_queryset(self):
        return Enroll.objects.filter(user=self.request.user)
