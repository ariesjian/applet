//logs.js
var util = require('../../utils/util.js');
var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  data: {
    inputVal:'',
    movies: [],
    hidden: true,

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
  detail:function(e){
  getApp().detail(e);  //调用公共方法里面的app方法
  },
  bindKeyInput:function(e){
    this.setData({ inputVal:e.detail.value})
  },
  search:function(){
    this.setData({ hidden:false})
    var page = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/search?q=' + page.data.inputVal,
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
  // detail: function (e) {
  //   wx.navigateTo({
  //     url: '../detail/detail'
  //   })
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
