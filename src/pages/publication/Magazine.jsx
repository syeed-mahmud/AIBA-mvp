import { motion } from 'framer-motion';
import { BookOpen, Calendar, Download, Eye } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const Magazine = () => {
    const magazines = [
        {
            title: 'AIBA Horizon 2024',
            subtitle: 'Annual Magazine',
            year: '2024',
            theme: 'Innovation & Excellence',
            pages: 120,
            features: [
                'Director\'s Message',
                'Year in Review',
                'Faculty Achievements',
                'Student Articles & Stories',
                'Alumni Interviews',
                'Photo Gallery'
            ]
        },
        {
            title: 'AIBA Horizon 2023',
            subtitle: 'Annual Magazine',
            year: '2023',
            theme: 'Building Tomorrow\'s Leaders',
            pages: 108,
            features: [
                'Founding Vision',
                'Academic Excellence',
                'Co-curricular Activities',
                'Creative Writing',
                'Sports & Culture'
            ]
        },
        {
            title: 'AIBA Horizon 2022',
            subtitle: 'Annual Magazine',
            year: '2022',
            theme: 'Resilience & Growth',
            pages: 96,
            features: [
                'Post-COVID Adaptation',
                'Digital Learning Journey',
                'Research Highlights',
                'Student Achievements'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Magazine"
                subtitle="AIBA Horizon - Our annual publication showcasing excellence"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Publication', path: '/publication' },
                    { label: 'Magazine' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    {/* Featured Magazine */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="h-64 lg:h-auto bg-gradient-to-br from-navy to-army-dark flex items-center justify-center">
                                <div className="text-center text-white">
                                    <BookOpen size={80} className="mx-auto mb-4 opacity-50" />
                                    <p className="text-xl font-bold">AIBA HORIZON</p>
                                    <p className="text-4xl font-extrabold">2024</p>
                                </div>
                            </div>
                            <div className="p-8 lg:p-12">
                                <span className="inline-block px-4 py-1 bg-soft-gold text-army-dark text-sm font-bold rounded-full mb-4">
                                    Latest Edition
                                </span>
                                <h2 className="text-3xl font-bold text-army-dark mb-2">{magazines[0].title}</h2>
                                <p className="text-sage-deep font-semibold mb-4">Theme: {magazines[0].theme}</p>
                                <p className="text-cool-gray mb-6">
                                    Our flagship annual publication featuring the best of AIBA - from academic achievements 
                                    to creative expressions, student stories to faculty insights.
                                </p>
                                
                                <div className="flex items-center gap-6 mb-6 text-sm text-cool-gray">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        {magazines[0].year}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <BookOpen size={16} />
                                        {magazines[0].pages} Pages
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors">
                                        <Download size={18} />
                                        Download PDF
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-sage-light text-army-dark font-bold rounded-lg hover:bg-sage-medium transition-colors">
                                        <Eye size={18} />
                                        Preview Online
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Archive */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-army-dark">Previous Editions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {magazines.slice(1).map((magazine, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex gap-6"
                            >
                                <div className="w-24 h-32 bg-gradient-to-br from-sage-deep to-army-dark rounded-lg flex items-center justify-center shrink-0">
                                    <div className="text-center text-white">
                                        <BookOpen size={24} className="mx-auto mb-1 opacity-70" />
                                        <p className="text-lg font-bold">{magazine.year}</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-army-dark mb-1">{magazine.title}</h3>
                                    <p className="text-sm text-sage-deep font-medium mb-2">{magazine.theme}</p>
                                    <p className="text-xs text-cool-gray mb-3">{magazine.pages} Pages</p>
                                    <button className="text-sm text-navy font-semibold hover:text-navy-light transition-colors flex items-center gap-1">
                                        <Download size={14} />
                                        Download
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Magazine;
