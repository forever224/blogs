<template>
    <el-form label-width="80px">
        <el-form-item label="分类名称">
            <el-input style="width:500px;" v-model="title" placeholder="请输入分类名称" clearable></el-input>
            <span style="padding:0 12px 0 50px; color:#606266">短标题</span><el-input style="width:300px;" v-model="shortTitle"></el-input>
        </el-form-item>
        <el-form-item label="上级分类">
            <el-select v-model="pId" placeholder="请选择文章分类">
                <el-option label="根分类" value="0"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="缩略图">
            <el-upload
                    class="avatar-uploader"
                    action="/upload/img"
                    :data="type"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess">
                <img v-if="thumb" :src="thumb" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="详情内容">
            <quill-editor @editChange="editChange" :prop-content="desc" class="quill-css"></quill-editor>
        </el-form-item>

    </el-form>
</template>
<script type="text/javascript">
    import quillEditor from '../../../../components/Editor'
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
    export default {
        components:{
            quillEditor
        },
        data() {
            return {
                type:{ type: 'categoryIcon' },
                shortTitle:'',
                title:'',
                desc:'',
                pId:'0',
                thumb:''
            }
        },
        computed: {
            ...mapState('article', ['categoryInfo'])
        },
        watch:{
            title: function(e){
                this.setCategoryInfo({ key:'title', value: e });
            },
            shortTitle: function(e){
                this.setCategoryInfo({ key:'shortTitle', value: e });
            }
        },
        methods: {
            ...mapMutations('article', ['setCategoryInfo']),
            editChange(data){
                this.setCategoryInfo({ key:'desc', value: data });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleAvatarSuccess(file) {
                this.thumb = '/file/' + file.data;
                this.setCategoryInfo({ key:'thumb', value: file.data });
            }
        },
        created() {
            this.shortTitle = this.categoryInfo.shortTitle;
            this.title = this.categoryInfo.title;
            this.desc = this.categoryInfo.desc;
            this.pId = this.categoryInfo.pId || '0';
            this.thumb = this.categoryInfo.thumb ? '/file/' + this.categoryInfo.thumb: '';
        }
    }
</script>
<style lang="scss">
    .quill-css{ line-height: 20px;}
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
        line-height: 178px !important;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
