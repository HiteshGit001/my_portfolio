import React, { useEffect, useLayoutEffect, useRef } from 'react'
import cx from 'classnames';
import NavBar from '../NavBar/NavBar';
import Intro from '../Intro/Intro';
import styles from './HeroBanner.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollDownComponent from '../ScrollDownComponent/ScrollDownComponent';

const HeroBanner = ({ blok }: any) => {

  const navitems = useRef(null);
  const hero_banner = useRef(null);
  const scroll = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(navitems.current, { borderRadius: 0, duration: 0.75, y: 100, opacity: 0 });
    gsap.to(navitems.current, { y: 0, opacity: 1, duration: 0.75 });
    gsap.to(hero_banner.current, {
      backgroundColor: '#000',
      duration: 1,
      scrollTrigger: {
        trigger: hero_banner.current,
        start: 'top -50px',
        end: 'top -61px',
        scrub: 1,
      }
    });
    gsap.to(scroll.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scroll.current,
        start: 'top 300px',
        end: 'top 200px',
        scrub: 1,
      }
    })
  }, [])


  return (
    <div className={cx('relative h_100vh')}>
      <div>
        <div ref={hero_banner} className={cx(styles.bg_video, 'fixed top_0')} />
        <video className={cx(styles.hero_video, 'fixed top_0')} autoPlay loop muted src={blok?.heroVideo?.filename} />
      </div>
      <div className={cx('card bg_primary_shade', styles.hero_content)}>
        {/* <div className={styles.hero_box}> */}
          <div ref={navitems} className={cx('flex space_between mh_100 container', styles.hero_banner_container)}>
            <div className={cx(styles.hero_nav)}>
              <NavBar blok={blok} />
            </div>
            <div className={cx(styles.hero_content, 'flex gap_8')}>
              <Intro blok={blok} />
            </div>
          </div>
          <div ref={scroll} className='flex row_center col_center'>
            <ScrollDownComponent />
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default HeroBanner