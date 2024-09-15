const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
const port = 4000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Middleware for parsing URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// CORS setup
app.use(
  cors({
    origin: "https://www.loolooloo.co/send-sms",
  })
);

// Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const toNumber = process.env.TO_NUMBER;
const fromNumber = process.env.FROM_NUMBER;
const client = twilio(accountSid, authToken);
const URL = "www.google.com";

app.get("/send-sms", async (req, res) => {
  const message = await client.messages.create({
    body: URL,
    from: fromNumber,
    to: toNumber,
  });

  console.log("SENT");

  res.send("SEND");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
