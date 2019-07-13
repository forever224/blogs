<template>
    <div class="config-nav">
        <div class="config-nav-add">
            <el-button type="primary" @click="handleAddNav">添加导航</el-button>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="href"
                    label="连接"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="icon"
                    label="图标">
            </el-table-column>
            <el-table-column
                    prop="sort"
                    label="排序"
                    width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <UpdateNav :visible="visible" :item="item" @update="update"></UpdateNav>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import UpdateNav from './UpdateNav';
    export default {
        components:{
            UpdateNav
        },
        data() {
            return {
                tableData: [],
                visible: false,
                item:{}
            }
        },
        created(){
            this.init();
        },
        methods: {
            ...mapActions('nav',['getList', 'addNav', 'deleteNav']),
            async init(){
                let res = await this.getList();
                this.tableData = res.data;
            },
            handleEdit(index, row) {
                this.visible = true;
                console.log(row);
                this.item = row;
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteNav({ _id: row._id }).then( ()=> {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.init();
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleAddNav(){
                this.visible = true;
            },
            update(){
                this.visible = false;
                this.item = {};
                this.init();
            }
        }
    }
</script>
<style lang="scss">
    .config-nav-add{padding-bottom:20px;text-align: right;}
</style>
