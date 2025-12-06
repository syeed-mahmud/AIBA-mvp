import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, BookOpen, Award } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';

const Home = () => {
    const notices = [
        { id: 1, date: 'Nov 28, 2025', title: 'Admission Open for Spring 2026' },
        { id: 2, date: 'Nov 25, 2025', title: 'Final Exam Schedule Published' },
        { id: 3, date: 'Nov 20, 2025', title: 'Seminar on Digital Marketing Trends' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroBg} alt="AIBA Campus" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
                </div>

                <div className="container relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-8 leading-tight">
                            Leadership Through <br /><span className="text-[var(--color-secondary)]">Knowledge & Discipline</span>
                        </h1>
                        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-12 text-gray-200 font-light leading-relaxed">
                            Army Institute of Business Administration (AIBA), Savar. <br />
                            Affiliated with Bangladesh University of Professionals (BUP).
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="btn btn-secondary px-10 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                                Apply Now
                            </button>
                            <button className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-10 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Notice Ticker */}
            <div className="bg-[var(--color-primary)] text-white py-4 overflow-hidden relative">
                <div className="container mx-auto flex items-center">
                    <span className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-4 py-2 font-bold text-xs uppercase tracking-wider mr-6 rounded-sm z-10 flex-shrink-0">Latest News</span>
                    <div className="whitespace-nowrap animate-marquee flex space-x-16">
                        {notices.map(notice => (
                            <span key={notice.id} className="text-sm flex items-center">
                                <Calendar size={16} className="mr-3 text-[var(--color-secondary)]" />
                                <span className="font-semibold mr-2">{notice.date}:</span> {notice.title}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Welcome / About Snippet */}
            <section className="py-24 container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-[var(--color-secondary)] font-bold uppercase tracking-widest mb-3 text-sm">About AIBA</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)] mb-8 leading-tight">Excellence in Business Education</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Army Institute of Business Administration (AIBA), Savar is a premier business school run by the Bangladesh Army and affiliated with Bangladesh University of Professionals (BUP). We are dedicated to grooming future leaders with a blend of academic excellence and military discipline.
                        </p>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center text-gray-700 text-lg"><ArrowRight size={20} className="text-[var(--color-secondary)] mr-3 flex-shrink-0" /> State-of-the-art Campus</li>
                            <li className="flex items-center text-gray-700 text-lg"><ArrowRight size={20} className="text-[var(--color-secondary)] mr-3 flex-shrink-0" /> Expert Faculty Members</li>
                            <li className="flex items-center text-gray-700 text-lg"><ArrowRight size={20} className="text-[var(--color-secondary)] mr-3 flex-shrink-0" /> Industry-Oriented Curriculum</li>
                        </ul>
                        <button className="btn btn-primary">Read More About Us</button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--color-secondary)] opacity-20 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-primary)] opacity-20 rounded-br-3xl"></div>
                        <div className="bg-gray-200 rounded-xl overflow-hidden h-[450px] flex items-center justify-center relative shadow-2xl">
                            <img src={heroBg} alt="About AIBA" className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-[var(--color-primary)] mix-blend-multiply opacity-30"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Messages Section */}
            <section className="py-24 bg-gray-100">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="section-title text-[var(--color-primary)]">Leadership Messages</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">Hear from our distinguished leaders about their vision for AIBA Savar</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Chairman Message */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl border-t-4 border-[var(--color-primary)] transition-shadow"
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-24 h-24 rounded-full bg-gray-300 mr-5 flex-shrink-0 overflow-hidden">
                                    <User className="w-full h-full p-5 text-gray-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">Major General [Name]</h3>
                                    <p className="text-sm text-[var(--color-secondary)] font-bold uppercase tracking-wide">Chairman, Governing Body</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed mb-6">"AIBA Savar is committed to producing graduates who are not only academically sound but also morally upright and disciplined..."</p>
                            <button className="text-[var(--color-primary)] font-bold text-sm hover:underline hover:text-[var(--color-primary-light)] transition-colors">Read Full Message →</button>
                        </motion.div>

                        {/* Director Message */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl border-t-4 border-[var(--color-secondary)] transition-shadow"
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-24 h-24 rounded-full bg-gray-300 mr-5 flex-shrink-0 overflow-hidden">
                                    <User className="w-full h-full p-5 text-gray-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">Brigadier General [Name]</h3>
                                    <p className="text-sm text-[var(--color-secondary)] font-bold uppercase tracking-wide">Director</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed mb-6">"We strive to provide a conducive learning environment that fosters innovation, critical thinking, and leadership skills..."</p>
                            <button className="text-[var(--color-primary)] font-bold text-sm hover:underline hover:text-[var(--color-primary-light)] transition-colors">Read Full Message →</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programs / Stats */}
            <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <motion.div
                            className="p-8"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BookOpen size={56} className="mx-auto mb-6 text-[var(--color-secondary)]" />
                            <h3 className="text-5xl font-bold mb-3">3+</h3>
                            <p className="text-gray-300 uppercase tracking-wider text-sm font-semibold">Academic Programs</p>
                        </motion.div>
                        <motion.div
                            className="p-8"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <User size={56} className="mx-auto mb-6 text-[var(--color-secondary)]" />
                            <h3 className="text-5xl font-bold mb-3">50+</h3>
                            <p className="text-gray-300 uppercase tracking-wider text-sm font-semibold">Expert Faculty</p>
                        </motion.div>
                        <motion.div
                            className="p-8"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Award size={56} className="mx-auto mb-6 text-[var(--color-secondary)]" />
                            <h3 className="text-5xl font-bold mb-3">100%</h3>
                            <p className="text-gray-300 uppercase tracking-wider text-sm font-semibold">Commitment to Quality</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
