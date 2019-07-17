/**
 * 博客文章
 */
import api from '../../api/config.api';

const state = {

};

const getters = {};

const mutations = {

};

const actions = {
    getByKey({ commit },params){
        return api.getByKey(params).then(res => {
            return res;
        })
    },
    updateOne({ commit },params){
        return api.updateOne(params).then(res => {
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
