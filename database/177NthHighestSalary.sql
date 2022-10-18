CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      SELECT salary
      FROM (
          SELECT DISTINCT salary
          FROM Employee
          UNION ALL SELECT NULL
          ORDER BY salary DESC limit N
      ) s
      ORDER BY salary ASC limit 1
  );
END