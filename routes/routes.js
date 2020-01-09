const express = require('express');
const fs = require('fs');
const router = express.Router();
const data = [];

router.get('/', (req,res,next) => {
    res.send('index', {notes: data});
    console.log(data);
});

router.get('/create', (req,res,next) => {
    res.send('create');
});

router.get('/list', (req,res,next) => {
    res.render('list');
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