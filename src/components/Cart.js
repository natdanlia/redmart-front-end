import React from 'react'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  constructor () {
    super()
    this.state = {
      input: 1
    }
  }

  totalPrice = () => {
    let tot = 0
      this.props.cart.forEach((k)=> tot += (k.item.price * k.amount))
    // debugger
    return tot
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render () {

    return(
      <div>
        <Link to={'/items'}>
          <button className="ui button"> Continue Shopping </button>
        </Link>

        {this.props.cart.map((c, idx) => {
          console.log(c)

          return (
            <div  key={idx} >
                <h1>{c.item.title}</h1>
                <p>Single Price {c.item.price}</p>

                <label for='quantity'>quantity</label>
                <input value={this.state.input} name="quantity" type='number' onChange={this.handleChange}/>
                <br></br>
                    <button data-item-id={c.id} onClick={this.props.removeClick}className="ui button"> remove from cart </button>

              </div>
            )
          })
        }
        <p>TOTAL PRICE = {this.totalPrice()}</p>
      </div>
    )
  }
}

export default Cart;
