
Page({
  data: {   
movie:{},
shareData: {
      title: '电影分享',
      desc: '分享给微信好友',
      path: '../index/index'
    }
  },
  onLoad: function (options) {
    console.log(options);
    this.loadMovie(options.id);
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  loadMovie: function (id) {
    var page = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/subject/' + id,
      method: "GET",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var subject = res.data;
        page.setData({ movie: subject, hidden: true });
      }
    })
  },
    onShareAppMessage: function () {
    return this.data.shareData
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


