import React from 'react'
import { Route } from 'react-router-dom';
import ItemCard from '../components/ItemCard'


class ItemContainer extends React.Component {
  // constructor (){
  //   super()
  // }

  render () {
    return(
      <div>
        <Route path={this.props.url} render={ (props)=> {
            return (
              <div>
                  <button class="ui button"  type='text' name="removeFilter" onClick={this.props.removeFilter}>Remove Filter</button>
                  <button class="ui button" type='text' name="electronics" onClick={this.props.mainFilter}>Electronics</button>
                  <button class="ui button" type='text' name="sports" onClick={this.props.mainFilter}>Sports</button>
                  <button class="ui button" type='text' name="movies and books" onClick={this.props.mainFilter}>Movies and Books</button>
                  <form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="search" value={this.props.searchTerm} onChange={this.props.handleChange} />
                    <input type="submit" className="ui button" value="Search"/>
                  </form>
                 <ItemCard items={this.props.items} />
              </div>
            )}
          }
        />
      </div>
    )
  }
}

export default ItemContainer;
