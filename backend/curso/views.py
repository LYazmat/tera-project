from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CursoSerializer, UserSerializer
from .models import Curso
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password

from functools import reduce

class CursoViewSet(viewsets.ModelViewSet):

    serializer_class = CursoSerializer

    def get_queryset(self):
        # reduce(lambda x, y: x | y, [Q(name__icontains=word) for word in list]))
        queryset = Curso.objects.all()
        search = self.request.query_params.get('descricao', None)
        if search:
            queryset = queryset.filter(reduce(lambda x, y: x & y, [Q(title__icontains=word) for word in search.split(' ')]))
        return queryset.prefetch_related('areas')


class UserViewSet(viewsets.ModelViewSet):

    serializer_class = UserSerializer

    def get_queryset(self):
        usuario = self.request.query_params.get('usuario', None)
        senha = self.request.query_params.get('senha', None)
        if usuario and senha:
            queryset = User.objects.filter(username=usuario)
            user = queryset.first()
            if user:
                if check_password(senha, user.password):
                    return User.objects.filter(username=usuario)[:1]
        return User.objects.none()
