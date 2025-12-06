import { motion } from 'framer-motion';
import { TrendingUp, Users, Calculator, Globe, BarChart3, Briefcase, Target, Lightbulb } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const KeyDisciplines = () => {
    const disciplines = [
        {
            title: 'Finance & Banking',
            icon: TrendingUp,
            description: 'Comprehensive study of financial markets, investment analysis, corporate finance, and banking operations.',
            topics: [
                'Financial Analysis & Planning',
                'Investment Management',
                'Banking Operations',
                'Risk Management',
                'Corporate Finance'
            ],
            careers: ['Financial Analyst', 'Investment Banker', 'Risk Manager', 'Treasury Manager']
        },
        {
            title: 'Marketing',
            icon: Target,
            description: 'Strategic marketing concepts including consumer behavior, brand management, and digital marketing.',
            topics: [
                'Consumer Behavior',
                'Brand Management',
                'Digital Marketing',
                'Marketing Research',
                'Sales Management'
            ],
            careers: ['Marketing Manager', 'Brand Manager', 'Digital Marketing Specialist', 'Market Research Analyst']
        },
        {
            title: 'Human Resource Management',
            icon: Users,
            description: 'People management strategies, organizational development, and talent acquisition.',
            topics: [
                'Talent Acquisition',
                'Performance Management',
                'Compensation & Benefits',
                'Training & Development',
                'Labor Relations'
            ],
            careers: ['HR Manager', 'Talent Acquisition Specialist', 'Training Manager', 'HR Business Partner']
        },
        {
            title: 'Accounting & Information Systems',
            icon: Calculator,
            description: 'Financial reporting, management accounting, auditing, and enterprise information systems.',
            topics: [
                'Financial Accounting',
                'Management Accounting',
                'Auditing',
                'Taxation',
                'ERP Systems'
            ],
            careers: ['Chartered Accountant', 'Auditor', 'Financial Controller', 'Tax Consultant']
        },
        {
            title: 'Management & Strategy',
            icon: Briefcase,
            description: 'Strategic planning, organizational management, and business leadership principles.',
            topics: [
                'Strategic Management',
                'Operations Management',
                'Project Management',
                'Business Ethics',
                'Leadership Development'
            ],
            careers: ['Management Consultant', 'Operations Manager', 'Business Analyst', 'Strategy Director']
        },
        {
            title: 'International Business',
            icon: Globe,
            description: 'Global business operations, international trade, and cross-cultural management.',
            topics: [
                'International Trade',
                'Global Supply Chain',
                'Cross-Cultural Management',
                'Export-Import Management',
                'Foreign Exchange'
            ],
            careers: ['Export Manager', 'International Business Consultant', 'Trade Analyst', 'Global Operations Manager']
        },
        {
            title: 'Business Analytics',
            icon: BarChart3,
            description: 'Data-driven decision making using statistical analysis and business intelligence tools.',
            topics: [
                'Data Analysis',
                'Business Intelligence',
                'Predictive Analytics',
                'Statistical Modeling',
                'Decision Science'
            ],
            careers: ['Business Analyst', 'Data Analyst', 'BI Consultant', 'Analytics Manager']
        },
        {
            title: 'Entrepreneurship',
            icon: Lightbulb,
            description: 'New venture creation, startup management, and innovation-driven business development.',
            topics: [
                'Venture Creation',
                'Business Planning',
                'Innovation Management',
                'Startup Financing',
                'Social Entrepreneurship'
            ],
            careers: ['Entrepreneur', 'Startup Founder', 'Business Development Manager', 'Innovation Manager']
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Key Disciplines"
                subtitle="Specialized areas of business education excellence"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Academics', path: '/academics' },
                    { label: 'Key Disciplines' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <p className="text-cool-gray max-w-3xl mx-auto text-lg">
                            AIBA offers specialized concentrations across key business disciplines, 
                            preparing students for diverse career paths in the corporate world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {disciplines.map((discipline, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                            >
                                {/* Header */}
                                <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <discipline.icon size={28} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{discipline.title}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-cool-gray mb-6">{discipline.description}</p>

                                    {/* Key Topics */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-army-dark uppercase tracking-wider mb-3">Key Topics</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {discipline.topics.map((topic, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 bg-sage-light/50 text-army-dark text-sm rounded-full"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Career Paths */}
                                    <div>
                                        <h4 className="text-sm font-bold text-army-dark uppercase tracking-wider mb-3">Career Paths</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {discipline.careers.map((career, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full font-medium"
                                                >
                                                    {career}
                                                </span>
                                            ))}
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

export default KeyDisciplines;
