import shortid from 'shortid';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const socialData = [
  {
    id: shortid(),
    Icon: FaFacebookSquare,
    link: 'https://www.facebook.com',
  },
  {
    id: shortid(),
    Icon: AiOutlineTwitter,
    link: 'https://www.facebook.com',
  },
  {
    id: shortid(),
    Icon: AiFillLinkedin,
    link: 'https://www.facebook.com',
  },
  {
    id: shortid(),
    Icon: AiFillInstagram,
    link: 'https://www.facebook.com',
  },
  {
    id: shortid(),
    Icon: AiFillGithub,
    link: 'https://www.facebook.com',
  },
];

export default socialData;
