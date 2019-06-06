/* var express = require('express');
var router = express.Router(); */

import register from './register'


export default app => {
    app.use('/api/register', register);
}