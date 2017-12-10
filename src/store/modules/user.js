import {user} from "@/services"
import axios from "axios"
export default{
    state:{
        userData:{},
    },
    actions:{
        getUserData(context,params={}){
            //获取数据
            const {pageSize,pageNum}=params
            user.getUserData({pageSize,pageNum}).then(res=>{
                console.log(res.data);
                context.commit("USER_DATA",{userData:res.data});
            })
        },
        addUser(context,...params){
            console.log(context,...params);
            user.addUser(...params).then(res=>{
                console.log(res.data);
            })
        }
    },
    mutations:{
        USER_DATA(state,{userData}){
            state.userData=userData
        }
    },
    getters:{
        userData:state=>state.userData.userData,
        count:state=>state.userData.count
    }
}