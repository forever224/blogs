/**
 * 公众号文章
 */
import ArticleApi from '../../api/article.api';

const state = {
    categoryInfo:{
        title: '',
        //分类短标题
        shortTitle: '',
        //分类描述
        desc: '',
        //上级分类
        pId: '',
        //缩列图
        thumb: '',
        //seo标题
        seoTitle: '',
        //seo描述
        seoDesc: '',
        //seo关键词
        seoKeyword: ''
    }
};

const getters = {

};

const mutations = {
    setCategoryInfo(state, data) {
        state.categoryInfo[data.key] = data.value;
    },
    /**
     * 初始化分类信息
     * @param state
     */
    resetCategoryInfo(state){
        Object.keys(state.categoryInfo).forEach(key => {
            state.categoryInfo[key] = '';
        })
    }
};

const actions = {
    createArticleCategory({ commit },params){
        return ArticleApi.createArticleCategory(params);
    },
    getArticleCategory({ commit },params){
        return ArticleApi.getArticleCategory(params);
    },
    delArticleCategory({ commit },params){
        return ArticleApi.delArticleCategory(params);
    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
