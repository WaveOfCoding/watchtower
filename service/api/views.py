from rest_framework.response import Response
from rest_framework import status
from .models import WatchList
from .serializers import WatchSerializer
from rest_framework.views import APIView


class MovieDetail(APIView):
    def get(self, request, format=None):
        if request.method == 'GET':
            filters = {}
            rating = request.query_params.get('rating', None)
            if rating is not None:
                filters['rating'] = rating
            watchlist = request.query_params.get('watchlist', None)
            if watchlist is not None:
                if watchlist == 'true':
                    filters['watchlist'] = True
                else:
                    filters['watchlist'] = False
            movies = WatchList.objects.all().filter(**filters)

            serializer = WatchSerializer(movies, many=True)
            return Response(serializer.data)

    def post(self, request):
        serializer = WatchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class MovieInfo(APIView):
    def get(self, request, id):
        try:
            movies = WatchList.objects.get(id=id)

        except WatchList.DoesNotExists:
            msg = {'msg': 'Not Found'}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)

        serializer = WatchSerializer(movies)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        try:
            movies = WatchList.objects.get(id=id)

        except WatchList.DoesNotExist:
            msg = {'msg': 'Not Found Error'}

            return Response(msg, status=status.HTTP_404_NOT_FOUND)

        serializer = WatchSerializer(movies, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            movies = WatchList.objects.get(id=id)

        except WatchList.DoesNotExist:
            msg = {'msg': 'Not Found'}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)

        movies.delete()
        return Response({'msg': 'deleted'}, status=status.HTTP_204_NO_CONTENT)
