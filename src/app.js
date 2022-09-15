import express from "express";
import bodyParser from "body-parser";
import connection from "./database/db"
import questionsRouter from "./routes/questions.routes";
import _ from "./database/Question"
import _ from "./database/Answer"

connection.authenticate().then(() => {
  console.log("Conexão feita com o banco de dados.");
}).catch((msgError) => { console.log(msgError); })

const app = express();

app.use(express.json());

// renderizador de html
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 3000;

app.use("/", questionsRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
