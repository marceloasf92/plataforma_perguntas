import Sequelize from "sequelize";

const connection = new Sequelize(
    "question_platform",
    "root",
    "0895",
    {
        host: "localhost",
        dialect: "mysql",
    }
);

export default connection
