const router = require("express").Router();
const organizations = require("../../../src/organizations");

router.get("/", organizations.getOrganizations);

module.exports = router;