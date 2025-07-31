from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics 
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer, UserTeamChoiceSerializer
from .models import UserTeamChoice
from django.http import Http404


# Views handle HTTP Requests and responses 


# Implementing a new user 
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# Be able to retrieve the User 
class GetUserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self): 
        return self.request.user


class UserTeamChoiceView(generics.CreateAPIView):
    serializer_class = UserTeamChoiceSerializer
    permission_classes = [IsAuthenticated]

    # Ensures for a specific user that when team is chosen it either creates an entry or updates exisiting 
    # Ensures that every user has specifically one team chosen 
    def perform_create(self, serializer):
        UserTeamChoice.objects.update_or_create(
            user=self.request.user,
            defaults= {
                'team_data' : serializer.validated_data['team_data']
            }
        )



# Seperate View to recieve from the database
class UserTeamChoiceRetrieveView(generics.RetrieveAPIView):
    serializer_class = UserTeamChoiceSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user = self.request.user
        try:
            return UserTeamChoice.objects.get(user=user)
        except UserTeamChoice.DoesNotExist:
            raise Http404("No team choice found for this user")

