<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="分类名称">
            <el-input v-model="form.name" placeholder="请输入分类名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="短标题">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="上级分类">
            <el-select v-model="form.region" placeholder="请选择文章分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="关联标签">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
            <el-upload
                    action="/upload/img"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form-item>
        <el-form-item label="详情内容">
            <quill-editor v-model="content" :options="editorOption" class="quill-css"></quill-editor>
        </el-form-item>

    </el-form>
</template>
<script type="text/javascript">
    import quillEditor from '../../../../components/Editor'
    export default {
        components:{
            quillEditor
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                content:'',
                editorOption:{
                    serverUrl: '/upload',  // 这里写你要上传的图片服务器地址
                    header: {token: 'xxxx'},  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
                    detailContent: '请填写详情内容'
                },
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        created() {

        }
    }
</script>
<style lang="scss">
    .quill-css{ line-height: 20px;}
</style>
