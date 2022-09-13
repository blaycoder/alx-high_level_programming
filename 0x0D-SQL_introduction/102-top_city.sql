-- script that displays the top 3 of cities temperature during July and August ordered by temperature (descending)
SELECT city, avg_temp FROM temperatures
WHERE month BETWEEN 8 OR 9
GROUP BY city
ORDER BY avg_temp DESC
LIMIT 3;
