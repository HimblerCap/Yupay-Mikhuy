const admin = require("firebase-admin");

const dbConnect = (credential) => {
    const serviceAccount = require(credential);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://yupay-mikhuy-default-rtdb.firebaseio.com",
    });
};

module.exports = { dbConnect };
