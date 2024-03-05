import React from 'react'
import classes from './index.module.scss'
import { Gutter } from '../../_components/Gutter'

const Products = () => {
  return (
    <div className={classes.container}>
      <Gutter classeName={classes.products}>

      </Gutter>
    </div>
  )
}

export default Products