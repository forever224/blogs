<template>
    <div class="categorys">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection"width="55">
            </el-table-column>
            <el-table-column prop="sort" label="序号" width="60">
            </el-table-column>
            <el-table-column prop="title" label="标题名称">
            </el-table-column>
            <el-table-column prop="title" label="所属分类">
            </el-table-column>
            <el-table-column prop="desc" label="推荐" width="60">
            </el-table-column>
            <el-table-column prop="desc" label="置顶" width="60">
            </el-table-column>
            <el-table-column prop="desc" label="显示" width="60">
            </el-table-column>
            <el-table-column prop="desc" label="排序" width="60">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" type="p" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="zfm-page">
            <el-pagination
                    background
                    @current-change="handlePage"
                    layout="prev, pager, next"
                    :page-size="pageSize"
                    :total="total">
            </el-pagination>
        </div>


    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                tableData: [],
                total: 0,
                pageNum: 1,
                pageSize: 10,
                flag: false,
                row: {}
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {

            },
            handleEdit(row) {
                this.row = row;
                this.flag = true;
            },
            updated() {
                this.flag = false;
                this.editId = {};
                this.init();
            },
            handleDelete(id) {

            },
            handleAdd() {
                this.flag = true;
            },
            handlePage(val) {

            }
        },
        components: {
        }
    }
</script>
<style lang="scss">

</style>
