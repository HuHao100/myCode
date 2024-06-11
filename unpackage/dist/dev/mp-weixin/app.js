"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const util_api = require("./util/api.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/takeaway/takeaway.js";
  "./pages/community/community.js";
  "./pages/business/business.js";
  "./pages/orders/orders.js";
  "./pages/submitOrder/submitOrder.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$myRequest = util_api.myRequest;
  app.config.globalProperties.$hostURL = "http://localhost:9090";
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
