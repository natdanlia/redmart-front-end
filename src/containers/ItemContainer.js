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



                  <div id='bigHeader'><img id='pInsideBigHeader' src='https://i.imgur.com/OBxqyZY.png' ></img></div>


                    <form id='itemSearch' className="ui form" onSubmit={this.props.handleSubmit}>

                      <input className="field" type="text" name="search" value={this.props.searchTerm} placeholder='Search' onChange={this.props.handleChange} />

                      <input id='ser' type="submit" className="ui teal button" value="Search Item"/>

                    </form>
                        <button onClick={this.props.removeFilter} type="text" name='removeFilter' class="ui animated circular massive red icon button">

                            <div className='hidden content'><i className="times icon"></i></div>
                            <div className='visible content'>Remove Filter</div>
                        </button>

                        <button onClick={this.props.mainFilter} type="text" name='sports' class="ui animated circular massive olive icon button">
                            <div className='hidden content'><i className="football ball icon"></i></div>
                            <div className='visible content'>Sports</div>
                        </button>
                        <button onClick={this.props.mainFilter} type="text" name='books' class="ui circular animated massive  icon button">
                            <div className='hidden content'><i class="book icon"></i></div>
                            <div className='visible content'>Books</div>
                        </button>
                        <button onClick={this.props.mainFilter} type="text" name='games' class="ui circular animated massive blue icon button">
                            <div className='hidden content'><i class="playstation icon"></i></div>
                            <div className='visible content'>Games</div>
                        </button>

                        <button onClick={this.props.mainFilter} type="text" name='fashion' class="ui circular animated massive purple icon button">
                            <div className='hidden content'><i class="shopping bag icon"></i></div>
                            <div className='visible content'>Fashion</div>
                        </button>
                        <button onClick={this.props.mainFilter} type="text" name='electronics' class="ui circular animated massive yellow icon button">
                          <div className='hidden content'><i className="mobile alternate icon"></i></div>
                            <div className='visible content'>Electronics</div>
                        </button>

                        <button onClick={this.props.mainFilter} type="text" name='movies' class="ui circular animated massive green icon button">
                          <div className='hidden content'><i class="film icon"></i></div>
                            <div className='visible content'>Movies</div>
                        </button>




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
