import { useState } from 'react';
import './works.scss'
import {slide} from '../../data.js'



const Works = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (dir) => {
    dir === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < slide.length -1 ? currentSlide+1 : 0);
  }

  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {slide.map(d=>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">  
                <div className="imgContainer">
                <span className="icon">{d.frontend}</span>     
                <span className="icon>">{d.design}</span>
                {d.backend && <span className="icon>">{d.backend}</span>}
                </div>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick()}/>
    </div>
  )
}

export default Works