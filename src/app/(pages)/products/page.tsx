import React from 'react'
import classes from './index.module.scss'
import { Gutter } from '../../_components/Gutter'
import Filters from './Filters'
import { Blocks } from '../../_components/Blocks'
import { Category, Page } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'

const Products = async () => {
  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode
    })
  } catch (error) {
    console.log(error);
  }

  return (
    <div className={classes.container}>
      <Gutter classeName={classes.products}>
        <Filters />
        <Blocks blocks={layout} disableTopPadding={true}/>
      </Gutter>
    </div>
  )
}

export default Products