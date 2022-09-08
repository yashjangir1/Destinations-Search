// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchListItems = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            className="search-input"
            onChange={this.onChangeInput}
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="card-lists-container">
          {searchListItems.map(item => (
            <li className="list-items" key={item.id}>
              <DestinationItem destinationItem={item} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
