import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import admin from './modules/admin'
import nav from './modules/nav'
import blog from './modules/blog'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        admin,
        nav,
        blog
    },
    state,
    getters,
    mutations,
    actions
})