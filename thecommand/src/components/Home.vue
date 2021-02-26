<template>
    <el-container style="height: 500px" class="home-container">
<!--      头部导航-->
      <el-header>
        <div class="el-header-left" >
          <img class="header-img" src="../assets/logo.png" alt="">
          <span>归家救援系统指挥端</span>
        </div>
        <div class="el-header-right">
            <span class="el-icon-s-home">主页</span>
            <img class="header-img" src="../assets/logo.png" alt="">
            <span>xxx团队</span>
        </div>
      </el-header>
<!--      页面主体区域-->
      <el-container>
<!--        侧边栏-->
        <el-aside width="200px">
<!--          侧边栏导航-->
          <el-menu
              background-color="#50b7c1"
              text-color="#fff"
              active-text-color="#00a6ac"
              unique-opened
              router
              :default-active="$route.path">
<!--            一级菜单-->
            <el-menu-item index="/HomePage">
<!--              一级菜单模板区域-->
              <template slot="title">
<!--                图标-->
                <i class="el-icon-location"></i>
<!--                文本-->
                <span>主页</span>
              </template>
            </el-menu-item>

            <el-submenu index="/DutyManage">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>任务管理</span>
              </template>
              <el-menu-item index="/DutyHome">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>任务主页</span>
                </template>
              </el-menu-item>

              <el-menu-item index="/DutyRelease">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>发布任务</span>
                </template>
              </el-menu-item>

              <el-menu-item index="/DutyManagement">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>任务管理</span>
                </template>
              </el-menu-item>
            </el-submenu>

          <el-menu-item index="/DutyCommand">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>任务指挥</span>
            </template>
          </el-menu-item>

          <el-submenu index="/MateCommand">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>队员管理</span>
            </template>
            <el-menu-item index="/MateBrowse">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>队员浏览</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/MateAudit">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>队员审核</span>
              </template>
            </el-menu-item>
          </el-submenu>
            <el-menu-item index="/TeamCenter">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>团队中心</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/login">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>退出登录</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="less" scoped>
.home-container{
  height: 100%;
}
.header-img{
  width: 50px;
  height:50px;
}
.el-header{
  background-color: #50b7c1;
  display: flex;
  justify-content: space-between;
  color: #fff;
  >div{
    display: flex;
    align-items: center;
  }

}
.el-header-left{
  display: flex;
  justify-content:flex-start;
  font-size: 20px;
}
.el-header-right{
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
}
.el-aside{
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  background-color: #50b7c1;
  .el-menu{
    border-right: 0;
  }
}
.el-main{
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  background-color: #afdfe4;
}
</style>
