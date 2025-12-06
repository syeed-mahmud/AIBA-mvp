import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, FileCheck, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';

const Undergraduate = () => {
    const programHighlights = [
        { label: 'Duration', value: '4 Years', icon: Clock },
        { label: 'Total Credits', value: '130', icon: FileCheck },
        { label: 'Class Size', value: '60 Students', icon: Users },
        { label: 'Degree', value: 'BBA', icon: GraduationCap }
    ];

    const eligibility = [
        'Minimum GPA 3.00 in both SSC and HSC or equivalent',
        'Must have Business Studies/Science/Arts background',
        'O Level: Minimum 5 subjects with B grade',
        'A Level: Minimum 2 subjects with C grade',
        'Age: Maximum 22 years at the time of admission'
    ];

    const admissionSteps = [
        { step: 1, title: 'Online Application', description: 'Complete the online application form with required documents' },
        { step: 2, title: 'Document Verification', description: 'Submit original certificates for verification' },
        { step: 3, title: 'Admission Test', description: 'Appear for written admission test (MCQ & Written)' },
        { step: 4, title: 'Interview', description: 'Attend personal interview with admission committee' },
        { step: 5, title: 'Merit List', description: 'Check merit list publication on notice board' },
        { step: 6, title: 'Enrollment', description: 'Complete enrollment with fee payment' }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Undergraduate Program"
                subtitle="Bachelor of Business Administration (BBA)"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Admission', path: '/admission' },
                    { label: 'Undergraduate Program' }
                ]}
            />

            {/* Program Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {programHighlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-sage-light/30 rounded-xl p-6 text-center"
                            >
                                <item.icon size={32} className="text-navy mx-auto mb-3" />
                                <p className="text-2xl font-bold text-army-dark">{item.value}</p>
                                <p className="text-sm text-cool-gray">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-army-dark mb-4">Program Overview</h2>
                        <p className="text-cool-gray mb-4">
                            The Bachelor of Business Administration (BBA) program at AIBA is designed to develop future 
                            business leaders with strong analytical skills, ethical values, and practical knowledge. 
                            Affiliated with the University of Dhaka, our program combines rigorous academics with 
                            real-world business exposure.
                        </p>
                        <p className="text-cool-gray">
                            Students benefit from our unique army-discipline environment, experienced faculty, 
                            and comprehensive curriculum covering all major business disciplines including Finance, 
                            Marketing, HRM, and Management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                                Requirements
                            </span>
                            <h2 className="text-3xl font-bold text-army-dark">Eligibility Criteria</h2>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            {eligibility.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                                    <CheckCircle size={24} className="text-sage-deep shrink-0 mt-0.5" />
                                    <span className="text-cool-gray">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Process
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Admission Roadmap</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {admissionSteps.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6 mb-8 last:mb-0"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
                                            {item.step}
                                        </div>
                                        {index < admissionSteps.length - 1 && (
                                            <div className="w-0.5 h-full bg-sage-light mt-2"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <h3 className="text-lg font-bold text-army-dark mb-1">{item.title}</h3>
                                        <p className="text-cool-gray">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/admission/apply"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors"
                            style={{ color: '#FFFFFF' }}
                        >
                            Apply Now
                            <ChevronRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Undergraduate;
