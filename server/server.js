'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const port = 5000;
const app = express();

const staticPath = path.resolve(__dirname, '..', 'src/');
app.use("/", express.static(staticPath));

app.use(morgan('dev'));
app.use(express.json());

const router = express.Router();
router.get('/', (req, res) => {
    res.sendFile(path.resolve(staticPath, 'index.html'));
});
router.get('/main', (req, res) => {
    res.sendFile(path.resolve(staticPath, './main/main.html'));
});


app.use('/', router);
app.listen(port, () => console.log(`server listen on port ${port}`));