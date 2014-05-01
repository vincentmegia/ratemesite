from django.core.serializers import json


class CleanJsonSerializer(json.Serializer):

    def get_dump_object(self, obj):
        return self._current