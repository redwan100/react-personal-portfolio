import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Navbar from '../components/nav/Navbar';
import Error from '../Error';

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Router;
