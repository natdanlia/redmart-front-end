import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'semantic-ui-react'

const ItemDetail = (props, item) => {
  // debugger
  return (




    props.item ?

    <div>
      <div id='bigHeader'><img id='pInsideBigHeader' src='https://i.imgur.com/OBxqyZY.png' ></img></div>
    <div className="ui centered card">
      <div id='itemDetailImage'className="image">
      <img src={props.item.picture}/>
      </div>

      <div className="content">
        <a className="header">{props.item.title}</a>
          <p>Price: {props.item.price}</p>
          <div class="meta">
            <span>Available amount: {props.item.amount}</span>
          </div>

            <p>Category: {props.item.category}</p>

          <div class="description">
            {props.item.description}
        </div>

      </div>
      <div className="extra">
        Rating: <Rating icon='star' defaultRating={5} maxRating={5} />
      </div>

  <div className="extra content">
    <div class="ui two buttons">
        <button className="ui basic green button" onClick={() => {
            props.currentUser ? props.addToCartClick(props.item)  : alert("Please log in to add item to your cart")
          }
        }>Add to Cart</button>
      {props.currentUser ?
      <button className="ui basic red button" onClick={() => props.deleteItem(props.item)}>Delete Item</button> : null}
    </div>
  </div>
  </div>
</div>: null
  )
}

export default ItemDetail;



// var url = 'https://api.spacexdata.com/v2/launches/latest';
//
// var result = fetch(url, {
//     method: 'get',
//   }).then(function(response) {
//     return response.json(); // pass the data as promise to next then block
//   }).then(function(data) {
//     var rocketId = data.rocket.rocket_id;
//
//     console.log(rocketId, '\n');
//
//     return fetch('https://api.spacexdata.com/v2/rockets/' + rocketId); // make a 2nd request and return a promise
//   })
//   .then(function(response) {
//     return response.json();
//   })
//   .catch(function(error) {
//     console.log('Request failed', error)
//   })
//
// // I'm using the result variable to show that you can continue to extend the chain from the returned promise
// result.then(function(r) {
//   console.log(r); // 2nd request result
// })
