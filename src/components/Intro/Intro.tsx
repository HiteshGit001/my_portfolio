import React from 'react'

interface IIntro {
  blok: any,
}
const Intro = ({ blok }: IIntro) => {
  return (
    <div>
      <p className='f_league fs_48 pb_40 lh_56 fw_600 white'>{blok?.Name}</p>
      <p className='adaptiveWeak fs_24 f_league'>{blok?.AboutMe}</p>
    </div>
  )
}

export default Intro