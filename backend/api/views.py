from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics 
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer, UserTeamChoiceSerializer
from .models import UserTeamChoice


# Views handle HTTP Requests and responses 


# Implementing a new user 
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserTeamChoiceView(generics.CreateAPIView):
    serializer_class = UserTeamChoiceSerializer
    permission_classes = [IsAuthenticated]

    # Ensures for a specific user that when team is chosen it either creates an entry or updates exisiting 
    # Ensures that every user has specifically one team chosen 
    def perform_create(self, serializer):
        UserTeamChoice.objects.update_or_create(
            user=self.request.user,
            defaults= {
                'team_id' : serializer.validated_data['team_id'],
                'team_name': serializer.validated_data['team_name']
            }
        )

