import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1f2937] text-white pt-20 pb-10 font-sans">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About Column */}
                    <div>
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] font-bold text-xl">
                                A
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-white">AIBA Savar</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Army Institute of Business Administration (AIBA), Savar is a premier business school affiliated with Bangladesh University of Professionals (BUP). We are committed to excellence in education and research.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors transform hover:scale-110 duration-200"><Facebook size={22} /></a>
                            <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors transform hover:scale-110 duration-200"><Twitter size={22} /></a>
                            <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors transform hover:scale-110 duration-200"><Linkedin size={22} /></a>
                            <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors transform hover:scale-110 duration-200"><Instagram size={22} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-[var(--color-secondary)]">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-white hover:pl-2 transition-all duration-200">About Us</Link></li>
                            <li><Link to="/academics" className="hover:text-white hover:pl-2 transition-all duration-200">Academic Programs</Link></li>
                            <li><Link to="/admission" className="hover:text-white hover:pl-2 transition-all duration-200">Admission Info</Link></li>
                            <li><Link to="/research" className="hover:text-white hover:pl-2 transition-all duration-200">Research & Publications</Link></li>
                            <li><Link to="/notices" className="hover:text-white hover:pl-2 transition-all duration-200">Notice Board</Link></li>
                            <li><Link to="/contact" className="hover:text-white hover:pl-2 transition-all duration-200">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-[var(--color-secondary)]">Useful Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/webmail" className="hover:text-white hover:pl-2 transition-all duration-200">Webmail</Link></li>
                            <li><Link to="/career" className="hover:text-white hover:pl-2 transition-all duration-200">Career Opportunities</Link></li>
                            <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-200">Degree Verification</a></li>
                            <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-200">Certificate Attestation</a></li>
                            <li><Link to="/noc" className="hover:text-white hover:pl-2 transition-all duration-200">NOC</Link></li>
                            <li><a href="https://bup.edu.bd" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:pl-2 transition-all duration-200">BUP Website</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-[var(--color-secondary)]">Contact Us</h4>
                        <ul className="space-y-5 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-4 mt-1 flex-shrink-0 text-[var(--color-secondary)]" />
                                <span className="leading-relaxed">Savar Cantonment, Savar, Dhaka-1344, Bangladesh</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-4 flex-shrink-0 text-[var(--color-secondary)]" />
                                <span>+880 1769-098191</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-4 flex-shrink-0 text-[var(--color-secondary)]" />
                                <span>info@aibasavar.edu.bd</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} AIBA Savar. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
