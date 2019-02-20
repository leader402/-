// pages/taskroom/taskroom.js
import Dialog from '../../dist/dialog/dialog'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/static/img/legs3.png',
      '/static/img/legs.jpg',
      '/static/img/legs2.png'
    ],
    tasks:[{
      name:'农夫山泉',
      addr:'华苑公寓6号楼322',
      money:'2元',
      detail:'我要买一瓶么得感情的水'
    }, {
        name: '送餐',
        addr: '华苑公寓6号楼402',
        money: '10元',
        detail: '我要买一瓶么得感情的水'
      },{
        name: '农夫山泉',
        addr: '华苑公寓6号楼505',
        money: '10元',
        detail: '我要买一瓶么得感情的水'
      }, {
        name: '农夫山泉',
        addr: '华苑公寓6号楼505',
        money: '10元',
        detail: '我要买一瓶么得感情的水'
      }, {
        name: '农夫山泉',
        addr: '华苑公寓6号楼505',
        money: '10元',
        detail: '我要买一瓶么得感情的水'
      }
      ]
  },

  onReady: function () {

  },
  recvTask: function(event){
    var that = this
    Dialog.confirm({
      message: '确认接收任务？'
    }).then(() => {
      Dialog.alert({
        message: '成功接收任务'
      }).then(() => {
        var index = event.currentTarget.dataset.taskIndex
        var task = that.data.tasks[index]
        app.globalData.recvTask.push(task)

        var tempTasks = that.data.tasks
        tempTasks.splice(index, 1)
        that.setData({
          tasks: tempTasks
        })
      })
    }).catch(() => {
      Dialog.alert({
        message: '放弃任务'
      }).then(() => {
      });
    });
  },
  detailTask: function(event){
    wx.navigateTo({
      url: '/pages/taskroom/task/task',
    })
  },
  //底部导航栏事件
  changeBar: function (event) {
    var index = event.detail
    var url = ""
    if (index === 0) {
      url = "/pages/taskroom/taskroom"
    } else if (index === 1) {
      url = "/pages/mytask/mytask"
    } else {
      url = "/pages/user/user"
    }
    wx.redirectTo({
      url: url
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.request({
      url: '',
      method: 'POST',
      data: {},
      success: function (res) {
        console.log(res.data);
      }
    })
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },


})