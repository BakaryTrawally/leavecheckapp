const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const personnelLeaveUrl = require("./routes/leave");
// dotenv.config()
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/leaveApp", personnelLeaveUrl);
// app.use("/api/leaveApp", leaveUrl);
// app.use("/api/loginApp", loginUrl);
// app.use("/api/trainingApp", trainingUrl);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});