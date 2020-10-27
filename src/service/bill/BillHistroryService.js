import AxiosService from '../../common/service/axios-service'
const axios = new AxiosService();
export default{
    findGroup(){
        return axios.doGet('/api/bill-his/group')
    }
}