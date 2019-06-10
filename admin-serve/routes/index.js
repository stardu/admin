/* var express = require('express');
var router = express.Router(); */

import register from './register'
import login from './login'
import loginOut from './loginOut'
import test from './test'


export default app => {
    app.use('/api/register', register);
    app.use('/api/login', login);
    app.use('/api/loginOut', loginOut);

    app.use((req, res, next) => {
        console.log(req.session)
        if (req.session.userName) {
            next();
        } else {
            res.json({
                err_code: 302,
                err_msg: 'session过期',
            })
        }
    })

    app.use('/api/test', test);
}