<template>
    <div class="index">
        <my-header></my-header>
        <left-nav></left-nav>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script type="text/javascript">
    import myHeader from '../components/Header';
    import LeftNav from '../components/LeftNav';

    export default {
        data() {
            return {}
        },
        created() {

        },
        components: {
            myHeader,
            LeftNav
        }
    }
</script>
<style lang="scss">
  .content {padding: 80px 40px 40px 240px;}
  .zfm-add-title-button{float:right;}
  .zfm-add-title{padding-bottom:20px;height:40px;line-height:40px;}
  .zfm-page{text-align: center;padding-top:30px;}
</style>
