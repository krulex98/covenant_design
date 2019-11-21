'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const port = 5000;
const app = express();

const staticPath = path.resolve(__dirname, '..', '.');
app.use("/", express.static(staticPath));

app.use(morgan('dev'));
app.use(express.json());

const router = express.Router();
const routes = [
    {name: '/', file: 'index.html'},
    {name: '/main', file: './src/main/main.html'},
    {name: '/login', file: './src/login/login.html'},
    {name: '/signup', file: './src/signup/signup.html'},
    {name: '/profile', file: './src/profile/profile.html'}
];

routes.forEach(route => {
   router.get(route.name, (req, res) => {
       res.sendFile(path.resolve(staticPath, route.file));
   })
});

app.use('/', router);
app.listen(port, () => console.log(`server listen on port ${port}`));