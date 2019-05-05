const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require("./routes"));

module.exports = app.listen(5000, () => {
  console.log(`API listening on port 5000...`);
});
