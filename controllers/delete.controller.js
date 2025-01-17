const Questions = require("../models/questions.model.js");

const errorMessage500 = { Error: "Internal Server Error" };
const errorMessage404 = { Error: "Not Found" };
const successMessage200 = { Message: "Deleted Successfully" };
async function deleteQuestion(req, res) {
    try {
        const { id } = req.params;
        const numId = parseInt(id, 10);
        const findQuestion = await Questions.findOne({ question_id: numId });
        if (findQuestion) {
            await Questions.findByIdAndDelete(findQuestion._id);
            return res.status(200).json(successMessage200);
        } else {
            return res.status(404).json(errorMessage404);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(errorMessage500);
    }
}

module.exports = {
    deleteQuestion
}

// {
//     "_id": "678a233e422feb16e1cde35a",
//     "tags": [
//       "flutter",
//       "git"
//     ],
//     "owner": {
//       "account_id": "000000",
//       "user_id": "000000",
//       "username": "Anonymous"
//     },
//     "is_answered": false,
//     "view_count": 0,
//     "answer_count": 0,
//     "score": 0,
//     "creation_date": "1970-01-21T02:31:46.238Z",
//     "question_id": 79364016,
//     "content_license": "Unknown",
//     "link": "",
//     "title": "test Question",
//     "last_edit_date": 1737106238,
//     "__v": 0
//   }