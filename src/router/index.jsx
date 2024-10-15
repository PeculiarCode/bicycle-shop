import { Navigate, useRoutes } from 'react-router-dom'
import { Component, lazy } from 'react'

const Page404 = lazy(() => import('@/views/404/404'))
const Index = lazy(() => import('@/views/index/index'))

const routes = [
  {
    path: '*',
    isLayout: false,
    Component: Page404,
    element: <Page404 />
  },
  {
    path: '/',
    isLayout: false,
    Component: Index,
    element: <Navigate to='/index' replace />
  },
  {
    path: '/index',
    isLayout: false,
    Component: Index,
    element: <Index />
  }
]

// const WrapRoutes = () => useRoutes(router)

export default routes
