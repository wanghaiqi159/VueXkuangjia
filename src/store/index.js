import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData:0,
    ListGetData:"这是模拟准备请求，三秒以后会出现数据",
  },
  mutations: {
    // 增加
    Add (state) {
      state.listData ++
      console.log(state.listData);
    },
    reduce (state){
      state.listData --
      console.log(state.listData);
    },
    ListGetCommit(state,data){
      state.ListGetData = data
    }
  },
  actions: {
    ListGET(){
      console.log("这是页面请求，需要第一时间来触发这种东西")
      setTimeout(()=>{
        this.commit("ListGetCommit","这是模拟请求过来的数据")
      },1000)
      
    }
  },
  modules: {
  
  }
})
