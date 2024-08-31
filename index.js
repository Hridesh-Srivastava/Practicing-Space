import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public/"));

app.get('/' , (_ , res) => {
    res.render("index.ejs");
});

app.post("/submit" , (req  , res) => {
    const lengthTotal = req.body["first"].length + req.body["last"].length;

    res.render("index.ejs" , {
        key1 : lengthTotal,
    });
});

app.listen(port , () => {
    console.log(`listening on port ${port}`);
});