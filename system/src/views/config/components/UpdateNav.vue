<template>
    <div class="update-nav">
        <el-dialog title="导航编辑" :visible.sync="dialogVisible">
            <el-form :model="form" :inline="true">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="链接">
                    <el-input v-model="form.href"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-input v-model="form.icon"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="form.sort"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateNav">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        props:['item', 'visible'],
        data(){
            return {
                form:{}
            }
        },
        computed:{
            dialogVisible:{
                get: function(){
                    this.form = Object.assign({}, this.item);
                    return this.visible;
                },
                set: function(){
                    this.$emit('update',false)
                }
            }
        },
        methods:{
            ...mapActions('nav',['getList', 'addNav', 'deleteNav']),
            updateNav(){
                this.addNav(this.form).then(res => {
                    this.dialogVisible = false;
                })
            }
        }
    }
</script>
