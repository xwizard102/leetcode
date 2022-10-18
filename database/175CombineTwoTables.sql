SELECT p.firstname, p.lastname, a.city, a.state
FROM Person p LEFT OUTER JOIN Address a ON p.personId = a.personId