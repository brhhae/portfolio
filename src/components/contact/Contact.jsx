import "./contact.scss"
import { LinkedIn, Mail, Person } from '@mui/icons-material'

const Contact = () => {


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <a href="https://github.com/brhhae/portfolio/blob/master/public/Resume.pdf">Download Resume</a>
        <div className="info">
          <div className="itemContainer"><Person className="icon"/><span> +383 49 345 506</span></div>
          <div className="itemContainer"><Mail className="icon"/><span> m.seydatatar@gmail.com</span></div>
          <div className="itemContainer"><LinkedIn className="icon"/><span><a href="https://www.linkedin.com/in/%C5%9Feyda-tatar-520b56175/">Şeyda Tatar</a></span></div>
        </div>
      </div>
    </div>
  )
}

export default Contact