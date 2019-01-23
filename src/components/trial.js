import React from 'react'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bigCart: [],
      total: 0,
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005/cart_items')
    .then(res => res.json())
    .then(data => {
      this.setState({
        bigCart: data,
        total: this.totalPrice(data),
      })
    })
  }
  totalPrice = (cartData) => {
    let tot = 0
    console.log(cartData)
    // debugger
    cartData.forEach((k)=> tot += (k.item.price * k.amount))
    return tot
  }

  updateTotal = (amount) => {
    this.setState({
      total: this.state.total + amount
    })
  }

  render () {

    return(
      <div>
        <Link to={'/items'}>
          <button className="ui button"> Continue Shopping </button>
        </Link>

        {this.props.cart.map((car, idx) => <CartCard updateTotal={this.updateTotal}
        removeClick={this.props.removeClick} car={car} key={idx}/> )}
        <p>TOTAL PRICE = {this.state.total}</p>
      </div>
    )
  }
}

export default Cart;
