import "./contact.scss"
import { LinkedIn, Mail, Person } from '@mui/icons-material'

const Contact = () => {

  const handleClick = () => {
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
}

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <button onClick={handleClick}>Download Resume</button>
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