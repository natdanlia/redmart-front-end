import React from 'react'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      total: this.totalPrice()
    }
  }

  totalPrice = () => {
    let tot = 0
    // console.log(this.props.cart)
      this.props.cart.forEach((k)=> tot += (k.item.price * k.amount))
    // debugger
    return tot
  }

  updateTotal = (amount) => {
    this.setState({
      total: this.state.total + amount
    })
  }

  render () {
    console.log(this.totalPrice())
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
