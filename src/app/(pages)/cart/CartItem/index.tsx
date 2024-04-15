'use client'

import React, { useState } from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'

const CartItem = ({ product, title, metaImage, qty, addItemToCart, index }) => {
  const [quantity, setQuantity] = useState(qty)
  const decrementQty = () => {}
  const incrementQty = () => {}
  const enter Qty = () => {}

  return (
    <li className={classes.item} key={title}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media className={classes.media} imgClassName={classes.image} resource={metaImage} fill />
        )}
      </Link>

      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>
      </div>
    </li>
  )
}

export default CartItem