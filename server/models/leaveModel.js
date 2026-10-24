const mongoose = require('mongoose')

const { connectPersonnelLeaveDB } = require("../config/dbConnection");

const leaveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ops: {
        type: Number,
        required: true
    },
    proceedingDate: {
        type: String,
        required: true

    },
    resumingDate: {
        type: String,
        required: true

    },
    workingDays: {
        type: Number,
        required: true

    },
})

const itemModel = connectPersonnelLeaveDB.model("leaveData", leaveSchema)
module.exports = itemModel