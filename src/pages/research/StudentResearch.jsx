import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Calendar, GraduationCap } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const StudentResearch = () => {
    const studentProjects = [
        {
            title: 'Social Media Marketing Effectiveness for SMEs in Bangladesh',
            students: ['Md. Tanvir Ahmed', 'Fatema Akter'],
            program: 'BBA',
            year: '2024',
            supervisor: 'Dr. Kamal Hossain',
            type: 'Thesis',
            abstract: 'An analysis of social media marketing strategies and their impact on small and medium enterprises...',
            achievement: 'Best Thesis Award 2024'
        },
        {
            title: 'Green Banking Practices: Customer Perception Study',
            students: ['Rakib Hasan', 'Nusrat Jahan', 'Aminul Islam'],
            program: 'MBA',
            year: '2024',
            supervisor: 'Dr. Mohammad Rahman',
            type: 'Research Project',
            abstract: 'Investigating customer awareness and adoption of green banking initiatives in commercial banks...',
            achievement: null
        },
        {
            title: 'Work-Life Balance and Employee Productivity in RMG Sector',
            students: ['Sabrina Sultana'],
            program: 'MBA',
            year: '2023',
            supervisor: 'Dr. Farhana Akter',
            type: 'Thesis',
            abstract: 'Examining the relationship between work-life balance policies and productivity in garment factories...',
            achievement: 'Published in National Conference'
        },
        {
            title: 'Impact of Mobile Financial Services on Rural Entrepreneurs',
            students: ['Imran Hossain', 'Sharmin Akter'],
            program: 'BBA',
            year: '2023',
            supervisor: 'Dr. Nasreen Begum',
            type: 'Research Project',
            abstract: 'Assessing how mobile banking has transformed entrepreneurial activities in rural Bangladesh...',
            achievement: null
        }
    ];

    const researchOpportunities = [
        {
            title: 'Thesis/Dissertation',
            description: 'Required for final year BBA and MBA students',
            icon: BookOpen
        },
        {
            title: 'Research Assistantship',
            description: 'Work with faculty on funded research projects',
            icon: Users
        },
        {
            title: 'Conference Participation',
            description: 'Present research at national/international conferences',
            icon: GraduationCap
        },
        {
            title: 'Publication Support',
            description: 'Guidance for publishing in peer-reviewed journals',
            icon: Award
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Student Research Highlights"
                subtitle="Showcasing academic excellence of our students"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Research', path: '/research' },
                    { label: 'Student Research' }
                ]}
            />

            {/* Research Opportunities */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Opportunities
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Research Pathways</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {researchOpportunities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-sage-light/30 rounded-xl p-6 text-center hover:bg-sage-light/50 transition-colors"
                            >
                                <item.icon size={40} className="text-navy mx-auto mb-4" />
                                <h3 className="font-bold text-army-dark mb-2">{item.title}</h3>
                                <p className="text-sm text-cool-gray">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Projects */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Showcase
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Recent Student Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {studentProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-bold rounded-full">
                                            {project.program}
                                        </span>
                                        <span className="px-3 py-1 bg-sage-light text-army-dark text-xs font-medium rounded-full">
                                            {project.type}
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1 text-sm text-cool-gray">
                                        <Calendar size={14} />
                                        {project.year}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-army-dark mb-3">{project.title}</h3>
                                <p className="text-sm text-cool-gray mb-4">{project.abstract}</p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <Users size={16} className="text-sage-deep shrink-0 mt-0.5" />
                                        <span className="text-cool-gray">
                                            <strong>Students:</strong> {project.students.join(', ')}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GraduationCap size={16} className="text-sage-deep" />
                                        <span className="text-cool-gray">
                                            <strong>Supervisor:</strong> {project.supervisor}
                                        </span>
                                    </div>
                                </div>

                                {project.achievement && (
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <Award size={18} className="text-soft-gold" />
                                            <span className="text-soft-gold font-semibold text-sm">{project.achievement}</span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentResearch;
