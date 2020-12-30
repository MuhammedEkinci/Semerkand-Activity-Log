const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    branch: {
        type: String,
        required: true
    },
    activityCode: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    speaker: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    ageGroup: {
        type: String,
        required: false
    },
    numParticipants: {
        type: String,
        required: false
    },
    hatmeType: {
        type: String,
        required: false
    }

});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;