import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemContainer from './ItemContainer'
import ItemDetail from '../components/ItemDetail'
import Cart from '../components/Cart'
import NavBar from '../components/NavBar'
import About from "../components/About"
import 'semantic-ui-css/semantic.min.css'

import { Route, Switch } from 'react-router-dom';

import '../App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      items: [],
      cart: [],
      searchTerm: '',
      searchFormSubmitted: false,
      actualSearch: '',
      filterSearch: false,
      filterCategorey: null
      }
  }

  componentDidMount(){
    fetch('http://localhost:3005/items')
    .then(res => res.json())
    .then( data => {
      this.setState( {
        items: data,
      // DEBUG:   actualSearch: ''
      } )
      return fetch('http://localhost:3005/cart_items')
      })


      .then(res => res.json())
      // .then(data => this.setState({cart: data}))
      .then( car => this.setState( {cart: car} ))


  }







  addToCartClick = (item) => {

    let error = false
      fetch('http://localhost:3005/cart_items', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          item_id: item.id,
          cart_id: 1,
          amount: 1
          }
        )
      })
      .then(res => {
        if (res.status == 422){
          error = true
        }
        return res.json()})
      .then(data => {

        error ? alert(data.item) : this.setState( {cart: [...this.state.cart, data]} )})


    // .then( car => console.log(car.item))
  }

  removeClick = (event) => {

    let iId = parseInt(event.target.dataset.itemId)
    fetch(`http://localhost:3005/cart_items/${iId}`, {
    method: 'DELETE'
  })

    this.setState({
      cart: this.state.cart.filter(t => t.id !== iId )
    })

  }

  filtered = () => {
    // debugger
    if (this.state.filterCategorey) {
      return this.state.items.filter((sinItem) => sinItem.category === this.state.filterCategorey && sinItem.title.toLowerCase().includes(this.state.actualSearch.toLowerCase()))
    }
    else {
      return this.state.items.filter((sinItem) => sinItem.title.toLowerCase().includes(this.state.actualSearch.toLowerCase()))
       // return this.state.items
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  mainFilter = (event) =>{
    let targetName = event.target.name.toLowerCase()
    // let targetValue = event.target.value
    this.setState({
      // filterSearch: !this.state.filterSearch,
      filterCategorey: targetName
    })
  }

  removeFilter = (event) => {
    this.setState({
      filterCategorey: null,
      actualSearch: ''
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      searchFormSubmitted: true,
      actualSearch: this.state.searchTerm,

    })


  }
  render() {
    return (
      <div className="App">
      <NavBar/>
        <Switch>
          <Route path = '/items/:id' render={ (props) => {
            let itemId = parseInt(props.match.params.id)

            return (
              <ItemDetail item={ this.state.items.find((item)=> item.id === itemId) } addToCartClick={this.addToCartClick}/>
                )}
              }
          />

        <Route path = '/items' render={ (props) => <ItemContainer handleSubmit={this.handleSubmit} removeFilter={this.removeFilter} searchTerm={this.state.searchTerm} items={this.filtered()} handleChange={this.handleChange} mainFilter={this.mainFilter}/> } />

          <Route path = '/cart' render={ (props) => <Cart cart={this.state.cart} removeClick={this.removeClick}/> } />
          <Route path = '/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
