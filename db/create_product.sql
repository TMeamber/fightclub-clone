insert into products (shoe_name, brand, price, year, color)
values ($1, $2, $3, $4, $5)
returning *;