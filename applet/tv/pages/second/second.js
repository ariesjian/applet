//index.js
//获取应用实例
var subjectUtil = require('../../utils/subjectUtil.js');
var app = getApp()
Page({
  data: {   //这里是轮播图的数据信息
    movies: [],
    hidden: false,

  },
  onLoad: function (options) {
    this.loadMovie();
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  detail: function (e) {
    getApp().detail(e);  //调用公共方法里面的app方法
  },
  loadMovie: function () {
    var page = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      method: "GET",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        subjectUtil.processSubjects(subjects)
        page.setData({ movies: subjects, hidden: true });
      }
    })
  },
// detail:function(e){
// wx.navigateTo({
//   url: '../detail/detail'
// })
// }
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
