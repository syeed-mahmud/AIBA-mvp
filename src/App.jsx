import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import History from './pages/about/History';
import Vision from './pages/about/Vision';
import Contact from './pages/Contact';

import FAQ from './pages/about/FAQ';
import Partnerships from './pages/about/Partnerships';
import Gallery from './pages/about/Gallery';

import GoverningBody from './pages/administration/GoverningBody';
import Chairman from './pages/administration/Chairman';
import Director from './pages/administration/Director';
import Office from './pages/administration/Office';

import Programs from './pages/academics/Programs';
import Faculties from './pages/academics/Faculties';
import Calendar from './pages/academics/Calendar';
import Notices from './pages/academics/Notices';

import AdmissionInfo from './pages/admission/AdmissionInfo';
import Financial from './pages/admission/Financial';
import Apply from './pages/admission/Apply';

import Research from './pages/research/Research';
import Utility from './pages/utility/Utility';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/history" element={<History />} />
          <Route path="about/vision" element={<Vision />} />
          <Route path="about/partnerships" element={<Partnerships />} />
          <Route path="about/gallery" element={<Gallery />} />
          <Route path="about/faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />

          <Route path="administration/governing-body" element={<GoverningBody />} />
          <Route path="administration/chairman" element={<Chairman />} />
          <Route path="administration/director" element={<Director />} />
          <Route path="administration/office" element={<Office />} />

          <Route path="academics/programs" element={<Programs />} />
          <Route path="academics/faculties" element={<Faculties />} />
          <Route path="academics/calendar" element={<Calendar />} />
          <Route path="academics/notices" element={<Notices />} />
          <Route path="notices" element={<Notices />} />

          <Route path="admission/undergraduate" element={<AdmissionInfo />} />
          <Route path="admission/graduate" element={<AdmissionInfo />} />
          <Route path="admission/financial" element={<Financial />} />
          <Route path="admission/apply" element={<Apply />} />
          <Route path="admission" element={<AdmissionInfo />} />

          <Route path="research" element={<Research />} />
          <Route path="research/highlights" element={<Research />} />
          <Route path="research/publications" element={<Research />} />

          <Route path="webmail" element={<Utility />} />
          <Route path="noc" element={<Utility />} />
          <Route path="career" element={<Utility />} />
          <Route path="utility" element={<Utility />} />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
