<template>
    <el-form label-width="80px">
        <el-form-item label="标题">
            <el-input v-model="seoTitle"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="seoDesc"></el-input>
        </el-form-item>
        <el-form-item label="关键词">
            <el-input v-model="seoKeyword"></el-input>
        </el-form-item>
    </el-form>
</template>
<script type="text/javascript">
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                seoTitle: '',
                seoDesc: '',
                seoKeyword: ''
            }
        },
        computed:{
            ...mapState('article', ['categoryInfo'])
        },
        methods: {
            ...mapMutations('article', ['setCategoryInfo'])
        },
        watch:{
            seoTitle: function(e){
                this.setCategoryInfo({ key:'seoTitle', value: e });
            },
            seoDesc: function(e){
                this.setCategoryInfo({ key:'seoDesc', value: e });
            },
            seoKeyword: function(e){
                this.setCategoryInfo({ key:'seoKeyword', value: e });
            }
        },
        created() {
            this.seoTitle = this.categoryInfo.seoTitle;
            this.seoDesc = this.categoryInfo.seoDesc;
            this.seoKeyword = this.categoryInfo.seoKeyword;
        }
    }
</script>
<style lang="scss">

</style>
