-- Write your query below
SELECT c.name 
FROM Customers as c LEFT JOIN Orders as o 
ON c.id = o.customer_id
WHERE o.customer_id IS NULL;