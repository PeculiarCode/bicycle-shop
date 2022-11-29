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
    isSubmit: false,
    user: '../../images/gift.png'
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
    this.setData({
      isSubmit: true,
      isCommit: false,
      commitText: '评论'
    })
    console.log(this.data.inputValue)
  }
})
