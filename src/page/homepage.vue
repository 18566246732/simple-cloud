
<template>
  <div>
    <Header />
    <div class="main">
      <section class="slider">
        <a-carousel
          effect="fade"
          autoplay
        >
          <Banner
            v-for="(bannerDataItem, index) in bannerData"
            :key="index"
            :title="bannerDataItem.title"
            :desc="bannerDataItem.desc"
            :main-action-btn-text="bannerDataItem.mainActionBtnText"
            :sub-action-btn-text="bannerDataItem.subActionBtnText"
            :using-sub-action="bannerDataItem.usingSubAction"
            :img-u-r-l="bannerDataItem.imgURL"
            :class="[bannerDataItem.imgClass]"
          />
          <a
            href="/"
            class="thunder"
          >
            <img
              src="https://www.jiandaoyun.com/index/home/spring_thunder_mb.jpg"
              alt="spring_thunder_mb"
            >
          </a>
        </a-carousel>
      </section>
      <section class="workflow">
        <h1 class="section-title">
          和我们一起规范业务流程、促进团队协作
        </h1>
        <div class="content pc">
          <div class="tabs content-wrapper">
            <span
              v-for="(tabData, index) in tabsData"
              :key="index"
              class="tab"
              :class="tabData.isActive ? 'active' : ''"
              @click="handleWorkFlowTabClick(index)"
            >
              {{ tabData.title }}
            </span>
          </div>
          <div
            v-if="selectdTab"
            class="content-panel"
            :class="{'is-sliding': transitionStart}"
          >
            <p class="panel-desc">
              {{ selectdTab && selectdTab.desc }}
            </p>
            <img
              :src="selectdTab && selectdTab.imgURL"
              class="panel-img"
              alt="imgURL"
            >
          </div>
        </div>
        <div class="content mobile">
          <div
            v-for="(tabData, index) in tabsData"
            :key="index"
            class="tab-item"
          >
            <div class="title">
              {{ tabData.title }}
            </div>
            <div class="desc">
              {{ tabData.desc }}
            </div>
            <img :src="tabData.imgURL">
          </div>
        </div>
        <div class="learn-more">
          <a href="/index/func">了解更多功能</a>
        </div>
      </section>
      <section class="advantages">
        <h1 class="section-title advantages">
          灵活快速、人人可用
        </h1>
        <a-row class="content-wrapper">
          <a-col
            v-for="(advantageData, index) in advantagesData"
            :key="index"
            :xs="24"
            :sm="24"
            :md="8"
            :lg="8"
            :xl="8"
          >
            <img :src="advantageData.imgURL">
            <div class="title">
              {{ advantageData.title }}
            </div>
            <div class="desc">
              {{ advantageData.desc }}
            </div>
          </a-col>
        </a-row>
      </section>
      <section class="industries">
        <h1 class="section-title">
          帮助各行各业的企业提升工作效率
        </h1>
        <div class="content-wrapper">
          <div
            v-for="(industrieData, index) in industriesData"
            :key="index"
            :style="`background:url('${industrieData.imgURL}') no-repeat center;`"
            class="backgroud-img"
          >
            <div class="title">
              {{ industrieData.title }}
            </div><div class="desc">
              {{ industrieData.desc }}
            </div>
          </div>
        </div>
      </section>
      <Cases />
      <section class="help">
        <h1 class="title">
          即刻开始，创建自己的业务管理应用
        </h1>
        <div class="sub-title">
          我们通过以下方式为您提供帮助
        </div>
        <ul class="content-wrapper">
          <div class="help-item">
            <div class="help-content">
              <img
                class="help-img"
                src="https://blog-assets.jiandaoyun.com/index/home/help-doc.png"
              ><div class="help-title">
                帮助文档
              </div><div class="help-detail">
                通过帮助文档学习如何使用简道云，结合您对自身业务的了解，构建您的专属应用。
              </div>
            </div><a
              class="help-link"
              href="https://hc.jiandaoyun.com/doc/11143"
              target="_blank"
            >浏览帮助文档</a>
          </div><div class="help-item">
            <div class="help-content">
              <img
                class="help-img"
                src="https://blog-assets.jiandaoyun.com/index/home/app-custom.png"
              ><div class="help-title">
                应用定制
              </div><div class="help-detail">
                由咨询顾问深入了解您的业务，基于简道云功能，为您构建完善的业务管理应用。
              </div>
            </div><a
              class="help-link"
              href="https://www.jiandaoyun.com/index/custom/"
              target="_blank"
            >了解更多</a>
          </div><div class="help-item">
            <div class="help-content">
              <img
                class="help-img"
                src="https://blog-assets.jiandaoyun.com/index/home/official-train.png"
              ><div class="help-title">
                官方培训
              </div><div class="help-detail">
                提交您的培训需求，由官方提供培训课程，快速、深入地掌握简道云功能。
              </div>
            </div><a
              class="help-link"
              href="https://link.jiandaoyun.com/f/5c6e464feb6c6b3b2637f0ae"
              target="_blank"
            >提交培训需求</a>
          </div>
        </ul>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Cases from "../components/Cases";
