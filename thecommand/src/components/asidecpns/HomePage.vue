<template>
  <div>
<!--    任务情况-->
    <div>
      <h2>任务情况</h2>
      <el-card class="hover">
        <div class="home-card">
          <div>
            <div class="task-situation-up">
              <el-row class="flex" justify="end">
                <el-col :span="16">
                  <i class="el-icon-message-solid">任务数</i>
                </el-col>
                <el-col :span="4">
                  <p>3项</p>
                  <p>已完成</p>
                </el-col>
                <el-col :span="4">
                  <p>123项</p>
                  <p>累计</p>
                </el-col>
              </el-row>
            </div>
            <img src="../../assets/logo.png" width="100%">
          </div>
          <div>
            <div class="task-situation-up">
              <i class="el-icon-check">任务完成率</i>
            </div>
            <img src="../../assets/logo.png" width="100%">
          </div>
        </div>
      </el-card>
    </div>
<!--    队员浏览-->
    <div>
      <h2>队员浏览</h2>
      <el-card class="hover">
        <el-row type="flex" justify="space-between">
          <el-col :span="10">
            <div>
              <i class="el-icon-check">队员数</i>
              <div class="mate-browse-left-down">
                <el-row type="flex" justify="begin">
                  <el-col :span="5">
                    <p>12</p>
                    <p>待审核</p>
                  </el-col>
                  <el-col :span="5">
                    <p>3645</p>
                    <p>累计总数</p>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="mate-browse">
              <img src="../../assets/logo.png" width="100%">
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
name: "HomePage"
}
</script>

<style lang="less" scoped>
.home-card{
  display: flex;
  justify-content:space-evenly;
  >div{
    border-style: solid;
    border-color: #50b7c1;
    border-width: 2px;
    height: 100%;
    width: 40%;
  }
}
p {
  margin: 0;
}
.task-situation-up {
  height: 45px;
}
.mate-browse{
  border-style: solid;
  border-width: 1px;
  box-shadow:0px 0px 10px 5px #888888;
}
.mate-browse-left-down{
  margin-top:30px;
  margin-left: 0;
  border-bottom-style: solid;
  border-bottom-width: thin;
}
</style>
