import React, { Component } from 'react'
import {Row, Input, Button} from 'react-materialize'


class AddItem extends Component {

  constructor(){
    super()
    this.state = {
      productID: 40,
      quantity: 0,
    }
  }

  handleClick = () => {
    // console.log('props in handleClick', this.props)
    // console.log(typeof +this.state.productID);
    // let theProduct = this.props.productList.filter(product => product.id == this.state.productID)[0]
    let theProduct = this.props.productList.filter(product => product.id === Number(this.state.productID))[0]
    console.log('theProduct', theProduct);

    this.props.addItemFunction({
      product: theProduct,
      quantity: this.state.quantity
    })
  }

  render () {
    console.log('productList', this.props)

    let theProductList = this.props.productList.map(product => {
      return (
        <option key={product.id} value={product.id}>{product.name}</option>
      )
    })

    return (
      <div className="container">
        <h2>Add Item</h2>
        <Row>
        	<Input
            s={6}
            type='select'
            label="Select a Product"
            value={this.state.productID}
            onChange={(e) => this.setState({productID: e.target.value})}
          >
            {theProductList}
          </Input>
          <Input
            s={6}
            type="text"
            label="Select a Quantity"
            value={this.state.quantity}
            onChange={(e) => this.setState({quantity: e.target.value})}
          />
          <Button
            waves='light'
            onClick={this.handleClick}
          >
            ADD ITEM
          </Button>
        </Row>
      </div>
    )
  }
}
export default AddItem
