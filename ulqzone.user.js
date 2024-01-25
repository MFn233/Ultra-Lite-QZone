// ==UserScript==
// @license      MIT
// @name         Ultra Lite QZone
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  重新排版并移除了许多冗余元素，搭配Dark Reader使用更佳。请调整主页排版至默认（“社交元素”）以取得最佳使用效果。
// @author       MFn
// @match        http://qzone.qq.com/*
// @match        https://qzone.qq.com/*
// @match        http://*.qzone.qq.com/*
// @match        https://*.qzone.qq.com/*
// @match        https://i.qq.com/?s_url=http%3A%2F%2Fuser.qzone.qq.com%2*
// @icon         https://user.qzone.qq.com/favicon.ico
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(".lay_wrap .lay_foot .login_device li a:hover {top:0 !important;background-color: #000000aa;border-radius: 15px;}");
    //登陆界面下方图标抖动bug。。。解决方式就是直接不位移

    GM_addStyle(".bg-body{background-image:none !important;}");
    GM_addStyle(".background-container{background-image:none !important;}");
    //去除背景图
    GM_addStyle(".qz-main.profile-main{border: 1px #e6e6e6 solid !important;border-radius: 3px;}");
    //主要部分边框，防止与背景连接
    GM_addStyle("a.qz-btn-vip.qz-btn-vip-open {visibility: hidden;}");
    GM_addStyle(".profile-hd-actions{display: none !important;}");
    GM_addStyle("i.ui-icon.icon-vip {display: none !important;}");
    //去VIP等
    GM_addStyle(".layout-nav .head-avatar {border: 1px #e6e6e6 solid !important;border-radius: 3px;bottom: 60px;");
    GM_addStyle("div#vipBottomAdContainer {display: none;}");
    //头像位置
    GM_addStyle(".head-nav .head-nav-menu {width: 912px;height: 50px;font-size: 14px;margin-left: -150px;border: 1px #e6e6e6 solid !important;border-radius: 3px;}")
    //头像下一排边框。。。可见架构混乱程度
    GM_addStyle(".layout-head .head-info {position: absolute;top: 180px;left: 680px !important;}");
    GM_addStyle("div#visitorsDiv {top: 170px;left: 850px;}");
    //info位置（就是空间名字）
    GM_addStyle(".layout-head .head-info, .layout-head .head-description a, .layout-head .head-name .user-name, .layout-head .head-detail-name .user-name, .layout-head .qz-progress-bar .progress-bar-info {color: rgba(100,100,100,0.99);}");
    //字体颜色修改
    GM_addStyle("a#site_hot_btn {display: none !important;}");
    GM_addStyle(".mod-side-nav.mod-side-nav-recently-used {display: none;}");
    //去广告
    GM_addStyle(".ui_avatar {border-radius: 100%;overflow: hidden;}");
    GM_addStyle(".feed .avatar a {border-radius: 100%;}");
    //圆形头像
    //以下是其他界面适配。。。（以上是main）
    GM_addStyle("div#feed_me {border: 1px #e6e6e6 solid !important;position: absolute;width: 592px;}");
    GM_addStyle("div#qz_poster_v4_editor_container_1 {border: 0.5px #e6e6e6 solid !important;width: 592px !important;}");
    GM_addStyle(".bg_mode.bg {border: 1px #e6e6e6 solid !important;padding-bottom: 100px;}");
    GM_addStyle(".mod_wrap.bg.mod-wrap {border: 1px #e6e6e6 solid !important;}");
    GM_addStyle(".top-fix-bar .top-fix-inner {background-color: #000000cc;box-shadow: 1px 1px 5px #000000bb;}");//top bar

    // Your code here...
})();
