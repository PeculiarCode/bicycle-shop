import { useSetState } from 'ahooks'
import './index.scss'
import logo from '@/assets/logo.png'
import ban1 from '@/assets/ban1.png'
import b1 from '@/assets/b1.png'
import b2 from '@/assets/b2.png'
import b3 from '@/assets/b3.png'
import b4 from '@/assets/b4.png'
import b5 from '@/assets/b5.png'
import noOff from '@/assets/no-off.png'
import background from '@/assets/shadow.png'
import a1 from '@/assets/a1.png'
import a2 from '@/assets/a2.png'
import a3 from '@/assets/a3.png'
import a4 from '@/assets/a4.png'
import xhs from '@/assets/xhs.png'
import tb from '@/assets/tb.png'
import dw from '@/assets/dw.png'
import mark from '@/assets/mark.png'
import { Carousel, Image } from 'antd'
const BicyclePage = () => {
  const [state, setState] = useSetState({
    tabList: [
      { id: 0, name: '首页' },
      { id: 1, name: '车型' },
      { id: 2, name: '品牌故事' },
      { id: 3, name: '采访' }
    ],
    currentIndex: 0,
    filter: [
      {
        field: 111,
        opt: 'keyword',
        value: 1111
      },
      {
        field: 111,
        opt: 'select',
        value: '测试'
      },
      {
        field: 111,
        opt: 'range',
        value: '2021-11-01~2022-11-22'
      }
    ],
    price: [51, 54, 57],
    imgList: [
      { id: 0, url: a1 },
      { id: 1, url: a2 },
      { id: 2, url: a3 },
      { id: 3, url: a4 }
    ],
    shopList: [
      { id: 0, url: xhs },
      { id: 1, url: tb },
      { id: 2, url: dw }
    ],
    languageList: [
      { id: 0, label: 'EN' },
      { id: 1, label: 'CN' }
    ],
    lanIndex: 0
  })
  return (
    <div className='bicycle-page'>
      <div className='banner'>
        <div className='flex-space header'>
          <div className='flex-lay'>
            {state.tabList.map((item, index) => (
              <div
                key={item.id}
                className={
                  state.currentIndex == index ? 'active tab-item' : 'tab-item'
                }
                onClick={() => {
                  setState({ currentIndex: index })
                }}
              >
                {item.name}
              </div>
            ))}
          </div>

          <img src={logo} className='logo' />

          <div className='switch'>
            {state.languageList.map(item => (
              <div
                className={
                  state.lanIndex == item.id ? 's-active s-item' : 's-item'
                }
                onClick={() => {
                  setState({ lanIndex: item.id })
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className='content'>
          <div className='flex-center'>
            <img src={ban1} className='ban' />
          </div>
        </div>
      </div>

      <div className='panel p-center'>
        <img src={background} className='bg' />

        <div className='pos'>
          <img src={noOff} className='no-off' />
          <div className='desc mr-text'>
            每日都不间断，将骑行自然的融入身体，成为我们体验生活的“触与脚”。
          </div>
        </div>

        <div className='cj mr-text'>车架</div>
      </div>

      <div className='detail'>
        <div className='flex-space pad10'>
          <div>BIGTOY01 - Lemonade（limited 30 piece）</div>
          <div>查看更多</div>
        </div>
        <div className='price'>
          {state.price.map((item, index) => (
            <div key={index} className='p-item'>
              {item}
            </div>
          ))}
        </div>
        <div className='flex-center'>
          <div className='b1'>
            <img src={b1} width={691} height={500} />
          </div>

          <div className='b2 flex-col'>
            <img src={b2} className='img2' />
            <div className='line'></div>
            <img src={b3} />
          </div>
          <div className='b3 flex-col'>
            <img src={b4} width={67} height={263} />
            <div className='line'></div>
            <img src={b5} />
          </div>
        </div>
      </div>

      <div className='arts flex-center'>
        <div className='txt zy-text'>Graphic Arts</div>
        <div className='link zy-text'>参考链接</div>
      </div>

      <div className='list'>
        <div className='title'>Graphic Arts</div>
        <div className='flex-space'>
          {state.imgList.map(item => (
            <div className='item'>
              <img src={item.url} />
            </div>
          ))}
        </div>
      </div>

      <div className='footer flex-space'>
        <div className='fl'>
          <div className='info'>
            <img src={mark} width={192} />
            <div>备案号******************</div>
            <div>Copyright © noffdaay版权所有</div>
            <div>上海 | 墨尔本</div>
          </div>
          <div className='tag-list'>
            {state.tabList.map(item => (
              <div key={item.id} className='tag-item'>
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className='fr'>
          {state.shopList.map(item => (
            <img src={item.url} width={40} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BicyclePage
