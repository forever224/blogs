<template>
    <div class="tab-nav">
        <el-tabs v-model="activeName">
            <el-tab-pane label="基本信息" name="first">
                <base-info></base-info>
            </el-tab-pane>
            <el-tab-pane label="SEO搜索引擎设置" name="second">
                <seo-info></seo-info>
            </el-tab-pane>
            <!--<el-tab-pane label="其他属性" name="third">-->
                <!--<other-info></other-info>-->
            <!--</el-tab-pane>-->
        </el-tabs>
        <div class="tab-btn" style="padding-left:80px;">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </div>
    </div>

</template>
<script type="text/javascript">
    import baseInfo from './components/category/BaseInfo'
    import OtherInfo from './components/category/OtherInfo'
    import SeoInfo from './components/category/SeoInfo'
    import { mapState, mapActions } from 'vuex'
    export default {
        components:{
            baseInfo,
            OtherInfo,
            SeoInfo
        },
        data() {
            return {
                activeName: 'first',
                data:{
                    seoTitle: '111',
                    seoDesc: '',
                    seoKeyword: ''
                }
            }
        },
        computed:{
            ...mapState('article', ['categoryInfo'])
        },
        methods: {
            ...mapActions('article', ['createArticleCategory']),
            onSubmit() {
                this.createArticleCategory(this.categoryInfo);
                console.log('submit!',this.categoryInfo);
            }
        },
        created() {

        }
    }
</script>
<style lang="scss">

</style>
