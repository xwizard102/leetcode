UPDATE Salary s1
LEFT OUTER JOIN Salary mm ON s1.id = mm.id AND s1.sex = 'm'
LEFT OUTER JOIN Salary ff ON s1.id = ff.id AND s1.sex = 'f'
SET mm.sex = 'f', ff.sex = 'm'