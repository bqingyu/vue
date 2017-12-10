<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">添加头像</el-button>
        <el-dialog title="添加头像" :visible.sync="dialogFormVisible">
           <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="时间" :label-width="formLabelWidth">
                <el-input v-model="form.date" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <el-upload
            class="avatar-uploader"
            name="roompic"
            action="http://localhost:3000/users/uploadImg"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitUser">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
    export default{
        name:"add",
        data() {
            return {
                dialogFormVisible: false,
                imageUrl: '',
                form: {
                    name: '',
                    date: '',
                    img_url:'',
                    address:'',
                    },
                formLabelWidth: '120px'
            };
        },
        methods: {
            ...mapActions(["addUser"]),
            //上传图片成功
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                console.log(res,file);
                var url="http://localhost:3000/"+res.imgSrc.substr(6)
                this.form.img_url=url;
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
            },
            submitUser(){
                //提交，隐藏弹窗
                this.dialogFormVisible=false;
                console.log(this.form);
                this.addUser(this.form);
            }
        }
    }
</script>
<style lang="">
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