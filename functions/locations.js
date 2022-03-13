const express = require("express");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
const locations = express();

const cors = require("cors");

locations.use(cors({origin: true}));

// locations.get("/:id", async (req, res) => {
//   const snapshot = await db.collection("users").doc(req.params.id).get();
//   const user = {...snapshot.data()};
//   if (!snapshot.exists) {
//     res.status(404).send();
//   }
//   res.status(200).send(JSON.stringify(user));
// });

locations.get("/", async (req, res) => {
    const snapshot = await db.collection("locations").get();
    const locations = [];
    snapshot.forEach(doc => {
        const document = {id : doc.id, ...doc.data() };
        locations.push(document);
     });
    res.status(200).send(JSON.stringify(locations));
  });

// locations.post("/", async (req, res) => {
//   const user = req.body;
//   await db.collection("users").doc(`${user.blogID}`).set(user);
//   res.status(200).send();
// });

module.exports = locations;
