import './App.scss'
import './scss/flex.scss'
import './scss/sizes.scss'
import './scss/fonts.scss'
import './scss/color.scss'
import './scss/positions.scss'
import './scss/border.scss'
import { Route, Routes } from 'react-router-dom';
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import { useRef } from 'react'

function App() {
  const slug = window.location.pathname;
  const story = useStoryblok(slug === '/' ? 'home' : slug, { version: 'published', });

  const cursoor = useRef(null);
  const cursoor_blure = useRef(null);

  document.addEventListener('mousemove', function (dets) {
    cursoor.current.style.left = dets.x + 'px'
    cursoor.current.style.top = dets.y + 'px'
    cursoor_blure.current.style.left = dets.x - 150 + 'px'
    cursoor_blure.current.style.top = dets.y - 150 + 'px'
  })


  return (
    <div className='bg'>
      <div ref={cursoor} className='cursoor' />
      <div ref={cursoor_blure} className='cursoor_blure' />
      <div>
        <Routes>
          <Route path={slug} element={<StoryblokComponent blok={story?.content} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