export default {
  components: {
      Header,
      Banner,
      Footer,
      Cases
  },
  data() {
    return {
      bannerData: [],
      // 需要初始值，否则首次渲染会报错
      tabsData: [{
        title: '',
        desc: '',
        imgURL: '',
        isActive: true,
      }],
      transitionStart: false,
      advantagesData: [],
      industriesData: []
    };
  },
  computed: {
    selectdTab() {
      return this.tabsData.find(tabData => tabData.isActive);
    },
    // selectedCase() {
    //   return this.casesData.find(caseData => caseData.isActive);
    // }
  },
  mounted() {
    this.bannerData = [
      {
        title: '灵活易用的应用搭建平台',
        desc: '无需代码，即可快速、灵活地构建业务管理系统，满足企\n业个性化管理需求',
        mainActionBtnText: '立即体验',
        usingSubAction: true,
        subActionBtnText: '观看视频',
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/top-banner-build.png"
      },
      {
        title: '防控疫情 有序复工',
        desc: '3大远程办公解决方案、60天免费高级版、60天专线技术支持……推\n动企业有序复工',
        mainActionBtnText: '点击领取',
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/top-banner-epidemic.png",
        imgClass: 'epidemic'
      },
      {
        title: '生产管理1.0年终巨献',
        desc: '可拼接式MES解决方案<br/>扫码报工、扫码质检、实时产量、生产跟踪、计件工资，实现智慧工厂第一步',
        mainActionBtnText: '安装体验',
        usingSubAction: true,
        subActionBtnText: '查看详情',
        imgURL: "https://www.jiandaoyun.com/index/home/top-banner-produce.png",
        imgClass: 'produce'
      }
    ];
    this.tabsData = [
      {
        title: '1 数据录入',
        desc: '拖动字段来创建表单，获取来自员工和客户的信息',
        imgURL: 'https://blog-assets.jiandaoyun.com/index/home/form-new-cn.png',
        isActive: false,
      },
      {
        title: '2 业务流程',
        desc: '零代码构建自己的线上业务流程',
        imgURL: 'https://blog-assets.jiandaoyun.com/index/home/flow-new-cn.png',
        isActive: false,
      },
      {
        title: '3 团队协作',
        desc: '拖动字段来创建表单，获取来自员工和客户的信息',
        imgURL: 'https://blog-assets.jiandaoyun.com/index/home/coop-new-cn.png',
        isActive: false,
      },
      {
        title: '4 数据分析',
        desc: '简单拖拽即可完成数据分析，洞察变化，辅助决策',
        imgURL: 'https://blog-assets.jiandaoyun.com/index/home/report-new-cn.png',
        isActive: false,
      }
    ];

    this.advantagesData = [
      {
        title: "零编程开发",
        desc: "不需要代码和计算机基础，任何岗位的你都可学习使用简道云来创建应用。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/no-coding.png"
      },
      {
        title: "快速上线",
        desc: "数小时即可搭建一个业务管理应用，即使需求变动也可灵活修改。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/quick-online.png"
      },
      {
        title: "多平台支持",
        desc: "支持钉钉、企业微信、微信公众号、小程序。手机、平板、电脑随时办公。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/multi-platform.png"
      },
    ];
    this.industriesData = [
      {
        title: "互联网/信息技术",
        desc: "简道云可建立销售管理、数据管理等应用，满足互联网行业快速变化的业务需求。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/role-it.png"
      },
      {
        title: "制造业",
        desc: "简道云可建立生产管理、销售管理等应用，助力制造业精细化生产。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/role-product.png"
      },
      {
        title: "贸易/零售",
        desc: "简道云可建立销售管理、OA系统等应用，帮助商家扩展并管理客户。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/role-sale.png"
      },
      {
        title: "服务业",
        desc: "简道云可建立销售管理、数据管理等应用，提升服务品质。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/role-service.png"
      },
      {
        title: "建筑业",
        desc: "简道云可建立工程管理、生产管理等应用，帮助建筑企业提升效率。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/role-build.png"
      },
      {
        title: "教育",
        desc: "简道云可建立数据管理、销售管理等应用，教育管理体系。",
        imgURL: "https://blog-assets.jiandaoyun.com/index/home/role-edu.png"
      },
    ];
    // 这里this.$helper.setActive不需要使用bind来绑定this, 因为它的执行环境rotateActions的上下文就是该vue实例
    this.$helper.rotateActions(0, this.$helper.setActive.bind(this, this.tabsData), {immediate: true});
  },
  methods: {
    handleWorkFlowTabClick(index) {
      this.$helper.rotateActions(index, this.$helper.setActive.bind(this, this.tabsData), {immediate: true});
    }
  }
};
</script>

