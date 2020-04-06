<template>
  <footer>
    <div class="content">
      <div
        v-for="(footerDataItem, index) in footerData"
        :key="index"
        class="link-wrapper"
        :class="footerDataItem.type"
        :style="footerDataItem.style"
      >
        <div class="title">
          {{ footerDataItem.title }}
        </div>
        <template v-if="footerDataItem.type === 'img'">
          <img src="https://www.jiandaoyun.com/index/wx_qrcode.jpg">
        </template>
        <template v-else>
          <a
            v-for="(menu, menuIndex) in footerDataItem.menus"
            :key="menuIndex"
            class="link"
            :href="menu.link || 'javascript:void(0)'"
            :target="menu.target || '_self'"
          >{{ menu.text }}</a>
        </template>
      </div>
    </div>
    <div class="copyright">
      <a
        href="http://www.beian.miit.gov.cn/"
        target="_blank"
      ><img
        class="record-icon"
        src="https://www.jiandaoyun.com/index/record_icon.png"
      ><span class="record-code">苏ICP备18065767号-8</span><span class="company-name">©2014-2019 帆软软件有限公司 版权所有</span></a>
    </div>
    <a
      class="technical-support-button"
      href="/help/chat_online"
      target="_blank"
    ><i class="iconfont icon-xiaoxi" /></a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerData: []
    };
  },
  mounted() {
    this.footerData = [
      {
        title: '产品',
        menus: [
          {
            text: '产品功能',
            link: "https://www.jiandaoyun.com/index/func"
          },
          {
            text: '更新日志',
            link: "https://hc.jiandaoyun.com/update",
            target: '_blank'
          }
        ]
      },
      {
        title: '关于我们',
        menus: [
          {
            text: '使用教程',
            link: "https://hc.jiandaoyun.com"
          },
          {
            text: '意见反馈',
            link: "https://jiandaoyun.com/f/5b62ae99cdf1db78b18292e6",
            target: '_blank'
          },
          {
            text: '企业介绍',
            link: "http://www.fanruan.com/company?utm_source=web&utm_medium=jdy&utm_campaign=footer",
            target: '_blank'
          },
          {
            text: '加入我们',
            link: "http://join.fanruan.com",
            target: '_blank'
          },
          {
            text: '微信服务号',
            link: "http://join.fanruan.com",
            target: '_blank'
          }
        ]
      },
      {
        title: '联系我们',
        type: 'text',
        menus: [
          {
            text: '服务热线：400-111-0890 (工作日：09:00-12:00；13:30-17:30)',
            link: ""
          },
          {
            text: '市场合作：marketing@jiandaoyun.com',
            link: "",
          }
        ]
      },
      {
        title: '微信服务号',
        type: 'img',
        menus: [
          {
            text: '服务热线：400-111-0890 (工作日：09:00-12:00；13:30-17:30)',
            link: ""
          },
          {
            text: '市场合作：marketing@jiandaoyun.com',
            link: "",
          }
        ]
      },
    ];
  }
};
</script>

<style lang="scss" scoped>
footer {
  background: #1C2036;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 0 50px;
  display: flex;
}

.link-wrapper {
  padding-left: 20px;
  text-align: left;
  width: 18%;
  .title {
    color: #91A1B7;
    margin-bottom: 27px;
  }
  .link {
    color: #C9CED9;
    margin-bottom: 10px;
    display: block;
  }
  &.text {
    width: 44%;
    a {
      pointer-events: none;
    }
  }
  &.img {
    width: 20%;
    img {
      width: 100px;
      height: 100px;
    }
  }
}

.record-code {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    margin: 0 10px;
    background-color: #91A1B7;
  }
}

.company-name {
  display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}


.copyright {
  padding: 0 10px 37px;
  a {
    color: #91A1B7;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  img {
    margin-right: 10px;
  }
}

.technical-support-button {
  position: fixed;
  bottom: 75px;
  right: 60px;
  z-index: 998;
  width: 56px;
  height: 56px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  background-color: #fc0;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: rgba(0,0,0,.16) 0 5px 14px;
  box-shadow: rgba(0,0,0,.16) 0 5px 14px;
  -webkit-transition: background-color 218ms;
  -moz-transition: background-color 218ms;
  -o-transition: background-color 218ms;
  transition: background-color 218ms;
}

.icon-xiaoxi {
  font-size: 32px;
  color: #fff;
}
</style>
