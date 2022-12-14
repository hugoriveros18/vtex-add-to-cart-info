import React from 'react'

import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

type Props = {
  checkoutButton: boolean
  shoppingButton: boolean
}

const OrderButtons = ({ checkoutButton, shoppingButton }: Props) => {
  const CSS_HANDLES = [
    'order__buttons--container',
    'order__checkout--container',
    'order__checkout--button',
    'order__shopping--container',
    'order__shopping--button',
  ]
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={handles['order__buttons--container']}>
      {checkoutButton && (
        <div className={handles['order__checkout--container']}>
          <a
            className={handles['order__checkout--button']}
            href={'/checkout/#/cart'}
          >
            CHECKOUT
          </a>
        </div>
      )}
      {shoppingButton && (
        <div className={handles['order__shopping--container']}>
          <a className={handles['order__shopping--button']} href={'#'}>
            SEGUIR COMPRANDO
          </a>
        </div>
      )}
    </div>
  )
}

export default OrderButtons
