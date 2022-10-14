from django.contrib import admin
from django.contrib.admin import ModelAdmin
from api.models import WatchList


@admin.register(WatchList)
class WatchListAdmin(ModelAdmin):
    pass

