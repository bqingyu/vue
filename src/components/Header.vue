<template>
    <div class="header">
        <h1>
            admin
        </h1>
        <div class="user-box">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img src="../assets/1.jpg" alt="">
                </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default{
        name:"header"
    }
</script>
<style scoped>
    .header{
        height:80px;
        background:#eee;
    }
    h1{
        float:left;
        margin:20px;
    }
    .user-box{
        float:right;
        margin:20px 40px;
    }
    .user-box img{
        width:40px;
        height:40px;
        border-radius:20px;
    }
</style>