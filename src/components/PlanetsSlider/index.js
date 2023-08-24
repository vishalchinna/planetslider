import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = prop => {
  const {planetsList} = prop

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider data-testid="planets" {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} itemList={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
