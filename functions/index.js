const functions = require("firebase-functions");
const locations = require("./locations");
const bookings = require("./bookings.js");
const complains = require("./complains.js");
const doctorComplaints = require("./doctorComplaints.js");

// /slots/
// /locations/
// /complains/
// /users/:id

exports.locations = functions.https.onRequest(locations);
exports.bookings = functions.https.onRequest(bookings);
exports.doctorComplaints = functions.https.onRequest(doctorComplaints);
exports.complains = functions.https.onRequest(complains);