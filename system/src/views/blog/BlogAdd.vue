<template>
    <div class="blog-add">
        <h1>BlogAdd</h1>
        <markdown-editor v-model="content1" height="300px" />
    </div>
</template>
<script>
    import MarkdownEditor from '@/components/MarkdownEditor'
    export default {
        name:'BlogAdd',
        components: { MarkdownEditor },
        data(){
            return{
                content1:''
            }
        }
    }
</script>
