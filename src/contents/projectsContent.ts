import Ploop from '../assets/images/Ploop.png'
import Duckpile from '../assets/images/Duckpile.jpg'
import Portfolio from '../assets/images/Portfolio.png'

export default [
    {
        title: 'Ploop',
        description: 'A dynamic and interactive social art platform using a modern tech stack. Implemented a microservices architecture, cloud storage with Cloudflare, integrating RabbitMQ for robust communication between services, and GraphQL for efficient data aggregation. Designed and built features for user-generated time-lapse video creation, real-time social interactions (likes, shares, comments), and a unique remixing functionality akin to popular social media platforms.',
        skills: ['React', 'Express', 'Node.js', 'Postgresql', 'Typescript', 'Redux', 'RabbitMQ', 'Graphql', 'WebSocket'],
        image: Ploop,
        links: {
            github: 'https://github.com/xM1nh/ploop',
            preview: '',
          },
    },
    {
        title: 'Duckpile',
        description: 'My first major full stack app built with React and Node and it was a tremendous learning experience. This inventory management app is made for my 3-person team during my time working at VcalTV in an effort to move away from Excel-based workflow. During the testing period, the app helped improved efficiency by almost 100% where tasks that had taken 30-60 minutes to do then only took half that time.',
        skills: ['React', 'Express', 'Node.js', 'Postgresql', 'Redux'],
        image: Duckpile,
        links: {
            github: 'https://github.com/xM1nh/duckpile',
            preview: '',
          },
    },
    {
        title: 'Personal Portfolio',
        description: 'My personal portfolio, this site! Responsive website built with React.',
        skills: ['React'],
        image: Portfolio,
        links: {
            github: 'https://github.com/xM1nh/duckpile',
            preview: '',
          },
    },
]