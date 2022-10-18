WITH top_sals AS (
SELECT departmentId, salary, dense_rank() OVER (
    PARTITION BY departmentId
    ORDER BY salary DESC) AS sal_rank
FROM Employee
)
, top3_sals AS (
SELECT * FROM top_sals
WHERE sal_rank <= 3
)

SELECT DISTINCT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e INNER JOIN Department d ON e.departmentId = d.id
INNER JOIN top3_sals s ON e.departmentId = s.departmentId AND e.salary = s.salary