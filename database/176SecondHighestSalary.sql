SELECT salary AS SecondHighestSalary
FROM (
    SELECT salary
    FROM Employee
    UNION SELECT NULL
    ORDER BY salary DESC limit 2
) s
ORDER BY SecondHighestSalary ASC limit 1