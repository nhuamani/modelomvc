from rest_framework import serializers, viewsets
from ..models.Libro import Libro


class LibroSerializer(serializers.ModelSerializer):
    # serializers.HyperlinkedModelSerializer para mostrar el link de
    # administrador rest

    class Meta:
        model = Libro


class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
