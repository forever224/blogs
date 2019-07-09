<template>
    <div class="home">
        <LeftNav :isCollapse="isCollapse"></LeftNav>
        <div :class="mainClass">
            <div class="collapse">
                <div class="collapse-icon">
                    <i @click="onColapse" v-if="isCollapse" class="iconfont icon-indent"></i>
                    <i @click="onColapse" v-else class="iconfont icon-outdent"></i>
                </div>
                <div class="collapse-bread">
                    <breadcrumb></breadcrumb>
                </div>
            </div>
            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    import LeftNav from '../components/leftnav/LeftNav'
    import breadcrumb from '../components/breadcrumb/breadcrumb'
    export default {
        data() {
            return {
                isCollapse: false
            }
        },
        computed:{
            mainClass(){
                return this.isCollapse ? 'main main2':'main main1'
            }
        },
        components:{
            LeftNav,
            breadcrumb
        },
        created(){
            this.init();
        },
        methods:{
            init(){

            },
            onColapse(){
                this.isCollapse = !this.isCollapse;
            }
        }
    }
</script>
<style lang="scss">
    .main{transition: padding-left .3s;}
    .main1{padding-left:220px;}
    .main2{padding-left:84px;}
    .collapse{height:50px; border-bottom:1px solid #ccc;line-height: 50px;}
    .collapse-icon{display: inline-block;}
    .collapse-bread{display: inline-block;padding-left:30px;font-size: 14px;color:#666;}
    .no-redirect{ color: #97a8be; cursor: text;}
</style>
