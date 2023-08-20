import React, { useEffect, useRef } from 'react'
import Loader from '../loader/Loader'
import { gsap } from 'gsap';
import cx from 'classnames';
import SofwareJson from '../../assets/gif/softwareJson.json';
import MechanicalJson from '../../assets/gif/mechJson.json';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './AboutMe.module.scss';

const Aboutme = ({ blok }) => {
  const card1 = useRef(null);
  const card2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo('#ref_card1',
      {
        x: 200,
        stagger: {
          each: 5,
          amount: blok?.aboutItems?.length,
        },
        duration: 2,
        scrollTrigger: {
          trigger: '#ref_card1',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
      },
      {
        x: 0,
        stagger: {
          each: 5,
          amount: blok?.aboutItems?.length,
        },
        duration: 2,
        scrollTrigger: {
          trigger: '#ref_card1',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        }
      }
    )
    gsap.fromTo('#ref_card2',
      {
        x: -256,
        stagger: {
          each: 5,
          amount: blok?.aboutItems?.length,
        },
        duration: 2,
        scrollTrigger: {
          trigger: '#ref_card2',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        }
      },
      {
        x: 0,
        stagger: {
          each: 5,
          amount: blok?.aboutItems?.length,
        },
        duration: 2,
        scrollTrigger: {
          trigger: '#ref_card2',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        }
      }
    )
  }, []);
  return (
    <div className='card container'>
      <div id={blok?.clickId} className='flex space_between col_center wrap'>
        <Loader jsonFile={MechanicalJson} />
        <div className='text_center'>
          <p className='fs_48 white w_500'>{blok?.Name}</p>
          <p>{ }</p>
        </div>
        <Loader jsonFile={SofwareJson} />
      </div>
      {
        blok?.aboutItems?.map((ele: any) => {
          return (
            <div className='flex space_between col_center'>
              {/* <img className='w_50' src='https://colorlib.com/wp/wp-content/uploads/sites/2/7_best-portfolio-websites.jpg.webp' />
        <p className=''>dsfkjfkj</p> */}
              <div ref={card1} id='ref_card1' className={cx(styles.card1, 'relative')}>
                <div className={cx('absolute', styles.extension_card)} />
                <div className='flex gap_16'>
                  <span className='bg_primary h_max_content fs_16 w_800 p_8 br_8 mb_8'>{ele?.iconText}</span>
                  <p className={cx(styles.about_dis, 'max_w_90 f_league fs_16 white')}>{ele?.description}</p>
                </div>
              </div>
              <div ref={card2} id='ref_card2' className={cx(styles.card2,'flex col_center')}>
                <p className='fs_48 f_league black w_800'>{ele?.title}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Aboutme