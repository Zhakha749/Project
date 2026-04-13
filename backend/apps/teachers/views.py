from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Teacher
from .serializers import TeacherListSerializer, TeacherDetailSerializer
from .filters import TeacherFilter


class TeacherListView(generics.ListAPIView):
    queryset = Teacher.objects.all().distinct()
    serializer_class = TeacherListSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = TeacherFilter
    search_fields = ['full_name']
    ordering_fields = ['full_name']
    ordering = ['full_name']


class TeacherDetailView(generics.RetrieveAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherDetailSerializer
    permission_classes = [permissions.AllowAny]
