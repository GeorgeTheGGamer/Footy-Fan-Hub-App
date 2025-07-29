from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserTeamChoice


# The serializer takes in python code and outputs a JSON Object 
# Allows for interacting with frontend javascript

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        # Cannot read only write the password 
        extra_kwargs = {"password" : {"write_only" : True }}

    # Createse a new user 
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
# Serializer Class for the Users Team Choice
class UserTeamChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTeamChoice
        fields = ["team_id","team_name"]