<style scoped lang="scss">

.slider {
  position: relative;
  width: 100%;
  height: 560px;
  margin-bottom: 54px;
  top: 0;
}

// 覆盖antd-vue轮播图组件的样式
/deep/ .ant-carousel {
  .slick-dots-bottom {
    z-index: 2;
    position: absolute;
    top: 570px;
    left: 0;
    right: 0;
    bottom: -60px;
    li {
      display: inline-block;
      margin: 0 5px;
      background-color: #E7E7E7;
      cursor: pointer;
      width: 26px;
      height: 6px;
      border-radius: 6px;
      button {
        height: 6px;
        border-radius: 6px;
        background-color: #E7E7E7;
      }
      &.slick-active button {
        background: $primary-color;
        width: 100%;
      }
    }
  }
  .slick-dots li button {
    width: 100%;
  }
}

@media screen and (max-width: 650px) {
  /deep/ .ant-carousel .slick-dots-bottom {
    top: 530px;
    li {
      margin: 0 7px;
      width: 6px;
      height: 6px;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;
    }
  }
}

.thunder {
  background-image: url('https://blog-assets.jiandaoyun.com/index/home/spring_thunder_pc.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  max-width: 100%;
  margin: 60px auto;
  cursor: pointer;
  height: 560px;
  img {
    width: 100%;
    height: auto;
  }
}

.workflow {
  background: linear-gradient(to bottom,#FFF 0,#F9F9F9 64%,#F5F5F5 97%);

}

.content-wrapper {
  // font-size: 18px;
  max-width: 1200px;
  margin: 0 auto;
}

.tabs {
  font-size: 18px;
  text-align: center;
  margin: 20px auto 40px;
}

.tab {
  display: inline-block;
  margin: 0 45px;
  position: relative;
  cursor: pointer;
  user-select: none;
  &::before, &::after {
    opacity: 0;
    content: '';
    width: 100%;
    height: 6px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    position: absolute;
    bottom: -8px;
    left: 0;
  }
  &::before {
    background: #E7E7E7;
  }
  &::after {
    background: #0DB3A6;
    width: 5px;
  }
  &:first-letter {
    font-size: 24px;
  }
  &.active::before, &.active::after {
    opacity: 1;
  }
  &.active::after {
    transition: width 3s linear;
    width: 100%;
  }
}

.panel {
  &-desc {
    color: #5E6D82;
  }
  &-img {
    height: 450px;
  }
}

.content-panel {
  transform: translate(-50px, 0);
  &.is-sliding {
    transform: translate(0, 0);
    transition: all .5s;
  }
}

.learn-more {
  text-align: center;
  padding: 50px 0;
  a {
    color: $primary-color;
  }
}

.advantages {
  padding-bottom: 40px;
  img {
    width: 98px;
    height: 98px;
  }
  .title {
    font-size: 16px;
    margin: 22px 0 16px;
  }
  .desc {
    color: #91A1B7;
    display: inline-block;
    width: 192px;
  }
}

.industries {
  padding-bottom: 50px;
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    .backgroud-img {
      display: inline-block;
      width: 310px;
      height: 173px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      -o-background-size: cover;
      margin: 50px 25px;
      position: relative;
    }
    .title {
      color: #fff;
      font-size: 16px;
      margin-top: 54px;
    }
    .desc {
      position: absolute;
      top: 126px;
      left: 6px;
      right: 6px;
      height: 86px;
      background: #fff;
      color: #5E6D82;
      text-align: left;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      -webkit-box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
      box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
      padding: 19px 15px;
    }
  }
}

.help {
  .title {
    font-size: 36px;
    color: #1F2D3D;
    padding-top: 70px;
  }
  .sub-title {
    font-size: 18px;
    color: #1F2D3D;
    margin: 20px 0 0;
  }
  .content-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-bottom: 60px;
    flex-wrap: wrap;
  }
  &-item {
    position: relative;
    width: 320px;
    height: 279px;
    -webkit-box-shadow: 0 3px 8px 0 rgba(0,0,0,.15);
    box-shadow: 0 3px 8px 0 rgba(0,0,0,.15);
    margin: 46px 15px 0;
    color: #1F2D3D;
    background-color: #fff;
  }
  &-content {
    padding: 34px 24px 0 0;
    text-align: left;
  }
  &-img {
    width: 47px;
    height: 47px;
    margin-left: 19px;
  }
  &-title {
    font-size: 20px;
    margin: 25px 0 15px 24px;
  }
  &-detail {
    font-size: 14px;
    margin-left: 24px;
    line-height: 26px;
  }
  &-link {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    color: #0DB3A6;
    font-size: 16px;
    border-top: solid #E9E9E9 1px;
  }
}

