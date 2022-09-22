-- a script that lists all shows, and all genres linked to that show, from the database hbtn_0d_tvshows
SELECT tv_shows.title, tv_genres.name
       FROM tv_shows
       	    INNER JOIN tv_show_genres
	    ON tv_shows.id = tv_show_genres.show_id

	    LEFT JOIN tv_genres
	    ON tv_shows.id = tv_genres.id
	    WHERE tv_genres.name IS NULL
	 ORDER BY tv_shows.title, tv_genre.name ASC;
