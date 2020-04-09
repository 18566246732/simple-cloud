import Vue from 'vue';
import App from './App.vue';

// 使用多语言工具包进行繁简体切换
import VueI18n from 'vue-i18n';

// 按需引入，减小runtime~chunk的大小
import { Carousel, Col, Row, Drawer } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import Button from "./components/Button.vue";

import "./styles/index.scss";

// 多语言数据
import { zhSimplified } from "./locale/zh-simplified";
import { zhTraditional } from "./locale/zh-traditional";

// 引入辅助函数
import { helper } from "./helper";
// 挂载
Vue.prototype.$helper = helper;

// 根据设备宽度判断是否移动端视图
const deviceWidth = document.documentElement.clientWidth;
const isMobile = deviceWidth < 750;

// 挂载全局数据
window.__INITIAL_DATA__ = {
  isMobile
};

Vue.config.productionTip = false;
Vue.use(VueI18n);

// 使用第三方组件
[Carousel, Col, Row, Drawer].forEach(component => {
  Vue.use(component);
});

// 注册全局组件
const components = [
  {'s-button': Button}
];
components.forEach(component => { // register component
  const name = Object.keys(component)[0];
  !Vue.options.components[name] && Vue.component(name, component[name]);
});

const messages = {
  zhS: zhSimplified,
  zhT: zhTraditional
};

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zhS',
  messages
});


new Vue({
  render: h => h(App),
  i18n
}).$mount('#app');

// 通过js设置动态的设置meta
document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no";
