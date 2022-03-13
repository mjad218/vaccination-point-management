const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const consultation = express();

const cors = require("cors");

consultation.use(cors({origin: true}));

consultation.get("/", async (req, res) => {
    const snapshot = await db.collection("consultation").get();
    const consultation = [];
    snapshot.forEach(doc => {
        const document = {id : doc.id, ...doc.data() };
        consultation.push(document);
     });
    res.status(200).send(JSON.stringify(consultation));
});

consultation.put("/:id", async (req, res) => {
  const id = req.params.id;
  const chat = req.body;
  const snapshot = await db.collection("consultation").doc(id).update(chat);
  res.status(200).send(JSON.stringify(chat));
});

consultation.post("/", async (req, res) => {
  const chat = req.body;
  console.log(chat);
  const result =  await db.collection("consultation").doc().set(chat);
  res.status(200).send(result);
});

module.exports = chatting;
