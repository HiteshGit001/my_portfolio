import React from 'react';
import cx from 'classnames';
import style from './Experience.module.scss';

interface IExperience {
  companyName: string,
  designations: any[],
  fromTo: string,
}
const Experience = ({ blok }) => {
  const { Name, backgroundImg, experiences } = blok;

  return (
    <div className={cx(style.exp_box, 'card container')}>
      <div id={blok?.clickId} style={{ backgroundImage: `url(${backgroundImg?.filename})` }} className={cx(style.exp_container, 'br_32')}>
      </div>
      <div className={cx(style.exp_slider_card, 'card br_8')}>
        <p className='fs_48 w_500 mb_16'>{Name}</p>
        <div>
          {
            experiences?.map((ele: IExperience) => {
              return (
                <div>
                  <p className='fs_32 w_800'>{ele?.companyName}</p>
                  <p>{ele?.fromTo}</p>
                  {
                    ele?.designations?.map((item: any) => {
                      return (
                        <div className='mt_8'>
                          <p className='fs_20 w_800'>{item?.OptionName}</p>
                          <p className='fs_16 f_league px_16'>{item?.disc}</p>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Experience