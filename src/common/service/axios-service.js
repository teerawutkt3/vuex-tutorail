import HttpRequest from '../../httpRequest'

class AxiosService extends HttpRequest {

    doGet(path, data) {
        if (this.getIsDebug()) {
            console.log("Path: ", this.getBaseUrl() + path)
            console.log("Params: ", data)
        }
        return new Promise((resolve, reject) => {
            this.get(path, data).then(res => {
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

}

export default AxiosService