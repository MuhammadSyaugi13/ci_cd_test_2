var express = require("express");
var app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    return res.send("Test API V2 ya gi oke hahahah 2");
});

app.listen(PORT, ()=> {
    console.log("Listening on port: " + PORT);
});