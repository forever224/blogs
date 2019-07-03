<template>
    <div class="login">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="手机">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script type="text/javascript">
    import { mapActions, mapGetters, mapstate } from 'vuex';
    export default {
        data(){
            return {
                form:{}
            }
        },
        methods:{
            ...mapActions('administrator', ['login', 'register']),
            onSubmit(){
                this.login(this.form).then(res => {
                    console.log(res,'正确');
                    sessionStorage.setItem('authorization',res.oauth);
                    sessionStorage.setItem('phone',res.phone);
                    this.$message({
                        message: '恭喜你，登录成功',
                        type: 'success'
                    });
                    this.$router.push({name: 'Index'});
                }).catch( err => {
                    console.log(err,'错误');
                });

            }
        }
    }
</script>
<style lang="scss">
    .login{width:500px;margin: 200px auto 0;}
</style>
