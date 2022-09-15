import { Router } from "express";
import questionModel from "../database/Question";
import answerModel from "../database/Answer";

const router = Router();

router.get("/", (req, res) => {
  questionModel
    .findAll({ raw: true, order: [["id", "DESC"]] })
    .then((questions) => {
      res.render("index", {
        questions: questions,
      });
    });
});

router.get("/questions", (req, res) => {
  res.render("question");
});

router.post("/questions/save", (req, res) => {
  const { title, description } = req.body;
  if (title != "" && description != "") {
    questionModel
      .create({
        title: title,
        description: description,
      })
      .then(() => {
        res.redirect("/");
      });
  } else {
    res.redirect("/questions");
  }
});

router.get("/question/:id", (req, res) => {
  let id = req.params.id;
  questionModel
    .findOne({
      where: { id: id },
    })
    .then((question) => {
      if (question != undefined) {
        answerModel
          .findAll({
            raw: true, 
            order: [["id", "DESC"]], 
            where: { question_id: question.id },
          })
          .then((answers) => {
            res.render("singleQuestion", {
              question: question,
              answers: answers
            });
          });
      } else {
        res.redirect("/");
      }
    });
});

router.post("/answer", (req, res) => {
  let { body_answer, question } = req.body;
  answerModel
    .create({
      body: body_answer,
      question_id: question,
    })
    .then(() => {
      res.redirect(`/question/${question}`);
    });
});

export default router;
