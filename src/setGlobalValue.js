/**
 * Created by zhuliang on 2017/10/16.
 */
import  './global'
import Vue from 'vue'

global.setSearchResult=function(val){
  if(isNull(val)){
    SEARCHRESULT ="";
  }else{
    SEARCHRESULT =val;
  }
}

global.setAdvancedSearchInfo = function(basicSearch,arSearch,LLsearch){
  BASICSEARCH = basicSearch;
  ARSEARCH = arSearch;
  LLSEARCH = LLsearch;
  LISTTYPE = 'advancedSearch';
  sessionStorage.setItem("BASICSEARCH",JSON.stringify(basicSearch));
  sessionStorage.setItem("ARSEARCH",JSON.stringify(arSearch));
  sessionStorage.setItem("LLSEARCH",JSON.stringify(LLsearch));
  sessionStorage.setItem("LISTTYPE","advancedSearch");
  console.log(sessionStorage.getItem("LISTTYPE"))

}
global.outAdvancedSearchInfo = function(){
  BASICSEARCH = null;
  ARSEARCH = null;
  LLSEARCH = null;
  LISTTYPE = null;
  sessionStorage.setItem("BASICSEARCH",null);
  sessionStorage.setItem("ARSEARCH",null);
  sessionStorage.setItem("LLSEARCH",null);
  sessionStorage.setItem("LISTTYPE",null);
}

global.setMAINBREADCRUMB = function(val){
  sessionStorage.setItem("MAINBREADCRUMB",JSON.stringify(val));
}
global.unsetMAINBREADCRUMB = function(){
  sessionStorage.setItem("MAINBREADCRUMB",null);
}


global.setBookListType = function(val){
  LISTTYPE = val;
  sessionStorage.setItem("LISTTYPE",val);
}

global.setSearchInfo = function(val){
  sessionStorage.setItem("SEARCHINFO",val);

}

global.unSetSearchInfo = function(){
  sessionStorage.setItem("SEARCHINFO",null);
  sessionStorage.setItem("LISTTYPE",null);
}

global.setLoginStatus = function(loginVaule){
  if(typeof loginVaule == "boolean"){
    global.ISLOGIN = loginVaule;
    sessionStorage.setItem("LOGINSTATUS",loginVaule);
  }
}
global.getLoginStatus=function(){
  return ISLOGIN;
}


global.setUserInfo = function(userinfo,orderInfo,saveInfo){
  global.USERINFO = userinfo
  global.ORDERINFO = [{id:-1}]
  for(let i=0;i<orderInfo.length;i++){
    global.ORDERINFO.push(orderInfo[i])
  }
  global.SAVEINFO = [{id:-1}]
  for(let i=0;i<saveInfo.length;i++){
    global.SAVEINFO.push(saveInfo[i])
  }
  global.USERINFO.saveInfos = null;
  global.USERINFO.orderInfo = null;
  sessionStorage.setItem("USERINFO",JSON.stringify(userinfo));
  if(!isNull(orderInfo)){
    sessionStorage.setItem("ORDERINFO",JSON.stringify(orderInfo));
  }
  if(!isNull(saveInfo)){
    sessionStorage.setItem("SAVEINFO",JSON.stringify(saveInfo));
  }

}



global.setRAHBook = function(val){
  global.RAHBOOK = val
  sessionStorage.setItem("RAHBOOK",JSON.stringify(val));
}


global.LoginOut = function(){
  global.USERINFO = null;
  global.LOGINSTATUS = false;
  sessionStorage.setItem("USERINFO",null);
  sessionStorage.setItem("LOGINSTATUS", false);
  sessionStorage.setItem("RAHBOOK", null);
}

global.orderNewBook = function(val){
  if(isNull(ORDERINFO))ORDERINFO = [];
  let temp = ORDERINFO;
  temp.push(val);
  ORDERINFO = temp;
  console.log(ORDERINFO)
  sessionStorage.setItem("ORDERINFO",JSON.stringify(ORDERINFO));
}

global.saveNewBook = function(val){
  if(isNull(SAVEINFO))SAVEINFO = [];
  var temp = SAVEINFO
  temp.push(val)
  SAVEINFO = temp
  sessionStorage.setItem("SAVEINFO",JSON.stringify(SAVEINFO));
}
global.removeSaveBook = function(val){
  let saveList =  SAVEINFO
  for(let i =1;i< saveList.length;i++){
    if(saveList[i].saveBookInfo.id == val){
      SAVEINFO.splice(i--,1);
    }
  }
  console.log(SAVEINFO)
  if(SAVEINFO.length==0){
    sessionStorage.removeItem("SAVEINFO")
  }else{
    sessionStorage.setItem("SAVEINFO",JSON.stringify(SAVEINFO) );
  }

}


global.isLoginFun=function(){
  if(!ISLOGIN){
    that.$Notice.error(setNoticConfig("请先登录再进行该操作！",null,null,"error"));
    return false;
  }else{
    return true;
  }
}


global.removeOrderBook = function(val){
  var temp = ORDERINFO;
  console.log(temp)
  for(let i =1;i< temp.length;i++){
    if(temp[i].orderBookInfo.id == val){
      temp.splice(i--,1);
    }
  }
  global.ORDERINFO = temp;
  console.log(ORDERINFO)
  if(ORDERINFO.length==0){
    sessionStorage.removeItem("ORDERINFO")
  }else{
    sessionStorage.setItem("ORDERINFO",JSON.stringify(ORDERINFO) );
  }
}


