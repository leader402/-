// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schools: [
      '河南大学新校区',
      '河南大学老校区',
      '民生学院'
    ],
    schoolSeled: 0,

    schools: [
      '河南大学新校区',
      '河南大学老校区',
      '民生学院'
    ],
    schoolSeled: 0,

    grades: [
      '大一',
      '大二',
      '大三',
      '大四'
    ],
    gradeSeled: 0,

    works: [
      '软件学院',
      '计算机学院',
      '数学院',
      '医学院'
    ],
    workSeled: 0,

    vehicles: [
      '自行车',
      '电动车',
      '小轿车',
      '大货车',
      '高铁',
      '坦克',
      '多功能装甲车',
      '两条腿'
    ],
    vehicleSeled: 0,
  },

  schoolChose: function(event) {
    var index = event.detail.value
    var val = this.data.schools[index]
    this.setData({
      schoolSeled: index
    })
  },

  gradeChose: function(event) {
    var index = event.detail.value
    var val = this.data.grades[index]
    this.setData({
      gradeSeled: index
    })
  },

  workChose: function(event) {
    var index = event.detail.value
    var val = this.data.works[index]
    this.setData({
      workSeled: index
    })
  },

  vehicleChose: function (event) {
    var index = event.detail.value
    var val = this.data.vehicles[index]
    this.setData({
      vehicleSeled: index
    })
  },

  submit:function(){
    //获取form表单的值，并跳转到主页
    wx.navigateTo({
      url: '/pages/taskroom/taskroom',
    })
  },

  onReady: function() {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})