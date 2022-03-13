const express = require("express");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
const locations = express();

const cors = require("cors");

locations.use(cors({origin: true}));

locations.get("/", async (req, res) => {
    const snapshot = await db.collection("locations").get();
    const locations = [];
    snapshot.forEach(doc => {
        const document = {id : doc.id, ...doc.data() };
        locations.push(document);
     });
    res.status(200).send(JSON.stringify(locations));
  });
module.exports = locations;
