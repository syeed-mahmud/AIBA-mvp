import { motion } from 'framer-motion';
import { User, Mail, Phone, Award, BookOpen, Briefcase } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const AdditionalDirector = () => {
    const leaders = [
        {
            title: 'Additional Director',
            name: 'To Be Announced',
            designation: 'Additional Director, AIBA',
            qualifications: ['PhD/MBA from reputed institution'],
            experience: 'Distinguished career in academic administration',
            responsibilities: [
                'Assist Director in academic administration',
                'Oversee faculty development programs',
                'Coordinate inter-departmental activities',
                'Manage academic quality assurance'
            ],
            email: 'addl.director@aiba.edu.bd',
            phone: '+880-2-XXXXXXXX',
            image: null
        },
        {
            title: 'Deputy Director',
            name: 'To Be Announced',
            designation: 'Deputy Director, AIBA',
            qualifications: ['PhD/MBA from reputed institution'],
            experience: 'Extensive experience in business education',
            responsibilities: [
                'Support day-to-day academic operations',
                'Supervise student affairs',
                'Coordinate examination processes',
                'Liaise with affiliated university'
            ],
            email: 'deputy.director@aiba.edu.bd',
            phone: '+880-2-XXXXXXXX',
            image: null
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Additional Director & Deputy Director"
                breadcrumb={[
                    { name: 'Administration', path: '/administration' },
                    { name: 'Additional Director & Deputy Director' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                            >
                                {/* Header */}
                                <div className="bg-gradient-to-r from-army-dark to-sage-deep p-6">
                                    <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                                        {leader.title}
                                    </span>
                                    <h2 className="text-2xl font-bold text-white">{leader.name}</h2>
                                    <p className="text-white/80">{leader.designation}</p>
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8">
                                    {/* Profile Image Placeholder */}
                                    <div className="w-32 h-32 mx-auto -mt-20 mb-6 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                        <User size={48} className="text-gray-400" />
                                    </div>

                                    {/* Qualifications */}
                                    <div className="mb-6">
                                        <h3 className="flex items-center gap-2 text-lg font-bold text-army-dark mb-3">
                                            <Award size={20} className="text-sage-deep" />
                                            Qualifications
                                        </h3>
                                        <ul className="space-y-1">
                                            {leader.qualifications.map((qual, idx) => (
                                                <li key={idx} className="text-cool-gray text-sm">{qual}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Responsibilities */}
                                    <div className="mb-6">
                                        <h3 className="flex items-center gap-2 text-lg font-bold text-army-dark mb-3">
                                            <Briefcase size={20} className="text-sage-deep" />
                                            Key Responsibilities
                                        </h3>
                                        <ul className="space-y-2">
                                            {leader.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-cool-gray text-sm">
                                                    <span className="w-1.5 h-1.5 bg-sage-deep rounded-full mt-2 shrink-0"></span>
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Contact */}
                                    <div className="border-t border-gray-100 pt-6">
                                        <h3 className="flex items-center gap-2 text-lg font-bold text-army-dark mb-3">
                                            <BookOpen size={20} className="text-sage-deep" />
                                            Contact Information
                                        </h3>
                                        <div className="space-y-2">
                                            <a href={`mailto:${leader.email}`} className="flex items-center gap-3 text-cool-gray hover:text-sage-deep transition-colors">
                                                <Mail size={16} />
                                                <span className="text-sm">{leader.email}</span>
                                            </a>
                                            <a href={`tel:${leader.phone}`} className="flex items-center gap-3 text-cool-gray hover:text-sage-deep transition-colors">
                                                <Phone size={16} />
                                                <span className="text-sm">{leader.phone}</span>
                                            </a>
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

export default AdditionalDirector;
