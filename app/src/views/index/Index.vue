<template>
    <div class="index">
    </div>
</template>
<script type="text/javascript">
    import one from '../../components/One';
    import two from '../../components/Two';
    export default {
        data(){
            return {
                arr: ['aaa', 'bbb', 'ccc']
            }
        },
        components:{
            one, two
        },
    }
</script>
<style lang="scss">

</style>
