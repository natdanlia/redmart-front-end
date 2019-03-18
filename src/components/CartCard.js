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
let token = localStorage.getItem('token')

    // this.setState({
    //   input: event.target.value
    // })
    fetch(`https://red-mart-backend.herokuapp.com/cart_items/${event.target.dataset.itemId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({amount: event.target.value})
    }).then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
      this.setState({
        input: data.amount
      })
      this.props.changeCart(data)
      this.props.updateTotal(data.item.price)
    })

  }

  handleRemove = (event) => {
    this.props.removeClick(event)
    this.props.deduct(this.props.car.amount * this.props.car.item.price)

  }

  render () {

    return (
      this.props.currentUser.cart.id === this.props.car.cart.id ? <div className="ui five secondary item menu" id='cartCard'>
          <h3 className="item">{this.props.car.item.title}</h3>
          <p className="item"> {this.props.car.item.price}</p>

          <label className="item" htmlFor='quantity'>X</label>
          <input className="ui input" data-item-id={this.props.car.id} min="1" max="50" value={this.state.input} name="quantity" type='number' onChange={this.handleChange}/>
          <br></br>
              <button className="item" data-item-id={this.props.car.id} onClick={this.handleRemove} className="ui red button"> Delete From Cart </button>

        </div>
      : null
    )

  }
}

export default CartCard;
