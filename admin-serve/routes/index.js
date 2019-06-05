/* var express = require('express');
var router = express.Router(); */

import login from './login'


export default app => {
   app.use('/login',login); 
}
