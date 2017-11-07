select * from cart
join products on products.id = cart.products_id
where users_id = $1
