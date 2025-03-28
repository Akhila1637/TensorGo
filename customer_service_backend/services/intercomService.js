const axios = require("axios");

const INTERCOM_ACCESS_TOKEN = process.env.INTERCOM_ACCESS_TOKEN;

const createIntercomTicket = async (userId, message) => {
  try {
    const response = await axios.post(
      "https://api.intercom.io/messages",
      {
        from: { type: "user", id: userId },
        body: message,
      },
      {
        headers: {
          Authorization: `Bearer ${INTERCOM_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending message to Intercom:", error);
  }
};

module.exports = { createIntercomTicket };
