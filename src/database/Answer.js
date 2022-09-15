import Sequelize from "sequelize";
import Connection from "./db";

const Answer = Connection.define("answers", {
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  question_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Answer.sync({ force: false }).then(() => {});

export default Answer;
