import HttpRequest from '../../httpRequest'


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
                    reject("401")
                } else {
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
                    reject("401")
                } else {
                    reject(err)
                }
            })
        })
    }

    doDelete(path){
        if (this.getIsDebug()) {
            console.log("Path: ", this.getBaseUrl() + path)
        }
        return new Promise((resolve, reject) => {
            this.delete(path).then(res => {
                resolve(res.data)
            }).catch(err => {
                if (err.response.status === 401) {
                    reject("401")
                } else {
                    reject(err)
                }
            })
        })
    }

}

export default AxiosService