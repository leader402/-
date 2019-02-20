Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:true,
    task:{

    }
  },
  changeChecked:function(){
    var c = !this.data.checked
    this.setData({
      checked:c
    })
  },
  onReady: function () {

  },
  onSubmit(event) {
    wx.showToast({
      title: `提交成功`,
      icon: 'none'
    });
    console.log(event)
    console.log(this.data.task)
  },
  formSubmit:function(event){
    var v = event.detail.value
    var detail = v.detail
    var note = v.note
    var time = v.time
    var price = v.price
    wx.navigateTo({
      url: '/pages/mytask/mytask?detail='+detail+'&note='+note+'&time='+time+'&price='+price,
    })
    wx.request({
      url: '',
      method:'POST',
      data:{v,detail,note,time,price},
      success: function(res){
        console.log(res.data);
      }
    })
  }
})