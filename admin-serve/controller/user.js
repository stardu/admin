import userModel from '../models/user'

class User {
    async register(req, res, next) {
        console.log()
        let user_name = req.body.user_name;
        let user_paw = req.body.user_paw;
        try {
            let userInfo = {
                user_name,
                user_paw,
                create_time: Date.now()
            }
            await userModel.create(userInfo)
            res.json({
                code: '200',
                msg: '注册成功',
                data: []
            })
        } catch (err) {
            console.log(err)
        }

    }
}

export default new User();