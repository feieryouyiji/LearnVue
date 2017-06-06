import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 数据
var state = {
    count: 10
}
//处理数据的变化
const mutations = {
    add(state){
        state.count++;
    }
}
//处理数据的动作
const actions = {
    //{commit,state}
    add:function({commit}){
        commit('add')
    }
}

//获取数据
const getters = {
    count(state){
        return state.count;
    }
}

export default new Vuex.Store({
    actions,
    state,
    mutations,
    getters

})