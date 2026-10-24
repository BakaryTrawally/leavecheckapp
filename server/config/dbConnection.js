const mongoose = require("mongoose");

// personnel db
const connectPersonnelLeaveDB = mongoose.createConnection(
    process.env.leave_connection
    // { useNewUrlParser: true, useUnifiedTopology: true }
);


connectPersonnelLeaveDB.on("connected", () =>
    console.log("Personnel DB connected")
);


module.exports = {
    connectPersonnelLeaveDB
};