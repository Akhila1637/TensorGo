const mongoose = require("mongoose");

const ServiceRequestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: String, required: true, enum: ["General", "Feature", "Pricing", "Implementation"] },
    description: { type: String, required: true },
    status: { type: String, default: "Pending" }, // Default status
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceRequest", ServiceRequestSchema);
