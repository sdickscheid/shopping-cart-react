import React from 'react'
import CartItem from './CartItem'

const CartItems = (props) => {
  // console.log('CartItems props', props.cartItems)

  let CartItemsList = props.cartItems.map(item => {
    return (
      <CartItem key={item.id} item={item} />
    )
  })

  let totalPrice = props.cartItems.reduce((acc, currentValue) => {
      console.log('LOG', currentValue);
    return acc + (currentValue.quantity * (currentValue.product.priceInCents/100))

  }, 0)


  let totalItems = props.cartItems.reduce((acc, currentQty) => {
    return acc + Number(currentQty.quantity)
  }, 0)

  console.log('total', totalPrice);
  return (
    <div className="container">
        <h2>Cart Items</h2>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Description</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
        </div>
        {CartItemsList}
        <div className="collection">
        <div className="collection-item row green lighten-4">
          <div className="col s8">Shopping Cart Totals:</div>
          <div className="col s2">${totalPrice.toFixed(2)}</div>
          <div className="col s2">Total Qty: {totalItems}</div>
        </div>
      </div>
    </div>
  )
}
export default CartItems
