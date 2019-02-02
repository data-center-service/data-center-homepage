<template>
  <div class="main">
    <el-container>
      <el-aside width="260px">
        <p class="title">Data-Center-Service</p>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333333"
          text-color="#fff"
          active-text-color="#5FB878"
        >
          <el-menu-item index="1" disabled="true">
            <i class="el-icon-location"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <router-link to="/apis">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">API服务</span>
            </el-menu-item>
          </router-link>
          <router-link to="/examples">
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">演示项目</span>
            </el-menu-item>
          </router-link>
          <el-menu-item index="4" disabled="true">
            <i class="el-icon-setting"></i>
            <span slot="title">我的</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-row class="block-col-2">
            <el-col :span="18">
              <el-badge class="item">
                <el-button circle size="mini" icon="el-icon-back"></el-button>
              </el-badge>
              <el-badge class="item">
                <el-button circle size="mini" icon="el-icon-refresh"></el-button>
              </el-badge>
            </el-col>
            <el-col :span="6">
              <el-badge class="item-right">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">消息中心
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">未读消息
                      <el-badge class="mark" :value="12"/>
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">公告
                      <el-badge class="mark" :value="3"/>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-badge>
              <el-badge class="item-right">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    周先生
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>基本资料</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-badge>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.title {
  color: #fff;
  font-weight: bolder;
  line-height: 80px;
}

html body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: fixed;
}
.main {
  height: 100%;
  min-width: 1280px;
}
.el-header,
.el-footer {
  color: #333;
    line-height: 36px;
}

.el-aside {
  color: #333;
  background-color: #333333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f2f2f2;
  padding: 15px;
}

.el-container {
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}

.item {
  margin-top: 10px;
  margin-right: 20px;
}

.item-right {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
