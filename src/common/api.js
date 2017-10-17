/**
 * Created on 2017/6/19.
 */

'use strict';
export default {
  getSystem: '/AdminBaseController/SubSystem/list', //系统
  ServiceBranch: '/AdminBaseController/ServiceBranch/list', //网点
  getOrg: '/admin/organization/getOrgWithServiceBranch', //机构
  login : '/admin/LoginController/login',  //用户登录
  logout : '/admin/InitController/logOut', //用户退出登录
  getAuths : '/admin/InitController/getAuths' //获取权限
};
