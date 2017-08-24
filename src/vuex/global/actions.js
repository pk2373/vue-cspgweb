'use strict';

import { post } from '@/common/require';
import api from '@/common/api';
import {localStore} from '@/common/storage';

//刷新路由视图
const reloadRouterView = (commit) => {
  commit('setRouterViewShow', false);
  setTimeout(() => {
    commit('setRouterViewShow', true);
  });
};

export default {
  //获取系统
  getSystem({commit}, params = {}){
    return post({
      url: api.getSystem,
      data: params
    }).then(res => {
      //设置用户信息
      commit('setSystem', res.data);
      return res;
    });
  },
  //获取机构
  getOrg({commit}, params = {}){
    return post({
      url: api.getOrg,
      data: params
    }).then(res => {
      //设置用户信息
      commit('setOrg', res.data);
      return res;
    });
  },
  //获取网点
  getBranch({commit}, params = {}){
    return post({
      url: api.ServiceBranch,
      data: params
    }).then(res => {
      //设置用户信息
      commit('setBranch', res.data);
      return res;
    });
  },
  //登录
  loginByPass({commit}, params = {}){
    return post({
      url: api.userSignin,
      data: params
    }).then(res => {
      //刷新路由视图
      reloadRouterView(commit);
       //设置用户信息
      commit('setUserInfo', res.data);
      return res;
    });
  },
  //退出登录
  logoutById({commit}, params = {}){
    return post({
      url: api.userSignout,
      data: params
    }).then(res => {
      //刷新路由视图
      reloadRouterView(commit);
      //清除本地数据
      localStore.remove('userInfo');
      //清空用户信息
      commit('setUserInfo', {});

    });
  }
};
