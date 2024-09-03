//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is hailvishesh

import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

//middle ware
app.use(bodyParser.urlencoded({ extended: true }));

//custome middleware func

function pass(req, res, next) {
    let word = req.body.password;

    // console.log(word + "ok");
    if (word == "vishesh") {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }

    next();
}

app.use(pass);

app.listen(port, () => {
    console.log(`listening on  port ${port}`);
})

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html");
})

// middle ware to catch response 
app.post("/check", (req, res) => {
    // console.log(req.body);
})


