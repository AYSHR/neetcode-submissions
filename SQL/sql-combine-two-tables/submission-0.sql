-- Write your query below
SELECT p.first_name, p.last_name, a.city, a.state
FROM Person as p LEFT JOIN Address as a
ON p.person_id = a.person_id;