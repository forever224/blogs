import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import admin from './modules/admin.store'
import nav from './modules/nav.store'
import blog from './modules/blog.store'
import config from './modules/config.store'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        admin,
        nav,
        blog,
        config
    },
    state,
    getters,
    mutations,
    actions
})
