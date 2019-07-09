<template>
    <div class="config">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="主导航管理" name="first">
                <NavManager></NavManager>
            </el-tab-pane>
            <el-tab-pane label="全局配置" name="second">全局配置</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import NavManager from './components/NavManager'
    export default {
        components:{
            NavManager
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