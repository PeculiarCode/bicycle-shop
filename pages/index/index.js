const App = getApp()

Page({
  data: {
    result: '',
    value1: '',
    value2: ''
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
  handleClick() {
    wx.navigateTo({
      url: '/pages/log/log'
    })
  }
})
