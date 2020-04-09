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
    <div class="menu">
      <header-menu />
    </div>
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
      <lang-switch :lang-data="langData" />
      <i
        class="iconfont icon-menu"
        @click="drawerVisible = true"
      />
    </span>
    <a-drawer
      placement="right"
      class="static-drawer"
      :closable="false"
      width="60%"
      :visible="drawerVisible"
      @close="drawerVisible = false"
    >
      <div class="drawer__menu">
        <header-menu :disable-panel="true" />
      </div>
      <div class="drawer__lang-switch">
        <lang-switch
          mode="drawer"
          :lang-data="langData"
        />
      </div>
    </a-drawer>
  </header>
</template>

<script>
const cachedLang = localStorage.getItem('lang');

import HeaderMenu from "./HeaderMenu";
import LangSwitch from "./LangSwitch";
export default {
  name: "Header",
  components: {
    HeaderMenu,
    LangSwitch
  },
  data() {
    return {
      drawerVisible: false,
      langData: []
    };
  },
  mounted() {
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
  .action {
    position: absolute;
    top: 0;
    right: 0;
  }
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

.menu {
  position: absolute;
  top: 0;
  left: 180px;
  right: 0;
  background: 0 0;
  text-align: left;
}

.drawer__menu {
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 80px;
  right: 0;
  overflow: auto;
  /deep/ .menu-item {
    display: block;
    color: #1F2D3D;
    line-height: 60px;
  }
}

.drawer__lang-switch {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  /deep/ .lang-switch__action {
    display: block;
    color: #1F2D3D;
    line-height: 60px;
    .locale {
      font-size: 16px;
    }
  }
}

.static-drawer {
  transform: none !important;
}
</style>
