
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
        <h1 class="title">
          和我们一起规范业务流程、促进团队协作
        </h1>
        <div class="tabs content-wrapper">
          <span
            v-for="(tabData, index) in tabsData"
            :key="index"
            class="tab"
            :class="tabData.isActive ? 'active' : ''"
            @click="$helper.rotateActions(index, setActive, {immediate: true})"
          >
            {{ tabData.tabTitle }}
          </span>
        </div>
        <div
          v-if="selectdTab"
          class="content-panel"
          :class="{'is-sliding': transitionStart}"
        >
          <p class="panel-desc">
            {{ selectdTab && selectdTab.tabDesc }}
          </p>
          <img
            :src="selectdTab && selectdTab.tabImgURL"
            class="panel-img"
            alt="tabImgURL"
          >
        </div>
      </section>
      <section class="industries" />
      <section class="cases" />
      <section class="help" />
    </div>
    <footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
export default {
  components: {
      Header,
      Banner
  },
  data() {
    return {
      bannerData: [],
      // 需要初始值，否则首次渲染会报错
      tabsData: [{
        tabTitle: '',
        tabDesc: '',
        tabImgURL: '',
        isActive: true,
      }],
      transitionStart: false
    };
  },
  computed: {
    selectdTab() {
      return this.tabsData.find(tabData => tabData.isActive);
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
        tabTitle: '1 数据录入',
        tabDesc: '拖动字段来创建表单，获取来自员工和客户的信息',
        tabImgURL: 'https://blog-assets.jiandaoyun.com/index/home/form-new-cn.png',
        isActive: false,
      },
      {
        tabTitle: '2 业务流程',
        tabDesc: '零代码构建自己的线上业务流程',
        tabImgURL: 'https://blog-assets.jiandaoyun.com/index/home/flow-new-cn.png',
        isActive: false,
      },
      {
        tabTitle: '3 团队协作',
        tabDesc: '拖动字段来创建表单，获取来自员工和客户的信息',
        tabImgURL: 'https://blog-assets.jiandaoyun.com/index/home/coop-new-cn.png',
        isActive: false,
      },
      {
        tabTitle: '4 数据分析',
        tabDesc: '简单拖拽即可完成数据分析，洞察变化，辅助决策',
        tabImgURL: 'https://blog-assets.jiandaoyun.com/index/home/report-new-cn.png',
        isActive: false,
      }
    ];
    // 这里this.setActive不需要使用bind来绑定this, 因为它的执行环境rotateActions的上下文就是该vue实例
    this.$helper.rotateActions(0, this.setActive, {immediate: true});
  },
  methods: {
    /**
     * 根据下标，设置当前激活的面板
     *
     * @param {number} index 需要激活的下标
     */
    setActive(index = 0) {
      // 重置开始切换标识位
      this.transitionStart = false;

      // 利用setTimeout阻止vue使用队列优化变量在一个tick内的变动，从而完成'is-sliding'这个class的切换
      setTimeout(() => {
        // 设置开始切换标识位，开启切换动画
        this.transitionStart = true;
      }, 0);

      this.tabsData.forEach(tabData => {
        tabData.isActive = false;
      });
      this.tabsData[index].isActive = true;
    },

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

.workflow .title {
  font-size: 36px;
    text-align: center;
    padding: 90px 0 50px;
}

.content-wrapper {
  font-size: 18px;
  text-align: center;
  margin: 20px auto 40px;
}

.tabs {
  font-size: 18px;
  text-align: center;
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

</style>
