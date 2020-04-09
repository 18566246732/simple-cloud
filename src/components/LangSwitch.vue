<template>
  <a
    ref="langSwitch"
    class="menu-item lang-switch"
    @click="showLangSelectionPanel = true"
  >
    <span class="lang-switch__action">
      <i class="iconfont icon-earth" />
      <span class="locale">{{ (langData.find(langDataItem => langDataItem.selected) || {}).text }}</span>
      <!-- TODO: -->
      <i class="iconfont icon-icon_down_arrow" />
    </span>
    <a-drawer v-if="mode === 'drawer'" />
    <a-drawer
      v-if="mode === 'drawer'"
      placement="bottom"
      :closable="false"
      height="100"
      :visible="showLangSelectionPanel"
      @close="showLangSelectionPanel = false"
    >
      <a href="/">
        <div
          v-for="(langDataItem, index) in langData"
          :key="index"
          class="lang-item drawer"
          :class="langDataItem.selected ? 'selected' : ''"
          @click="handleLangSwitch(index)"
        >
          {{ langDataItem.text }}
        </div>
      </a>
    </a-drawer>
    <template v-else>
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
      </div>
    </template>

  </a>
</template>

<script>
export default {
  props: {
    langData: {
      type: Array,
      default: () => {}
    },
    mode: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showLangSelectionPanel: false,
      selectedLang: 'zhS',
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      // 如果语言选择器不存在，或者点击的位置不是语言选择器，则收起语言选择器面板
      if (!this.$refs.langSwitch || !this.$refs.langSwitch.contains(e.target)) {
        this.showLangSelectionPanel = false;
      }
    });
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
<style lang="scss" scoped>

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
  &.drawer {
    height: 50px;
    border-bottom: solid 1px #C9CED9;
    padding: 0 25px;
    line-height: 50px;
    width: 100%;
    &:last-child {
      border-bottom: none;
    }
  }
}

.lang-switch__action {
  display: flex;
  align-items: center;
  color: $primary-color;
}

.lang-switch {
  border: none;
  padding: 0;
  position: relative;
  display: inline-block;
  margin-right: 32px;
  cursor: pointer;
  .locale {
    margin: 0 5px;
    font-size: 14px;
  }
  /deep/ .ant-drawer-body {
    padding: 0;
  }
}

.icon-ok {
  float: right;
}
</style>
