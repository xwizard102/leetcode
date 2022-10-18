WITH salary AS (
SELECT *, dense_rank() OVER(
    PARTITION BY departmentId
    ORDER BY salary DESC
) AS sal_rank
FROM Employee
)

SELECT d.name AS Department, s.name AS Employee, s.salary AS Salary
FROM salary s INNER JOIN Department d ON s.departmentId = d.id
WHERE s.sal_rank = 1