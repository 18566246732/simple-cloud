<template>
  <button
    class="simple-cloud-button"
    :class="[
      type ? `s-button-${type}` : '',
      size ? `s-button-${size}` : '',
      {
        'is-plain': plain
      }]"
  >
    <slot />
    <!-- <span class="text"></span> -->
  </button>
</template>

<script>
export default {
  name: "SButton",
  props: {
    type: {
      type: String,
      default: "initial" // white -> colored
    },
    plain: Boolean,
    size: {
      type: String,
      default: "small"
    }
  }
};
</script>

<style scoped lang="scss">
.simple-cloud-button {
  border: 1px solid $primary-color;
  line-height: 30px;
  margin-top: 14px;
  margin-right: 12px;
  color: $primary-color;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  padding: 0 25px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  &.s-button-initial:hover {
    background: $primary-color;
    color: #fff;
  }
  &.is-plain:hover {
    background: $primary-color-light;
    color: $primary-color;
  }
  &.s-button-primary {
    background-color: $primary-color;
    color: white;
    &:hover {
      background: $primary-color-heavy;
    }
  }
  &.s-button-large {
    line-height: 58px;
    font-size: 20px;
    padding: 0 36px;
  }

}
</style>
