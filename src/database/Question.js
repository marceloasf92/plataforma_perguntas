import Sequelize from "sequelize";
import Connection from "./db";

const Question = Connection.define("questions", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({ force: false }).then(()=>{})

export default Question