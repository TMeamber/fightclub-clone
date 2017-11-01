module.exports = {
createUser: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_user()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },
  getUser: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_user()
      .then( user => res.status(200).send( user ) )
      .catch( () => res.status(500).send() );
  }
}