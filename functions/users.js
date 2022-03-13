const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const users = express();

const cors = require("cors");
users.use(cors({origin: true}));

users.post("/", async (req, res) => {
  const user = req.body;
  const result =  await db.collection("users").doc(user.uid).set(user);
  res.status(200).send(result);
});

module.exports = users;