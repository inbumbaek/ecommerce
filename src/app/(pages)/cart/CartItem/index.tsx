'use client'

import React, { useState } from 'react'
import classes from './index.module.scss'

const CartItem = ({ product, title, metaImage, qty, addItemToCart, index }) => {
  const [quantity, setQuantity] = useState(qty)
  const decrementQty = () => {}
  const incrementQty = () => {}
  const enter Qty = () => {}

  return (
    <li className={classes.item} key={title}>
      <h6>TITLE</h6>
    </li>
  )
}

export default CartItem