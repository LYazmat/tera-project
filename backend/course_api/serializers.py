from rest_framework import serializers
from .models import Course, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):

    # tags = TagSerializer(read_only=True, many=True)
    tags_obj = TagSerializer(source='tags', read_only=True, many=True)

    class Meta:
        model = Course
        fields = '__all__'
