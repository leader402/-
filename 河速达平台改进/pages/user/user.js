// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgTip:true,
  },

  onReady: function () {

  },

  //底部导航栏事件
  changeBar:function(event){
    var index = event.detail
    var url = ""
    if(index===0){
      url = "/pages/taskroom/taskroom"
    }else if(index===1){
      url = "/pages/mytask/mytask"
    }else{
      url = "/pages/user/user"
    }
    wx.redirectTo({
      url: url
    })
  },
  changeMsgTip: function(){
    var m = !this.data.msgTip
    this.setData({
      msgTip:m
    })
  }
})