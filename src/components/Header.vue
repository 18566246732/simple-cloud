<template>
  <header class="homepage">
    <span class="logo">
      <a href="/">
        <img
          src="../assets/img/logo-pure.png"
          alt
        >
      </a>
    </span>

    <!-- <i class="iconfont icon-menu" /> -->

    <!-- <a class="header-item menu-icon"><i class="iconfont icon-menu" /></a> -->

    <span class="menu">
      <a
        class="menu-item active"
        href="/"
      >{{ $t("header.menu.homepage") }}</a>
      <div
        class="menu-item solution-type"
        @mouseenter="showSolution = true"
        @mouseleave="showSolution = false"
      >
        <a href="/index/solution">
          {{ $t("header.menu.solution") }}
          <i class="iconfont icon-down" />
        </a>
        <div
          v-show="showSolution"
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
        class="menu-item"
        href="/index/customer_case"
      >{{ $t("header.menu.cases") }}</a>
      <a
        class="menu-item"
        href="/index/func"
      >{{ $t("header.menu.function") }}</a>
      <a
        class="menu-item"
        href="/index/price"
      >{{ $t("header.menu.price") }}</a>
      <a
        class="menu-item"
        href="/index/custom"
      >{{ $t("header.menu.customize") }}</a>
      <a
        class="menu-item"
        href="https://hc.jiandaoyun.com"
        target="fx_help"
      >{{ $t("header.menu.help") }}</a>
    </span>

    <span class="action">
      <a
        href="/signin"
      >
        <s-button>{{ $t("header.action.login") }}</s-button>
      </a>

      <a
        href="/register"
      >
        <s-button>{{ $t("header.action.register") }}</s-button>
      </a>
      <a
        ref="langSwitch"
        class="menu-item lang-switch"
        @click="showLangSelectionPanel = true"
      >
        <div class="lang-switch__action">
          <i class="iconfont icon-earth" />
          <span class="locale">{{ (langData.find(langDataItem => langDataItem.selected) || {}).text }}</span>
          <!-- TODO: -->
          <i class="iconfont icon-icon_down_arrow" />
        </div>


        <div
          v-if="showLangSelectionPanel"
          class="lang-list"
        >
          <div
            v-for="(langDataItem, index) in langData"
            :key="index"
            class="lang-item"
            :class="langDataItem.selected ? 'selected' : ''"
            @click="handleLangSwitch(index)"
          >
            {{ langDataItem.text }}
            <i
              v-if="langDataItem.selected"
              class="iconfont icon-ok"
            />
          </div>
          <!-- <div
            class="lang-item"
            :class="selectedLang === 'zhT' ? 'selected' : ''"
            @click="selectedLang = 'zhT'"
          >
            繁體中文
            <i
              v-if="selectedLang === 'zhT'"
              class="iconfont icon-ok"
            />
          </div> -->
        </div>
      </a>
      <i class="iconfont icon-menu" />
    </span>
  </header>
</template>

<script>
const cachedLang = localStorage.getItem('lang');
export default {
  name: "Header",
  data() {
    return {
      showSolution: false,
      showLangSelectionPanel: false,
      selectedLang: 'zhS',
      langData: []
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      // 如果语言选择器不存在，或者点击的位置不是语言选择器，则收起语言选择器面板
      if (!this.$refs.langSwitch || !this.$refs.langSwitch.contains(e.target)) {
        this.showLangSelectionPanel = false;
      }
    });

    // 若无缓存，则默认是简体中文
    const isZhS = !cachedLang || cachedLang === 'zhS';

    // 初始化数据
    this.langData = [
      {
        text: '简体中文',
        selected: isZhS
      },
      {
        text: '繁體中文',
        selected: !isZhS
      }
    ];
  },
  methods: {
    handleLangSwitch(index = 0) {
      // 切换语言选择面板
      this.langData.forEach(langDataItem => langDataItem.selected = false);
      this.langData[index].selected = true;
      // 实现繁简体切换
      const selectedLang = index === 0 ? 'zhS' : 'zhT';
      this.$i18n.locale = selectedLang;
      // 缓存选中的值
      localStorage.setItem('lang', selectedLang);
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
    }
  }
  .menu {
    position: absolute;
    top: 0;
    left: 180px;
    right: 0;
    background: 0 0;
    text-align: left;
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

// 覆盖element-ui样式

/deep/ .popper__arrow {
  // TODO: avoid important
  display: none !important;
}

.lang-list {
  position: absolute;
    top: 54px;
    right: -12px;
    background: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,.2);
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.2);
    overflow: hidden;
}

.lang-item {
    width: 127px;
    height: 40px;
    line-height: 40px;
    color: #474b51;
    text-align: left;
    padding: 0 15px;
    &:hover {
      background: $primary-color-light;
    }
    &.selected {
      color: $primary-color;
    }
}

.action {
  // .menu-item {
  //   border: 1px solid #0DB3A6;
  //   line-height: 30px;
  //   margin-top: 14px;
  //   margin-right: 12px;
  //   color: #0DB3A6;
  //   -webkit-border-radius: 2px;
  //   -moz-border-radius: 2px;
  //   border-radius: 2px;
  //   text-align: center;
  //   &.button:hover {
  //     background: #0DB3A6;
  //     color: #fff;
  //   }
  // }
  .lang-switch {
    border: none;
    padding: 0;
    position: relative;
    margin-right: 32px;
    cursor: pointer;
    .locale {
      margin: 0 5px;
      font-size: 14px;
    }
  }
}

.icon-down {
  font-size: 8px;
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

.solution-span {
  height: 36px;
  padding-left: 10px;
}

.lang-switch__action {
  display: flex;
  align-items: center;
  color: $primary-color;
}


.icon-ok {
  float: right;
}

.icon-menu {
  color: #1F2D3D;
  font-size: 30px;
  cursor: pointer;
  float: right;
  padding: 0 12px;;
  display: none;
}

@media screen and (max-width: 1000px) {
  .icon-menu {
    display: block;
  }

  .action .lang-switch, .menu {
    display: none;
  }

  .homepage {
    .logo {
      padding: 0 12px;
    }
  }
}
</style>
