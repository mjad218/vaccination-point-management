const functions = require("firebase-functions");
const locations = require("./locations");
const bookings = require("./bookings.js");
const complains = require("./complains.js");
const consultation = require("./complains.js");
// /slots/
// /locations/
// /complains/
// /users/:id

exports.locations = functions.https.onRequest(locations);
exports.bookings = functions.https.onRequest(bookings);
exports.consultation = functions.https.onRequest(consultation);
exports.complains = functions.https.onRequest(complains);