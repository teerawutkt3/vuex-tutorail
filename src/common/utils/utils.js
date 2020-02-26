
export default  class Utils    {
    isNotBlank(value) {
        if(Array.isArray(value))
            return value.length != 0
        return value != undefined && value != '' && value != null
    }
    isBlank(value){
        return !this.isNotBlank(value)
    }
}