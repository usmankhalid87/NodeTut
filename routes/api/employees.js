const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const data = require("../../data/employees.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .delete((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  });

module.exports = router;
