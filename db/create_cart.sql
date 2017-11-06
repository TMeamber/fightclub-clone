insert into cart (products_id, users_id)
values ($1, $2)
returning *;