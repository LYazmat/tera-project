from rest_framework import serializers
from .models import Curso, Area
from django.contrib.auth.models import User

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = '__all__'


class CursoSerializer(serializers.ModelSerializer):

    # areas = AreaSerializer(read_only=True, many=True)
    areas_obj = AreaSerializer(source='areas', read_only=True, many=True)    

    class Meta:
        model = Curso
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)