const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session"); // ✅ Added for session support
require("dotenv").config();
require("./config/passport"); // ✅ Import passport configuration

const userRoutes = require("./routes/userRoutes");
const serviceRequestRoutes = require("./routes/serviceRequestRoutes");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Configure session middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET || "your-secret-key", // ⚠️ Use a secure secret in production
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Set `secure: true` if using HTTPS
    })
);

// ✅ Initialize Passport.js with session support
app.use(passport.initialize());
app.use(passport.session()); 

// ✅ Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas!"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit process on database connection failure
  });

// ✅ Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", userRoutes);
app.use("/requests", serviceRequestRoutes);

app.get("/", (req, res) => {
  res.send("Customer Service API is Running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
