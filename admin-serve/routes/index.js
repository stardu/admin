var express = require('express');
var router = express.Router();

import user from './users'


export default app => {
   app.use('/user',user); 
}
