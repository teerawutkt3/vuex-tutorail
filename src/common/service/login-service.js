import HttpRequest from '../../httpRequest'
import axios from 'axios'
import swal from 'sweetalert'
import router from '../../router/index'
import AxiosService from './axios-service'
const axiosService = new AxiosService()
class LoginService extends HttpRequest {

    doLogin(pathName, data) {
        if (this.getIsDebug()) {
            console.log("Path: ", pathName)
            console.log("Params: ", data)
        }
        axios.post(this.getBaseUrl() + pathName, data).then(res => {
            if (this.getIsDebug())
                console.log("doLogin : ", res.data.data.token)
            localStorage.setItem('appToken', res.data.data.token)
            this.getProfile()
        }).catch(err => {
            swal('Login fail' , '', 'error')
            if (this.getIsDebug())
                console.log("err login : ", err)
        })
    }
    getProfile() {
        axiosService.doGet("/api/user/profile").then(res => {
            router.push({path: '/'})
            console.log("res: ", res)
        }).catch(err => {
            console.log("errd: ", err)
            console.log("errd: can't get profile!")
        })
     }
}

export default LoginService