const functions = require("firebase-functions");
const locations = require("./locations");
const bookings = require("./bookings.js");

// /slots/
// /locations/
// /complains/
// /users/:id

exports.locations = functions.https.onRequest(locations);
exports.bookings = functions.https.onRequest(bookings);
