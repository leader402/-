const app = getApp()
let RequestBaseUrl = app.globalData.baseUrl
Page({
  onLoad: function () {
  },
  login: function (e) {
    let that = this
    //用户登陆
    wx.login({
      success: function (r) {
        let code = r.code//登录凭证
        if (code) {
          //请求用户标识，如果是新用户则上传用户信息
          // wx.request({
          //   url: RequestBaseUrl + '/user/'+code,
          //   success: res => {
          //     //status 0 错误、1 创建新用户、2 老用户
          //     if (res.data.status !== 0){
          //       let user = JSON.parse(res.data.data)
          //       app.globalData.user = user
          //       if (res.data.status === 1) {
          //         //上传用户信息
          //         that.uploadUserInfo(user)
          //       }
          //     } 
          //   } 
          // })
          //如果用户授权信息才会跳转主界面
          wx.getUserInfo({
            success: () => {
              //判断用户是否注册，如果注册跳转主页，未注册跳转注册页面
              wx.redirectTo({
                url: '/pages/login/register/register',
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        console.log('登陆失败')
      }
    })
  },
  uploadUserInfo: user => {
    wx.getUserInfo({
      success: function (res) {
        user.imgurl = res.userInfo.avatarUrl
        user.name = res.userInfo.nickName
        wx.request({
          url: RequestBaseUrl + '/user',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: user,
        })
      },
      fail: function () {
        console.log('获取用户x信息失败')
      }
    })
  }
})