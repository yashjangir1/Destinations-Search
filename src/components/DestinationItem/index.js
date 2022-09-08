// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props

  return (
    <div className="card-container">
      <img
        className="destination-image"
        alt={destinationItem.name}
        src={destinationItem.imgUrl}
      />
      <p className="destination-name">{destinationItem.name}</p>
    </div>
  )
}

export default DestinationItem
