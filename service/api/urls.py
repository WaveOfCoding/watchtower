from django.urls import path
from .views import MovieDetail, MovieInfo

urlpatterns = [
    path('movies/', MovieDetail.as_view(), name='movies'),
    path('movies/<int:id>/', MovieInfo.as_view()),
]