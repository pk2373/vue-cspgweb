
import Vue from 'vue';

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  inserted (el, option) {
    let defClass = 'el-input', defTag = 'input';
    let value = option.value || true;
    if (typeof value === 'boolean') {
      value = {cls: defClass, tag: defTag, foc: value};
    } else {
      value = {cls: value.cls || defClass, tag: value.tag || defTag, foc: value.foc || false};
    }
    if (el.classList.contains(value.cls) && value.foc){
      el.getElementsByTagName(value.tag)[0].focus();
    }
  }
});
