const functions = require("firebase-functions");
// const usersApp = require("./usersApp");
// const paymentsApp = require("./paymentsApp");

// /slots/
// /locations/
// /complains/
// /users/:id

exports.users = functions.https.onRequest(usersApp);
exports.payments = functions.https.onRequest(paymentsApp);
