import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import cx from 'classnames';

interface INavBar {
  blok: any
}
const NavBar = ({ blok }: INavBar) => {
  const [activeNav, setActiveNav] = useState<string>(blok?.Nav?.[0]?.Icon?.title);

  const Nav = blok?.Nav;
  const Social = blok?.SocialIcons;
  const handleNavigation = (selected: string) => {
    setActiveNav(selected);
  }

  // const handleSocialIcon = (selected: string) => {
  //   setActiveSocial(selected);
  // }
  return (
    <div className={cx(styles.nav_container)}>
      {
        Nav?.map((ele: any, index: number) => {
          return (
            <div key={ele?._uid} className={cx(activeNav === ele?.Icon?.title ? styles.nav_selected : styles.nav_not_selected, 'flex row_center col_center column gap_8')}>
              <img onClick={() => handleNavigation(ele?.Icon?.title)} src={activeNav === ele?.Icon?.title ? blok?.NavSelected?.[index]?.Icon?.filename : ele?.Icon?.filename} alt={ele?.Icon?.alt} />
              {
                activeNav === ele?.Icon?.title
                  ? <img src={blok?.DotSelected?.filename} alt={blok?.DotSelected?.alt} />
                  : <></>
              }
            </div>
          )
        })
      }
      <img src={blok?.Seperator?.filename} alt={blok?.Seperator?.alt} />
      {
        Social?.map((ele: any, index: number) => {
          return (
            <div key={ele?._uid} className={cx(activeNav === ele?.Icon?.title ? styles.nav_selected : styles.nav_not_selected, 'flex row_center col_center column gap_8')}>
              <img onClick={() => handleNavigation(ele?.Icon?.title)} src={activeNav === ele?.Icon?.title ? blok?.SocialSelected?.[index]?.Icon?.filename : ele?.Icon?.filename} alt={ele?.Icon?.alt} />
              {
                activeNav === ele?.Icon?.title
                  ? <img src={blok?.DotSelected?.filename} alt={blok?.DotSelected?.alt} />
                  : <></>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default NavBar