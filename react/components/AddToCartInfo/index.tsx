import React from 'react'

import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { useCssHandles } from 'vtex.css-handles'

import Totalizers from '../Totalizers'
import ProductGroup from '../ProductGroup'
import OrderButtons from '../OrderButtons'

import './styles.css'

type Props = {
  diplayCheckoutButton: boolean
  diplayShoppingButton: boolean
}

const AddToCartInfo = ({diplayCheckoutButton = false, diplayShoppingButton = false}: Props) => {
  const {
    orderForm: { items },
  } = useOrderForm()
  const CSS_HANDLES = ['add-to-cart-info__general--container']
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={handles['add-to-cart-info__general--container']}>
      <ProductGroup products={items} />
      <Totalizers products={items} />
      {
        (diplayCheckoutButton || diplayShoppingButton) &&
            <OrderButtons checkoutButton={diplayCheckoutButton} shoppingButton={diplayShoppingButton}/>
      }
    </div>
  )
}

export default AddToCartInfo
