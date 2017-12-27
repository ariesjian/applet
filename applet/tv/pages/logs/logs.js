//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
//Page({
//   data: {
//     shareData: {
//       title: '自定义分享标题',
//       desc: '自定义分享描述',
//       path: '/page/API/pages/share/share'
//     }
//   },
//   onShareAppMessage: function () {
//     return this.data.shareData
//   }
// })
