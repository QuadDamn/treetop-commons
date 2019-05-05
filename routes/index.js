const router = require("express").Router();
const api = require("./api");

async function healthcheck(req, res) {
  return res.json({
    healthcheck: "ok"
  });
}

router.get("/", healthcheck);

router.use("/api", api);

module.exports = router;
