import React from 'react'
import { Link } from 'react-router-dom';

class ItemCard extends React.Component {
  render () {
    return (

      this.props.items.map( (item,idx) => {
        return (
          <Link key={idx} to={`/items/${item.id}`}>
            <div >
              <h1>{item.title}</h1>
              <img src={item.picture}/>
              <h3>{item.category}</h3>
            </div>
          </Link>
        )
      })
    )
  }
}

export default ItemCard;
