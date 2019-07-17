<template>
    <div class="config">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="主导航管理" name="first">
                <NavManager></NavManager>
            </el-tab-pane>
            <el-tab-pane label="首页SEO设置" name="second">
                <IndexSeo></IndexSeo>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import NavManager from './components/NavManager'
    import IndexSeo from './components/IndexSeo'
    export default {
        components:{
            NavManager, IndexSeo
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
