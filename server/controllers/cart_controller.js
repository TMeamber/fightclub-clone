module.exports = {
  // getCart: (req, res, next) => {
  //   const dbInstance = req.app.get('db');

  //   dbInstance.read_cart()
  //     .then(cart => res.status(200).send(cart))
  //     .catch(() => res.status(500).send());
  // },
  updateCart: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_cart()
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },
  deleteCart: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_cart()
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

addCart: (req, res, next) =>{
  const dbInstance = req.app.get('db');
  dbInstance.create_cart([req.body.id, req.user.id])
  .then((product) => {  
  res.status(200).send()})

  .catch((err) =>{
   res.status(500).send()});
},

displayCart: (req, res, next) =>{
  const dbInstance = req.app.get('db');
  dbInstance.display_cart()
  .then(() => {
    res.status(200).send()
  })
  .catch((err) =>{
    res.status(500).send()
  });
}
}
