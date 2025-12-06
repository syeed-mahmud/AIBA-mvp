import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, FileCheck, ChevronRight, CheckCircle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';

const Graduate = () => {
    const programs = [
        {
            title: 'MBA (Regular)',
            duration: '2 Years',
            credits: '60',
            classTime: 'Day Program',
            eligibility: [
                'Bachelor\'s degree from any discipline',
                'Minimum CGPA 2.50 or 2nd Class',
                'Valid GMAT/GRE score (preferred)'
            ]
        },
        {
            title: 'Executive MBA (EMBA)',
            duration: '2 Years',
            credits: '60',
            classTime: 'Weekend Program',
            eligibility: [
                'Bachelor\'s degree from any discipline',
                'Minimum 3 years work experience',
                'Currently employed in managerial position'
            ]
        },
        {
            title: 'MBA for BBA Graduates',
            duration: '1 Year',
            credits: '36',
            classTime: 'Day Program',
            eligibility: [
                'BBA degree from recognized university',
                'Minimum CGPA 3.00',
                'No work experience required'
            ]
        }
    ];

    const admissionSteps = [
        { step: 1, title: 'Online Application', description: 'Complete online form with academic & professional details' },
        { step: 2, title: 'Document Submission', description: 'Submit certificates, transcripts, and experience letters' },
        { step: 3, title: 'Admission Test', description: 'Appear for written test (Verbal, Quantitative, Analytical)' },
        { step: 4, title: 'Group Discussion', description: 'Participate in group discussion (EMBA only)' },
        { step: 5, title: 'Interview', description: 'Personal interview with selection committee' },
        { step: 6, title: 'Enrollment', description: 'Complete admission formalities and fee payment' }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Graduate Programs"
                subtitle="MBA Programs for Future Business Leaders"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Admission', path: '/admission' },
                    { label: 'Graduate Programs' }
                ]}
            />

            {/* Program Cards */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Programs
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Choose Your Path</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-off-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                                    <GraduationCap size={40} className="text-white mb-3" />
                                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                                </div>
                                
                                <div className="p-6">
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="text-center">
                                            <Clock size={20} className="text-sage-deep mx-auto mb-1" />
                                            <p className="text-xs text-cool-gray">Duration</p>
                                            <p className="font-bold text-army-dark text-sm">{program.duration}</p>
                                        </div>
                                        <div className="text-center">
                                            <FileCheck size={20} className="text-sage-deep mx-auto mb-1" />
                                            <p className="text-xs text-cool-gray">Credits</p>
                                            <p className="font-bold text-army-dark text-sm">{program.credits}</p>
                                        </div>
                                        <div className="text-center">
                                            <Briefcase size={20} className="text-sage-deep mx-auto mb-1" />
                                            <p className="text-xs text-cool-gray">Schedule</p>
                                            <p className="font-bold text-army-dark text-sm">{program.classTime}</p>
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-army-dark mb-3">Eligibility</h4>
                                    <ul className="space-y-2">
                                        {program.eligibility.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-cool-gray">
                                                <CheckCircle size={16} className="text-sage-deep shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Process
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Admission Roadmap</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {admissionSteps.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 bg-white rounded-xl p-6 shadow-md"
                                >
                                    <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-army-dark mb-1">{item.title}</h3>
                                        <p className="text-sm text-cool-gray">{item.description}</p>
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

export default Graduate;
