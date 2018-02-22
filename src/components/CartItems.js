import React from 'react'
import CartItem from './CartItem'

const CartItems = (props) => {
  // console.log('CartItems props', props.cartItems)

  let ItemsList = props.cartItems.map(item => {
    return (
      <CartItem key={item.id} item={item} />
    )
  })
  return (
    <div className="container-fluid">
        <h2>Items List</h2>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
        </div>
        {ItemsList}
        <div className="collection">
        <div className="collection-item row grey lighten-3">
          <div className="col s8">Shopping Cart Total</div>
          <div className="col s4">Total Price:</div>
        </div>
      </div>
    </div>
  )
}
export default CartItems
