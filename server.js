const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3500;
const app = express();

const whitelist = [
  "https://www.google.com",
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];
const corsOption = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));

// built-in middleware to handle urlencoded data
// in other words, form data:
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  //res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get(
  "/new-page(.html)?",
  //Route Handlers
  (req, res) => {
    //res.sendFile("./views/index.html", { root: __dirname });
    res.sendFile(path.join(__dirname, "views", "new-page.html"));
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

app.get(
  "/chain(.html)?",
  //Route Handlers
  [one, two, three]
);

app.get("/*", (req, res) => {
  //res.sendFile("./views/index.html", { root: __dirname });
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
