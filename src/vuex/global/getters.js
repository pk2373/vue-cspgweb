

export default {
  //获取机构
  getStoreSys (state){
    return state.system;
  },
  //获取机构
  getStoreOrg (state){
    return state.org;
  },
  //获取机构
  getStoreBranch (state){
    return state.Branch;
  },
  //获取用户信息
  getUserInfo (state){
    return state.userInfo;
  },

  //获取显示登录状态
  getIsShowLogin(state){
    return state.isShowLogin;
  },

  //获取显示隐藏状态1
  getVisibleOne(state){
    return state.visibleOne;
  },
  //获取显示隐藏状态2
  getVisibleTwo(state){
    return state.visibleTwo;
  }
};
