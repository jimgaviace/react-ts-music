import { useRoutes, Link} from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import routes from './router';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

import AppPlayerBar from '@/pages/player';

import { useAppDispatch } from './store';
import { fetchCurrentSongAction } from './pages/player/store/player';

function App() {
  //获取某一首歌
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(33894312))
    
  },[])

  return (
  <div className='App'>
    <AppHeader />
      <Suspense fallback="loading...">
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    <AppFooter />

    {/* 播放器工具栏 */}
    <AppPlayerBar />
  </div>
  )
}

export default App;