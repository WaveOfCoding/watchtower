from rest_framework import serializers
from api.models import WatchList


class WatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = '__all__'


