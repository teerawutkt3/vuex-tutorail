import HttpRequest from '../../httpRequest'
import swal from 'sweetalert'
import router from '../../router/index'

// const message401 = {
//     title: '401',
//     description: 'Unauthorized',
//     icon: 'error'
// }
const message405 = {
    title: '405',
    description: 'Method not allowed',
    icon: 'error'
}
const messageError = {
    title: 'Error',
    description: '',
    icon: 'error'
}

class AxiosService extends HttpRequest {
    STATUS = {
        SUCCESS: 'SUCCESS',
        FAIL: 'FAIL'
    }

    doGet(path) {        
        return new Promise((resolve, reject) => {
            this.get(path, {}).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    doPost(path, data) {        
        return new Promise((resolve, reject) => {
            this.post(path, data).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    doPut(path, data){       
        return new Promise((resolve, reject) => {
            this.put(path, data).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    doDelete(path) {        
        return new Promise((resolve, reject) => {
            this.delete(path).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {                    
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    handleErrProcess(err) {
        swal(messageError.title, err.message + err, messageError.icon)
    }

    handleErr(err, reject) {
        if (err.response.status === 401) {            
            // swal({
            //     title: `Session timeout ${message401.title}`,
            //     text: "login agin ",
            //     icon: "warning",
            //     buttons: true,
            //     dangerMode: true
            // }).then(willDelete => {
            //     if (willDelete) {
            //         router.push({ path: 'auth' })
            //     }
            // });
            router.push({path: '/auth'})
            //swal(message401.title, message401.description, message401.icon)
            reject("401")
        } else if (err.response.status === 405) {
            swal(message405.title, message405.description, message405.icon)
            reject("405")
        } else {
            swal(messageError.title, '' + err, messageError.icon)
            reject(err)
        }
    }

    processErr(msg) {
        swal('Process error', msg, 'error')
    }

}

export default AxiosService