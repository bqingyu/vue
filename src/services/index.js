import fetchData from './fetch-data'
var user={
    getUserData(params){
        return fetchData.get("users/",params);
    },
    addUser(params){
        return fetchData.get("users/addUser",params)
    }
}
//提供各种各样数据交换的接口
export {user}