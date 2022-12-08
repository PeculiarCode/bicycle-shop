Page({
  data: {
    mp3Url:'https://web-app.dtbird.cn/web_icon/video_cat.mp4',
    list: [
      {
        id: 0,
        img: '../../images/swiper1.jpg',
        word:
          '下雪的日子,我又坐上了大巴车,去往诗意的远方,这一路的风景尽收眼底^_^',
        time: '2018/12/08 19:30',
        audio: 'https://web-app.dtbird.cn/web_icon/video_cat.mp4',
        poster:
          'http://p3.music.126.net/Iu1umT1npxoa4J5Y4E2Hrw==/109951166384924695.jpg',
        name: '老鼠爱大米',
        author: '抖音女生版本'
      },
      // {
      //   id: 1,
      //   img: '../../images/swiper2.jpg'
      // },
      {
        id: 2,
        img: '../../images/swiper3.jpg',
        word:
          '到了周末又是元气满满的一天,我得好好吃一顿,谁也别拦我,这世界唯有美食不可辜负^_^',
        time: '2018/11/25 22:22',
        audio:
          'http://m701.music.126.net/20221129232250/7e2754b57c8ef46ff296ed22431d0cf8/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18238344834/bb55/f399/1cb2/43c2dc7afe7888cb8cf86e44652ddb8f.m4a',
        poster:
          'https://p2.music.126.net/aTLL-ebKjq8JVspDLCbTmQ==/109951167833615745.jpg',
        name: '求佛',
        author: '誓言'
      },
      {
        id: 3,
        img: '../../images/swiper4.jpg',
        word: '阳光明媚的日子去理了头发,感觉自己又变漂亮了,哈哈哈^_^',
        time: '2018/10/28 16:08',
        audio:
          'http://m10.music.126.net/20221129232555/0c545526fa9c245d9d15bc72bf23a96b/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3046138390/a1fa/7701/8f81/e5ae09fa01f906235ebb0395c8212c18.m4a',
        poster:
          'https://p1.music.126.net/D4CLtH4Bo_LTvV7eA9Gzgg==/109951163288670556.jpg',
        name: '秋天不回来',
        author: '王强'
      },
      {
        id: 4,
        img: '../../images/swiper5.jpg',
        word: '虽然剪发一个小时,但是不影响我发自拍,哈哈哈越看自己越好看^_^',
        time: '2018/10/28 16:08',
        audio:
          'http://m801.music.126.net/20221129232927/6bbfe799062b734e1b07ca72085374f8/jdyyaac/0f0f/0058/0109/8ee62a473a7258c7dc8f6ca055a1b2e3.m4a',
        poster:
          'https://p1.music.126.net/dbbM0YPQQ3UOEKoYnfWqWg==/109951163364997690.jpg',
        name: '让泪化作相思雨',
        author: '南文北斗'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    audioSrc: ''
  },
  onLoad(){
  //  this.innerAudioContext = wx.createInnerAudioContext({
  //     useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
  //   })
  //   this.innerAudioContext.src = 'https://web-app.dtbird.cn/web_icon/video_cat.mp4'
  },
  handePlay(){
    this.innerAudioContext.play() // 播放
  },
  handleStop(){
    this.innerAudioContext.pause() // 暂停
  },
  onReady() { 
    // const innerAudioContext = wx.createInnerAudioContext()
    // // innerAudioContext.autoplay = true
    // innerAudioContext.src = 'https://web-app.dtbird.cn/web_icon/video_cat.mp4'
    // innerAudioContext.onPlay(() => {
    //   console.log('开始播放')
    // })
    // innerAudioContext.onError((res) => {
    //   console.log(res.errMsg)
    //   console.log(res.errCode)
    // })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
})
