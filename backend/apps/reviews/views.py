from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Review, Report
from .serializers import ReviewSerializer, ReportSerializer, AdminReportSerializer


class ReviewCreateView(generics.CreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]


class ReviewReportView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        try:
            review = Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            return Response({'error': 'Review not found.'}, status=status.HTTP_404_NOT_FOUND)

        serializer = ReportSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(review=review)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReviewVoteView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        try:
            review = Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            return Response({'error': 'Review not found.'}, status=status.HTTP_404_NOT_FOUND)

        vote = request.data.get('vote')  # 'up' or 'down'
        if vote == 'up':
            review.helpful_votes += 1
        elif vote == 'down':
            review.helpful_votes = max(0, review.helpful_votes - 1)
        else:
            return Response({'error': 'vote must be "up" or "down".'}, status=status.HTTP_400_BAD_REQUEST)

        review.save(update_fields=['helpful_votes'])
        return Response({'helpful_votes': review.helpful_votes})


class AdminReportListView(generics.ListAPIView):
    queryset = Report.objects.filter(status='open').select_related('review', 'reporter').order_by('-created_at')
    serializer_class = AdminReportSerializer
    permission_classes = [permissions.IsAdminUser]


class AdminReportActionView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def post(self, request, pk):
        try:
            report = Report.objects.get(pk=pk)
        except Report.DoesNotExist:
            return Response({'error': 'Report not found.'}, status=status.HTTP_404_NOT_FOUND)

        action = request.data.get('action')
        if action == 'hide_review':
            report.review.is_hidden = True
            report.review.save(update_fields=['is_hidden'])
            report.status = 'resolved'
            report.save(update_fields=['status'])
        elif action == 'dismiss':
            report.status = 'resolved'
            report.save(update_fields=['status'])
        elif action == 'ban_user':
            report.review.author.is_active = False
            report.review.author.save(update_fields=['is_active'])
            report.status = 'resolved'
            report.save(update_fields=['status'])
        else:
            return Response({'error': 'Invalid action.'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'message': f'Action "{action}" applied.'})
