import './index.css'

const PlanetItem = prop => {
  const {itemList} = prop
  const {description, imageUrl, name} = itemList
  return (
    <div className="container">
      <h1 className="head">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
