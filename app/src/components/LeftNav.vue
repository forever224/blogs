<template>
    <div class="nav">
        <el-menu :default-active="$route.path" :router="true" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
            <div v-for="(menu , index) of menus" :key="menu.path">
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
            </div>
        </el-menu>
    </div>
</template>
<script type="text/javascript">
    import menus from '../config/menu.config';

    export default {
        data() {
            return {
                menus
            }
        },
        methods: {}
    }
</script>
<style lang="scss">
    .nav {width: 200px;position: fixed;top: 50px;left: 0;bottom: 0;background: #333;overflow-y: scroll}
    .nav .el-menu {border: 0;}
    .nav::-webkit-scrollbar {/*滚动条整体样式*/
        width: 2px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .nav::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgb(255, 208, 75);
    }
    .nav::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
</style>
