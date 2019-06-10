import api from '../api'

export default {
    async getNavList(context) {
        let value = await api.getJson();
        console.log(value);

    }
}