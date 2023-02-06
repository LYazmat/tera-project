from django.shortcuts import render
from django.shortcuts import get_object_or_404

from django.db import models
from django.db.models import Q

from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly

from .serializers import CourseSerializer, FavoriteSerializer, EnrollSerializer
from .models import Course, Favorite, Enroll

from drf_spectacular.utils import extend_schema, extend_schema_view, OpenApiParameter

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
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        '''
        Overriding get_queryset for purposes bellow
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

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name='description', description='Filter by course title (partial)', required=False, type=str)
        ])
    def list(self, request):
        return super().list(request)

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name='description', description='Filter by course title (partial)', required=False, type=str),
        ])
    @action(detail=False, methods=['get'])
    def favorite(self, request):
        '''
        ViewSet function for favorite page list.
        Access at <url_base_course_route>/favorite/ .
        Changing queryset to get only courses favorited by request user.
        '''
        queryset = self.get_queryset()
        queryset = queryset.filter(
            favorite__user=request.user.id, favorite__user__isnull=False)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name='description', description='Filter by course title (partial)', required=False, type=str),
        ])
    @action(detail=False, methods=['get'])
    def enroll(self, request):
        '''
        ViewSet for enroll page list.
        Access at <url_base_course_route>/enroll/ .
        Changing queryset to get only courses enrolled by request user.
        '''
        queryset = self.get_queryset()
        queryset = queryset.filter(
            enroll__user=request.user.id, enroll__user__isnull=False)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


@extend_schema_view(
    retrieve=extend_schema(
        parameters=[
            OpenApiParameter(
                name='id', location=OpenApiParameter.PATH, type=int)
        ]
    ),
    destroy=extend_schema(
        parameters=[
            OpenApiParameter(
                name='id', location=OpenApiParameter.PATH, type=int)
        ]
    ),
)
@permission_classes([IsAuthenticated])
class FavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete']

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)


@extend_schema_view(
    retrieve=extend_schema(
        parameters=[
            OpenApiParameter(
                name='id', location=OpenApiParameter.PATH, type=int)
        ]
    ),
    destroy=extend_schema(
        parameters=[
            OpenApiParameter(
                name='id', location=OpenApiParameter.PATH, type=int)
        ]
    ),
)
class EnrollViewSet(viewsets.ModelViewSet):
    serializer_class = EnrollSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete']

    def get_queryset(self):
        return Enroll.objects.filter(user=self.request.user)
