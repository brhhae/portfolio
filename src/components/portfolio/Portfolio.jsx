import { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { webPortfolio, 
         clonePortfolio, 
         apiPortfolio } from '../../data'
import ModalImage from "react-modal-image";

const Portfolio = () => {
  
  const [selected, setSelected] = useState("clone");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "clone",
      title: "Clones",
    },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "api",
      title: "API",
    },

  ];

  useEffect(()=>{
    switch (selected) {
      case "clone":
        setData(clonePortfolio);
        break;
      case "web":
        setData(webPortfolio);
          break;
      case "api":
        setData(apiPortfolio);
        break;
      
        default:
        break;
    }
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id} 
            />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          <ModalImage 
              className="item" key={d.id}
                small={d.small}
                medium={d.img}
                large={d.img}
                hideDownload = {true}
                hideZoom = {true}    
          />
        ))}
        
      </div> 
    </div>
  )
}

export default Portfolio