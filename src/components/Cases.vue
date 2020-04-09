<template>
  <section class="cases">
    <h1 class="section-title">
      400,000+家企业的共同选择
    </h1>
    <div class="logo-list__container">
      <div
        class="logo-list"
        :style="style"
      >
        <div
          v-for="(caseData, index) in casesData"
          :key="index"
          class="logo"
          @click="handleCaseClick(casesData, index)"
          @mousemove="$helper.setActive(casesData, index)"
        >
          <div
            class="img-box"
            :class="[caseData.isActive ? 'active' : '', `index-${index}`]"
          >
            <img
              :src="caseData.imgURL"
              :alt="caseData.title"
            >
          </div>
          <p>{{ caseData.title }}</p>
        </div>
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
</template>

<script>
export default {
  data() {
    return {
      casesData: [],
      style: {
        transform: "translate3d(0px, 0px, 0px)",
        transition: "transform .3s"
      }
    };
  },
  computed: {
    selectedCase() {
      return this.casesData.find(caseData => caseData.isActive);
    }
  },
  mounted() {
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
  },
  methods: {
    handleCaseClick(casesData, index) {
      /**
       * 这里其实用js或者css都可以做，由于不推荐使用操作dom的方式，因此两者都需要js和css约定一个相同的值，
       * js需要知道一个logo的宽度，css需要知道logo的数量，
       * 相比较而言，logo数量会经常变动，而logo宽度变动较少，因此采用js的方式
       */
      if (window.__INITIAL_DATA__.isMobile) {
        this.style.transform = `translateX(-${index * 150}px)`;
      }
      this.$helper.setActive(casesData, index);
    }
  }
};
</script>

<style lang="scss" scoped>
$logo-width-mobile: 150px;
$logo-width-pc: 200px;

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
      width: $logo-width-pc;
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
  .section-title {
    font-weight: 200;
    font-family: none;
  }
}

@media screen and (max-width: 650px) {
  .cases {
    .logo-list__container {
      // 让第一个logo居中
      transform: translateX(50%) translateX(- $logo-width-mobile / 2);
    }
    .logo-list {
      width: 750px;
      -webkit-transition: all 218ms;
      -moz-transition: all 218ms;
      -o-transition: all 218ms;
      transition: all 218ms;
      height: 140px;
      .logo {
        width: $logo-width-mobile;
        height: 120px;
        p {
          margin-top: 8px;
        }
      }
      .img-box {
        margin: 0 auto;
        width: 63px;
        height: 63px;
        opacity: .5;
        & + p {
          color: #393939;
          font-size: 10px;
          opacity: .3;
        }
        &.active {
          opacity: 1;
          width: 80px;
          height: 80px;
          margin: 0 auto;
          & + p {
            font-size: inherit;
            opacity: 1;
          }
        }
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
}
</style>
