import { motion } from 'framer-motion';
import { Award, Building2, CheckCircle, FileText, ExternalLink } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const Affiliation = () => {
    const affiliationDetails = {
        university: 'University of Dhaka',
        faculty: 'Faculty of Business Studies',
        establishedYear: '2020',
        affiliationStatus: 'Fully Affiliated',
        recognitions: [
            'Ministry of Education, Bangladesh',
            'University Grants Commission (UGC)',
            'University of Dhaka'
        ]
    };

    const benefits = [
        {
            title: 'Recognized Degrees',
            description: 'All degrees awarded are recognized by University of Dhaka and accepted nationally and internationally.',
            icon: Award
        },
        {
            title: 'Quality Curriculum',
            description: 'Curriculum designed and approved by the Faculty of Business Studies, University of Dhaka.',
            icon: FileText
        },
        {
            title: 'Academic Standards',
            description: 'Adherence to the academic standards and examination protocols of University of Dhaka.',
            icon: CheckCircle
        },
        {
            title: 'University Resources',
            description: 'Access to university library, research resources, and collaborative opportunities.',
            icon: Building2
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Academic Affiliation"
                subtitle="Affiliated with University of Dhaka - Bangladesh's premier institution"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Academics', path: '/academics' },
                    { label: 'Affiliation' }
                ]}
            />

            {/* Main Affiliation Info */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-army-dark to-sage-deep rounded-2xl p-8 lg:p-12 text-white text-center mb-12">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Building2 size={48} className="text-white" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">University of Dhaka</h2>
                            <p className="text-xl text-white/90 mb-2">Faculty of Business Studies</p>
                            <div className="inline-block bg-soft-gold text-army-dark font-bold px-6 py-2 rounded-full mt-4">
                                {affiliationDetails.affiliationStatus}
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-cool-gray">
                            <p>
                                Army Institute of Business Administration (AIBA), Savar is proudly affiliated with the 
                                <strong className="text-army-dark"> University of Dhaka</strong>, the oldest and most prestigious 
                                university in Bangladesh. This affiliation ensures that our academic programs meet the highest 
                                standards of quality and are recognized both nationally and internationally.
                            </p>
                            <p>
                                As an affiliated institution under the Faculty of Business Studies, AIBA follows the curriculum, 
                                examination system, and academic regulations prescribed by the University of Dhaka. Our graduates 
                                receive degrees conferred by the University of Dhaka, opening doors to exceptional career 
                                opportunities and further academic pursuits.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits of Affiliation */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Benefits
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-army-dark">
                            Affiliation Advantages
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-4">
                                    <benefit.icon size={28} className="text-navy" />
                                </div>
                                <h3 className="text-xl font-bold text-army-dark mb-3">{benefit.title}</h3>
                                <p className="text-cool-gray">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recognitions */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Recognition
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-army-dark">
                            Official Recognitions
                        </h2>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {affiliationDetails.recognitions.map((recognition, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-sage-light/30 rounded-lg mb-3"
                            >
                                <CheckCircle size={24} className="text-sage-deep shrink-0" />
                                <span className="text-army-dark font-medium">{recognition}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="https://www.du.ac.bd" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors"
                        >
                            Visit University of Dhaka
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Affiliation;
