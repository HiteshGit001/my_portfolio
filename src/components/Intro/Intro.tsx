import React from 'react'

interface IIntro {
  blok: any,
}
const Intro = ({ blok }: IIntro) => {
  const size = screen.availWidth;
  return (
    <div>
      <p className='f_league w_600 bg_text fs_48 pb_40 lh_56 fw_600 white'>{blok?.Name}</p>
      <p className='adaptiveWeak w_500 bg_text fs_24 f_league'>{size >= 500 ? blok?.AboutMe : blok?.mobileAboutMe}</p>
    </div>
  )
}

export default Intro