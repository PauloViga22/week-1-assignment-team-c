const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const { appendFile, readFile } = require("../utlils");
const data = [];
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
});

router.get("/create", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "create.html"));
});

router.get("/list", (req, res, next) => {
    fs.readFile("notes.txt", "utf-8", (err, data) => {
      let notes = [];
      if (!err) {
        try {
          notes = JSON.parse(data);
          // console.log("what is this oneeeeeeee", notes);
        } catch (e) {
          fs.writeFileSync("notes.txt", []);
          notes = [];
        }
      }
      data = notes
      res.render('list', {
        notes: data
      });
    });
  });

router.post('/note', (req, res, next) => {
    let myNewEntry = {
      name: req.body.name,
      content: req.body.body,
      published: new Date(),
      upvotes: 0,
      downvotes: 0
    };
    console.log("old data", data)
    data.push(myNewEntry);
    console.log("new data", data)
    fs.writeFile('notes.txt', JSON.stringify(data), () => {
      res.status(302);
      res.redirect('/');
    });
  });


module.exports = router;
