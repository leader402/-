import Dialog from '../../dist/dialog/dialog'
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 4,
    tasks: [],
    finishTasks:[],
    ready:{}
  },
  
  onLoad:function(options){
    options.addr = '河南大学金明校区'
    this.setData({
      ready:options,
    })
  },
  onReady: function () {
    this.setData({
      tasks: app.globalData.recvTask,
      finishTasks: app.globalData.finishTask
    })
  },
  deteleTask:function(event){
    var that = this
    Dialog.confirm({
      message: '确认删除任务？'
    }).then(() => {
      var index = event.currentTarget.id
      var tasks = that.data.tasks
      tasks.splice(index, 1)
      that.setData({
        tasks: tasks
      })
      Dialog.alert({
        message: '成功删除任务'
      }).then(() => {
      });
    }).catch(() => {
    });
    
  },
  detailTask: function (event) {
    wx.navigateTo({
      url: '/pages/taskroom/task/task',
    })
  },
  completeTask: function (event) {
    var that = this
    Dialog.confirm({
      message: '确认完成任务？'
    }).then(() => {
      Dialog.alert({
        message: '成功完成任务'
      }).then(() => {
        var index = event.currentTarget.dataset.taskIndex
        var task = that.data.tasks[index]
        app.globalData.finishTask.push(task)

        var tempTasks = that.data.tasks
        tempTasks.splice(index, 1)
        that.setData({
          tasks: tempTasks,
          finishTasks: app.globalData.finishTask
        })
        app.globalData.recvTask = tempTasks
      });
    }).catch(() => {
    });
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
  onChange(event) {
    wx.showToast({
      // title: `切换到标签 ${event.detail.index + 1}`,
      title: `${event.detail.title}`,
      icon: 'none'
    });
  }
})