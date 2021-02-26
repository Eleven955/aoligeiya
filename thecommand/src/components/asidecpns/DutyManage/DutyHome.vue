<template>
  <div>
    <div>
      <div class="header">
        <h2>当前任务</h2>
        <el-button type="primary">发布任务</el-button>
      </div>
      <div>
        <el-card shadow="hover">
          <el-row type="flex" justify="space-between">
            <el-col span="3">
              <div>
                <img src="../../../assets/logo.png" width="100%" height="100%">
              </div>
            </el-col>
            <el-col span="10">
              <div>
                <p>名称：XXX救援任务</p>
                <p>编号：123143143432</p>
                <p>任务：一级任务</p>
              </div>
            </el-col>
            <el-col span="10">
              <div>
                <p>开始时间：</p>
                <p>执行队长：</p>
                <p>任务信息：</p>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
<!--    历史任务-->
    <div>
      <h2>历史任务</h2>
      <div>
        <el-card shadow="hover">
        <el-row type="flex" justify="space-between">
          <el-col span="3">
            <div>
              <img src="../../../assets/logo.png" width="100%" height="100%">
            </div>
          </el-col>
          <el-col span="10">
            <div>
              <p>名称：XXX救援任务</p>
              <p>编号：123143143432</p>
              <p>任务：一级任务</p>
            </div>
          </el-col>
          <el-col span="10">
            <div>
              <p>开始时间：</p>
              <p>执行队长：</p>
              <p>任务信息：</p>
            </div>
          </el-col>
        </el-row>
        </el-card>
        <el-card shadow="hover">
          <el-row type="flex" justify="space-between">
            <el-col span="3">
              <div>
                <img src="../../../assets/logo.png" width="100%" height="100%">
              </div>
            </el-col>
            <el-col span="10">
              <div>
                <p>名称：XXX救援任务</p>
                <p>编号：123143143432</p>
                <p>任务：一级任务</p>
              </div>
            </el-col>
            <el-col span="10">
              <div>
                <p>开始时间：</p>
                <p>执行队长：</p>
                <p>任务信息：</p>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DutyHome",
}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  justify-content: space-between;
  >h1{
    margin-top: 0;
  }
}
.el-card{
  margin:10px 0;
}
.el-button{
  height: 75%;
}
</style>
