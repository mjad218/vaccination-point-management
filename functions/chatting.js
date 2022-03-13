const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const chatting = express();

const cors = require("cors");

chatting.use(cors({origin: true}));

chatting.get("/", async (req, res) => {
    const snapshot = await db.collection("consultation").get();
    const chatting = [];
    snapshot.forEach(doc => {
        const document = {id : doc.id, ...doc.data() };
        chatting.push(document);
     });
    res.status(200).send(JSON.stringify(chatting));
});

chatting.put("/:id", async (req, res) => {
  const id = req.params.id;
  const chat = req.body;
  const snapshot = await db.collection("chatting").doc(id).set(chat);
  res.status(200).send(JSON.stringify(chat));
});

chatting.post("/", async (req, res) => {
  const chat = req.body;
  console.log(chat);
  const result =  await db.collection("consultation").doc().set(chat);
  res.status(200).send(result);
});

module.exports = chatting;
