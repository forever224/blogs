<template>
    <div class="tab-nav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <base-info></base-info>
            </el-tab-pane>
            <el-tab-pane label="SEO搜索引擎设置" name="second">
                <seo-info></seo-info>
            </el-tab-pane>
            <el-tab-pane label="其他属性" name="third">
                <other-info></other-info>
            </el-tab-pane>
        </el-tabs>
        <div class="tab-btn">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </div>
    </div>

</template>
<script type="text/javascript">
    import baseInfo from './components/article/BaseInfo'
    import OtherInfo from './components/article/OtherInfo'
    import SeoInfo from './components/article/SeoInfo'
    export default {
        components:{
            baseInfo,
            OtherInfo,
            SeoInfo
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        created() {

        }
    }
</script>
<style lang="scss">

</style>
