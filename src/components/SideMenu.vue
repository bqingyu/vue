<template>
    <div class="side-menu">
        <el-menu
            :router="true"
            default-active="/"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/product">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>数据管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/user">用户列表</el-menu-item>
                    <el-menu-item index="/merchant">商家列表</el-menu-item>
                    <el-menu-item index="/product">食品列表</el-menu-item>
                    <el-menu-item index="/order">订单列表</el-menu-item>
                    <el-menu-item index="/admin">管理员列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
             <el-submenu index="/addproduct">
                <template slot="title">
                    <i class="el-icon-plus"></i>
                    <span>添加数据</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/addmerchant">添加商铺</el-menu-item>
                    <el-menu-item index="/addproduct">添加商品</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
             <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-star-on"></i>
                    <span>图表</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">用户分布</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
             <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-edit-outline"></i>
                    <span>编辑</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">文本编辑</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>设置</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">管理员设置</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-warning"></i>
                    <span>说明</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">说明</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    
</script>
<style scoped>
    .side-menu{
        width:200px;
        height:100%;
        float:left;
    }
    .side-menu ul{
        height:100%;
    }
</style>