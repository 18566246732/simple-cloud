<template>
  <span class="menu-con">
    <a
      class="menu-item"
      href="/"
      :class="isActive('/') && 'active'"
    >{{ $t("header.menu.homepage") }}</a>
    <div
      class="menu-item solution-type"
      :class="isActive('/index/solution') && 'active'"
      @mouseenter="showSolution = true"
      @mouseleave="showSolution = false"
    >
      <a
        href="/index/solution"
      >
        {{ $t("header.menu.solution") }}
        <i
          v-if="!disablePanel"
          class="iconfont icon-down"
        />
      </a>
      <div
        v-if="showSolution && !disablePanel"
        class="solution-list"
      >
        <div class="solution-item left">
          <span class="solution-span">场景解决方案</span>
          <a
            class="solution-info"
            href="https://datayi.cn/w/nPNY431R"
          >
            疫情防控与复工复产
            <img
              class="icon-hot"
              src="../assets/img/icon_hot.png"
            >
          </a>
          <a
            class="solution-info"
            href="/index/production_manage"
          >
            生产管理系统
            <img
              class="icon-new"
              src="../assets/img/icon_new.png"
            >
          </a>
          <a
            class="solution-info"
            href="/index/equipment_manage"
          >设备管理与巡检</a>
          <a
            class="solution-info"
            href="/index/order_management"
          >订单管理_进销存</a>
          <a
            class="solution-info"
            href="/index/quality_control"
          >质量管理</a>
          <a
            class="solution-info"
            href="/index/health_safety"
          >HSE管理</a>
        </div>
        <div class="solution-center-border" />
        <div class="solution-item right">
          <span class="solution-span">行业解决方案</span>
          <a
            class="solution-info"
            href="/index/solution_intelligent"
          >智能制造</a>
          <a
            class="solution-info"
            href="/index/solution_building"
          >建筑施工</a>
          <a
            class="solution-info"
            href="/index/solution_trading"
          >贸易零售</a>
          <a
            class="solution-info"
            href="/index/solution_car"
          >汽车服务</a>
          <a
            class="solution-info"
            href="/index/smart_campus"
          >智慧校园</a>
        </div>
      </div>
    </div>
    <a
      v-for="(menuDataItem, index) in menuData"
      :key="index"
      class="menu-item"
      :class="isActive(menuDataItem.href) && 'active'"
      :href="menuDataItem.href"
    >{{ $t(menuDataItem.text) }}</a>
  </span>
</template>
<script>
export default {
  props: {
    disablePanel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSolution: false,
      menuData: []
    };
  },
  computed: {
    isActive() {
      return (href) => {
        console.log(location.pathname, href);

        return location.pathname === href;
      };
    }
  },
  mounted() {
    console.log(location.pathname, 'ath');

    this.menuData = [
      {
        text: 'header.menu.cases',
        href: "/index/customer_case"
      },
      {
        text: 'header.menu.function',
        href: "/index/func"
      },
      {
        text: 'header.menu.price',
        href: "/index/price"
      },
      {
        text: 'header.menu.customize',
        href: "/index/custom"
      },
      {
        text: 'header.menu.help',
        href: "https://hc.jiandaoyun.com"
      },
    ];
  }
};
</script>

<style lang="scss" scoped>
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

.menu-con .menu-item.active {
  color: $primary-color;
  & > a {
    color: $primary-color;
  }
}

.solution-list {
  position: absolute;
  top: 55px;
  left: 97px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
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
  &:hover {
    background: #f4f4f4;
  }
}

.solution-span {
  height: 36px;
  padding-left: 10px;
}

.icon-hot {
  width: 25px;
  height: 8px;
  position: absolute;
  left: 148px;
}

.icon-new {
  width: 25px;
  height: 8px;
  position: absolute;
  left: 108px;
}

.icon-down {
  font-size: 8px;
}


</style>
