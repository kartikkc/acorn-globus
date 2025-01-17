const { Schema, Model, model, default: mongoose } = require("mongoose");

const questionsSchema = new Schema(
    {
        tags: {
            type: [String],
            required: true,
        },
        owner: {
            type: Object,
            required: true,
        },
        is_answered: {
            type: Boolean,
            required: true,
            default: false,
        },
        view_count: {
            type: Number,
        },
        answer_count: {
            type: Number,
            default: 0,
        },
        score: {
            type: Number,
            default: 0,
        },
        last_activity_date: {
            type: Number,
        },
        creation_date: {
            type: Date,
            required: true,
            default: () => Math.floor(Date.now() / 1000),
        },
        last_edit_date: {
            type: Number,
            default: () => Math.floor(Date.now() / 1000),
        },
        question_id: {
            type: Number,
            unique: true,
            required: true,
        },
        content_license: {
            type: String,
        },
        link: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
    }
)

module.exports = mongoose.model('Questions', questionsSchema);