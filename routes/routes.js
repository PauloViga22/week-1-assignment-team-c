const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const data = [];

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get('/create', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'create.html'));
});

router.get('/list', (req,res,next) => {
    res.render('list', {notes: data});
});

router.post('/note', (req,res,next) =>{

    let myNewEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    };

    data.push(myNewEntry);

    fs.writeFile('notes.txt', JSON.stringify(data), () =>{
        res.status(302);
        res.redirect('/');
    });

    
    // res.status(302);
    // res.redirect('/');
});

module.exports = router;