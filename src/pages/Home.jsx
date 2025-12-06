import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    Calendar, 
    User, 
    BookOpen, 
    Award, 
    Target, 
    Eye, 
    Lightbulb,
    ChevronLeft,
    ChevronRight,
    Bell,
    GraduationCap,
    Newspaper,
    ExternalLink
} from 'lucide-react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel slides data
    const carouselSlides = [
        {
            id: 1,
            title: "Leadership Through Knowledge & Discipline",
            subtitle: "Army Institute of Business Administration (AIBA), Savar",
            description: "Affiliated with Bangladesh University of Professionals (BUP)",
            bgGradient: "from-army-dark/80 via-sage-deep/70 to-sage-medium/60"
        },
        {
            id: 2,
            title: "Excellence in Business Education",
            subtitle: "Shaping Future Business Leaders",
            description: "Join our prestigious academic programs for a brighter tomorrow",
            bgGradient: "from-sage-deep/80 via-army-dark/70 to-sage-medium/60"
        },
        {
            id: 3,
            title: "Admission Open Spring 2026",
            subtitle: "Apply Now for BBA & MBA Programs",
            description: "Limited seats available - Start your journey with AIBA",
            bgGradient: "from-army-dark/85 via-sage-deep/75 to-army-dark/65"
        }
    ];

    // Auto-slide carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [carouselSlides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);

    // Notice ticker data
    const notices = [
        { id: 1, date: 'Dec 05, 2025', title: 'Admission Open for Spring 2026 - Apply before December 31st' },
        { id: 2, date: 'Dec 03, 2025', title: 'Final Exam Schedule Published - Check Notice Board' },
        { id: 3, date: 'Nov 28, 2025', title: 'Seminar on Digital Marketing Trends - December 15th' },
        { id: 4, date: 'Nov 25, 2025', title: 'Holiday Notice: Winter Break from December 20th to January 5th' },
    ];

    // Demo notices and news
    const recentNotices = [
        { id: 1, date: 'Dec 05, 2025', title: 'Admission Open for Spring 2026', category: 'Admission' },
        { id: 2, date: 'Dec 03, 2025', title: 'Final Exam Schedule Published', category: 'Academic' },
        { id: 3, date: 'Nov 28, 2025', title: 'Scholarship Application Deadline Extended', category: 'Financial' },
        { id: 4, date: 'Nov 25, 2025', title: 'Library Hours Update for Winter', category: 'General' },
        { id: 5, date: 'Nov 20, 2025', title: 'Research Paper Submission Guidelines', category: 'Research' },
    ];

    const recentNews = [
        { id: 1, date: 'Dec 04, 2025', title: 'AIBA Students Win National Business Competition', image: null },
        { id: 2, date: 'Nov 30, 2025', title: 'MoU Signed with Leading Corporate Partners', image: null },
        { id: 3, date: 'Nov 22, 2025', title: 'Annual Sports Day Celebrated with Enthusiasm', image: null },
    ];

    return (
        <div className="min-h-screen bg-off-white font-sans">
            {/* ==================== HERO CAROUSEL SECTION ==================== */}
            <section className="relative h-[560px] md:h-[600px] overflow-hidden">
                {/* Carousel Slides */}
                <AnimatePresence mode="wait">
                    {carouselSlides.map((slide, index) => (
                        index === currentSlide && (
                            <motion.div
                                key={slide.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0"
                            >
                                {/* Background with strong gradient overlay for better contrast */}
                                <div className="absolute inset-0">
                                    <div className="absolute inset-0 bg-gradient-to-br from-army-dark via-[#2d3d2c] to-sage-deep"></div>
                                    <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-black/30"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex items-center">
                                    <div className="container mx-auto px-8 md:px-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="max-w-4xl"
                                        >
                                            {/* Larger, bolder heading */}
                                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] drop-shadow-lg">
                                                {slide.title}
                                            </h1>
                                            <p className="text-2xl md:text-3xl text-white font-semibold mb-3 drop-shadow-md">
                                                {slide.subtitle}
                                            </p>
                                            <p className="text-lg md:text-xl text-gray-200 mb-10">
                                                {slide.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4 sm:gap-6">
                                                {/* Primary CTA - Navy Blue Accent */}
                                                <Link 
                                                    to="/admission/apply"
                                                    className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-[#0D2340] text-base sm:text-lg font-extrabold rounded-xl hover:bg-[#1E3A5F] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 shadow-lg"
                                                    style={{ color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                                                >
                                                    Apply Now
                                                </Link>
                                                <Link 
                                                    to="/about"
                                                    className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-base sm:text-lg font-bold rounded-xl hover:bg-white hover:text-army-dark transition-all duration-200"
                                                >
                                                    Learn More
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>

                {/* Carousel Navigation Arrows */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 z-20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 z-20"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Carousel Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-[#1E3A5F] w-10' 
                                    : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Floating Quick Action Buttons - Hidden on homepage, less obtrusive */}
                {/* Removed from hero to reduce clutter - accessible via main navigation */}
            </section>

            {/* ==================== RUNNING NOTICE TICKER ==================== */}
            <div className="bg-sage-light border-y border-sage-medium/30 py-3 overflow-hidden relative">
                <div className="container mx-auto flex items-center px-6">
                    {/* Red dot indicator + Label */}
                    <div className="flex items-center gap-3 pr-6 border-r border-sage-medium/50 shrink-0 z-10 bg-sage-light">
                        <span className="w-3 h-3 bg-alert-red rounded-full animate-pulse"></span>
                        <span className="text-army-dark font-bold text-sm uppercase tracking-wide">Latest Notices:</span>
                    </div>
                    
                    {/* Scrolling notices */}
                    <div className="overflow-hidden ml-6 flex-1">
                        <div className="whitespace-nowrap animate-marquee flex gap-16">
                            {notices.map(notice => (
                                <Link 
                                    key={notice.id} 
                                    to="/academics/notices"
                                    className="text-sm text-gray-700 hover:text-sage-deep transition-colors duration-200 flex items-center gap-2"
                                >
                                    <Calendar size={14} className="text-sage-deep" />
                                    <span className="font-semibold text-sage-deep">{notice.date}:</span>
                                    <span>{notice.title}</span>
                                </Link>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {notices.map(notice => (
                                <Link 
                                    key={`dup-${notice.id}`} 
                                    to="/academics/notices"
                                    className="text-sm text-gray-700 hover:text-sage-deep transition-colors duration-200 flex items-center gap-2"
                                >
                                    <Calendar size={14} className="text-sage-deep" />
                                    <span className="font-semibold text-sage-deep">{notice.date}:</span>
                                    <span>{notice.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================== INSTITUTE OVERVIEW (Mission, Vision, Objectives) ==================== */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    {/* Section Header with proper spacing */}
                    <div className="text-center mb-12 md:mb-16">
                        <span className="inline-block text-[#1E3A5F] font-bold uppercase tracking-widest mb-3 text-xs bg-[#1E3A5F]/10 px-4 py-2 rounded-full">About AIBA</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-army-dark mb-4">Our Foundation</h2>
                        <p className="text-cool-gray max-w-xl mx-auto text-base leading-relaxed">
                            Guiding principles that drive our commitment to excellence in business education
                        </p>
                    </div>

                    {/* Cards Grid - Equal height cards with proper internal padding */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            whileHover={{ y: -6 }}
                            className="bg-white px-6 py-8 lg:px-8 lg:py-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            {/* Icon with brand color */}
                            <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <Target size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-army-dark mb-4">Our Mission</h3>
                            <p className="text-cool-gray leading-relaxed text-[15px] flex-1">
                                To provide <strong className="text-army-dark">high-quality business education</strong> that combines 
                                <strong className="text-army-dark"> academic excellence</strong> with military discipline, 
                                producing graduates who are <strong className="text-army-dark">competent, ethical, and ready to lead</strong>.
                            </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white px-6 py-8 lg:px-8 lg:py-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            {/* Icon with gold accent */}
                            <div className="w-16 h-16 bg-soft-gold rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <Eye size={32} className="text-army-dark" />
                            </div>
                            <h3 className="text-xl font-bold text-army-dark mb-4">Our Vision</h3>
                            <p className="text-cool-gray leading-relaxed text-[15px] flex-1">
                                To be recognized as a <strong className="text-army-dark">center of excellence</strong> in business education, 
                                producing leaders who contribute to <strong className="text-army-dark">economic development</strong> with 
                                <strong className="text-army-dark"> integrity and innovation</strong>.
                            </p>
                        </motion.div>

                        {/* Objectives Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            whileHover={{ y: -6 }}
                            className="bg-white px-6 py-8 lg:px-8 lg:py-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            {/* Icon with sage accent */}
                            <div className="w-16 h-16 bg-sage-deep rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <Lightbulb size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-army-dark mb-4">Our Objectives</h3>
                            <p className="text-cool-gray leading-relaxed text-[15px] flex-1">
                                <strong className="text-army-dark">Foster critical thinking</strong> and leadership skills, provide 
                                <strong className="text-army-dark"> industry-oriented curriculum</strong>, and maintain 
                                <strong className="text-army-dark">highest academic integrity</strong>.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================== DIRECTOR'S MESSAGE ==================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="bg-off-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                                {/* Director's Photo - Proper separation */}
                                <div className="lg:col-span-2 bg-army-dark p-8 lg:p-10 flex flex-col items-center justify-center text-center">
                                    <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-full bg-sage-light border-4 border-white shadow-lg overflow-hidden mb-6">
                                        <User className="w-full h-full p-8 text-sage-deep" />
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Brigadier General [Name]</h3>
                                    <p className="text-soft-gold font-semibold uppercase tracking-wide text-xs">Director, AIBA Savar</p>
                                    <div className="w-16 h-1 bg-soft-gold rounded-full mt-4"></div>
                                </div>

                                {/* Message Content - Proper internal padding */}
                                <div className="lg:col-span-3 p-8 lg:p-10 bg-white">
                                    {/* Header with visual accent */}
                                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                                        <div className="w-1 h-12 bg-[#1E3A5F] rounded-full"></div>
                                        <div>
                                            <span className="text-[#1E3A5F] font-bold uppercase tracking-widest text-xs">Message from</span>
                                            <h2 className="text-2xl lg:text-3xl font-extrabold text-army-dark">The Director</h2>
                                        </div>
                                    </div>
                                    
                                    {/* Quote with better formatting */}
                                    <blockquote className="text-cool-gray leading-relaxed text-base mb-5 italic bg-gray-50 p-5 rounded-lg border-l-4 border-[#1E3A5F]">
                                        "Welcome to the Army Institute of Business Administration (AIBA), Savar. We are committed to 
                                        providing a transformative educational experience that combines academic rigor with the discipline 
                                        and values of the Bangladesh Army."
                                    </blockquote>
                                    
                                    <p className="text-cool-gray leading-relaxed text-[15px] mb-8">
                                        Our institution strives to develop future business leaders who are not only academically sound 
                                        but also morally upright, disciplined, and ready to contribute to the nation's progress.
                                    </p>
                                    
                                    {/* Prominent CTA Button - Full width on mobile */}
                                    <Link 
                                        to="/administration/director"
                                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#0D2340] text-base font-extrabold rounded-lg hover:bg-[#1E3A5F] transition-all duration-200 shadow-md hover:shadow-lg"
                                        style={{ color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                                    >
                                        Read Full Message
                                        <ArrowRight size={18} style={{ color: '#FFFFFF' }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==================== NOTICE & NEWS SECTION ==================== */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-10 md:mb-14">
                        <span className="inline-block text-[#1E3A5F] font-bold uppercase tracking-widest mb-3 text-xs bg-[#1E3A5F]/10 px-4 py-2 rounded-full">Stay Updated</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-army-dark mb-4">Notices & Updates</h2>
                        <p className="text-cool-gray max-w-xl mx-auto text-base leading-relaxed">
                            Stay informed with the latest announcements and news from AIBA
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* Notices Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="bg-[#1E3A5F] px-5 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                                        <Bell size={18} className="text-soft-gold" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">Recent Notices</h3>
                                </div>
                                {/* Prominent View All Button */}
                                <Link 
                                    to="/academics/notices"
                                    className="flex items-center gap-1.5 text-sm font-bold bg-white text-[#1E3A5F] px-4 py-2 rounded-lg hover:bg-soft-gold hover:text-army-dark transition-all duration-200"
                                >
                                    View All <ExternalLink size={13} />
                                </Link>
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-5">
                                <ul className="divide-y divide-gray-100">
                                    {recentNotices.map((notice) => (
                                        <li key={notice.id}>
                                            <Link 
                                                to={`/academics/notices/${notice.id}`}
                                                className="py-4 flex items-start gap-4 hover:bg-gray-50 -mx-3 px-3 rounded-lg transition-colors duration-200 group"
                                            >
                                                {/* Prominent Date Box */}
                                                <div className="w-14 h-14 bg-[#1E3A5F] rounded-lg flex flex-col items-center justify-center shrink-0 group-hover:bg-[#2C5282] transition-colors shadow-sm">
                                                    <span className="text-[10px] text-white/80 font-medium uppercase">{notice.date.split(' ')[0]}</span>
                                                    <span className="text-xl font-bold text-white leading-none">{notice.date.split(' ')[1].replace(',', '')}</span>
                                                </div>
                                                <div className="flex-1 min-w-0 pt-0.5">
                                                    {/* Category Badge */}
                                                    <span className="inline-block text-[10px] font-bold text-white bg-soft-gold px-2 py-0.5 rounded uppercase tracking-wide mb-1.5">{notice.category}</span>
                                                    <h4 className="text-gray-800 font-semibold text-sm group-hover:text-[#1E3A5F] transition-colors duration-200 line-clamp-2">
                                                        {notice.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* News Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="bg-army-dark px-5 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                                        <Newspaper size={18} className="text-soft-gold" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">Latest News</h3>
                                </div>
                                {/* Prominent View All Button */}
                                <Link 
                                    to="/news"
                                    className="flex items-center gap-1.5 text-sm font-bold bg-white text-army-dark px-4 py-2 rounded-lg hover:bg-soft-gold transition-all duration-200"
                                >
                                    View All <ExternalLink size={13} />
                                </Link>
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-5">
                                <ul className="space-y-4">
                                    {recentNews.map((news) => (
                                        <li key={news.id}>
                                            <Link 
                                                to={`/news/${news.id}`}
                                                className="flex gap-4 p-3 bg-gray-50 hover:bg-sage-light/30 rounded-lg transition-all duration-200 group"
                                            >
                                                {/* Thumbnail */}
                                                <div className="w-20 h-16 bg-sage-light rounded-lg shrink-0 overflow-hidden flex items-center justify-center">
                                                    <Newspaper size={24} className="text-sage-deep/50" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-center min-w-0">
                                                    <h4 className="text-gray-800 font-semibold text-sm group-hover:text-army-dark transition-colors duration-200 line-clamp-2 mb-2">
                                                        {news.title}
                                                    </h4>
                                                    {/* Prominent Date */}
                                                    <span className="text-xs text-[#1E3A5F] font-bold flex items-center gap-1.5">
                                                        <Calendar size={12} className="text-soft-gold" /> {news.date}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================== STATS SECTION ==================== */}
            <section className="py-16 md:py-20 bg-army-dark text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
                        <motion.div
                            className="p-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <BookOpen size={28} className="text-soft-gold" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">3+</h3>
                            <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Academic Programs</p>
                        </motion.div>
                        <motion.div
                            className="p-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <User size={28} className="text-soft-gold" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">50+</h3>
                            <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Expert Faculty</p>
                        </motion.div>
                        <motion.div
                            className="p-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Award size={28} className="text-soft-gold" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">500+</h3>
                            <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Students</p>
                        </motion.div>
                        <motion.div
                            className="p-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <GraduationCap size={28} className="text-soft-gold" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">100%</h3>
                            <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Quality Commitment</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
