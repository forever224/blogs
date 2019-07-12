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
                    <img v-if="form.intro" :src="form.intro" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="标签">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        effect="dark"
                        :type="tag.type">
                    {{tag.name}}
                </el-tag>
            </el-form-item>
            <el-form-item label="详情内容">
                <Markdown :content="form.value" @update="update"></Markdown>
            </el-form-item>

        </el-form>
    </div>
</template>
<script>
    import Markdown from '@/components/Markdown/Markdown.vue'
    export default {
        name:'BlogAdd',
        components: { Markdown },
        data(){
            return{
                form:{
                    title:'',
                    desc:'',
                    icon:'',
                    keywords:'',
                    content:'',
                    value:'**第三方**'
                },
                imageUrl: '',
                dialogVisible: false,
                tags:[
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' }
                ]
            }
        },
        methods: {
            update(val){
                this.form.render = val.render;
                this.form.value = val.value;
            },
            handleAvatarSuccess(res, file) {
                console.log()
                this.form.intro = '/uploads/' + res.data;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
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
