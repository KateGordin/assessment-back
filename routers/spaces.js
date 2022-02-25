const express = require("express");
const { space } = require("../models");
const { Router } = express;
const router = new Router();

//- Write a GET endpoint to findAll(Spaces)
router.get("/", async (req, res, next) => {
  try {
    const spaces = await space.findAll({ row: "json" });
    res.send(spaces);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
