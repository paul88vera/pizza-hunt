const router = require('express').Router();
const commentRoute = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/comments', commentRoute);
router.use('/pizzas', pizzaRoutes);

module.exports = router;