import alignrImg from '../static/project_images/alignr.png'
import defbeatsImg from '../static/project_images/defbeats.jpg'
import owlsecurityImg from '../static/project_images/owlsecurity.png'
import cardifyImg from '../static/project_images/cardifyflashcards.png'
import energycityImg from '../static/project_images/energycity.png'
import kinematicphysicsImg from '../static/project_images/kinematicphysics.png'
import marsvarsImg from '../static/project_images/marsvars.jpg'
import pictolateImg from '../static/project_images/pictolate.jpg'
import sandalsImg from '../static/project_images/sandals.png'
const projectsData = [{
    title: 'Alignr',
    image: alignrImg,
    type: 'Personal Project, Web',
    tech: ['Javascript', 'CSS/Bootstrap', 'HTML'],
    description: 'A Web-based tool for biology that performs both local and global pairwise sequence alignment. Employs a Dynamic Programming solution.'
  },
  {
    title: 'defBeats',
    image: defbeatsImg,
    type: 'PennApps XV, Hardware',
    tech: ['Raspberry Pi', 'Python', 'Flask', 'Javascript', '3D Printing', 'Laser-cutting'],
    description: 'A wearable device that lets deaf people fully immerse themselves in music in real time by converting audio to synchronized vibration motors and an LED equalizer. Created at PennApps XV.'
  },
  {
    title: 'OwlSecurity',
    image: owlsecurityImg,
    type: 'CodeRED Curiosity, Android',
    tech: ['Java', 'Android SDK', 'Google Cloud', 'IBM Watson', 'Google Cloud', 'Imgur API'],
    description: 'Turn any old phone into a smart security camera that automatically detects for threats and keep your home safe. Winner for "Best Use of IBM Watson" at CodeRED Curiosity 2016.'
  },
  {
    title: 'Cardify Flashcards',
    image: cardifyImg,
    type: 'Personal Project, Android',
    tech: ['Java', 'Android SDK'],
    description: 'Create, edit, review, and manage your flashcard sets in the palm of your hand! My first project ever. Published to Google Play Store, January 2014. Over 300 downloads.'
  },
  {
    title: 'Energy City',
    image: energycityImg,
    type: 'Personal Project, Android',
    tech: ['Java', 'Android SDK', 'LibGDX'],
    description: 'A simple, yet captivating 2D game that will test your reflexes—and patience! The goal is simple: make the lightning strike hit the battery to charge it and power the city! Published to Google Play Store, July 2014. Over 300 downloads.'
  },
  {
    title: 'Kinematic Physics',
    image: kinematicphysicsImg,
    type: 'Personal Project, Android',
    tech: ['Java', 'Android SDK'],
    description: 'An intelligent tool to help solve 1-Dimensional and 2-Dimensional physics problems involving the kinematic equations of motion. Published to Google Play, August 2015. Over 3,000 downloads.'
  },
  {
    title: 'MarsVars',
    image: marsvarsImg,
    type: 'MLH Prime, VR',
    tech: ['HTC Vive', 'Unity 3D', 'C#', 'AWS DyanomoDB', 'Javacript', 'HTML/CSS'],
    description: 'Virtual reality simulator of Mars to train astronauts to adapt to real-time environment alterations. Finalist (Top 7) at MLH Prime Southwest Regional 2016.'
  },
  {
    title: 'Pictolate',
    image: pictolateImg,
    type: 'HackTX, Web',
    tech: ['HTML/CSS', 'Node.js', 'RapidAPI', 'Azure APIs', 'Google Cloud'],
    description: 'A Web-based application that analyzes the contents of any picture and converts it to a foreign language of the users choice. Created at HackTX 2016.'
  },
  {
    title: 'Sandals',
    image: sandalsImg,
    type: 'HackRice, Android',
    tech: ['Java', 'Android SDK', 'Google Firebase'],
    description: 'A proof-of-concept Android application that helps users interact within different social groups, including family, friends, and peers.  Created at HackRice 2016.'
  }
]
export default projectsData