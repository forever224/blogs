/**
 * 博客文章
 */
import api from '../../api/blog.api';

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
    getItem({ commit },params){
        return api.getItem(params).then(res => {
            return res;
        })
    },
    addBlog({ commit },params){
        return api.addBlog(params).then(res => {
            return res;
        })
    },
    deleteBlog({ commit },params){
        return api.deleteBlog(params).then(res => {
            return res;
        })
    },
    getTags({ commit },params){
        return api.getTags(params).then(res => {
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