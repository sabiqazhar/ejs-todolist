const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

let items = [];

app.get("/", (req, res)=>{
    let today = new Date();
    let currentDay = today.getDay();

    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    let day = today.toLocaleString("en-US", option);

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", (req, res)=>{
    let item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log("server has running at port 3000");
});