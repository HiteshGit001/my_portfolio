import React from 'react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { components } from './cms';
import Placeholder from './PlaceHolder';

const Page = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok?._uid}
    >
      {
        blok.body
          ? blok.body.map((nestedBlok: any) => {
            if (components[nestedBlok?.component] === undefined) return <Placeholder componentName={nestedBlok?.component} />;
            return (
              <div key={nestedBlok._uid}>
                <StoryblokComponent blok={nestedBlok} />
              </div>
            );
          })
          : null
      }
      {/* {showButton && (
        <img src={BACK_TO_TOP_ICON} alt='BackToTopIcon' onClick={scrollToTop} className='scroll_top pointer box_shadow_sm' />
      )} */}
    </div>
  )
}

export default Page