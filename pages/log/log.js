import { formatTime } from '../../utils/util'

Page({
  data: {
    time: '',
    imgSrc: '../../image/prxd.png'
  },

  onLoad() {
    const time = new Date()
    this.setData({
      time: formatTime(time)
    })
  }
})
