const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoute = require('./comment-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoute);

module.exports = router;