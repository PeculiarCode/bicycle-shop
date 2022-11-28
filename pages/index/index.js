// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    result: '',
    value1: '',
    value2: '',
    count: '',
    btnList: [
      {
        id: 0,
        name: '加'
      },
      {
        id: 1,
        name: '减'
      },
      {
        id: 2,
        name: '乘'
      },
      {
        id: 3,
        name: '除'
      }
    ],
    showNext: false
  },
  handleClick(e) {
    const index = e.target.dataset.index
    const num1 = parseFloat(this.data.value1)
    const num2 = parseFloat(this.data.value2)
    let sum = 0
    console.log(this.data.value1)
    if (index == 0) {
      sum = num1 + num2
    }
    if (index == 1) {
      sum = num1 - num2
    }
    if (index == 2) {
      sum = num1 * num2
    }
    if (index == 3) {
      sum = num1 / num2
    }
    this.setData({
      result: sum
    })
  },
  handlePlay() {
    const num = 28
    const inputValue = this.data.count
    if (inputValue == num) {
      wx.showToast({
        icon: 'none',
        title: '哈哈,你答对了'
      })
      this.setData({
        showNext: true
      })
      return
    }
    let desc = inputValue > num ? '大了' : '小了'
    wx.showToast({
      icon: 'none',
      title: desc
    })
  },
  handleNext(){
    wx.navigateTo({
      url: '/pages/note/note',
    })
  }
})
