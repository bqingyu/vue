<template>
    <el-form class="add-merchant" ref="form" :model="form" label-width="80px">
        <el-form-item label="店铺名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="店铺简介">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="店铺标语">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="店铺分类">
            <el-cascader
                expand-trigger="hover"
                :options="options"
                v-model="selectedOptions2"
                @change="handleChange">
            </el-cascader>
        </el-form-item>
        <el-form-item label="店铺特点">
            <span>品牌保证</span>
            <el-switch v-model="form.delivery"></el-switch>
            <span>蜂鸟专送</span>
            <el-switch v-model="form.delivery"></el-switch>
            <span>新开店铺</span>
            <el-switch v-model="form.delivery"></el-switch>
             <span>外卖保</span>
            <el-switch v-model="form.delivery"></el-switch>
             <span>准时到</span>
            <el-switch v-model="form.delivery"></el-switch>
             <span>开发票</span>
            <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="配送费">
           <el-input-number v-model="num1" @change="handleChange" :min="1" :max="20" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="起送价">
           <el-input-number v-model="num2" @change="handleChange" :min="1" :max="50" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="营业时间">
          <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }">
          </el-time-select>
          <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
              minTime: startTime
            }">
          </el-time-select>
      </el-form-item>
      <el-form-item label="上传店铺头像">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮服务许可证">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
     export default{
        name:"addMerchant",
        data() {
            return {
                num1: 1,
                num2:1,
                startTime: '',
                endTime: '',
                imageUrl: '',
                selectedOptions2: [],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                options: [{
                  value: 'xiaochi',
                  label: '小吃夜宵',
                  children: [
                    {
                      value: 'xiaolongxia',
                      label: '小龙虾'
                    }, 
                    {
                      value: 'difangxiaochi',
                      label: '地方小吃'
                    }, 
                    {
                      value: 'shaokao',
                      label: '烧烤'
                    }
                  ]
                },
                {
                  value: 'yiguo',
                  label: '异国料理',
                  children: [
                    {
                      value: '',
                      label: '日韩料理'
                    }, 
                    {
                      value: '',
                      label: '西餐'
                    }, 
                    {
                      value: '',
                      label: '意大利面'
                    }
                  ],
                },
                 {
                  value: 'tianpin',
                  label: '甜品饮品',
                  children: [
                    {
                      value: 'naicha',
                      label: '奶茶果汁'
                    }, 
                    {
                      value: 'yinpin',
                      label: '饮品'
                    }, 
                    {
                      value: 'coffee',
                      label: '咖啡'
                    }
                  ],
                },
                 {
                  value: 'store',
                  label: '商品超市',
                  children: [
                    {
                      value: 'supermarket',
                      label: '超市'
                    }, 
                    {
                      value: 'tea',
                      label: '茶'
                    }, 
                    {
                      value: 'snack',
                      label: '零食饮料'
                    }
                  ],
                }
                ],
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleChange(value) {
              console.log(value);
            },
            handleAvatarSuccess(res, file) {
              this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
              const isJPG = file.type === 'image/jpeg';
              const isLt2M = file.size / 1024 / 1024 < 2;

              if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
              }
              if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
              }
              return isJPG && isLt2M;
            }
        }
    }
</script>
<style lang="">
    .add-merchant{
        width:500px;
        margin:0 auto;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>