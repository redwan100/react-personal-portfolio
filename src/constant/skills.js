import shortid from 'shortid';

const skillData = [
  {
    id: shortid(),
    title: 'FRONT-END',
    skills: [
      'HTML5/CSS3', 'SASS/SCSS',
      'Bootstrap 4/5', 'Gulp',
      'JavaScript', 'ReactJS',
      'Material UI 4/5',
    ],
  },
  {
    id: shortid(),
    title: 'BACK-END',
    skills: [
      'NodeJS',
      'ExpressJS',

    ],
  },
  {
    id: shortid(),
    title: 'DATABASES',
    skills: [
      'Firebase',
      'MySQL',
      'MongoDB',

    ],
  },
  {
    id: shortid(),
    title: 'SOURCE CONTROL',
    skills: [
      'Git',
      'GitHub',
    ],
  },
];

export default skillData;
