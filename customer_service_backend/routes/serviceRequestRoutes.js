const express = require("express");
const router = express.Router();
const ServiceRequest = require("../models/ServiceRequest");

// 🔹 Create a new service request
router.post("/", async (req, res) => {
  try {
    const { userId, category, description } = req.body;

    if (!userId || !category || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRequest = new ServiceRequest({ userId, category, description });
    await newRequest.save();

    res.status(201).json(newRequest);
  } catch (error) {
    console.error("Error creating request:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Get all service requests
router.get("/", async (req, res) => {
  try {
    const requests = await ServiceRequest.find().populate("userId", "name email");
    res.json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
    