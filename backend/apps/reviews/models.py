from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Review(models.Model):
    author = models.ForeignKey('users.Student', on_delete=models.CASCADE, related_name='reviews')
    course_instance = models.ForeignKey(
        'courses.CourseInstance', on_delete=models.CASCADE, related_name='reviews'
    )
    text = models.TextField()
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
    difficulty_rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
    clarity_rating = models.IntegerField(default=5, validators=[MinValueValidator(1), MaxValueValidator(10)])
    objectivity_rating = models.IntegerField(default=5, validators=[MinValueValidator(1), MaxValueValidator(10)])
    accessibility_rating = models.IntegerField(default=5, validators=[MinValueValidator(1), MaxValueValidator(10)])
    workload_rating = models.IntegerField(default=5, validators=[MinValueValidator(1), MaxValueValidator(10)])
    is_anonymous = models.BooleanField(default=True)
    is_hidden = models.BooleanField(default=False)
    sensitive_markers = models.JSONField(default=dict)
    helpful_votes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    took_this_course = models.BooleanField(default=False)

    def __str__(self):
        return f"Review by {self.author} on {self.course_instance}"

    def check_auto_hide(self):
        if self.reports.filter(status='open').count() >= 5:
            self.is_hidden = True
            self.save(update_fields=['is_hidden'])


class Report(models.Model):
    STATUS_CHOICES = [('open', 'Open'), ('resolved', 'Resolved')]

    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='reports')
    reporter = models.ForeignKey('users.Student', on_delete=models.CASCADE, related_name='reports')
    reason = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Report on Review #{self.review_id} by {self.reporter}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.review.check_auto_hide()
