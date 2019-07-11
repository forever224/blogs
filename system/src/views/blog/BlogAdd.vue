<template>
    <div class="blog-add">
        <h1>BlogAdd</h1>
        <!--<markdown-editor v-model="content1" height="300px" />-->
        <Markdown></Markdown>
    </div>
</template>
<script>
    // import MarkdownEditor from '@/components/MarkdownEditor'
    import Markdown from '@/components/Markdown/Markdown.vue'
    export default {
        name:'BlogAdd',
        components: { Markdown },
        data(){
            return{
                content1:''
            }
        }
    }
</script>
