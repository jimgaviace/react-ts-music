// import Recommend from "@/views/discover/children-views/recommend"
import { lazy } from "react"
import { Navigate } from "react-router-dom"
import { RouteObject } from "react-router-dom"

// import Discover from "@/views/discover"
// import Download from "@/views/download"
// import Mine from "@/views/mine"
// import Focus from "@/views/focus"
 
// 路由懒加载 用到的时候加载 提高性能
const Discover = lazy(() => import("@/pages/discover"))
const Recommend = lazy(() => import("@/pages/discover/c-pages/recommend"))
const Songs = lazy(() => import("@/pages/discover/c-pages/songs"))
const DJRadio = lazy(() => import("@/pages/discover/c-pages/djradio"))
const Ranking = lazy(() => import("@/pages/discover/c-pages/ranking"))
const Artist = lazy(() => import("@/pages/discover/c-pages/artist"))
const Album = lazy(() => import("@/pages/discover/c-pages/album"))


const Mine = lazy(() => import("@/pages/mine"))
const Focus = lazy(() => import("@/pages/focus"))
const Download = lazy(() => import("@/pages/download"))

// 路由配置
const routes:RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
      {
        path: '/discover/djradio',
        element: <DJRadio />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
    ]
  },
  {
    path:'mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: '/download',
    element: <Download />,
  },
]

export default routes