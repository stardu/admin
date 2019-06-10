import req from '../htpp'


export default {
    /* 
     *
     *获取本地JSON
     *
     */
    getJson() {
        /* return req.post('/api/sendSms', {
            phone_number: '18408285064'
        }); */
        return req.post('http://pink-admin.limei.com/api/sendSms', {
            phone_number: '18408285064'
        });
    }
}