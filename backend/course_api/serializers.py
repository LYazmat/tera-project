from rest_framework import serializers
from .models import Course, Tag, Favorite, Enroll


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):

    # tags = TagSerializer(read_only=True, many=True)
    tags_obj = TagSerializer(source='tags', read_only=True, many=True)
    favorited = serializers.IntegerField(read_only=True)
    enrolled = serializers.IntegerField(read_only=True)

    class Meta:
        model = Course
        fields = '__all__'


class FavoriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Favorite
        fields = '__all__'


class EnrollSerializer(serializers.ModelSerializer):

    class Meta:
        model = Enroll
        fields = '__all__'
