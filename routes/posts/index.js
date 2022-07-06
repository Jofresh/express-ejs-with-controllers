const router = require("express").Router();
const postsController = require("./../../controllers/posts");

router.get("/", postsController.findAll);
router.get("/:id", postsController.find);

module.exports = router;
