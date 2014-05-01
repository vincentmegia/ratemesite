__author__ = 'bastardo'

from django.core.serializers.json import Serializer

class JSONSerializer(Serializer):

    def end_serialization(self):
        for ob in self.objects:
            del ob['pk']
            del ob['model']
        return super(JSONSerializer, self).end_serialization()