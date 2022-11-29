import { isEmpty } from '../../utils/helper'
Page({
  data: {
    time: '',
    imgSrc: '../../images/20180816.jpg',
    likeIcon: '../../images/heart_fill.png',
    dislikeIcon: '../../images/heart_empty.png',
    comment: '../../images/comment.png',
    like: false,
    starText: '赞',
    isCommit: false,
    commitText: '评论',
    commitStyle: 0,
    inputValue: '',
    userList: [
      {
        id: 0,
        img: '../../images/user1.png',
        txt: '这应该是回家吧,这是坐的大巴'
      },
      {
        id: 1,
        img: '../../images/user2.png',
        txt: '望江这个县城了解一下,这里有红烧鲫鱼,水煎包,牛肉粉丝'
      },
      {
        id: 2,
        img: '../../images/user3.png',
        txt:
          '在二中那边之前有一个老的饭店,每天中午12点就可以去吃饭,记忆犹新还是大铁锅炖鱼,真香'
      }
    ]
  },

  onLoad() {
    const time = new Date()
  },
  handleStar() {
    this.setData({
      like: !this.data.like,
      starText: this.data.like ? '赞' : '取消'
    })
  },
  handleComment() {
    this.setData({
      isCommit: !this.data.isCommit,
      commitText: this.data.isCommit ? '评论' : '取消',
      commitStyle: this.data.isCommit ? 0 : 300
    })
  },
  handleSubmit() {
    if (isEmpty(this.data.inputValue)) {
      wx.showToast({
        title: '输入内容不能为空哦!',
        icon:'none'
      })
      return
    }
    const list = this.data.userList
    const index = list.length
    list.push({
      id: index,
      img: '../../images/user1.png',
      txt: this.data.inputValue
    })
    this.setData({
      isCommit: false,
      commitText: '评论',
      userList: list,
      inputValue: ''
    })
  },
  handleTrip(){
    wx.navigateTo({
      url: '/pages/trip/trip',
    })
  }
})
