const express = require("express");
const passport = require("passport");

const router = express.Router();

// Google OAuth Login Route
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"], // Ensure correct scope
    })
);

// Google OAuth Callback Route
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        // Redirect to frontend (React, Vue, etc.)
        res.redirect("http://localhost:5173/"); // Change to your frontend URL
    }
);


// Logout Route
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.send("Logged out");
    });
});

module.exports = router;
