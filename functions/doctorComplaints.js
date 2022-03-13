const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const doctorComplaints = express();

const cors = require("cors");
doctorComplaints.use(cors({origin: true}));

doctorComplaints.get("/", async (req, res) => {
    const snapshot = await db.collection("doctorComplaints").get();
    const complaints = [];
    snapshot.forEach(doc => {
        const document = {id : doc.id, ...doc.data() };
        complaints.push(document);
     });
    res.status(200).send(JSON.stringify(complaints));
});

doctorComplaints.get("/:id", async (req, res) => {
  const userId = req.params.id; 
  const snapshot = await db.collection("doctorComplaints").where("userId", "=", userId).get();
  const complaints = [];
  snapshot.forEach(doc => {
      const document = {id : doc.id, ...doc.data() };
      complaints.push(document);
   });
  res.status(200).send(JSON.stringify(complaints));
});

doctorComplaints.put("/:id", async (req, res) => {
  const id = req.params.id;
  const chat = req.body;
  const snapshot = await db.collection("doctorComplaints").doc(id).update(chat);
  res.status(200).send(JSON.stringify(chat));
});

doctorComplaints.post("/", async (req, res) => {
  const chat = req.body;
  console.log(chat);
  const result =  await db.collection("doctorComplaints").doc().set(chat);
  res.status(200).send(result);
});

module.exports = doctorComplaints;