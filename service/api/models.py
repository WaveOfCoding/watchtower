from django.db import models


class WatchList(models.Model):
    title = models.CharField(max_length=255)
    poster = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    tmdBid_id = models.IntegerField(default=0)
    rating = models.IntegerField(null=True)
    watch_list = models.BooleanField(null=True)

    def __str__(self):
        return self.title