<template>
    <div class="left-nav">
        <el-menu :default-active="defaultActive" :router="true" class="left-nav-menu" background-color="#304156" text-color="#bfcbd9" active-text-color="#f4f4f5" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <template v-for="menu in menus" :index="menu.path">
                <el-menu-item :index="menu.path" v-if="!menu.children">
                    <i :class="menu.icon"></i>
                    <span>{{menu.name}}</span>
                </el-menu-item>
                <el-submenu :index="menu.path" v-if="menu.children">
                    <template slot="title">
                        <i :class="menu.icon"></i>
                        <span>{{menu.name}}</span>
                    </template>
                    <el-menu-item :index="child.path" v-for="child of menu.children" :key="child.path">
                        <i :class="child.icon"></i>
                        <span>{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
    import menus from './menus'
    export default {
        props:['isCollapse'],
        data() {
            return {
                menus,
                defaultActive:'/home'
            };
        },
        created(){
            this.defaultActive = this.$route.path;
        },
        watch:{
            $route(){
                this.defaultActive = this.$route.path;
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style lang="scss">
    .left-nav{
         float:left;
         background: #304156;
         height:100vh;
         position: relative;
        .el-menu{border:0;}
     }
    .left-nav-menu:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
    }
    /*.el-menu-item.is-active{background: rgb(38,52,69) !important;}*/
</style>
