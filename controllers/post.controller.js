// Importing Packages
const Questions = require("../models/questions.model");
const axios = require("axios");


// Message Objects
const errorMessage404 = { Error: "Not added" };
const errorMessage400 = { Error: "Required Fields missing" };
const errorMessage500 = { Error: "Internal Server Error" };
const successMessage201 = { Success: "Questions Loaded Successfully" };

// Controller Functions
async function loadQuestions(req, res) {
    try {
        const response = await axios.get("https://api.stackexchange.com/2.3/questions", {
            params: {
                order: 'desc',
                sort: 'activity',
                site: 'stackoverflow',
            }
        });
        const questions = response.data.items.map((item) => ({
            tags: item.tags,
            owner: item.owner,
            is_answered: item.is_answered,
            view_count: item.view_count,
            answer_count: item.answer_count,
            score: item.score,
            last_activity_date: item.last_activity_date,
            creation_date: item.creation_date,
            last_edit_date: item.last_edit_date || null,
            question_id: item.question_id,
            content_license: item.content_license,
            link: item.link,
            title: item.title,
        }));
        await Questions.insertMany(questions, { ordered: false });
        return res.status(201).json(successMessage201);
        // return res.json(response.data);
    } catch (error) {
        return res.status(500).json(errorMessage500);
    }
};

async function createQuestion(req, res) {
    try {
        const { tags, owner, is_answered, view_count, answer_count, score, last_activity_date, creation_date, question_id, content_license, link, title } = req.body;
        if (!tags || !owner || !question_id || !title) {
            return res.status(400).json(errorMessage400);
        }
        const newQuestion = new Questions({
            tags: tags,
            owner: owner || { "account_id": "000000", "user_id": "000000", username: "Anonymous" },
            is_answered: is_answered,
            view_count: view_count || 0,
            answer_count: answer_count || 0,
            score: score || 0,
            last_activity_date: last_activity_date,
            creation_date: creation_date,
            question_id: question_id,
            content_license: content_license || "Unknown",
            link: link || "",
            title: title
        })
        await newQuestion.save();
        res.status(201).json(successMessage201);
    } catch (error) {
        console.error(error);
        return res.status(500).json(errorMessage500);
    }
}

module.exports = {
    loadQuestions,
    createQuestion
}