import { Route, Routes } from 'react-router-dom';
import { Home, Resume, Blog, Contact, Portfolio, Navbar, Error } from '../components';

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
