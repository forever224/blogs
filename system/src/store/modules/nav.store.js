/**
 * 管理员
 */
import api from '../../api/nav.api';

const state = {

};

const getters = {};

const mutations = {

};

const actions = {
    getList({ commit },params){
        return api.getList(params).then(res => {
            return res;
        })
    },
    addNav({ commit },params){
        return api.addNav(params).then(res => {
            return res;
        })
    },
    deleteNav({ commit },params){
        return api.deleteNav(params).then(res => {
            return res;
        })
    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};