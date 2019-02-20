Page({
  data: {
    map: {
      lat: 0,
      lng: 0,
      hasMarkers: false
    },
    nav: {},
    user: null,
  },

  onLoad: function() {
    var that = this
    this.initMarkers(that)
  },
  // 页面加载时执行的函数
  onReady: function(e) {
    //注册 map 组件
    this.mapCtx = wx.createMapContext('myMap')
  },


  //点击气泡处理函数
  //点击气泡显示商家具体信息
  calloutHandle: function(callout) {
    wx.navigateTo({
      url: "/pages/shopInfo/shopInfo?id=" + callout.markerId + "&operate=shop-detail",
    })
  },

  //将地图中心移动到当前定位点，需要配合map组件的show-location使用
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },

  //请求标记点数据，并定位当前地点
  initMarkers: function(that) {
    // 获取定位和标记点，并且移动到该定位
    wx.getLocation({
      type: 'gcj02',
      //精准定位
      // altitude: true,
      success: function(res) {
        // 定位当前位置
        that.setData({
          'map.lng': res.longitude,
          'map.lat': res.latitude
        })
      }
    })

    that.setData({
      'map.hasMarkers': true
    })
  },


})