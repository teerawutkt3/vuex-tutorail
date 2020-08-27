import HttpRequest from '../../httpRequest'
import axios from 'axios'
import swal from 'sweetalert'
import router from '../../router/index'
class LoginService extends HttpRequest {

    doLogin(pathName, data) {       
        axios.post(this.getBaseUrl() + pathName, data).then(res => {                  
            localStorage.setItem('appToken', res.data.data.token)
            this.getProfile().then(()=>{
                router.push({path: '/'})
            })
        }).catch(() => {

            swal('Login: Error!' , 'Check Username and Password', 'warning')           
        })
    }
    getProfile() {
        return new Promise((resolve) => {
            this.get("/api/user/profile",{}).then(res => {                            
                resolve(res.data)
            }).catch(() => {
                localStorage.removeItem("appToken")
                router.push({path: '/auth'})                
            })
        })

     }
}

export default LoginService