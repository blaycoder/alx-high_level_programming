-- a script that lists all genres from hbtn_0d_tvshows and displays the number of shows linked to each.
SELECT tv_genres.name AS genre, COUNT(tv_genres.name) AS number_of_shows
       FROM tv_genres
       ORDER BY number_of_shows DESC
