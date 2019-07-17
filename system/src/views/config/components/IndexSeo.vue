<template>
    <div class="index-seo">
        <el-form :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.indexTitle"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="form.indexDesc"></el-input>
            </el-form-item>
            <el-form-item label="关键词">
                <el-input v-model="form.indexKeywords"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="update">提 交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';
    export default {
        data(){
            return {
                form:{
                    indexTitle:'',
                    indexDesc:'',
                    indexKeywords:'',
                    key:'index-seo'
                }
            }
        },
        async created(){
            let res = await this.getByKey({ key: 'index-seo' });
            this.form = res.data;
        },
        methods:{
            ...mapActions('config',['getByKey','updateOne']),
            update(){
                this.form.indexKeywords = this.form.indexKeywords.replace(/，/g,',');
                this.updateOne(this.form).then( () => {
                    this.$message({
                        message: '更新成功！',
                        type: 'success'
                    });
                } )
            }
        }
    }
</script>
