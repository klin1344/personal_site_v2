import qriLogo from '../../static/qri.png'
import tableauLogo from '../../static/tableau.png'
const workData = [
  {
    front: {
      title: 'Summer 2019',
      subtitle: 'Software Engineer Intern',
      location: 'Seattle, WA',
      logo: tableauLogo,
    },
    back: {
      list: [
        'Worked at Tableau Software, a Salesforce company, on the Object Model Team',
        'Worked in C++ on compilers and database query plans for the Tableau Calculation Language',
        'Introduced a new, highly requested class of operators to the language that will ship in Tableau 2020.1',
        'Used visitor pattern to extend the lexer, parser, type-checker, and query pipeline to support new syntax',
      ]
    },
    link: 'https://www.tableau.com'
  }, {
    front: {
      title: 'Summer 2018',
      subtitle: 'Software Engineer Intern',
      location: 'Seattle, WA',
      logo: tableauLogo,
    },
    back: {
      list: [
        'Worked on the Connectivity Scrum Team for Tableau Prep (Project Maestro)',
        'Developed a general-purpose telemetry library that enables feedback gathering on UI components',
        'Built an API in Java to connect to BigQuery and designed React/TypeScript higher-order components',
        'Wrote feature, development, and test specs and passed Security Team reviews',
        'Implemented many bug fixes that have been shipped in Tableau Prep 2018.1.2 and 2018.2.1'
      ]
    },
    link: 'https://www.tableau.com'
  }, {
    front: {
      title: 'August 2017 - April 2018',
      subtitle: 'Software Engineer Contractor',
      location: 'Houston, TX',
      logo: qriLogo,
    },
    back: {
      list: ['Assisted Corporate Analytics team in development of SpeedWise Portfolio Analysis (SPA), a new web app that automates well analytics',
        'Built REST API to query and aggregate data from GeoServer and MongoDB',
        'Used Leaflet in React to build mapping components to visualize data',
        'Features implemented include spatial data queries, dynamic styling variables, clustering, and two-way marker binding',
        'Integrated hybrid, Office 365-based authentication layer using Azure AD']
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
        'Built a React/Redux-based frontend for decline curve analytics with charting, filtering, sorting, and SSR grid view functionalities for improved client performance',
        'Wrote custom Highcharts plugin to support drag-and-drop of decline curves',
        'Designed a MongoDB schema that minimizes data duplication'
      ]
    },
    link: 'https://qdca.qrigroup.com'
  }]
export default workData