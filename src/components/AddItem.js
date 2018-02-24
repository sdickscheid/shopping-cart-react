import React, { Component } from 'react'
import {Row, Input, Button} from 'react-materialize'


class AddItem extends Component {

  constructor(){
    super()
    this.state = {
      productID: 0,
      quantity: 0,
    }
  }

  render () {
      console.log('productList', this.props.productList)
    let theProduct = this.props.productList.map(product => {
      return (
        <option key={product.id} value={product.id}>{product.name}</option>
      )
    })

    return (
      <div className="container-fluid">
        <h2>Add Item</h2>
        <Row>
        	<Input
            s={6}
            type='select'
            label="Select a Product"
          >
            {theProduct}
          </Input>
          <Input
            s={6}
            type="text"
            label="Select a Quantity"
          />
          <Button
            waves='light'
          >
            ADD ITEM
          </Button>
        </Row>
      </div>
    )
  }
}
export default AddItem
