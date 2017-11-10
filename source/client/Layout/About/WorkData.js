import qriLogo from '../../static/qri.png'
const workData = [{
    front: {
      title: 'Summer 2017',
      subtitle: 'Software Engineer Intern',
      description: 'Full Stack',
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
  },

  {
    front: {
      title: 'August 2017 - present',
      subtitle: 'Software Engineer Contractor',
      description: 'Full Stack',
      logo: qriLogo,
    },
    back: {
      list: ['Building REST API to query data from GeoServer data warehouse',
        'Using Leaflet to build mapping component to visualize GeoServer data for SpeedWise Portfolio Analysis, a web app that automates well analytics'
      ]
    },
    link: 'http://www.qrigroup.com'
  }
]
export default workData