.content.mobile {
  display: none;
}

@media screen and (max-width: 650px) {
  .slider {
    margin-bottom: 0;
  }
  .advantages {
    .content-wrapper .ant-col{
      padding: 20px;
    }
    .desc {
      width: 90%;
    }
    .img {
      width: 76px;
      height: 76px;
    }
    .title {
      margin: 15px 0 8px;
      font-size: 12px;
    }
  }
  .tab {
    font-size: 15px;
    display: inline-block;
    position: relative;
    &:first-letter {
      font-size: 19px;
    }
  }
  .content {
    &.pc {
      display: none;
    }
    &.mobile {
      padding: 0 20px 20px;
      display: block;
      .title {
        font-size: 15px;
        display: inline-block;
        position: relative;
        &::before {
          background: #E7E7E7;
          opacity: 1;
          content: '';
          width: 100%;
          height: 6px;
          border-radius: 3px;
          position: absolute;
          bottom: -8px;
          left: 0;
        }
      }
      .desc {
        margin: 30px 0 22px;
        color: #5E6D82;
      }
      img {
        width: 100%;
      }
    }
  }
  .learn-more {
    padding: 20px 0;
  }
  .advantages {
    padding-bottom: 0;
    img {
      width: 76px;
      height: 76px;
    }
  }

  .industries {
    .content-wrapper .backgroud-img {
      margin: 30px 25px;
    }
  }

  .help {
    .title {
      padding-top: 40px;
      font-size: 18px;
    }
    .sub-title {
      font-size: 13px;
      margin: 15px 0;
    }
    .help-item {
      width: 277px;
      height: 236px;
      margin: 0 15px 24px;
    }
    .help-img {
      margin-left: 10px;
      width: 45px;
      height: 45px;
    }
    .help-title {
      margin: 25px 0 12px 15px;
      font-size: 17px;
    }
    .help-detail {
      margin-left: 15px;
      font-size: 13px;
      line-height: 22px;
    }
    .help-content {
      padding: 25px 15px 0 0;
    }
    .help-link {
      height: 40px;
      line-height: 40px;
      font-size: 15px;
    }
    .content-wrapper {
      margin-bottom: 10px;
    }
  }
  .thunder {
    background: none;
    height: 500px;
    background-color: #0024b2;
  }
}

</style>

<style lang="scss">
.section-title {
  font-size: 36px;
  text-align: center;
  padding: 90px 0 50px;
  &.advantages {
    padding-bottom: 20px;
  }
}
@media screen and (max-width: 650px) {
  .section-title {
    font-size: 18px;
    text-align: center;
    padding: 40px 0 20px;
  }
}
</style>
