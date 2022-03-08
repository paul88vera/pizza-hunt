const { Pizza } = require('../models');

const pizzaController = {
// functions will go here as methods
getAllPizzas(req, res) {
  Pizza.find({})
  .then(dbPizzaData => res.json(dbPizzaData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
},
  getPizzaById({ params }, res){
    Pizza.findOne({ _id: params.id })
    .then(dbPizzaData => {
      // if no pizza is found, send 404
      if (dbPizzaData) {
        res.status(404).json({ message: 'No pizza found with this id!'});
        return;
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },
};

module.exports = pizzaController;