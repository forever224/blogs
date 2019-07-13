<template>
    <div class="blog-add">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.title" placeholder="请输入分类名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="关键词">
                <el-input v-model="form.keywords"></el-input>
            </el-form-item>
            <el-form-item label="缩略图">
                <el-upload
                        class="avatar-uploader"
                        action="/upload/img"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="intro" :src="form.intro" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="标签">
                <el-select
                        v-model="form.key"
                        style="display: block;"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        @change="onTags"
                        placeholder="请选择博文标签">
                    <el-option
                            v-for="item in tags"
                            :key="item"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详情内容">
                <Markdown :value="form.value" @update="update"></Markdown>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import Markdown from '@/components/Markdown/Markdown.vue';
    import { mapActions } from 'vuex';
    export default {
        name:'BlogAdd',
        components: { Markdown },
        data(){
            return{
                form:{
                    title:'',
                    desc:'',
                    intro:'',
                    keywords:'',
                    key:[],
                    render:'',
                    value:''
                },
                intro:'',
                imageUrl: '',
                dialogVisible: false,
                tags:['HTML','CSS', 'JavaScript', '敏捷开发']
            }
        },
        async created(){
            let _id = this.$route.query.id;
            if(_id){
                let res = await this.getItem({ _id });
                this.form = res.data;
                this.intro = this.form.intro;
            }
            let tags = await this.getTags();
            this.tags = tags.data;
        },
        methods: {
            ...mapActions('blog',['addBlog', 'getItem', 'getTags']),
            update(val){
                this.form.render = val.render;
                this.form.value = val.value;
            },
            onSubmit(){
                this.addBlog(this.form).then(res => {
                    this.$message({
                        message: '恭喜你，添加文章成功！！',
                        type: 'success'
                    });
                    this.$router.push('blog_list')
                });
            },
            onTags(tag){
                console.log(tag)
            },
            handleAvatarSuccess(res, file) {
                console.log(res.data,'ssssssssssss')
                this.form.intro = '/uploads/' + res.data;
                this.intro = this.form.intro;
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            }
        }
    }
</script>
<style lang="scss">
    .blog-add{overflow: hidden;}
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
