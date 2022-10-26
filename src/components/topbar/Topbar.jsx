import { LinkedIn, Mail, Person } from '@mui/icons-material'
import './topbar.scss'

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Şeyda.</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+383 49 345 506</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>m.seydatatar@gmail.com</span>    
          </div>
          <div className="itemContainer">
            <LinkedIn className='icon'/>
            <span><a href="https://www.linkedin.com/in/%C5%9Feyda-tatar-520b56175/">Şeyda Tatar</a></span>    
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar