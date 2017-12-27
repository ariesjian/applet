function processSubject(subject) {
  var title = subject.title;//标题
  var directors = subject.directors;
  var directorsStr = "";
  for (var index in directors) {//导演
    directorsStr = directorsStr + directors[index].name + "/";
  }
  if (directorsStr != "") {
    directorsStr = directorsStr.substring(0, directorsStr.length - 1);
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
  // var genresStr = "";
  // for (var index in genresStr) {//剧情
  //   genresStr = genresStr + genres[index] + "/";
  // }
  // if (genresStr != "") {
  //   genresStr = genresStr.substring(0, genresStr.length-2);
  // }
  var year = subject.year;
  var text = "名称：" + title + "\n导演：" + directorsStr + "\n主演：" + castsStr + "\n类型：" + genres + "\n上映年份：" + year + "（中国大陆）";
  subject.text = text;
}
function processSubjects(subjects){
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
}
module.exports={   //两个方法的封装
  processSubject: processSubject,
  processSubjects: processSubjects
}