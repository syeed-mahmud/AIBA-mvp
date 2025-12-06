import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, Calendar, User } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const FacultyResearch = () => {
    const researchHighlights = [
        {
            title: 'Impact of Digital Banking on Financial Inclusion in Rural Bangladesh',
            author: 'Dr. Mohammad Rahman',
            department: 'Finance & Banking',
            year: '2024',
            journal: 'Journal of Banking & Finance',
            abstract: 'This study examines the role of mobile financial services in promoting financial inclusion among rural populations in Bangladesh...',
            tags: ['Digital Banking', 'Financial Inclusion', 'Rural Development']
        },
        {
            title: 'Strategic HRM Practices in Manufacturing Sector: Evidence from Bangladesh',
            author: 'Dr. Farhana Akter',
            department: 'Human Resource Management',
            year: '2024',
            journal: 'International Journal of HRM',
            abstract: 'An empirical investigation into the adoption and effectiveness of strategic human resource management practices...',
            tags: ['Strategic HRM', 'Manufacturing', 'Employee Performance']
        },
        {
            title: 'Consumer Behavior Patterns in E-commerce: Post-COVID Insights',
            author: 'Dr. Kamal Hossain',
            department: 'Marketing',
            year: '2023',
            journal: 'Journal of Marketing Research',
            abstract: 'Analysis of shifting consumer preferences and purchasing behavior in the e-commerce landscape following the COVID-19 pandemic...',
            tags: ['E-commerce', 'Consumer Behavior', 'Digital Marketing']
        },
        {
            title: 'Corporate Governance and Firm Performance: A Study on DSE Listed Companies',
            author: 'Dr. Nasreen Begum',
            department: 'Accounting',
            year: '2023',
            journal: 'Asian Journal of Accounting Research',
            abstract: 'Examining the relationship between corporate governance mechanisms and financial performance of companies listed on Dhaka Stock Exchange...',
            tags: ['Corporate Governance', 'Firm Performance', 'DSE']
        }
    ];

    const researchAreas = [
        'Banking & Financial Services',
        'Strategic Management',
        'Marketing Analytics',
        'Human Capital Development',
        'Entrepreneurship & Innovation',
        'Supply Chain Management',
        'Corporate Sustainability',
        'Digital Business Transformation'
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Faculty Research Highlights"
                subtitle="Advancing knowledge through scholarly research"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Research', path: '/research' },
                    { label: 'Faculty Research' }
                ]}
            />

            {/* Research Areas */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Focus Areas
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Research Domains</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {researchAreas.map((area, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-5 py-2 bg-sage-light/50 text-army-dark rounded-full font-medium hover:bg-sage-light transition-colors"
                            >
                                {area}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Publications */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Publications
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Recent Research</h2>
                    </div>

                    <div className="space-y-6">
                        {researchHighlights.map((research, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-bold rounded-full">
                                                {research.department}
                                            </span>
                                            <span className="flex items-center gap-1 text-sm text-cool-gray">
                                                <Calendar size={14} />
                                                {research.year}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-army-dark mb-2">{research.title}</h3>
                                        
                                        <div className="flex items-center gap-2 mb-3">
                                            <User size={16} className="text-sage-deep" />
                                            <span className="text-cool-gray">{research.author}</span>
                                        </div>
                                        
                                        <p className="text-cool-gray text-sm mb-4">{research.abstract}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {research.tags.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-sage-light/30 text-army-dark text-xs rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-sm">
                                            <BookOpen size={16} className="text-sage-deep" />
                                            <span className="text-cool-gray italic">{research.journal}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FacultyResearch;
