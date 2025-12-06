import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Mail, Phone, User, GraduationCap, Users, Shield, FileText } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isPortalOpen, setIsPortalOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleDropdownEnter = (name) => setActiveDropdown(name);
    const handleDropdownLeave = () => setActiveDropdown(null);

    const portalItems = [
        { name: 'Student Portal', path: '/portal/student', icon: GraduationCap, desc: 'Access grades, attendance & courses' },
        { name: 'Faculty Portal', path: '/portal/faculty', icon: Users, desc: 'Manage classes & student records' },
        { name: 'Admin Portal', path: '/portal/admin', icon: Shield, desc: 'System administration & reports' },
        { name: 'Admission Portal', path: '/portal/admission', icon: FileText, desc: 'Apply online & track application' }
    ];

    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            dropdown: [
                { name: 'History', path: '/about/history' },
                { name: 'Vision & Mission', path: '/about/vision' },
                { name: 'FAQ', path: '/about/faq' },
                { name: 'Partnerships', path: '/about/partnerships' },
                { name: 'Gallery', path: '/about/gallery' },
            ]
        },
        {
            name: 'Administration',
            path: '/administration',
            dropdown: [
                { name: 'Chairman', path: '/administration/chairman' },
                { name: 'Director', path: '/administration/director' },
                { name: 'Additional Director', path: '/administration/additional-director' },
                { name: 'Governing Body', path: '/administration/governing-body' },
                { name: 'Admin Office', path: '/administration/office' },
            ]
        },
        {
            name: 'Academics',
            path: '/academics',
            dropdown: [
                { name: 'Affiliation', path: '/academics/affiliation' },
                { name: 'Academic Calendar', path: '/academics/calendar' },
                { name: 'Programs', path: '/academics/programs' },
                { name: 'Courses', path: '/academics/courses' },
                { name: 'Key Disciplines', path: '/academics/key-disciplines' },
                { name: 'Faculties', path: '/academics/faculties' },
                { name: 'Notice Board', path: '/academics/notices' },
            ]
        },
        {
            name: 'Admission',
            path: '/admission',
            dropdown: [
                { name: 'Undergraduate (BBA)', path: '/admission/undergraduate' },
                { name: 'Graduate (MBA)', path: '/admission/graduate' },
                { name: 'Eligibility & Roadmap', path: '/admission/eligibility' },
                { name: 'Scholarships', path: '/admission/scholarships' },
                { name: 'Tuition & Fees', path: '/admission/financial' },
                { name: 'Admission FAQ', path: '/admission/faq' },
                { name: 'Notice Board', path: '/admission/notices' },
                { name: 'Apply Now', path: '/admission/apply' },
            ]
        },
        {
            name: 'Research',
            path: '/research',
            dropdown: [
                { name: 'Faculty Research', path: '/research/faculty' },
                { name: 'Student Research', path: '/research/student' },
            ]
        },
        {
            name: 'Publication',
            path: '/publication',
            dropdown: [
                { name: 'Newsletter', path: '/publication/newsletter' },
                { name: 'Magazine', path: '/publication/magazine' },
                { name: 'Journal', path: '/publication/journal' },
            ]
        },
        {
            name: 'Utility',
            path: '/utility',
            dropdown: [
                { name: 'Webmail', path: '/utility/webmail' },
                { name: 'Student Clubs', path: '/utility/student-clubs' },
                { name: 'Career', path: '/utility/career' },
                { name: 'Degree Verification', path: '/utility/degree-verification' },
                { name: 'Certificate Attestation', path: '/utility/certificate-attestation' },
                { name: 'NOC', path: '/utility/noc' },
            ]
        },
    ];

    return (
        <header className="sticky top-0 z-50 font-sans">
            {/* Tier 1: Top Info Bar */}
            <div className="bg-army-dark text-white py-1.5">
                <div className="container mx-auto px-4 flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-4 md:gap-6">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-soft-gold" />
                            <span className="hidden sm:inline">Comilla Cantonment, Bangladesh</span>
                            <span className="sm:hidden">Comilla</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Mail size={13} className="text-soft-gold" />
                            info@aiba.edu.bd
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:flex items-center gap-1.5">
                            <Phone size={13} className="text-soft-gold" />
                            +880 1234-567890
                        </span>
                        {/* Portal Access Dropdown - Desktop */}
                        <div 
                            className="relative hidden md:block"
                            onMouseEnter={() => setIsPortalOpen(true)}
                            onMouseLeave={() => setIsPortalOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 px-2.5 py-0.5 bg-sage-light/20 hover:bg-sage-light/30 rounded text-sage-light transition-colors">
                                <User size={13} />
                                <span>Portal Login</span>
                                <ChevronDown size={12} className={`transition-transform ${isPortalOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {isPortalOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                                    >
                                        <div className="p-2">
                                            {portalItems.map((portal) => (
                                                <Link
                                                    key={portal.name}
                                                    to={portal.path}
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-sage-light/50 transition-colors group"
                                                >
                                                    <div className="p-2 bg-army-dark/10 rounded-lg group-hover:bg-army-dark group-hover:text-white transition-colors">
                                                        <portal.icon size={16} />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-army-dark text-sm">{portal.name}</div>
                                                        <div className="text-xs text-gray-500">{portal.desc}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tier 2: Brand Section - Institute Name as Heading */}
            <div className="bg-white border-b border-sage-light/30">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-between">
                        {/* Logo and Institute Name */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <img 
                                src="/images-removebg-preview.png" 
                                alt="AIBA Logo" 
                                className="h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 object-contain transition-transform group-hover:scale-105"
                            />
                            <h1 className="text-base md:text-lg lg:text-xl font-bold text-army-dark-500 whitespace-nowrap">
                                Army Institute of Business Administration
                            </h1>
                            <h5>
                                (AIBA), Savar Cantonment, Savar 
                            </h5>
                        </Link>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden lg:flex items-center gap-2">
                            <Link 
                                to="/contact" 
                                className="px-4 py-2 border-2 border-army-dark text-army-dark text-xs font-semibold rounded hover:bg-army-dark hover:text-white transition-all duration-200"
                            >
                                Contact
                            </Link>
                            <Link 
                                to="/admission/apply" 
                                className="px-4 py-2 bg-sage-deep text-white text-xs font-bold rounded shadow-md hover:bg-army-dark transition-all duration-200"
                            >
                                Apply Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden text-army-dark p-1.5 hover:bg-sage-light rounded transition-colors" 
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Tier 3: Independent Navigation Bar */}
            <nav className="bg-army-dark hidden lg:block">
                <div className="container mx-auto px-4">
                    <ul className="flex items-center justify-center gap-2">
                        {navItems.map((item) => (
                            <li 
                                key={item.name} 
                                className="relative"
                                onMouseEnter={() => handleDropdownEnter(item.name)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={`flex items-center gap-1.5 px-5 py-3.5 text-sm font-semibold text-white! hover:bg-sage-deep/60 transition-colors ${
                                        activeDropdown === item.name ? 'bg-sage-deep/60' : ''
                                    }`}
                                    style={{ color: 'white' }}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <ChevronDown 
                                            size={14} 
                                            className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                                        />
                                    )}
                                </Link>
                                
                                {/* Dropdown Menu */}
                                {item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute left-0 top-full min-w-[220px] bg-white rounded-b-lg shadow-xl overflow-hidden z-100"
                                            >
                                                <ul className="py-1">
                                                    {item.dropdown.map((subItem) => (
                                                        <li key={subItem.name}>
                                                            <Link
                                                                to={subItem.path}
                                                                onClick={() => {
                                                                    setActiveDropdown(null);
                                                                    window.scrollTo(0, 0);
                                                                }}
                                                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-sage-light/50 hover:text-army-dark hover:pl-5 transition-all"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t shadow-lg overflow-hidden"
                    >
                        {/* Mobile Portal Access */}
                        <div className="p-4 bg-sage-light/30 border-b">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Access</p>
                            <div className="grid grid-cols-2 gap-2">
                                {portalItems.map((portal) => (
                                    <Link
                                        key={portal.name}
                                        to={portal.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-2 p-2.5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <portal.icon size={16} className="text-army-dark" />
                                        <span className="text-xs font-medium text-army-dark">{portal.name.replace(' Portal', '')}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Nav Items */}
                        <ul className="flex flex-col p-3 gap-0.5">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="block py-2.5 px-3 text-army-dark font-semibold hover:bg-sage-light/50 rounded transition-colors text-sm"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <ul className="ml-3 pl-3 border-l-2 border-sage-light mt-0.5 space-y-0.5">
                                            {item.dropdown.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        to={subItem.path}
                                                        className="block py-1.5 px-2.5 text-xs text-gray-600 hover:text-army-dark hover:bg-sage-light/30 rounded transition-all"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile CTA Buttons */}
                        <div className="p-3 border-t bg-gray-50 flex flex-col gap-2">
                            <Link 
                                to="/contact" 
                                className="block w-full text-center px-4 py-2.5 border-2 border-army-dark text-army-dark font-bold rounded hover:bg-army-dark hover:text-white transition-colors text-sm" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <Link 
                                to="/admission/apply" 
                                className="block w-full text-center px-4 py-2.5 bg-sage-deep text-white font-bold rounded shadow-md hover:bg-army-dark transition-colors text-sm" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Apply Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
