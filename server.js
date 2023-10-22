const express = require("express");

const routes = require("./router/routes");

const app = express();


app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/", routes);
app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log(`Сервер начинает прослушивать порт 3000!`)
});