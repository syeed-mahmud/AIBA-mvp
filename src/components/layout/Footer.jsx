import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-army-dark text-white font-sans">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Logo + Institute Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 border-2 border-sage-light/30 shadow-low flex-shrink-0">
                                <img 
                                    src="/images-removebg-preview.png" 
                                    alt="AIBA Logo" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">AIBA Savar</h3>
                                <p className="text-sage-light/70 text-sm">Est. 2020</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Army Institute of Business Administration (AIBA), Savar is a premier business school 
                            run by the Bangladesh Army and affiliated with Bangladesh University of Professionals (BUP). 
                            We are committed to excellence in education, research, and leadership development.
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-sage-deep/30 hover:bg-sage-deep rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-sage-deep/30 hover:bg-sage-deep rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-sage-deep/30 hover:bg-sage-deep rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-sage-deep/30 hover:bg-sage-deep rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-sage-deep/30 hover:bg-sage-deep rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Academics Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
                            Academics
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-soft-gold rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/academics/programs" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Academic Programs
                                </Link>
                            </li>
                            <li>
                                <Link to="/academics/faculties" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Faculty Members
                                </Link>
                            </li>
                            <li>
                                <Link to="/academics/calendar" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Academic Calendar
                                </Link>
                            </li>
                            <li>
                                <Link to="/academics/notices" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Notice Board
                                </Link>
                            </li>
                            <li>
                                <Link to="/research" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Research & Publications
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Admission Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
                            Admission
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-soft-gold rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/admission/info" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Admission Info
                                </Link>
                            </li>
                            <li>
                                <Link to="/admission/apply" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Apply Online
                                </Link>
                            </li>
                            <li>
                                <Link to="/admission/financial" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    Financial Information
                                </Link>
                            </li>
                            <li>
                                <a href="https://bup.edu.bd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    BUP Website
                                    <ExternalLink size={12} className="text-sage-medium" />
                                </a>
                            </li>
                            <li>
                                <Link to="/about/faq" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 bg-sage-medium rounded-full"></span>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-soft-gold rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-sage-medium mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed">
                                    Army Institute of Business Administration (AIBA)<br />
                                    Savar Cantonment, Savar<br />
                                    Dhaka-1344, Bangladesh
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-sage-medium flex-shrink-0" />
                                <a href="tel:+8801769098191" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                                    +880 1769-098191
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-sage-medium flex-shrink-0" />
                                <a href="mailto:info@aibasavar.edu.bd" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                                    info@aibasavar.edu.bd
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Copyright */}
            <div className="border-t border-sage-deep/50">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>
                            &copy; {currentYear} Army Institute of Business Administration (AIBA), Savar. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-white transition-colors duration-200">Terms of Use</Link>
                            <Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
