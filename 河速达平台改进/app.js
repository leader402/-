App({
  data: {
  },
  onLaunch: function () {
    var that = this
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: function (res) {
              that.globalData.user = res.userInfo
            },
            fail: function () {
              // 授权失败，跳转登陆
              wx.redirectTo({
                url: '/pages/login/login',
              })
            }
          })
        } else {
          //未授权, 跳转登录页面
          wx.redirectTo({
            url: '/pages/login/login',
          })
        }
      }
    })

  },
  globalData: {
    //用户的信息
    user: null,
    //后台访问的基础 url
    // baseUrl : 'http://localhost:8080'
    task:null,
    recvTask:[],
    finishTask:[],
  }
})
