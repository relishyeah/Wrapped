# Wrapped, Wrapped

A web app built with React and TypeScript that allows users to see an analysis of their listening history throughout the years. At the end of every year, Spotify gifts their premium users with their Spotify Wrapped, a collection of the user's top songs, artists, and genres for a given year. The only data potentially accessible for analysis is the "Your Top Songs 20XX" playlist that is automatically created for a given user



## Methodology

Since there is no 3rd part developer support for Spotify's "Made for you" playlists, users must be following their "Your Top Songs" playlists.



The app first authorizes the user with implicit authorization. At first PKCE (Proof Key for Code Exchange) authorization was attempted, but consistent CORS(Cross-Origin Resource Sharing) errors resulted in choosing implicit authorization.



The user's name and profile picture are gathered from the `/me` endpoint.



To gather the user's relevant playlists calls to the `/me/playlists` endpoint are made until all of the user's playlists have been searched. Using regular expressions, each playlist is searched for matches to the "Your Top Songs XXXX" format. In order to ensure that the playlist is valid playlist, we all check to make sure the playlist was created by Spotify. The problem that can arise here is that there is no distinguishing characteristic that proves a Wrapped playlist belongs to a certain user, so if a user is following someone else's top songs of a certain year, this can show up in their results.



For each of the matching playlists, a call is made to `/playlists/{playlist id}` to get individual tracks. Since Wrapped has only existed since 2016, the most extreme case is having 700 songs, as of May 2023. These tracks are counted and the most prevalent artists, tracks, and albums are returned to be displayed.



For the Top Artist category, a call is made to the `/artists/{artist-id}` endpoint to gather the profile picture of the artist.
