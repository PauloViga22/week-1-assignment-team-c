const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const data = [{
  "name": "das",
  "content": "das",
  "published": "2020-01-09T23:59:05.924Z",
  // "likes": 0,
  "upvotes": 0,
  "downvotes": 0
}];

let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get('/create', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views', 'create.html'));
});

router.get("/list", (req, res, next) => {
  fs.readFile("notes.txt", "utf-8", (err, data) => {
    let notes = [];
    if (!err) {
      try {
        notes = JSON.parse(data);
        console.log("what is this oneeeeeeee", notes);
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

// router.get('/list', (req, res, next) => {
//   res.render('list', {
//     notes: data
//   });
// });

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


// let content;

// function tst() {
//   fs.readFileSync(path.join(__dirname, "../notes.txt"), 'utf-8', (err, data) => {
//     if (err) {
//       throw err
//     }
//     content = JSON.stringify(data)
//   });
// }
// tst()

router.post('/like', (req, res, next) => {
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

  });

})


/*
  BTN LIKES

  I SHOULD GET 


*/
module.exports = router;