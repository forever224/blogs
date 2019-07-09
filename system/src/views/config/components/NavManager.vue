<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="date"
                label="名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="连接"
                label="姓名"
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
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        created(){
            this.init();
        },
        methods: {
            ...mapActions('nav',['getList', 'addNav', 'deleteNav']),
            init(){
                this.getList();
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>