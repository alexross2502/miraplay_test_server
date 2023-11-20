const express = require("express");

async function check(req, res) {
  try {
    res.status(200).json("eeeee").end();
  } catch (e) {
    return res.status(400).json({ message: e.message }).end();
  }
}

module.exports = { check };
