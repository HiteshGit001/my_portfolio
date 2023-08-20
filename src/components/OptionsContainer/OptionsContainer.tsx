import React, { FC } from 'react';
import cx from 'classnames';
import styles from './OptionsContainer.module.scss';
import { scrollTo } from '../../helper/scroll';

const OptionsContainer: FC = ({ blok }: any) => {
  return (
    <div>
      <div className={cx(styles.scroll)}>
        <div className={cx(styles.scroll_items, 'flex gap_16')}>
          {
            blok?.skills.map((ele) => {
              return (
                <h4>{ele}</h4>
              )
            })
          }
        </div>
      </div>
      <div className='flex gap_16 space_between wrap container'>
        {
          blok?.optionItems?.map((ele: any) => {
            return (
              <div onClick={() => scrollTo(ele?.clickId)} key={ele?._uid} className={cx(styles.card_items, 'card pointer ')}>
                <div className={styles.card_item_not_hover}>
                  <img className={styles.hero_img} src={ele?.bannerImg?.filename} alt={blok?.HeroImage?.alt} />
                  <p className='adaptiveWeak py_8_px_40'>{ele?.OptionName}</p>
                </div>
                <div className={cx(styles.card_item_hover, styles.hero_img, 'relative')}>
                  <img className={styles.more_icon} src={ele?.optionIcon?.filename} />
                  <p className='fs_48 w_500 f_inter'>{ele?.OptionName}</p>
                  <p>{ele?.disc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default OptionsContainer;