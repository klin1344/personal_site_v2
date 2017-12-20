import qriLogo from '../../static/qri.png'
import tableauLogo from '../../static/tableau.png'
const workData = [{
  front: {
    title: 'Summer 2018',
    subtitle: 'Software Engineer Intern',
    location: 'Seattle, WA',
    logo: tableauLogo,
  },
  back: {
    list: ['Incoming Software Engineer Intern at Tableau Software for Summer 2018.']
  },
  link: 'https://www.tableau.com'
}, {
  front: {
    title: 'August 2017 - present',
    subtitle: 'Software Engineer Contractor',
    location: 'Houston, TX',
    logo: qriLogo,
  },
  back: {
    list: ['Building REST API to query data from GeoServer data warehouse',
      'Using Leaflet to build mapping component to visualize GeoServer data for SpeedWise Portfolio Analysis, a web app that automates well analytics'
    ]
  },
  link: 'http://www.qrigroup.com'
}, {
  front: {
    title: 'Summer 2017',
    subtitle: 'Software Engineer Intern',
    location: 'Houston, TX',
    logo: qriLogo
  },
  back: {
    list: ['Developed and deployed visualization and analytics platform: qdca.qrigroup.com',
      'Build a React/Redux-based frontend for decline curve analytics with charting, filtering, sorting, and SSR grid view functionalities for improved client performance',
      'Wrote custom Highcharts plugin to support drag-and-drop of decline curves',
      'Designed a MongoDV schema that minimizes data duplication'
    ]
  },
  link: 'https://qdca.qrigroup.com'
}]
export default workData