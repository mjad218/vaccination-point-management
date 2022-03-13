const functions = require("firebase-functions");
const locations = require("./locations");
// const paymentsApp = require("./paymentsApp");

// /slots/
// /locations/
// /complains/
// /users/:id

exports.locations = functions.https.onRequest(locations);
// exports.payments = functions.https.onRequest(paymentsApp);
