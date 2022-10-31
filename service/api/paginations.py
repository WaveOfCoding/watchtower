from collections import OrderedDict
from rest_framework import pagination
from rest_framework.response import Response


class MovieAPIListPagination(pagination.PageNumberPagination):
    page_size = 2

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('total_results', self.page.paginator.count),
            ('total_pages', self.page_size),
            ('page', self.page.number),
            ('results', data)
        ]))


