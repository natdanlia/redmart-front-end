import React from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = (props, item) => {
  // debugger
  return (
    props.item ?
    <div>
      <h1>{props.item.title}</h1>
      <h3>Available amount: {props.item.amount}</h3>
      <p>Price: {props.item.price}</p>
      <img src={props.item.picture}/>
      <p>{props.item.description}</p>

      <button className="ui button" onClick={() => props.addToCartClick(props.item)}>Add to Cart</button>


    </div> : null
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
