import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

// About pages
import History from './pages/about/History';
import Vision from './pages/about/Vision';
import FAQ from './pages/about/FAQ';
import Partnerships from './pages/about/Partnerships';
import Gallery from './pages/about/Gallery';

// Administration pages
import Chairman from './pages/administration/Chairman';
import Director from './pages/administration/Director';
import AdditionalDirector from './pages/administration/AdditionalDirector';
import GoverningBody from './pages/administration/GoverningBody';
import Office from './pages/administration/Office';

// Academics pages
import Affiliation from './pages/academics/Affiliation';
import Calendar from './pages/academics/Calendar';
import Programs from './pages/academics/Programs';
import Courses from './pages/academics/Courses';
import KeyDisciplines from './pages/academics/KeyDisciplines';
import Faculties from './pages/academics/Faculties';
import Notices from './pages/academics/Notices';

// Admission pages
import Undergraduate from './pages/admission/Undergraduate';
import Graduate from './pages/admission/Graduate';
import Eligibility from './pages/admission/Eligibility';
import Scholarships from './pages/admission/Scholarships';
import Financial from './pages/admission/Financial';
import AdmissionFAQ from './pages/admission/AdmissionFAQ';
import AdmissionNotices from './pages/admission/AdmissionNotices';
import Apply from './pages/admission/Apply';

// Research pages
import FacultyResearch from './pages/research/FacultyResearch';
import StudentResearch from './pages/research/StudentResearch';

// Publication pages
import Newsletter from './pages/publication/Newsletter';
import Magazine from './pages/publication/Magazine';
import Journal from './pages/publication/Journal';

// Utility pages
import Webmail from './pages/utility/Webmail';
import StudentClubs from './pages/utility/StudentClubs';
import Career from './pages/utility/Career';
import DegreeVerification from './pages/utility/DegreeVerification';
import CertificateAttestation from './pages/utility/CertificateAttestation';
import NOC from './pages/utility/NOC';

// Portal pages (Phase 2)
import StudentPortal from './pages/portals/StudentPortal';
import FacultyPortal from './pages/portals/FacultyPortal';
import AdminPortal from './pages/portals/AdminPortal';
import AdmissionPortal from './pages/portals/AdmissionPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />

          {/* About Routes */}
          <Route path="about" element={<History />} />
          <Route path="about/history" element={<History />} />
          <Route path="about/vision" element={<Vision />} />
          <Route path="about/faq" element={<FAQ />} />
          <Route path="about/partnerships" element={<Partnerships />} />
          <Route path="about/gallery" element={<Gallery />} />

          {/* Administration Routes */}
          <Route path="administration" element={<Chairman />} />
          <Route path="administration/chairman" element={<Chairman />} />
          <Route path="administration/director" element={<Director />} />
          <Route path="administration/additional-director" element={<AdditionalDirector />} />
          <Route path="administration/governing-body" element={<GoverningBody />} />
          <Route path="administration/office" element={<Office />} />

          {/* Academics Routes */}
          <Route path="academics" element={<Programs />} />
          <Route path="academics/affiliation" element={<Affiliation />} />
          <Route path="academics/calendar" element={<Calendar />} />
          <Route path="academics/programs" element={<Programs />} />
          <Route path="academics/courses" element={<Courses />} />
          <Route path="academics/key-disciplines" element={<KeyDisciplines />} />
          <Route path="academics/faculties" element={<Faculties />} />
          <Route path="academics/notices" element={<Notices />} />
          <Route path="notices" element={<Notices />} />

          {/* Admission Routes */}
          <Route path="admission/undergraduate" element={<Undergraduate />} />
          <Route path="admission/graduate" element={<Graduate />} />
          <Route path="admission/eligibility" element={<Eligibility />} />
          <Route path="admission/scholarships" element={<Scholarships />} />
          <Route path="admission/financial" element={<Financial />} />
          <Route path="admission/faq" element={<AdmissionFAQ />} />
          <Route path="admission/notices" element={<AdmissionNotices />} />
          <Route path="admission/apply" element={<Apply />} />
          <Route path="admission" element={<Undergraduate />} />

          {/* Research Routes */}
          <Route path="research/faculty" element={<FacultyResearch />} />
          <Route path="research/student" element={<StudentResearch />} />
          <Route path="research" element={<FacultyResearch />} />

          {/* Publication Routes */}
          <Route path="publication/newsletter" element={<Newsletter />} />
          <Route path="publication/magazine" element={<Magazine />} />
          <Route path="publication/journal" element={<Journal />} />
          <Route path="publication" element={<Newsletter />} />

          {/* Utility Routes */}
          <Route path="utility/webmail" element={<Webmail />} />
          <Route path="utility/student-clubs" element={<StudentClubs />} />
          <Route path="utility/career" element={<Career />} />
          <Route path="utility/degree-verification" element={<DegreeVerification />} />
          <Route path="utility/certificate-attestation" element={<CertificateAttestation />} />
          <Route path="utility/noc" element={<NOC />} />
          <Route path="utility" element={<Webmail />} />

          {/* Portal Routes (Phase 2) */}
          <Route path="portal/student" element={<StudentPortal />} />
          <Route path="portal/faculty" element={<FacultyPortal />} />
          <Route path="portal/admin" element={<AdminPortal />} />
          <Route path="portal/admission" element={<AdmissionPortal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
