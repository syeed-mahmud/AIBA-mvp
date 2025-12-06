import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleDropdownEnter = (name) => setActiveDropdown(name);
    const handleDropdownLeave = () => setActiveDropdown(null);

    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'About Us',
            path: '/about',
            dropdown: [
                { name: 'History', path: '/about/history' },
                { name: 'Vision & Mission', path: '/about/vision' },
                { name: 'Partnerships', path: '/about/partnerships' },
                { name: 'Gallery', path: '/about/gallery' },
                { name: 'Contact Us', path: '/contact' },
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
                { name: 'Undergraduate', path: '/admission/undergraduate' },
                { name: 'Graduate', path: '/admission/graduate' },
                { name: 'Financial Info', path: '/admission/financial' },
                { name: 'Apply Now', path: '/admission/apply' },
            ]
        },
        {
            name: 'Research',
            path: '/research',
            dropdown: [
                { name: 'Highlights', path: '/research/highlights' },
                { name: 'Publications', path: '/research/publications' },
            ]
        },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 font-sans">
            {/* Top Bar */}
            <div className="bg-[var(--color-primary)] text-white py-3 text-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center"><Phone size={14} className="mr-2" /> +880 1769-098191</span>
                        <span className="flex items-center"><Mail size={14} className="mr-2" /> info@aibasavar.edu.bd</span>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/webmail" className="hover:text-[var(--color-secondary)] transition-colors">Webmail</Link>
                        <Link to="/notices" className="hover:text-[var(--color-secondary)] transition-colors">Notice Board</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto py-5 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    {/* Placeholder for Logo Image */}
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        A
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] font-serif leading-tight">
                            AIBA Savar
                        </h1>
                        <p className="text-xs text-gray-600 hidden md:block">Army Institute of Business Administration</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
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
                                    `flex items-center text-sm font-medium uppercase tracking-wide py-2 hover:text-[var(--color-primary)] transition-colors ${isActive ? 'text-[var(--color-primary)] font-bold' : 'text-gray-700'}`
                                }
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                            </NavLink>

                            {/* Dropdown */}
                            {item.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md overflow-hidden border-t-4 border-[var(--color-primary)]"
                                        >
                                            <ul className="py-2">
                                                {item.dropdown.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <Link
                                                            to={subItem.path}
                                                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors"
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
                        </div>
                    ))}
                    <Link to="/admission/apply" className="btn btn-primary text-sm">
                        Apply Now
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="lg:hidden text-gray-700" onClick={toggleMenu}>
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
                        className="lg:hidden bg-white border-t"
                    >
                        <ul className="flex flex-col p-6 space-y-3">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to={item.path}
                                            className="block py-2 text-gray-700 font-medium hover:text-[var(--color-primary)]"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                    {item.dropdown && (
                                        <ul className="pl-4 border-l-2 border-gray-100 mt-2 space-y-2">
                                            {item.dropdown.map(sub => (
                                                <li key={sub.name}>
                                                    <Link
                                                        to={sub.path}
                                                        className="block py-1.5 text-sm text-gray-600 hover:text-[var(--color-primary)]"
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
                            <li>
                                <Link to="/admission/apply" className="btn btn-primary w-full text-center mt-4" onClick={() => setIsMenuOpen(false)}>
                                    Apply Now
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
