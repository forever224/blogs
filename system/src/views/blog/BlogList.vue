<template>
    <div class="blog-list">
        <div class="blog-list-add">
            <el-button
                    type="primary"
                    @click="handleAdd">发表</el-button>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="title"
                    label="标题">
            </el-table-column>
            <el-table-column
                    prop="key"
                    label="标签"
                    width="300">
                <template slot-scope="scope">
                    <el-tag size="small" v-for="item in scope.row.key" :key="item" type="success" effect="plain">{{ item }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    label="创建时间"
                    width="180">
                <template slot-scope="scope">
                    {{ formatDate("yyyy-MM-dd hh:mm:ss", new Date(scope.row.updated)) }}
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             width="150">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="blog-page">
            <el-pagination
                    background
                    @current-change="onChange"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                tableData: [],
                pageNum: 1,
                pageSize: 10,
                total:0
            }
        },
        created() {
            this.init();
        },
        methods: {
            ...mapActions('blog', ['getList', 'deleteBlog']),
            onChange(val) {
                this.pageNum = val;
            },
            formatDate(fmt, date) {
                var o = {
                    "M+": date.getMonth() + 1,                 //月份
                    "d+": date.getDate(),                    //日
                    "h+": date.getHours(),                   //小时
                    "m+": date.getMinutes(),                 //分
                    "s+": date.getSeconds(),                 //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds()             //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            },
            handleEdit(index, row) {
                this.$router.push({ name: 'blog_add', query: { id: row._id }})
            },
            handleAdd(){
                this.$router.push({ name: 'blog_add'})
            },
            async init(){
                let res = await this.getList({pageSize: this.pageSize, pageNum: this.pageNum});
                this.tableData = res.data.list;
                this.total = res.data.total;
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteBlog({ _id: row._id }).then( ()=> {
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

            }
        }
    }
</script>
<style>
    .blog-page {
        text-align: right;
        padding-top: 20px;
    }
    .blog-list-add{padding-bottom:20px;text-align: right;}
</style>