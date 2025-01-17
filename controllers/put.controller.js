const Questions = require("../models/questions.model.js");

const errorMessage500 = { Error: "Internal Server Error" };
const errorMessage404 = { Error: "Not Found" };
const successMessage200 = { Message: "Updated Successfully" };

async function putQuestions(req, res) {
    try {
        const { id } = req.params;
        const { tags, owner, is_answered, view_count, score, link, title, answer_count, content_license } = req.body;
        const numId = parseInt(id, 10);
        const findQuestion = await Questions.findOne({ question_id: numId });
        if (findQuestion) {
            if (tags) {
                findQuestion.tags = tags;
            }
            if (owner) {
                findQuestion.owner = owner;
            }
            if (is_answered !== undefined) {
                findQuestion.is_answered = is_answered;
            }
            if (view_count !== undefined) {
                findQuestion.view_count = view_count;
            }
            if (score !== undefined) {
                findQuestion.score = score;
            }
            if (link) {
                findQuestion.link = link;
            }
            if (title) {
                findQuestion.title = title;
            }
            if (answer_count) {
                findQuestion.answer_count = answer_count;
            }
            if (content_license) {
                findQuestion.content_license = content_license;
            }
            const updatedQuestion = await findQuestion.save();
            return res.status(200).json({ successMessage200, question: updatedQuestion })
        } else {
            return res.status(404).json(errorMessage404);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(errorMessage500);
    }
}


module.exports = {
    putQuestions
};