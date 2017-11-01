insert into cart (products_id, users_id, price, total, shoe_name)
values ($1, $2, $3, $4, $5)
returning *;