import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemContainer from './ItemContainer'
import ItemDetail from '../components/ItemDetail'
import Cart from '../components/Cart'
import NavBar from '../components/NavBar'
import About from "../components/About"
import LoginForm from '../components/LoginForm'
import Profile from '../components/Profile'
import ItemForm from '../components/ItemForm'

import 'semantic-ui-css/semantic.min.css'

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

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
      filterCategorey: null,
      currentUser: null,
      loading: true,
      }
  }

  componentDidMount(){
    console.log('mounted')
    fetch('https://red-mart-backend.herokuapp.com/items')
    .then(res => res.json())
    .then( data => {
      console.log('I will')
      this.setState( {
        items: data,
      } )
    })

    let token = localStorage.getItem('token')
    if(token){
      this.fetchUserData()
      } else {
      console.log('no user');
    }


  }



fetchUserData = () => {
  let token = localStorage.getItem('token')
  fetch(`https://red-mart-backend.herokuapp.com/api/v1/profile`, {
    method: "GET",
    headers: {
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => {
    this.setState({
      currentUser: data.user,
      loading: false
    })

  })

    fetch('https://red-mart-backend.herokuapp.com/cart_items', {
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${token}`
        }

      })
      .then(res => res.json())
      // .then(data => this.setState({cart: data}))
      .then( car => this.setState( {cart: car} ))
}





  addToCartClick = (item) => {
    console.log(this.state);
    let token = localStorage.getItem('token')
    let error = false
      fetch('https://red-mart-backend.herokuapp.com/cart_items', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
          item_id: item.id,
          cart_id: this.state.currentUser.cart.id,
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
    let token = localStorage.getItem('token')
    let iId = parseInt(event.target.dataset.itemId)
    fetch(`https://red-mart-backend.herokuapp.com/cart_items/${iId}`, {
    method: 'DELETE',
    headers: {
      "Authorization" : `Bearer ${token}`
      }
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

  mainFilter = (event) => {
    let targetName = event.currentTarget.name.toLowerCase()
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

  changeCart = (i) => {
    // console.log(i);
    this.setState({
      cart: this.state.cart.map(c => {
        if (c.id===i.id) {
          return i
        } else {
          return c
        }
      })
    })
  }
  addItem = (item) => {
    this.setState({
      items: [...this.state.items, item]
    })
  }

  loginSetup = (obj) => {
    this.setCurrentUser(obj);
    this.fetchUserData();
  }

  setCurrentUser = (obj) => {
    this.setState({
      currentUser: obj
    })
  }

  deleteItem = (item) => {
    let token = localStorage.getItem('token')
    let id = parseInt(item.id)
    fetch(`https://red-mart-backend.herokuapp.com/items/${id}`, {
        method: 'DELETE',
        headers: {
          "Authorization" : `Bearer ${token}`
          }
      }).then(()=> {
        this.setState({
        items: this.state.items.filter(t => t.id !== id)
        })


        this.props.history.push('/items')
      })
  }

  removeCartCard = () => {
    this.setState({
      cart: this.state.cart.filter((sin) => sin.cart.id !== this.state.currentUser.cart.id)
    })
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">

      <NavBar logged={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        <Switch>
          <Route path = '/items/:id' render={ (props) => {
            let itemId = parseInt(props.match.params.id)

            return (
              <ItemDetail deleteItem={this.deleteItem} currentUser={this.state.currentUser} item={ this.state.items.find((item)=> item.id === itemId) } addToCartClick={this.addToCartClick}/>
                )}
              }
          />

        <Route path = '/items' render={ (props) => <ItemContainer addItem={this.addItem} handleSubmit={this.handleSubmit} removeFilter={this.removeFilter} searchTerm={this.state.searchTerm} items={this.filtered()} handleChange={this.handleChange} currentUser={this.state.currentUser} mainFilter={this.mainFilter}/> } />

          <Route path = '/cart' render={ (props) => {
              if (this.state.currentUser) {
                return <Cart cart={this.state.cart} currentUser={this.state.currentUser} changeCart={this.changeCart} removeCartCard={this.removeCartCard} removeClick={this.removeClick}/>
              }
              return <Redirect to="/items" />
            } } />
          <Route path = '/about' component={About} />
          <Route exact path="/profile" render={()=> <Profile currentUser={this.state.currentUser}/>} />

          <Route path = '/sell' render={()=> <ItemForm addItem={this.addItem}/> }/>

          <Route exact path="/login" render={ ()=> this.state.currentUser == null ? <LoginForm loginSetup={this.loginSetup} /> : <Redirect to='./items'/> } />
          <Route exact path="/" render={() => <Redirect to="/items" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
