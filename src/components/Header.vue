<template>
  <header class="homepage">
    <span class="logo">
      <a href="/">
        <img src="../assets/logo-pure.png" alt />
      </a>
    </span>

    <span class="menu">
      <a class="menu-item active" href="/">{{$t("header.menu.homepage")}}</a>
      <div @mouseenter="showSolution = true" class="menu-item solution-type" 
        @mouseleave="showSolution = false">
        <a href="/index/solution">
          解决方案
          <i class="iconfont icon-down"></i>
        </a>
        <div class="solution-list" v-show="showSolution">
          <div class="solution-item left">
            <span class="solution-span">场景解决方案</span>
            <a class="solution-info" href="https://datayi.cn/w/nPNY431R">
              疫情防控与复工复产
              <img class="icon_hot" src="/index/icon_hot.png" />
            </a>
            <a class="solution-info" href="/index/production_manage">
              生产管理系统
              <img class="icon_new" src="/index/icon_new.png" />
            </a>
            <a class="solution-info" href="/index/equipment_manage">设备管理与巡检</a>
            <a class="solution-info" href="/index/order_management">订单管理_进销存</a>
            <a class="solution-info" href="/index/quality_control">质量管理</a>
            <a class="solution-info" href="/index/health_safety">HSE管理</a>
          </div>
          <div class="solution-center-border"></div>
          <div class="solution-item right">
            <span class="solution-span">行业解决方案</span>
            <a class="solution-info" href="/index/solution_intelligent">智能制造</a>
            <a class="solution-info" href="/index/solution_building">建筑施工</a>
            <a class="solution-info" href="/index/solution_trading">贸易零售</a>
            <a class="solution-info" href="/index/solution_car">汽车服务</a>
            <a class="solution-info" href="/index/smart_campus">智慧校园</a>
          </div>
        </div>
      </div>
      <a class="menu-item" href="/index/customer_case">客户案例</a>
      <a class="menu-item" href="/index/func">功能</a>
      <a class="menu-item" href="/index/price">定价</a>
      <a class="menu-item" href="/index/custom">定制</a>
      <a class="menu-item" href="https://hc.jiandaoyun.com" target="fx_help">帮助</a>
    </span>

    <span class="action">
      <a href="/signin"><el-button>{{$t("header.action.login")}}</el-button></a>
      <a href="/register"><el-button>{{$t("header.action.register")}}</el-button></a>
      <a class="menu-item lang-switch">
        <i class="iconfont icon-global"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="locale">简体中文</span>
        <i class="iconfont icon-arrow-down"></i>
      </a>
    </span>
  </header>
</template>

<script>

export default {
  name: "Header",
  mounted() {

  },
  data() {
    return {
      showSolution: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homepage {
  display: flex;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  z-index: 3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.85);
  .logo {
    padding: 0 25px;
    img {
      width: 117px;
      margin-top: 15px;
    }
  }
  .menu-item {
    padding: 0 25px;
    text-align: left;
    a {
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
      cursor: pointer;
      color: #444;
    }
    font-size: 16px;
    display: inline-block;
    color: #444;
  }
  .action {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.solution-list {
  position: absolute;
  top: 55px;
  left: 97px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,.2);
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.2);
  background: #fff;
  font-size: 14px;
  overflow: hidden;
  padding: 15px 0;
}

.solution-center-border {
  border-left: 1px dashed #e9e9e9;
    height: 180px;
    width: 2px;
    position: absolute;
    left: 186px;
    top: 57px;
}

.solution-item {
  width: 186px;
    line-height: 22px;
    display: grid;
    color: #474b51;
    text-align: left;
    padding: 0 10px;
    float: left;
    font-size: 16px;
    font-weight: 600;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
}

.solution-info {
  height: 32px;
    line-height: 20px;
    color: #474b51;
    text-align: left;
    float: left;
    font-size: 14px;
    font-weight: 400;
    padding: 6px 10px;
    border-radius: 5px;
}
</style>
