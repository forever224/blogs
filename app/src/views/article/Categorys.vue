<template>
    <div class="categorys">
        <!--<div class="zfm-add-title">-->
            <!--<el-button class="zfm-add-title-button" type="primary" @click="handleAdd()">添加分类</el-button>-->
            <!--<h3>分类管理</h3>-->
        <!--</div>-->
        <el-table :data="categories" style="width: 100%">
            <el-table-column type="selection"width="55">
            </el-table-column>
            <el-table-column label="缩列图" width="130">
                <template slot-scope="scope">
                    <img style="width:80px;height:80px;" :src="'/file/' + scope.row.thumb">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="分类名称">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" type="p" @click="handleEdit(scope.row._id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script type="text/javascript">
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                categories: [],
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
            ...mapActions('article', ['getArticleCategory', 'delArticleCategory']),
            async init() {
                this.categories = await this.getArticleCategory();
            },
            handleEdit(id) {

            },
            handleDelete(_id) {
                this.delArticleCategory({ _id }).then(() => {
                    this.init();
                });

            },
        },
        components: {
        }
    }
</script>
<style lang="scss">

</style>
