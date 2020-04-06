<template>
    <div>
        <span>仪表盘</span>
        <ul>
            <li @click="changeDashboard(item)" v-for="item in dashboardList" :key="item.id">
                <span>{{item.name}}</span>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <i class="el-icon-more"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>编辑</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'dashboard-list',
        data() {
            return {
                dashboardList: [{
                    name: 'aaa',
                    id: 1
                },
                {
                    name: 'bbb',
                    id: 2
                },
                {
                    name: 'ccc',
                    id: 3
                }],
            }
        },
        methods: {
            changeDashboard(item) {
                this.$router.push(`/dashboard/${item.id}`)
                
            }
        }
    }
</script>