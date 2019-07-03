import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import article from './modules/article'
import administrator from './modules/administrator'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        article,
        administrator
    },
    state,
    getters,
    mutations,
    actions
})