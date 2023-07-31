const express = require("express");
const dbConnect = require("./dbConnect");
const bodyParser = require("body-parser");
const urlRouter = require("./routes/url");
const UrlController = require("./controllers/UrlController");
const path = require("path");
const staticRouter = require("./routes/staticRouter");
const app = express();
const PORT = 8001;
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", staticRouter);
app.use("/url", urlRouter);
app.use("/redirect/:shortId", UrlController.apiRedirectURI);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
