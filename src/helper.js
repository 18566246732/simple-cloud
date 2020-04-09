export const helper = {
  _data: {
    activeTimer: null
  },
  /**
   * 根据设定的时间间隔，自动执行某个动作
   *
   * @param {Number} index 需要的动作的下标
   * @param {Object} options 激活方式，可以设置立即执行
   * @param {Number} interval 执行的间隔
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
  },
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
};
