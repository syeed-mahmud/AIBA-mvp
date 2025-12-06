import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleDropdownEnter = (name) => setActiveDropdown(name);
    const handleDropdownLeave = () => setActiveDropdown(null);

    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            dropdown: [
                { name: 'History', path: '/about/history' },
                { name: 'Vision & Mission', path: '/about/vision' },
                { name: 'Partnerships', path: '/about/partnerships' },
                { name: 'Gallery', path: '/about/gallery' },
                { name: 'FAQ', path: '/about/faq' },
            ]
        },
        {
            name: 'Administration',
            path: '/administration',
            dropdown: [
                { name: 'Governing Body', path: '/administration/governing-body' },
                { name: 'Chairman', path: '/administration/chairman' },
                { name: 'Director', path: '/administration/director' },
                { name: 'Administrative Office', path: '/administration/office' },
            ]
        },
        {
            name: 'Academics',
            path: '/academics',
            dropdown: [
                { name: 'Programs', path: '/academics/programs' },
                { name: 'Faculties', path: '/academics/faculties' },
                { name: 'Academic Calendar', path: '/academics/calendar' },
                { name: 'Notice Board', path: '/academics/notices' },
            ]
        },
        {
            name: 'Admission',
            path: '/admission',
            dropdown: [
                { name: 'Admission Info', path: '/admission/info' },
                { name: 'Financial Info', path: '/admission/financial' },
                { name: 'Apply Now', path: '/admission/apply' },
            ]
        },
        {
            name: 'Research',
            path: '/research',
            dropdown: [
                { name: 'Research', path: '/research' },
                { name: 'Publications', path: '/research/publications' },
            ]
        },
    ];

    return (
        <header className="sticky top-0 z-50 font-sans">
            {/* Top Bar - Full width with internal padding */}
            <div className="bg-army-dark text-white py-2.5"> 
                <div className="max-w-[1600px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-12">
                    {/* Left Side - Location */}
                    <div className="flex items-center gap-2.5">
                        <MapPin size={15} className="text-soft-gold shrink-0" />
                        <span className="text-[13px] font-medium hidden sm:inline text-gray-200">
                            Army Institute of Business Administration (AIBA), Savar Cantonment, Savar
                        </span>
                        <span className="text-[13px] font-medium sm:hidden text-gray-200">
                            AIBA, Savar Cantonment
                        </span>
                    </div>
                    
                    {/* Right Side - Email */}
                    <div className="flex items-center gap-2.5">
                        <Mail size={15} className="text-soft-gold shrink-0" />
                        <a href="mailto:info@aibasavar.edu.bd" className="text-[13px] font-medium text-gray-200 hover:text-soft-gold transition-colors duration-200">
                            info@aibasavar.edu.bd
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header - Full width with proper edge-to-edge spacing */}
            <div className="bg-white shadow-navbar">
                <div className="max-w-[1600px] mx-auto py-4 lg:py-5 flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-12">
                    {/* Logo + Institute Name */}
                    <Link to="/" className="flex items-center gap-3 lg:gap-4 shrink-0"> 
                        {/* Logo Image */}
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shrink-0 shadow-md border-[3px] border-sage-light bg-white">
                            <img 
                                src="/images-removebg-preview.png" 
                                alt="AIBA Logo" 
                                className="w-full h-full object-contain p-1.5"
                            />
                        </div>
                        {/* Vertical Divider for visual separation */}
                        <div className="hidden md:block w-0.5 h-10 bg-sage-light/60 rounded-full"></div>
                        {/* Institute Name - Two lines for clarity */}
                        <div className="hidden md:block max-w-[220px] lg:max-w-[260px]">
                            <h1 className="text-sm lg:text-base font-extrabold text-army-dark leading-tight">
                                Army Institute of<br />Business Administration
                            </h1>
                            <p className="text-[10px] text-cool-gray font-semibold mt-0.5">
                                (AIBA), Savar
                            </p>
                        </div>
                        <div className="md:hidden">
                            <h1 className="text-base font-extrabold text-army-dark">AIBA Savar</h1>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Compact but readable */}
                    <nav className="hidden lg:flex items-center">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => handleDropdownEnter(item.name)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-1 px-3 xl:px-4 py-2 text-[12px] xl:text-[13px] font-semibold uppercase tracking-wide rounded hover:bg-sage-light hover:text-sage-deep transition-all duration-200 ${isActive ? 'text-sage-deep bg-sage-light/50' : 'text-gray-700'}`
                                    }
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />}
                                </NavLink>

                                {/* Dropdown */}
                                {item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 4 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute left-0 top-full pt-1 w-52 z-50"
                                            >
                                                <div className="bg-white shadow-high border border-gray-200">
                                                    <ul className="py-1">
                                                        {item.dropdown.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <Link
                                                                    to={subItem.path}
                                                                    className="block px-4 py-2.5 text-[13px] text-gray-700 hover:bg-sage-light hover:text-sage-deep transition-all duration-200 border-l-2 border-transparent hover:border-sage-deep"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        {/* Contact - Secondary CTA Button */}
                        <Link 
                            to="/contact" 
                            className="ml-3 px-4 py-2 border-2 border-army-dark text-army-dark text-[12px] font-bold uppercase tracking-wide rounded hover:bg-army-dark hover:text-white transition-all duration-200 whitespace-nowrap"
                        >
                            Contact
                        </Link>
                        {/* Apply Now - Primary CTA Button */}
                        <Link 
                            to="/admission/apply" 
                            className="ml-2 px-4 py-2 bg-soft-gold text-army-dark text-[12px] font-bold uppercase tracking-wide rounded shadow-md hover:bg-[#d4c178] hover:shadow-lg transition-all duration-200 whitespace-nowrap"
                        >
                            Apply Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden text-gray-700 p-2 hover:bg-sage-light rounded-md transition-colors duration-200" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t shadow-medium overflow-hidden"
                        >
                            <ul className="flex flex-col p-6 gap-2">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <div className="flex justify-between items-center">
                                            <Link
                                                to={item.path}
                                                className="block py-2.5 text-gray-700 font-semibold hover:text-sage-deep transition-colors duration-200"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                        {item.dropdown && (
                                            <ul className="pl-4 border-l-2 border-sage-light mt-2 space-y-1">
                                                {item.dropdown.map(sub => (
                                                    <li key={sub.name}>
                                                        <Link
                                                            to={sub.path}
                                                            className="block py-2 text-[13px] text-gray-600 hover:text-sage-deep hover:pl-2 transition-all duration-200"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                                <li className="pt-5 flex flex-col gap-3">
                                    <Link 
                                        to="/contact" 
                                        className="block w-full text-center px-6 py-4 border-2 border-army-dark text-army-dark font-bold rounded-md hover:bg-army-dark hover:text-white transition-colors duration-200" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                    <Link 
                                        to="/admission/apply" 
                                        className="block w-full text-center px-6 py-4 bg-soft-gold text-army-dark font-bold rounded-md shadow-md hover:bg-[#d4c178] transition-colors duration-200" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Apply Now
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
