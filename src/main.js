import Vue from 'vue';
import App from './App.vue';

// 使用多语言工具包进行繁简体切换
import VueI18n from 'vue-i18n';

// 按需引入，减小runtime~chunk的大小
import { Button, Dropdown, DropdownItem, DropdownMenu } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

import "./styles/index.scss";
import { zhSimplified } from "./locale/zh-simplified";
import { zhTraditional } from "./locale/zh-traditional";

Vue.config.productionTip = false;
Vue.use(VueI18n);

[Button, Dropdown, DropdownItem, DropdownMenu].forEach(component => {
  Vue.use(component);
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
