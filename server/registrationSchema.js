const { Schema, model } = require("mongoose");

const registrationSchema = new Schema(
    {
        aadhar: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Registration= model("blog", registrationSchema);

module.exports = Registration;
