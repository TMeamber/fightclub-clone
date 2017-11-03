module.exports = {
    createProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_product()
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },
    getProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send());
    },
    getBrand: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const brand = req.params.brand
        dbInstance.get_products_by_brand([brand])
            .then(products => res.status(200).send(products))
            .catch((err) => res.status(500).send(err));
    }
};