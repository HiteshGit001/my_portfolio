import React, { useEffect } from 'react';
import cx from 'classnames';
import style from './Projects.module.scss';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { openInNewTab } from '../../helper/functions';

const Projects = ({ blok }) => {
  const size = screen.availWidth;

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to('#project_item1', {
      x: 0,
      z: 0,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#project_item1',
        start: 'top 50%',
        end: 'top 40%',
        scrub: 1,
      },
    })
    gsap.to('#project_item2', {
      x: 0,
      z: 0,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#project_item2',
        start: 'top 50%',
        end: 'top 40%',
        scrub: 1,
      },
    });
    document.querySelectorAll('#proj').forEach(function (proj) {
      let startRotate = 0;
      let rotateDiff = 0;
      // mouse out
      proj.addEventListener('mouseleave', function (dets: any) {
        gsap.to(proj.querySelector('img'), {
          opacity: 0,
          duration: 0.5,
          ease: Power3.easeInOut,
        })
      })

      // mouse in
      proj.addEventListener('mousemove', function (dets: any) {
        let diff = proj.getBoundingClientRect().top
        rotateDiff = dets.clientX - startRotate;
        startRotate = dets.clientX;
        gsap.to(proj.querySelector('img'), {
          opacity: 1,
          top: dets.clientY - diff,
          left: dets.clientX - 125,
          rotate: gsap.utils.clamp(-20, 20, rotateDiff * 0.5)
        })
      })
    })
  }, [])

  return (
    <div className={cx('card container')}>
      <div id={blok?.clickId} className={cx('', style.project_box)}>
        <div className={cx(style.project_title, 'f_league fs_70 px_24 primary')}>
          {blok?.title}
        </div>
        <p className={cx('fs_16 f_league px_16 white', size >= 500 ? 'w_50' : '', style.project_dis)}>{blok?.discription}</p>
        <div id='project_item1' className={cx(style.project_container, size >= 500 ? 'flex gap_16 mb_16' : 'display_none')}>
          {
            blok?.projectItems?.map((ele: any) => {
              return (
                <div onClick={() => openInNewTab(ele?.link)} className={cx(style.project_hover)}>
                  {
                    ele?.projectImg?.filename
                      ? <img className={style.project} src={ele?.projectImg?.filename} />
                      : <div className={style.project} />
                  }
                </div>
              )
            })
          }
        </div>
        <div id='project_item2' className={cx(style.project_container2, size >= 500 ? 'flex gap_16' : 'display_none')}>
          {
            blok?.projectItems?.map((ele: any) => {
              return (
                <div className={cx(style.project_hover)}>
                  {
                    ele?.projectImg?.filename
                      ? <img className={style.project} src={ele?.projectImg?.filename} />
                      : <div className={style.project} />
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={cx('br_16 grid gap_8 mt_8 relative', size >= 500 ? 'grid_1_1' : '')}>
        {
          blok?.projectTiles?.map((ele: any, index: number) => {
            return (
              <>
                <div onClick={() => openInNewTab(ele?.link)} id='proj' style={{ backgroundColor: ele?.bgColor, color: ele?.textColor }} className={cx(style.not_hover_box, 'p_16 flex col_center column space_between')}>
                  <div className='flex space_between w_100'>
                    <p className='fs_20 w_800'>{index + 1}</p>
                    <p className='fs_20 w_800'>Show Case</p>
                  </div>
                  <div>
                    <p className='fs_32 w_800'>{ele?.title}</p>
                  </div>
                  <img onClick={() => openInNewTab(ele?.link)} className={cx(style.project_img, 'br_16')} src={ele?.projectImg?.filename} />
                  <div className='flex space_between w_100'>
                    <p className='fs_16 w_500'>Launch Project</p>
                    <p className='fs_16 w_500'></p>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects