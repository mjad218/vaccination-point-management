const express = require("express");
const admin = require("firebase-admin");
const db = admin.firestore();
const bookings = express();

const cors = require("cors");

bookings.use(cors({origin: true}));

// bookings.get("/:id", async (req, res) => {
//   const snapshot = await db.collection("users").doc(req.params.id).get();
//   const user = {...snapshot.data()};
//   if (!snapshot.exists) {
//     res.status(404).send();
//   }
//   res.status(200).send(JSON.stringify(user));
// });

bookings.get("/", async (req, res) => {
    const snapshot = await db.collection("bookings").get();
    const bookings = [];
    snapshot.forEach(doc => {
        const document = { [doc.id]: doc.data() };
        bookings.push(document);
     });
    res.status(200).send(JSON.stringify(bookings));
});

bookings.get("/:id", async (req, res) => {
  const location = req.params.id; 
  const snapshot = await db.collection("bookings").where("location", "=", location).get();
  const bookings = [];
  snapshot.forEach(doc => {
      const document = { [doc.id]: doc.data() };
      bookings.push(document);
   });
  res.status(200).send(JSON.stringify(bookings));
});
// bookings.post("/", async (req, res) => {
//   const user = req.body;
//   await db.collection("users").doc(`${user.blogID}`).set(user);
//   res.status(200).send();
// });

module.exports = bookings;