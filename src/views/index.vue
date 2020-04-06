<template>
  <div class="container">
    <img src="../assets/logo.png"/>
    <h1>A Data Analysis Board in Vue.</h1>
    <el-button type="success" size="large" @click="$router.push('/chartpanel/create')">
      Get Start
    </el-button>
  </div>
</template>

<style type="text/css">
  .container {
    text-align: center;
  }
</style>