import React from 'react'
import { Link } from 'react-router-dom';

class ItemCard extends React.Component {
  render () {
    return (
      <div class="ui link cards" id="itemCards">
      {this.props.items.map( (item,idx) => {
        return (

            <Link key={idx} to={`/items/${item.id}`} id='kocho' style={{padding: "10px"}}>
            <div class="ui card">
              <div class="image">
                <img src={`${item.picture}`} />
              </div>
              <div class="content">
                <div class="header">{`${item.title}`}</div>
                <div class="meta">
                  <a>New</a>
                </div>
                <div class="description">
                  {`${item.category}`}
                </div>
              </div>
              <div class="content">
                <span class="right floated">
                  Recently Posted Item!
                </span>
                <span>
                  <i class="dollar sign icon"></i>
                  {`${item.price}`}
                </span>
              </div>
            </div>
          </Link>

        )
      })}
    </div>
    )
  }
}

export default ItemCard;
