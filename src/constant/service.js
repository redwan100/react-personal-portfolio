import shortid from 'shortid';
import { MdImportantDevices, MdOutlineFileCopy } from 'react-icons/md';
import { RiReactjsFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';

const serviceData = [
  {
    id: shortid,
    title: 'Web Development',
    desc: "I'm working on web design & development for last 3 years.",
    Icon: MdImportantDevices,
  },
  {
    id: shortid,
    title: 'Xd/Psd to Front-end',
    desc: 'I will convert xd/psd or any type of demo design to full front-end.',
    Icon: MdOutlineFileCopy,
  },
  {
    id: shortid,
    title: 'React JS',
    desc: 'I have been working on ReactJS for last 1.5 years.',
    Icon: RiReactjsFill,
  },
  {
    id: shortid,
    title: 'Fast Delivery',
    desc: 'I deliver your business as fast as possible.',
    Icon: TbTruckDelivery,
  },
];
export default serviceData;
