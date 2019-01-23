import React from 'react'
import { Route } from 'react-router-dom';
import ItemCard from '../components/ItemCard'
import ItemForm from '../components/ItemForm'

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
                    <button onClick={this.props.mainFilter} type="text" name='sports' class="ui circular massive olive icon button">
                        <div><i className="football ball icon"></i></div>
                        Sports
                    </button>

                    <button onClick={this.props.mainFilter} type="text" name='electronics' class="ui circular massive red icon button">
                      <div><i className="mobile alternate icon"></i></div>
                        Electronics
                    </button>


                  <button class="ui button" type='text' name="movies and books" onClick={this.props.mainFilter}>Movies and Books</button>
                  <form className="ui form" onSubmit={this.props.handleSubmit}>
                    <input className="field" type="text" name="search" value={this.props.searchTerm} onChange={this.props.handleChange} />
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
