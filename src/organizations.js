async function healthcheck(req, res) {
  return res.json({
    healthcheck: "ok"
  });
}

async function getOrganizations(req, res) {

}

module.exports = {
  healthcheck,
  getOrganizations
};
