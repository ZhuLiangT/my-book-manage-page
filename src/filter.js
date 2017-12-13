/**
 * Created by zhuliang on 2017/5/3.
 */
import Vue from 'vue'
Vue.filter( 'filterTopNewsData' , function(value,discount) {
  if(value=="" || value==null)
    return "";
  else{
    return value.substring(5,10)
  }
});
Vue.filter('folterData',function(data){
  return new Date(data).Format('yyyy-MM-dd hh:mm:ss');
});

Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


Vue.filter( 'filterNull' , function(value) {
  if(value==="" || value===null || value==="NULL" || value==="null")
    return '无';
  else{
    return value
  }
});

Vue.filter('filterAge',function(value){
  if(value==="" || value===null || value==="NULL" || value==="null")
    return 0+'岁';
  else{
    return value+'岁'
  }
})
Vue.filter('filterGrade',function(start,end){
    console.log(start)
  console.log(end)
})
