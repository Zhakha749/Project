from django.urls import path
from .views import ReviewCreateView, ReviewReportView, ReviewVoteView

urlpatterns = [
    path('', ReviewCreateView.as_view(), name='review-create'),
    path('<int:pk>/report/', ReviewReportView.as_view(), name='review-report'),
    path('<int:pk>/vote/', ReviewVoteView.as_view(), name='review-vote'),
]
