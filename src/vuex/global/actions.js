'use strict';

import { post } from '@/common/require';
import api from '@/common/api';
import {localStore} from '@/common/storage';

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
  //获取权限
  getAuths({commit}, params = {}){
    return post({
      url: api.getAuths,
      data: params
    }).then(res => {
      //设置用户信息
      commit('setUserInfo', res.data);
      commit('hideLogin');
      localStore.set('userInfo',JSON.stringify(res.data))
      return res;
    }).catch( () => {
      commit('showLogin');
      localStore.remove('secret');
      localStore.remove('setUserInfo');
    });
  },
  //登录
  login({commit}, params = {}){
    return post({
      url: api.login,
      data: params
    }).then(res => {
       //设置用户信息
      localStore.set('secret',res.data.secret);
      return res;
    });
  },
  //退出登录
  userLogout({commit}, params = {}){
    let userInfo = JSON.parse(localStore.get('userInfo'));
    return post({
      url: api.logout,
      data: {
        systemId: userInfo.currentSystem.id
      }
    }).then(res => {
      //清除本地数据
      commit('showLogin');
      localStore.remove('secret');
      localStore.remove('setUserInfo');
      //清空用户信息
      commit('setUserInfo', {});

    });
  }
};
