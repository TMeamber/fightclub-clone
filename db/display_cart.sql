select * from cart
where users_id = req.users_id
join products on products.productsid = cart.productsid