module.exports = {
    createProduct: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.create_product()
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      },
      getProduct: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
          .then( products => res.status(200).send( products ) )
          .catch( () => res.status(500).send() );
      },
    };