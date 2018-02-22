import React from 'react'
const CartItem = (props) => {
  // console.log('CartITEM props', props.item)


  return (
    <div className="collection-item">
      <div className="row">
        <div className="col s8">{props.item.product.name}</div>
        <div className="col s2">${props.item.product.priceInCents / 100}</div>
        <div className="col s2">{props.item.quantity}</div>
      </div>
    </div>
  )
}
export default CartItem
