export default {
    /* 
     *
     *GET请求封装
     *
     */
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                url,
                paramas: param,
                method: 'get',
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
            })
        })
    },
    /* 
     *
     *POST请求封装
     *
     */
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                url,
                data: param,
                method: 'post',
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
            })
        })
    }
}