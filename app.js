const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

const items = [];
const workItem =[];

app.get("/", (req, res)=>{
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req, res)=>{
    console.log(req.body);

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItem.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Working list", newListItems: workItem})
});

app.post("/work", (req, res)=>{
    let item = req.body.newItem;
    workItem.push(item);
    res.redirect("/work");
});

app.get("/about", (req,res)=>{
    res.render("about")
});

app.listen(3000, ()=>{
    console.log("server has running at port 3000");
});