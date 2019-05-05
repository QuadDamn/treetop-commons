const router = require("express").Router();
const view = require("../../../src/organizations");

router.get("/", view.getViews);

module.exports = router;