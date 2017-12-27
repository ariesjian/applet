//index.js
//获取应用实例
var app = getApp()
Page({
  data: {   //这里是轮播图的数据信息
    imgUrls: [
      'http://pic3.qiyipic.com/common/lego/20170823/cf87222579874a628d9c6a7e95ff6f54.jpg?src=focustat_0_20130527_8',
      'http://pic6.qiyipic.com/common/lego/20170819/8b2fdf5df7e848f1a5bef03a5fc550c1.jpg?src=focustat_0_20130527_9',
      'http://pic2.qiyipic.com/common/lego/20170827/665e6bdf53f64ca7ad6777f6186271c1.jpg?src=focustat_0_20130527_4',
      'http://pic3.qiyipic.com/common/lego/20170828/16178886068a457092bad191100a2db9.jpg?src=focustat_0_20130527_1',
      'http://pic8.qiyipic.com/common/lego/20170828/31bb3ab6444d4aec88bf10ca8258e560.jpg?src=focustat_0_20130527_2',
      'http://pic0.qiyipic.com/common/lego/20170828/4e278a3a318f4bd591cc9bf8f6d4c3ea.jpg?src=focustat_0_20130527_3'
    ],
    movies: [],
    hidden: false,
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function (options) {
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
  detail: function (e) {
    getApp().detail(e);  //调用公共方法里面的app方法
  },
  processSubject(subject) {
    var title = subject.title;//标题
    var directors = subject.directors;
    var directorsStr="";
    for (var index in directors){//导演
      directorsStr = directorsStr + directors[index].name+"/";
    }
    if (directorsStr!=""){
      directorsStr = directorsStr.substring(0, directorsStr.length-1);
    }
    var casts = subject.casts;
    var castsStr = "";
    for (var index in casts) {//主演
      castsStr = castsStr + casts[index].name + "/";
    }
    if (castsStr != "") {
      castsStr = castsStr.substring(0, castsStr.length - 1);
    }
    var genres = subject.genres;
    var genresStr = "";
    for (var index in genres) {//剧情
      genresStr = genresStr + genres[index] + "/";
    }
    if (genresStr != "") {
      genresStr = genresStr.substring(0, genresStr.length - 1);
    }
    var year = subject.year;
    var text = "名称：" + title + "\n导演：" + directorsStr + "\n主演：" + castsStr + "\n类型：" + genresStr+"\n上映年份："+year+"（中国大陆）";
    subject.text=text;
  },
  processSubjects(subjects){
    for(var i = 0; i<subjects.length;i++){
      var subject = subjects[i];
      this.processSubject(subject);
    }
  },
  loadMovie: function () {
    var page = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      method: "GET",
      data:{},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        page.processSubjects(subjects)
        page.setData({ movies: subjects,hidden:true});
      }
    })
  }

})

