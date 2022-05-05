const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get(
  "/new-page(.html)?",
  //Route Handlers
  (req, res) => {
    //res.sendFile("./views/index.html", { root: __dirname });
    res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
  }
);

//Chain Routing Example
const one = (req, res, next) => {
  console.log("Function one is called");
  next();
};

const two = (req, res, next) => {
  console.log("Function two is called");
  next();
};

const three = (req, res) => {
  console.log("Function three is called");
  res.send("Chain Done");
};

router.get(
  "/chain(.html)?",
  //Route Handlers
  [one, two, three]
);

router.get("/", (req, res) => {
  //res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
