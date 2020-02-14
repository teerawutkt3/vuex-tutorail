import HttpRequest from '../../httpRequest'
import swal from 'sweetalert'
const message401 = {
    title: '401',
    description: 'unauthenticated',
    icon: 'error'
}
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
        if (this.getIsDebug()) {
            console.log("Path: ", this.getBaseUrl() + path)
        }
        return new Promise((resolve, reject) => {
            this.get(path, {}).then(res => {
                resolve(res.data)
            }).catch(err => {
                if (err.response.status === 401) {
                    swal(message401.title, message401.description, message401.icon)
                    reject("401")
                } else if (err.response.status === 405) {
                    swal(message405.title, message405.description, message405.icon)
                    reject("405")
                } else {
                    swal(messageError.title, '' + err, messageError.icon)
                    reject(err)
                }
            })
        })
    }

    doPost(path, data) {
        if (this.getIsDebug()) {
            console.log("Path: ", this.getBaseUrl() + path)
            console.log("Params: ", data)
        }
        return new Promise((resolve, reject) => {
            this.post(path, data).then(res => {
                resolve(res.data)
            }).catch(err => {
                if (err.response.status === 401) {
                    swal(message401.title, message401.description, message401.icon)
                    reject("401")
                } else if (err.response.status === 405) {
                    swal(message405.title, message405.description, message405.icon)
                    reject("405")
                } else {
                    swal(messageError.title, '' + err, messageError.icon)
                    reject(err)
                }
            })
        })
    }

    doDelete(path) {
        if (this.getIsDebug()) {
            console.log("Path: ", this.getBaseUrl() + path)
        }
        return new Promise((resolve, reject) => {
            this.delete(path).then(res => {
                resolve(res.data)
            }).catch(err => {
                if (err.response.status === 401) {
                    swal(message401.title, message401.description, message401.icon)
                    reject("401")
                } else if (err.response.status === 405) {
                    swal(message405.title, message405.description, message405.icon)
                    reject("405")
                } else {
                    swal(messageError.title, '' + err, messageError.icon)
                    reject(err)
                }
            })
        })
    }

}

export default AxiosService