'use clinet'

import React from 'react'
import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation';
import { Gutter } from '../../Gutter';
import Image from 'next/image';

const FooterComponent = () => {
  const pathname = usePathname();

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
    <Gutter>
      <ul className={classes.inclusions}>
        {inclusions.map((inclusion, index) => (
          <li key={inclusion.title}>
            <Image
              src={inclusion.icon}
            />
          </li>
        ))}
      </ul>
    </Gutter>
    </footer>
  )
}

export default FooterComponent