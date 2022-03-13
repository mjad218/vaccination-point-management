const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const users = express();

const cors = require("cors");
users.use(cors({ origin: true }));
users.options(
  "*",
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
users.post("/", async (req, res) => {
  const user = req.body;
  const result = await db.collection("users").doc(user.uid).set(user);
  res.status(200).send(result);
});

users.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await db.collection("users").doc(id).get();
  res.status(200).send(user.data);
});
module.exports = users;
