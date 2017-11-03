import alignrImg from '../../static/project_images/alignr.png'
import defbeatsImg from '../../static/project_images/defbeats.jpg'
import owlsecurityImg from '../../static/project_images/owlsecurity.png'
import cardifyImg from '../../static/project_images/cardifyflashcards.png'
import energycityImg from '../../static/project_images/energycity.png'
import kinematicphysicsImg from '../../static/project_images/kinematicphysics.png'
import marsvarsImg from '../../static/project_images/marsvars.jpg'
import pictolateImg from '../../static/project_images/pictolate.jpg'
import sandalsImg from '../../static/project_images/sandals.png'
import oldsiteImg from '../../static/project_images/oldpersonalwebsite.png'
import newsiteImg from '../../static/project_images/newpersonalwebsite.png'
import barkImg from '../../static/project_images/bark.png'
import reactTemplateImg from '../../static/project_images/reacttemplate.png'
import dataDrivenImg from '../../static/project_images/datadriven.png'
const projectsData = [{
    title: 'DataDriven',
    image: dataDrivenImg,
    type: 'HackRice 2017, Web',
    tech: ['Python', 'React', 'Node.js', 'Javascript', 'HTML', 'CSS/SASS'],
    description: 'A data-driven solution to automatically connect people with carpool buddies.',
    link: 'https://devpost.com/software/datadriven',
    ribbon: 'none'
  }, {
    title: 'Personal Website',
    image: newsiteImg,
    type: 'Personal Project, Web',
    tech: ['React', 'Node.js', 'Javascript', 'HTML', 'CSS/SASS'],
    description: 'My personal website, re-designed and re-written with React.',
    link: 'https://github.com/klin1344/klin1344.github.io',
    ribbon: 'published'
  }, {
    title: 'Alignr',
    image: alignrImg,
    type: 'Personal Project, Web',
    tech: ['Javascript', 'CSS/Bootstrap', 'HTML'],
    description: 'A Web-based tool for biology that performs both local and global pairwise sequence alignment. Employs a Dynamic Programming solution.',
    link: 'http://kevinylin.net/Alignr',
    ribbon: 'published'
  },
  {
    title: 'React Template',
    image: reactTemplateImg,
    type: 'Personal Project, Web',
    tech: ['React', 'Node.js', 'Javascript', 'HTML'],
    description: 'A ready-to-build template and folder structure for React projects, with Express server.',
    link: 'https://github.com/klin1344/react-template',
    ribbon: 'none'
  },
  {
    title: 'defBeats',
    image: defbeatsImg,
    type: 'PennApps XV, Hardware',
    tech: ['Raspberry Pi', 'Python', 'Flask', 'Javascript', '3D Printing', 'Laser-cutting'],
    description: 'A wearable device that lets deaf people fully immerse themselves in music in real time by converting audio to synchronized vibration motors and an LED equalizer. Created at PennApps XV.',
    link: 'https://devpost.com/software/defbeats',
    ribbon: 'none'
  },
  {
    title: 'OwlSecurity',
    image: owlsecurityImg,
    type: 'CodeRED Curiosity, Android',
    tech: ['Java', 'Android SDK', 'Google Cloud', 'IBM Watson', 'Google Cloud', 'Imgur API'],
    description: 'Turn any old phone into a smart security camera that automatically detects for threats and keep your home safe. Winner for "Best Use of IBM Watson" at CodeRED Curiosity 2016.',
    link: 'https://github.com/klin1344/OwlSecurity',
    ribbon: 'winner'
  },
  {
    title: 'Cardify Flashcards',
    image: cardifyImg,
    type: 'Personal Project, Android',
    tech: ['Java', 'Android SDK'],
    description: 'Create, edit, review, and manage your flashcard sets in the palm of your hand! My first project ever. Published to Google Play Store, January 2014. Over 300 downloads.',
    link: 'https://play.google.com/store/apps/details?id=com.klin1344.cardify&hl=en',
    ribbon: 'published'
  },
  {
    title: 'Energy City',
    image: energycityImg,
    type: 'Personal Project, Android',
    tech: ['Java', 'Android SDK', 'LibGDX'],
    description: 'A simple, yet captivating 2D game that will test your reflexes—and patience! The goal is simple: make the lightning strike hit the battery to charge it and power the city! Published to Google Play Store, July 2014. Over 300 downloads.',
    link: 'https://play.google.com/store/apps/details?id=com.klin1344.energycity.android&hl=en',
    ribbon: 'published'
  },
  {
    title: 'Kinematic Physics',
    image: kinematicphysicsImg,
    type: 'Personal Project, Android',
    tech: ['Java', 'Android SDK'],
    description: 'An intelligent tool to help solve 1-Dimensional and 2-Dimensional physics problems involving the kinematic equations of motion. Published to Google Play, August 2015. Over 3,000 downloads.',
    link: 'https://play.google.com/store/apps/details?id=com.klin1344.kinematicphysics&hl=en',
    ribbon: 'published'
  },
  {
    title: 'MarsVars',
    image: marsvarsImg,
    type: 'MLH Prime 2016, VR',
    tech: ['HTC Vive', 'Unity 3D', 'C#', 'AWS DyanomoDB', 'Javacript', 'HTML/CSS'],
    description: 'Virtual reality simulator of Mars to train astronauts to adapt to real-time environment alterations. Finalist (Top 7) at MLH Prime Southwest Regional 2016.',
    link: 'https://devpost.com/software/marsvars',
    ribbon: 'winner'
  },
  {
    title: 'Pictolate',
    image: pictolateImg,
    type: 'HackTX 2016, Web',
    tech: ['HTML/CSS', 'Node.js', 'RapidAPI', 'Azure APIs', 'Google Cloud'],
    description: 'A Web-based application that analyzes the contents of any picture and converts it to a foreign language of the users choice. Created at HackTX 2016.',
    link: 'https://devpost.com/software/pictolate',
    ribbon: 'none'
  },
  {
    title: 'Sandals',
    image: sandalsImg,
    type: 'HackRice 2016, Android',
    tech: ['Java', 'Android SDK', 'Google Firebase'],
    description: 'A proof-of-concept Android application that helps users interact within different social groups, including family, friends, and peers.  Created at HackRice 2016.',
    link: 'https://github.com/klin1344/Sandals',
    ribbon: 'none'
  },
  {
    title: 'Bark!',
    image: barkImg,
    type: 'Personal Project, Alexa/Amazon Echo',
    tech: ['Python', 'AWS Lambda', 'Alexa Skills Kit'],
    description: 'Bark! turns Alexa into a loud, mean dog so you can scare away strangers!',
    link: 'https://www.amazon.com/dp/B074M2Z6G5/ref=sr_1_4?s=digital-skills&ie=UTF8&qid=1503070450&sr=1-4&keywords=bark%21',
    ribbon: 'published'
  },
  {
    title: 'Old Website',
    image: oldsiteImg,
    type: 'Personal Project, Web',
    tech: ['Javascript', 'HTML', 'CSS/Bootstrap'],
    description: 'The first version of this personal website, written in raw Javascript and HTML/CSS.',
    link: 'https://github.com/klin1344/old-personal-website',
    ribbon: 'none'
  }
]
export default projectsData