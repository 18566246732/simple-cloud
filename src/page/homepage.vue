
<template>
  <div>
    <Header />
    <div class="main">
      <section class="slider">
        <a-carousel effect="fade">
          <div>
            <li class="banner-wrapper">
              <div class="banner-content">
                <h2 class="title">
                  灵活易用的应用搭建平台
                </h2>
                <div class="desc">
                  无需代码，即可快速、灵活地构建业务管理系统，满足企业个性化管理需求<br>
                </div>
                <a
                  href="https://www.jiandaoyun.com/signin"
                ><s-button
                  size="large"
                  type="primary"
                >立即体验</s-button></a>

                <a
                  data-videolink="https://blog-assets.jiandaoyun.com/jdy_intro.mp4"
                ><s-button
                  size="large"
                  plain
                >观看视频</s-button></a>
              </div>
              <img
                class="banner-figure"
                src="https://blog-assets.jiandaoyun.com/index/home/top-banner-build.png"
              >
            </li>
          </div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </section>
      <section class="workflow" />
      <section class="advantages" />
      <section class="industries" />
      <section class="cases" />
      <section class="help" />
    </div>
    <footer />
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
    components: {
        Header
    }
};
</script>

<style scoped lang="scss">
.banner-content {
  padding: 240px 0 0 20px;
  width: 600px;
}

.banner-figure {
  width: 665px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.banner-wrapper {
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  max-width: 1200px;
  margin: 0 auto;
  /* opacity: 0; */
}

.slider {
  position: relative;
  width: 100%;
  height: 560px;
  margin-bottom: 54px;
}

.banner-content {
  text-align: left;
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

/deep/ .ant-carousel .slick-dots-bottom {
  bottom: -12px;
}
</style>
