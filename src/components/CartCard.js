import React from 'react'


class CartCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: props.car.amount
    }
  }

  handleChange = (event) => {

    event.persist()
    // this.setState({
    //   input: event.target.value
    // })
    fetch(`http://localhost:3005/cart_items/${event.target.dataset.itemId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({amount: event.target.value})
    }).then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
      this.setState({
        input: data.amount
      })
      this.props.updateTotal(data.item.price)
    })

  }

  render () {
    return (
      <div>
          <h1>{this.props.car.item.title}</h1>
          <p>Single Price {this.props.car.item.price}</p>

          <label htmlFor='quantity'>quantity</label>
          <input data-item-id={this.props.car.id} value={this.state.input} name="quantity" type='number' onChange={this.handleChange}/>
          <br></br>
              <button data-item-id={this.props.car.id} onClick={this.props.removeClick}className="ui button"> remove from cart </button>

        </div>
    )

  }
}

export default CartCard;
