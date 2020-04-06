<template>
    <div id="app">
        <div class="nav-bar">
            <el-menu :default-active="activeIndex" router mode="horizontal">
                <el-menu-item index="/"><img class="logo" src="./assets/logo-simple.png"/></el-menu-item>
                <el-menu-item index="/dashboard">仪表盘</el-menu-item>
                <el-menu-item index="/chartpanel/create">图表</el-menu-item>
            </el-menu>
            <div class="nav-bar-left">
                <el-dropdown>
                    <span class="el-dropdown-link">
                            <el-avatar :size="60" src="./assets/logo.png">
                                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                            </el-avatar>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <router-link to="/">
                            <el-dropdown-item>
                                首页
                            </el-dropdown-item>
                        </router-link>
                        <el-dropdown-item>
                            <span @click="loginOut">退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                        
                </el-dropdown>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Cookie from 'js-cookie'
    export default {
        name: 'App',
        computed: {
            activeIndex() {
                return this.$route.path;
            }
        },
        methods: {
            errorHandler() {
                return true;
            },
            loginOut() {
                Cookie.set('ds-token', '');
            }
        }
    }
</script>
<style type="text/css">
    .logo {
        height: 100%;
    }
    .nav-bar {
        display: flex;
        justify-content: space-between;
    }
</style>