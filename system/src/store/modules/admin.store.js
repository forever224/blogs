/**
 * 管理员
 */
import AdministratorApi from '../../api/admin.api';

const state = {

};

const getters = {};

const mutations = {

};

const actions = {
    login({ commit },params){
        return AdministratorApi.login(params).then(res => {
            return res;
        })
    },
    register({ commit },params){
        return AdministratorApi.register(params).then(res => {
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
