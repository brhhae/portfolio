import './skills.scss'
import { skills } from '../../data'


const Skills = () => {

  return (
    <div className='testimonials' id='skills'>
      <h1>Skills</h1>
      <div className="container">
        {skills.map(d=>(
          <div className={d.featured ? "card featured" : "card"}>
          <div className="top">           
            {d.languages.map(l =>(
              <span className='icon'>{l}</span>
            ))}
          </div>  
          <div className="bottom">
            <div className="title"><h3>{d.name}</h3></div>
            <div className="bg">
            <img src={d.bg} alt=""/>
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  )
}

export default Skills