import React from 'react'
import { withRouter } from 'react-router-dom';

class ItemForm extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      price: '',
      category: '',
      description: '',
      picture: '',
      amount: '',
    }
  }

  handleAllChange = (event) => {
    let inputName = event.target.name
    let inputValue = event.target.value
    this.setState({
      [inputName]: inputValue
    })
  }

  formSubmit = (event) => {
      console.log(this.props);
      let token = localStorage.getItem('token')
      event.preventDefault()
      fetch('http://localhost:3005/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        title: this.state.title,
        price: this.state.price,
        category: this.state.category,
        description: this.state.description,
        picture: this.state.picture,
        amount: this.state.amount,
      })
      }
    ).then(res => res.json())
      .then(data => {
        this.props.addItem(data)
        this.setState({
              title: '',
              price: '',
              category: '',
              picture: '',
              amount: '',
              description: '',
            })

      })
      this.props.history.push('/items')
    // .then(data => this.setState({
    //   trips: [...this.state.trips, data]
    // }))
  }
  render () {
    return (
      <div>

        <div id='bigHeader'><img id='pInsideBigHeader' src='https://i.imgur.com/OBxqyZY.png' ></img></div>
      <form id='itemForm' className="ui form" onSubmit={event => this.formSubmit(event)}>
        <h1>Add New Item</h1>
        <div className="field">
          <div className="two fields">
            <div className="field">
              <label htmlFor='title'>Title</label>
              <input type="text" name="title" value={this.state.title} onChange={this.handleAllChange} />
            </div>
            <div className="field">
              <label htmlFor='price'>Price</label>
              <input type="text" name="price" value={this.state.price} onChange={this.handleAllChange} />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="three fields">
            <div className="field">
              <label htmlFor='picture'>Image</label>
              <input type="text" name="picture" value={this.state.picture} onChange={this.handleAllChange} />
            </div>
            <div className="field">
              <label htmlFor='category'>Item Category</label>
              <input type="text" name="category" value={this.state.category} onChange={this.handleAllChange} />
            </div>
            <div className="field">
              <label htmlFor='amount'>quantity</label>
              <input type="text" name="amount" value={this.state.amount} onChange={this.handleAllChange} />
            </div>
          </div>
        </div>

    <div class="field">
      <label htmlFor="description">Description</label>
      <input type="text" name="description" value={this.state.description} onChange={this.handleAllChange}></input>
    </div>


        <input type="submit" className="ui button green" value="Submit Item"/>
      </form>
      </div>
    )
  }
}

export default withRouter(ItemForm);
