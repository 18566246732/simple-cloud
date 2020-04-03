<template>
  <div>
    <li class="banner-wrapper">
      <div
        class="banner-content"
      >
        <h2 class="title">
          {{ title }}
        </h2>
        <!-- 插值来自代码中的固定数据，不会有xss风险 -->
        <!-- <div
          class="desc"
          v-html="desc"
        /> -->
        <pre class="desc">{{ desc }}</pre>
        <a
          :href="mainActionBtnURL"
        ><s-button
          size="large"
          type="primary"
        >{{ mainActionBtnText }}</s-button></a>

        <a
          v-if="usingSubAction"
          :href="subActionBtnURL"
        ><s-button
          size="large"
          plain
        >{{ subActionBtnText }}</s-button></a>
      </div>
      <img
        class="banner-figure"
        :src="imgURL"
      >
    </li>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "进入一个未知的空间"
    },
    desc: {
      type: String,
      default: "进入一个未知的空间, 发现不一样的世界"
    },
    mainActionBtnText: {
      type: String,
      default: "进入"
    },
    mainActionBtnURL: {
      type: String,
      default: "https://www.jiandaoyun.com/signin"
    },
    usingSubAction: {
      type: Boolean,
      default: false,
    },
    subActionBtnText: {
      type: String,
      default: "旋转"
    },
    subActionBtnURL: {
      type: String,
      default: "https://blog-assets.jiandaoyun.com/jdy_intro.mp4"
    },
    imgURL: {
      type: String,
      default: "https://blog-assets.jiandaoyun.com/index/home/top-banner-build.png"
    }
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
$banner-height: 560px;

.banner-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  // 限制住图片的左边，因为图片采用了绝对定位
  height: $banner-height;
  // 限制住图片的右边，因为图片采用了绝对定位
  position: relative;
}

.banner-figure {
  width: 665px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.banner-content {
  text-align: left;
  padding: 240px 0 0 20px;
  width: 600px;
  .title {
    font-size: 44px;
    color: #1F2D3D;
    line-height: 62px;
  }
  .desc {
    width: 400px;
    height: 50px;
    font-size: 16px;
    color: #5E6D82;
    margin: 12px 0 26px;
    line-height: 25px;
  }
}

.epidemic {
  img {
    width: 650px;
    bottom: 65px;
    left: 540px;
  }
  .desc {
    width: 480px;
  }
}

.produce {
  img {
    width: 560px;
    bottom: 30px;
  }
  .desc {
    width: 561px;
  }
}

</style>
