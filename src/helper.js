export const helper = {
  _data: {
    activeTimer: null
  },
  /**
   * 根据设定的时间间隔，自动执行某个动作
   *
   * @param {number} index 需要的动作的下标
   * @param {object} options 激活方式，可以设置立即执行
   * @param {number} interval 执行的间隔
   */
  rotateActions(index = 0, fn, options = {}, interval = 3000) {
    // 先清除，防止定时器堆积
    clearTimeout(this._data.activeTimer);

    this._data.activeTimer = setTimeout(() => {
      // 执行动作应该是以函数的形式
      if (typeof fn === 'function') {
        fn(index % 4);
      }
      // 递归自身以循环执行
      this.rotateActions((index + 1) % 4, fn);
    }, options.immediate ? 0 : interval);
  }
};
