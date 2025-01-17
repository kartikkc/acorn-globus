const Questions = require("../models/questions.model");

const errorMessage404 = { "Error": "Not Found" }
const errorMessage500 = { "Error": "Internal Server Error" }
async function getQuestionID(req, res) {
    try {
        const { id } = req.params;
        const numId = parseInt(id, 10);
        const findQuestion = await Questions.find({ question_id: numId });
        if (findQuestion) {
            return res.status(200).json(findQuestion);
        }
        else {
            return res.status(404).json(errorMessage404);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(errorMessage500);
    }
}

async function getQuestionsWithFilerting(req, res) {
    try {
        const { is_answered, tags, answers_count_gt, answers_count_lt, sort, page = 1, limit = 10 } = req.query;
        const queries = {};
        if (is_answered !== undefined) {
            queries.is_answered = is_answered === "true";
        }
        if (tags) {
            queries.tags = { $all: tags.split(",") };
        }
        if (answers_count_gt !== undefined) {
            queries.answer_count = { ...(queries.answer_count || {}), $gt: parseInt(answers_count_gt) };
        }
        if (answers_count_lt !== undefined) {
            queries.answer_count = { ...(queries.answer_count || {}), $lt: parseInt(answers_count_lt) };
        }
        const sortOptions = {};
        if (sort === "score") {
            sortOptions.score = -1;
        } else if (sort === "created_at") {
            sortOptions.creation_date = -1;
        }

        const offset = (parseInt(page) - 1) * parseInt(limit);
        const questions = await Questions.find(queries).sort(sortOptions).skip(offset).limit(parseInt(limit));

        return res.status(200).json(questions);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(errorMessage500);
    }

}
module.exports = {
    getQuestionID,
    getQuestionsWithFilerting
};