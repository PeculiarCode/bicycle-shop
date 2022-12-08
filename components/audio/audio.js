const App = getApp()
Component({
  properties: {},
  data: {
    isPlay: false,
    playIcon: App.IMG + '/web_icon/paly.png',
    pauseIcon: App.IMG + '/web_icon/pause.png',
    SongEndTime: '00:00',
    poster:
      'https://p2.music.126.net/hFHFusqewJ2Uwy8qjpN1uQ==/109951168072456069.jpg',
    name: '2022年卡塔尔世界杯',
    author: 'BTS (防弹少年团)',
    processTime: 0,
    count: 1
  },
  onLoad() {
    console.log(222)
  },
  lifetimes: {
    attached() {
      this.audio = wx.createInnerAudioContext({
        useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
      })
      this.audio.src = 'https://web-app.dtbird.cn/web_icon/music.m4a'
      this.audio.onCanplay(() => {
        let timer = setInterval(() => {
          if (this.audio.duration != 0) {
            const initTime = (this.audio.duration / 60).toFixed(1)
            const time = initTime.split('.')
            const minute = time[0]
            const second = time[1] * 6
            this.setData({
              SongEndTime: `${minute}:${second}`
            })
            clearInterval(timer)
          }
        }, 50)
      })
    }
  },

  methods: {
    handlerProcess(duration, flag) {
      const process = 100 / duration
      this.data.timer = setInterval(() => {
        this.data.count++
        this.setData({
          processTime: (process * this.data.count).toFixed(2)
        })
      }, 1000)
      if (this.data.processTime >= 100) {
        clearInterval(this.data.timer)
      }
    },
    handlePlay() {
      this.setData({
        isPlay: !this.data.isPlay
      })
      const duration = this.audio.duration.toFixed(0)
      if (this.data.isPlay) {
        this.audio.play()
        this.handlerProcess(duration, true)
      } else {
        this.audio.pause()
        clearInterval(this.data.timer)
      }
    }
  }
})
