from django.db import models
from django.contrib.auth.models import User 

# Database to hold the users team choice
class UserTeamChoice(models.Model):
    # Every user has one team and once user deleted the team choice also deleted 
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    team_id = models.IntegerField()                 # SportsDB API team id 
    team_name = models.CharField(max_length=100)    # SportsDB API team name

    def __str__(self):
        return f"{self.user.username} - {self.team_name}"


