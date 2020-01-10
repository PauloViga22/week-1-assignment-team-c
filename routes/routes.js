const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const { appendFile, readFile } = require("../utlils");
const data = [
  // {
  //   name: "das",
  //   content: "das",
  //   published: "2020-01-09T23:59:05.924Z",
  //   upvotes: 0,
  //   downvotes: 0
  // }
];
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

router.get("/list", async (req, res, next) => {
  let rowFileData = "";
  fs.readFile("notes.txt", "utf8", async (err, data) => {
    //エラーの場合はエラーを投げてくれる
    if (err) {
      throw err;
    }
    rowFileData = data;
    if (rowFileData.slice(0, 1) === ".") {
      const arrData = rowFileData.slice(1).split(".");
      // const arrData = fileData.split(".");
      if (!arrData.length) {
        res.render("list", { notes: [] });
      } else {
        res.render("list", {
          notes: arrData
        });
      }
    }
  });
});

router.post("/note", (req, res, next) => {
  let myNewEntry = {
    name: req.body.name,
    content: req.body.body,
    published: new Date(),
    upvotes: 0,
    downvotes: 0
  };

  // data.push(myNewEntry);

  appendFile("notes.txt", `.${JSON.stringify(myNewEntry)}`);

  // fs.writeFile("notes.txt", JSON.stringify(data), () => {
  //   res.status(302);
  //   res.redirect("/");
  // });

  res.status(302);
  res.redirect("/");
});

module.exports = router;
