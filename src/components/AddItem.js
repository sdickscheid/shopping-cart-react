import React, { Component } from 'react'
import {Row, Input, Button} from 'react-materialize'


class AddItem extends Component {
  constructor(){
    super()
    this.localState = {
      productID: 0,
      quantity: 0,
    }
  }
  render () {
    let theProduct = this.props.productOptions.map(product => {
      console.log('theProduct', theProduct);
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
            value={this.localState.productID}
          >
            {theProduct}
          </Input>
          <Input
            s={6}
            type="text"
            label="Select a Quantity"
            value={this.localState.quantity}
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
