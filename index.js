const express = require("express");
const app = express();
const path = require("path");

const router = require("./routes");

app.use(express.json());

app.use(router);

app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, () => console.log("App listening at port http://localhost:8000"));
