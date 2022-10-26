import {SiReact, SiMysql, SiStyledcomponents, SiRedux, SiFirebase, SiNodedotjs, SiJava, SiBootstrap, SiMongodb} from 'react-icons/si'
import {FaNpm, FaSass} from 'react-icons/fa'
import {DiPhp} from 'react-icons/di'

export const webPortfolio = [
    {
        id: 1,
        title: "Ecommerce App",
        img: "../../../assets/ecommerce.png",
        small:"../../../assets/ecommerce.png"
    },
    {
        id: 2,
        title: "Recipe App",
        img: "../../../assets/food-app.png",
        small:"../../../assets/food-app.png"
    },
    {
        id: 3,
        title: "Blog App",
        img: "../../../assets/blog-app.png",
        small:"../../../assets/blog-app.png"
    },
    {
        id: 4,
        title: "Chat App",
        img: "../../../assets/chat-app.png",
        small: "../../../assets/chat-app2.png"
    },


]

export const clonePortfolio = [
    {
        id: 1,
        title: "Disney Plus Clone",
        img: "../../../assets/disney-clone.png",
        small: "../../../assets/disney-clone.png"
    },
    {
        id: 2,
        title: "Clubhouse Clone",
        img: "../../../assets/clubhouse-clone2.png",
        small: "../../../assets/clubhouse-clone3.png"
    },
    {
        id: 3,
        title: "Tesla Clone",
        img: "../../../assets/tesla-clone.png",
        small: "../../../assets/tesla-clone.png"
    },

]

export const apiPortfolio = [
    {
        id: 1,
        title: "Art Museum",
        img: "../../../assets/art-app.png",
        small: "../../../assets/art-app.png"
    },

]

export const slide = [
    {
        id: "0",
        title: "Blog App",
        frontend: <SiReact/>,
        backend: <SiMysql/>,
        design: <FaSass/>,
        img: "../../../assets/blog-app2.png",
      },
      {
        id: "1",
        title: "Ecommerce Design",
        frontend: <SiReact/>,
        backend: "",
        design: <SiStyledcomponents/>,
        img: "../../../assets/ecommerce2.png",
      },
      {
        id: "2",
        frontend: <SiRedux/>,
        backend: <SiFirebase/>,
        design: <SiStyledcomponents/>,
        img:
        "../../../assets/disney-clone2.png",
      },
]

export const skills = [
    {
        id: 1,
        name: "BACKEND",
        bg: "../../../assets/bg.png",
        languages: [<DiPhp/>, <SiNodedotjs/>, <SiJava/> ],
      },
      {
        id: 2,
        name: "FRONTEND",
        bg: "../../../assets/bg.png",
        featured: true,
        languages: [<SiReact/>, <FaSass/>, <SiStyledcomponents/>, <SiRedux/>, <SiBootstrap/>, <FaNpm/>]
      },
      {
        id: 3,
        name: "DATABASE",
        bg: "../../../assets/bg.png",
        languages: [<SiMysql/>, <SiMongodb/>, <SiFirebase/> ]
      },
]