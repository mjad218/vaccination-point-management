const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const complains = express();

const cors = require("cors");
complains.use(cors({origin: true}));

complains.get("/", async (req, res) => {
    const snapshot = await db.collection("complains").get();
    const complains = [];
    snapshot.forEach(doc => {
        const document = {id : doc.id, ...doc.data() };
        complains.push(document);
     });
    res.status(200).send(JSON.stringify(complains));
});
complains.get("/:id", async (req, res) => {
    const userId = req.params.id; 
    const snapshot = await db.collection("complains").where("userId", "=", userId).get();;
    const complains = [];
    snapshot.forEach(doc => {
        const document = {id : doc.id, ...doc.data() };
        complains.push(document);
     });
    res.status(200).send(JSON.stringify(complains));
});
complains.put("/:id", async (req, res) => {
    const id = req.params.id;
    const complain = req.body;
    const snapshot = await db.collection("complains").doc(id).update(complain);
    res.status(200).send(JSON.stringify(complain));
});

complains.post("/", async (req, res) => {
  const booking = req.body;
  console.log(booking);
  const result =  await db.collection("complains").doc().set(booking);
  res.status(200).send(result);
});

module.exports = complains;