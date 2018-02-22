import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CartItems from './CartItems'
import AddItem from './AddItem'

const ShoppingCart = ({items, products}) => {
  // console.log('Shopping Cart ITEM Props', items)
  console.log('Shopping Cart PRODUCT Props', products)
  let legalLine = "2018 All Rights Reserved"
  return (
    <div className="container">
      <Header />
      <AddItem productOptions={products}/>
      <CartItems cartItems={items}/>
      <Footer copyright={legalLine}/>
    </div>
  )
}
export default ShoppingCart
