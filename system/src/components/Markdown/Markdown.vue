<template>
    <div class="markdown">
        <mavonEditor ref=md :toolbars="markdownOption" @imgAdd="imgAdd" @change="change" v-model="html"></mavonEditor>
    </div>
</template>
<script type="text/javascript">
    import { mavonEditor } from 'mavon-editor'
    import axios from 'axios';
    export default {
        components:{
            mavonEditor
        },
        props:['content'],
        data(){
            return {
                markdownOption: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                },
                html:'初始值'
            }
        },
        created(){
            this.html = this.content;
        },
        methods:{
            onSubmit(){
                console.log(this.html);
                console.log(this.$refs.md.d_render);
            },
            imgAdd(pos, $file){
                // 第一步.将图片上传到服务器.
                var formdata = new FormData();
                formdata.append('file', $file);
                axios({
                    url: '/upload/img',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data', 'type': 'blog' },
                }).then((url) => {
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    // $vm.$img2Url 详情见本页末尾
                    // $vm.$img2Url(pos, url);
                    url = '/uploads/' + url.data.data;
                    console.log(pos,'pospospospospospospospos');
                    this.$refs.md.$img2Url(pos, url)
                })
            },
            change(value, render){
                this.$emit('update',{ value, render })
            }
        },
    }
</script>
<style lang="scss">
    @import "~mavon-editor/dist/css/index.css";
</style>
