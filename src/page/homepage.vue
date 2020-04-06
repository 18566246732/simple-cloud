
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
            class="thunder"
            href="/"
          />
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
      <section class="cases">
        <h1 class="section-title cases">
          400,000+家企业的共同选择
        </h1>
        <div class="logo-list">
          <div
            v-for="(caseData, index) in casesData"
            :key="index"
            class="logo"
            @mousemove="setActive(casesData, index)"
          >
            <div
              class="img-box"
              :class="caseData.isActive ? 'active' : ''"
            >
              <img
                :src="caseData.imgURL"
                :alt="caseData.title"
              >
            </div>
            <p>{{ caseData.title }}</p>
          </div>
        </div>
        <div
          class="desc"
        >
          <i class="iconfont icon-quotation-up" />
          <p>{{ selectedCase && selectedCase.desc }}</p>
          <i class="iconfont icon-quotation-down" />
        </div>
      </section>
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
export default {
  components: {
      Header,
      Banner,
      Footer
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
      industriesData: [],
      casesData: []
    };
  },
  computed: {
    selectdTab() {
      return this.tabsData.find(tabData => tabData.isActive);
    },
    selectedCase() {
      return this.casesData.find(caseData => caseData.isActive);
    }
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
        desc: '可拼接式MES解决方案\n扫码报工、扫码质检、实时产量、生产跟踪、计件工资，实现智慧工厂第一步',
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
    const casesDataImgBaseURL = "https://blog-assets.jiandaoyun.com/index/scene";
    this.casesData = [
      {
        title: "杭州娃哈哈集团有限公司",
        desc: "简道云帮我把日报发送工作从过去的30分钟压缩到5分钟，从办公室转到windows平板，就连躺在被窝里都能发！回想过去通过微信消息汇总数据的日子，说多了都是泪。现在每天起的比别人晚，发的比别人早，质量比别人高，简道云帮我完美解决了前端数据汇总问题。",
        imgURL: `${casesDataImgBaseURL}/whh.png`,
        isActive: true,
      },
      {
        title: "中移铁通九江分公司",
        desc: "原来单位的OA系统，只有正式员工能用，没有移动端，而且系统也是死的不能个性化定制，无法满足我们日益变化的需求，而简道云的出现解决了企业内信息收集以及报表实时呈现的管理痛点，为一线管理人员和公司决策层提供第一手的实时数据。",
        imgURL: `${casesDataImgBaseURL}/zytt.png`,
        isActive: false,
      },
      {
        title: "安华卫浴宜昌营销服务中心",
        desc: "越是竞争激烈的行业，越是需要提高企业管理水平，提高企业服务标准，才能在竞争中脱颖而出，传统建材行业无论自上而下的区域代理管理还是经销商企业内部管理的提升都离不开行之有效的管理工具，简道云轻量级数据应用定制，设计搭建零门槛，跨平台操作运用自如，简单，有效，高性价比，是中小型企业提升内部信息化管理水平，激发管理创新的优秀平台工具，感谢简道云。",
        imgURL: `${casesDataImgBaseURL}/ahwy.png`,
        isActive: false,
      },
      {
        title: "武汉地铁运营有限公司",
        desc: "作为武汉地铁运营有限公司的一员，我深深感受到了简道云给我们工作上带来的便捷服务，在此深深的感谢。以前，因为工作需要，我们专业会有很多的夜班，夜班守几个地铁站，如果有问题，晚上出了问题，客运要给维调打电话，维调再给我们电话，完了还要写事情经过和处理流程，大大占用了额外的时间，降低了工作效率；现在，公司使用了简道云，晚上夜班，有问题维调直接报在简道云里面，我们看到问题后直接去处理，减少了多个电话沟通的流程，结束后也不需要写太多的事情经过和处理过程，按照编辑好的模板对应输入自己所解决的问题即可，文字简洁而又通俗易懂。",
        imgURL: `${casesDataImgBaseURL}/whdt.png`,
        isActive: false,
      },
      {
        title: "延长壳牌石油有限公司",
        desc: "简道云帮我把日报发送工作从过去的30分钟压缩到5分钟，从办公室转到windows平板，就连躺在被窝里都能发！回想过去通过微信消息汇总数据的日子，说多了都是泪。现在每天起的比别人晚，发的比别人早，质量比别人高，简道云帮我完美解决了前端数据汇总问题。",
        imgURL: `${casesDataImgBaseURL}/yckp.png`,
        isActive: false,
      }
    ];
    // 这里this.setActive不需要使用bind来绑定this, 因为它的执行环境rotateActions的上下文就是该vue实例
    this.$helper.rotateActions(0, this.setActive.bind(this, this.tabsData), {immediate: true});
  },
  methods: {
    /**
     * 根据下标，设置当前激活的面板
     *
     * @param {number} index 需要激活的下标
     */
    setActive(sectionData, index = 0) {
      // 重置开始切换标识位
      this.transitionStart = false;

      // 利用setTimeout阻止vue使用队列优化变量在一个tick内的变动，从而完成'is-sliding'这个class的切换
      setTimeout(() => {
        // 设置开始切换标识位，开启切换动画
        this.transitionStart = true;
      }, 0);

      sectionData.forEach(sectionDataItem => {
        sectionDataItem.isActive = false;
      });
      sectionData[index].isActive = true;
    },
    handleWorkFlowTabClick(index) {
      this.$helper.rotateActions(index, this.setActive.bind(this, this.tabsData), {immediate: true});
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
  background: url('https://blog-assets.jiandaoyun.com/index/home/spring_thunder_pc.jpg') center center no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  max-width: 100%;
  margin: 60px auto;
  cursor: pointer;
  height: 560px;
}

.workflow {
  background: linear-gradient(to bottom,#FFF 0,#F9F9F9 64%,#F5F5F5 97%);

}

.section-title {
  font-size: 36px;
  text-align: center;
  padding: 90px 0 50px;
  &.advantages {
    padding-bottom: 20px;
  }
  &.cases {
    font-weight: 200;
    font-family: none;
  }
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

.cases {
  background: #F3F8FC;
  padding-bottom: 50px;
  overflow: hidden;
  .logo-list {
    color: #666;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    .logo {
      display: inline-block;
      width: 200px;
      text-align: center;
      font-size: 12px;
      vertical-align: middle;
      margin: 10px 0;
    }
    .img-box {
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      cursor: pointer;
      width: 110px;
      height: 110px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      margin: 0 0 20px 45px;
      background: #fff;
      border: 1px solid #E7EAF1;
      &.active {
        background: #E7F4FF;
      }
    }
    img {
      width: 100%;
    }
  }
  .desc {
    font-size: 15px;
    line-height: 1.6;
    position: relative;
    max-width: 1000px;
    min-height: 240px;
    text-align: left;
    margin: 0 auto;
    padding: 60px 0;
    i {
      position: absolute;
      top: 8px;
      font-size: 61px;
      color: #E4E5E5;
    }
    .icon-quotation-up {
      left: -65px;
    }
    .icon-quotation-down {
      right: -65px;
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
  .section-title {
    font-size: 18px;
    text-align: center;
    padding: 40px 0 20px;
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

  .cases {
    .logo-list {
      width: 750px;
      -webkit-transition: all 218ms;
      -moz-transition: all 218ms;
      -o-transition: all 218ms;
      transition: all 218ms;
      height: 140px;
      .logo {
        width: 150px;
        height: 120px;
        p {
          margin-top: 8px;
        }
      }
      .img-box {
        opacity: 1;
        width: 80px;
        height: 80px;
        margin: 0 auto;
      }
    }
    .desc {
      width: 255px;
      padding: 15px;
      background: #fff;
      -webkit-box-shadow: 0 2px 12px 0 rgba(218,218,218,.6);
      box-shadow: 0 2px 12px 0 rgba(218,218,218,.6);
      -webkit-border-radius: 0 0 4px 4px;
      -moz-border-radius: 0 0 4px 4px;
      border-radius: 0 0 4px 4px;
      &::before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background: #fff;
        position: absolute;
        top: 0;
        left: 50%;
        -webkit-transform: rotate(45deg) translate(-50%,0);
        -moz-transform: rotate(45deg) translate(-50%,0);
        -ms-transform: rotate(45deg) translate(-50%,0);
        -o-transform: rotate(45deg) translate(-50%,0);
        transform: rotate(45deg) translate(-50%,0);
      }
    }
    .iconfont {
      display: none;
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
}

</style>
