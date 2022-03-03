require("dotenv").config();
const functions = require("firebase-functions");
const fs = require("fs")
const express = require("express");

const app = express();
const { dbConnect } = require("./config/connectFirebase");

let credentialPath = `${__dirname}/config/credentials_firebase.json`
// process.env.CREDENTIAL ||
dbConnect(credentialPath);

app.use(express.json());
app.use("/api/v1.0" , require("./app/routes"))

exports.app = functions.https.onRequest(app);