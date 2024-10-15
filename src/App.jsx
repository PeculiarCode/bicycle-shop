import { Layout } from 'antd'
const { Content } = Layout
import Header from '@/views/layout/header/header'
import Aside from '@/views/layout/aside/aside'
import { Suspense, useState } from 'react'
import WrapRoutes from '@/router'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '@/router'
const contentStyle = {
  padding: 10,
  background: '#fff',
  margin: 10
}

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '100vh'
}

const App = () => {
  const Element = useRoutes(routes)
  // const isLayout = WrapRoutes().props.match.route?.isLayout

  console.log(Element, 'Element')
  // const [toggle, setToggle] = useState(false)

  return <div>{Element}</div>
  // <Layout style={layoutStyle}>
  //   <Aside toggle={toggle} />
  //   <Layout>
  //     <Header toggleCollapsed={data => setToggle(data)} />
  //     <Content style={contentStyle}>
  //       {Element}
  //     </Content>
  //   </Layout>
  // </Layout>
}

export default App
