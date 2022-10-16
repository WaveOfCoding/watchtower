from rest_framework import serializers
from api.models import WatchList


class WatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = ['id', 'title', 'poster', 'description', 'tmdBid_id', 'rating', 'watch_list']


