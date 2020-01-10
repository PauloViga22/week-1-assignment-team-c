const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const data = [{
  "name": "das",
  "content": "das",
  "published": "2020-01-09T23:59:05.924Z",
  "upvotes": 0,
  "downvotes": 0
}];

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get('/create', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views', 'create.html'));
});

router.get('/list', (req, res, next) => {
  res.render('list', {
    notes: data
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

  data.push(myNewEntry);

  fs.writeFile('notes.txt', JSON.stringify(data), () => {
    res.status(302);
    res.redirect('/');
  });


  // res.status(302);
  // res.redirect('/');
});

let content
let tst = () => {
  fs.readFile(path.join(__dirname, "../notes.txt"), 'utf-8', (err, data) => {
    if (err) {
      throw err
    }
    content = JSON.stringify(data)
    console.log("test", content)
    console.log(data)
  });
}

tst()

module.exports = router;