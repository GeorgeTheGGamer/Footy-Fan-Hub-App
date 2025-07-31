from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, UserTeamChoiceView, UserTeamChoiceRetrieveView, GetUserView
# Take the already built views to handle the jwt tokens for loggining in 
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# API end points for the frontend to call
urlpatterns = [
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/team/", UserTeamChoiceView.as_view(), name="User-team-choice"),
    path('api/team/get/', UserTeamChoiceRetrieveView.as_view(), name='team-get'),
    path('api/user/details', GetUserView.as_view(), name="user details")
]
