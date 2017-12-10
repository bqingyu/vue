<template>
  <div>
    <el-table
      :data="userData"
      style="width: 100%">
      <el-table-column
        type="index"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        prop="date"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户姓名"
        width="180">
      </el-table-column>
      <el-table-column
        label="用户头像"
        width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              <img width="40" height="40" :src="scope.row.img_url" alt="">
            </span>
          </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="注册地址">
      </el-table-column>
    </el-table>

    <div class="block">
      <el-col :span="12" :offset="6">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="count">
        </el-pagination>
      </el-col>
    </div>
    <add></add>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import add from "./add"
    export default {
        methods: {
            ...mapActions(['getUserData']),
            indexMethod(index) {
                return index * 1;
            },
            handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
              this.getUserData({pageSize:10,pageNum:val})
            }
        },
        computed: {
          ...mapGetters(['userData','count'])
        },
        mounted () {
          this.getUserData({pageSize:10,pageNum:1})
        },
        components:{
          add
        }
  };
</script>
<style lang="">
    
</style>