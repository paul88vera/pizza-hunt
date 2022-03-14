const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers');

// /api/comments/<pizzaId>
router.route('/:piizaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;