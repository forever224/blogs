<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <span v-if="index==levelList.length-1" class="no-redirect">{{ item.title }}</span>
                <a v-else @click.prevent="handleLink(item)">{{ item.title }}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>
<script>
    import menus from '../leftnav/menus'
    export default {
        data() {
            return {
                levelBase:[{
                    path:'/',
                    title:'后台首页'
                }],
                levelList:[],
                menus
            }
        },
        created(){
            this.init();
        },
        watch: {
            $route() {
                this.init()
            }
        },
        methods:{
            init(){
                console.log(this.$route);
                this.levelList = [...this.levelBase];
            },
            handleLink(){

            }
        }
    }
</script>
<style lang="scss">
    .no-redirect{ color: #97a8be; cursor: text;}
</style>
