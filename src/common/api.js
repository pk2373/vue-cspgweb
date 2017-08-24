/**
 * Created on 2017/6/19.
 */

'use strict';
export default {
  getSystem: '/AdminBaseController/SubSystem/list', //系统
  ServiceBranch: '/AdminBaseController/ServiceBranch/list', //网点
  getOrg: '/admin/organization/getOrgWithServiceBranch', //机构


  userSignin : 'userSignin',  //用户登录
  userSignout : 'userSignout', //用户退出登录

  //文章模块
  saveNews : 'saveNews', //保存文章
  getOneNews : 'getOneNews', //获取一篇文章
  getNewsList : 'getNewsList', //获取文章列表
  delOneNews : 'delOneNews' //删除一篇文章
};
