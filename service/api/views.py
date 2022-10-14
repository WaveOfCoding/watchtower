from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import WatchList
from .serializers import WatchSerializer


@api_view(['GET', 'POST'])
def get_movies(request, format=None):
    if request.method == 'GET':
        filters = {}
        rating = request.query_params.get('rating', None)
        if rating is not None:
            filters['rating'] = rating
        watch_list = request.query_params.get('watch_list', None)
        if watch_list is not None:
            if watch_list == 'true':
                filters['watch_list'] = True
            else:
                filters['watch_list'] = False
        movies = WatchList.objects.all().filter(**filters)

        serializer = WatchSerializer(movies, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = WatchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)