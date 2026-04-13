from django.urls import path
from .views import StudyMaterialListCreateView

urlpatterns = [
    path('', StudyMaterialListCreateView.as_view(), name='material-list-create'),
]
