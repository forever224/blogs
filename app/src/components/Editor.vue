<template>
    <div class="quill-wrap">
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @ready="onEditorReady($event)" @change="onEditorChange($event)"></quill-editor>
    </div>
</template>
<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

    Quill.register('modules/ImageExtend', ImageExtend);
    export default {
        components: {quillEditor},
        props:['propContent'],
        data() {
            return {
                content: '',
                // 富文本框参数设置
                editorOption: {
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'file',
                            action: '/upload/img',
                            headers: (xhr) => {
                                xhr.setRequestHeader('type','articleCategory')
                            },
                            response: (res) => {
                                console.log(res);
                                return '/file/' + res.data
                            }
                        },
                        toolbar: {
                            container: container,
                            handlers: {
                                'image': function () {
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    }
                }
            }
        },
        methods:{
            onEditorChange(e){
                this.$emit('editChange',this.content)
            },
            onEditorReady(e){
                this.content = this.propContent;
            }
        }
    }
</script>
<style>
    .ql-container{height:200px;}
</style>
