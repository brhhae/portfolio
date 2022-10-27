import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer' ], })
  },[])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/sey2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There! I'm </h2>
          <h1>Şeyda Tatar</h1>
          <h3>Web <span ref={textRef}></span></h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro