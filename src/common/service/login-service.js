import HttpRequest from '../../httpRequest'
import axios from 'axios'

class LoginService extends HttpRequest {

    doLogin(pathName, data) {
        if (this.getIsDebug()) {
            console.log("Path: ", pathName)
            console.log("Params: ", data)
        }
        axios.post(this.getBaseUrl() + pathName, data).then(res => {
            if (this.getIsDebug())
                console.log(res.data.data.token)
            localStorage.setItem('appToken', res.data.data.token)
        }).catch(err => {
            if (this.getIsDebug())
                console.log("err login : ", err)
        })
    }
}

export default LoginService