"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      pictures: [
        { id: "1", url: "../../static/swipe/c1.jpg" },
        { id: "2", url: "../../static/swipe/c2.jpg" },
        { id: "3", url: "../../static/swipe/c3.jpg" }
      ]
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: item.url,
        b: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Files/WeChatProjects/Fikaro/Fikaro/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
