from django.db import models
from django.contrib.auth.models import User 

# Database to hold the users team choice
class UserTeamChoice(models.Model):
    # Every user has one team and once user deleted the team choice also deleted 
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    team_data = models.JSONField()  # Store entire team object



