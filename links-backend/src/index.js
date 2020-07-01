const express = require('express');

const authController = require('./controllers/auth');

const app = express();

// /auth/sign-in
// /auth/sign-out

app.use('/auth', authController);

app.get('/', (req, res)=>{
    return res.json('Api running...')
});

app.listen(3001, ()=>{
    console.log('listening on port 3001');
});