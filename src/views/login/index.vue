<template>
    <div class="container">
        <img src="../../assets/logo.png">
        <el-form class="form-wrapper">
            <el-form-item>
                <el-input v-model="userName" type="text" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" @click="login" type="primary">登录</el-button>
                <el-button :loading="loading" type="primary">注册</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
    import { login } from '../../api/login'
    import Cookie from 'js-cookie'
    export default {
        name: 'login',
        data: () => {
            return {
                userName: null,
                password: null,
                loading: false
            }
        },
        methods: {
            login() {
                this.loading = true;
                login(this.userName, this.password).then( resp => {
                    this.loading = false;
                    Cookie.set('ds-token', resp.data.data.token);
                    this.$router.push('/');
                });
            }
        }
    }
</script>

<style type="text/css">
    .container {
        text-align: center;
    }
    .form-wrapper {
        width: 350px;
        margin: 0 auto;
    }
    .form-wrapper .el-button {
        width: 45%;
        float: right;
    }
    .form-wrapper .el-button:first-of-type {
        float: left;
    }
</style>