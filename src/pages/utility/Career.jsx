import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Building2, ExternalLink, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';

const Career = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const jobListings = [
        {
            title: 'Management Trainee',
            company: 'ABC Bank Ltd.',
            location: 'Dhaka',
            type: 'Full-time',
            deadline: 'Dec 31, 2024',
            eligibility: 'BBA/MBA graduates',
            description: 'Looking for fresh graduates to join our management trainee program...'
        },
        {
            title: 'Junior Executive - Marketing',
            company: 'XYZ Corporation',
            location: 'Dhaka',
            type: 'Full-time',
            deadline: 'Jan 15, 2025',
            eligibility: 'BBA with Marketing major',
            description: 'Seeking dynamic individuals for marketing team...'
        },
        {
            title: 'Finance Intern',
            company: 'DEF Securities',
            location: 'Dhaka',
            type: 'Internship',
            deadline: 'Dec 25, 2024',
            eligibility: 'Final year BBA students',
            description: '3-month paid internship opportunity in finance department...'
        },
        {
            title: 'HR Executive',
            company: 'GHI Industries',
            location: 'Gazipur',
            type: 'Full-time',
            deadline: 'Jan 10, 2025',
            eligibility: 'MBA with HRM major',
            description: 'Experienced HR professional for manufacturing unit...'
        }
    ];

    const careerResources = [
        {
            title: 'Resume Writing Guide',
            description: 'Tips for creating an impactful resume',
            link: '#'
        },
        {
            title: 'Interview Preparation',
            description: 'Common questions and best practices',
            link: '#'
        },
        {
            title: 'LinkedIn Profile Tips',
            description: 'Optimize your professional profile',
            link: '#'
        },
        {
            title: 'Career Counseling',
            description: 'Book a session with career advisor',
            link: '#'
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Career Services"
                subtitle="Your gateway to professional opportunities"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Useful Links', path: '/useful-links' },
                    { label: 'Career' }
                ]}
            />

            {/* Job Listings */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-army-dark">Job Opportunities</h2>
                            <p className="text-cool-gray">Exclusive listings for AIBA students and alumni</p>
                        </div>
                        <div className="relative w-full md:w-72">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cool-gray" />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {jobListings.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-off-white rounded-xl p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-army-dark">{job.title}</h3>
                                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                                job.type === 'Full-time' 
                                                    ? 'bg-navy/10 text-navy' 
                                                    : 'bg-soft-gold/20 text-soft-gold'
                                            }`}>
                                                {job.type}
                                            </span>
                                        </div>
                                        
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-cool-gray mb-2">
                                            <span className="flex items-center gap-1">
                                                <Building2 size={14} />
                                                {job.company}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                Deadline: {job.deadline}
                                            </span>
                                        </div>
                                        
                                        <p className="text-sm text-cool-gray">{job.description}</p>
                                    </div>
                                    
                                    <button className="flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors whitespace-nowrap">
                                        Apply Now
                                        <ExternalLink size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors">
                            View All Jobs
                        </button>
                    </div>
                </div>
            </section>

            {/* Career Resources */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-army-dark">Career Resources</h2>
                        <p className="text-cool-gray">Tools and guides to help you succeed</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {careerResources.map((resource, index) => (
                            <motion.a
                                key={index}
                                href={resource.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
                            >
                                <Briefcase size={32} className="text-navy mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-army-dark mb-2">{resource.title}</h3>
                                <p className="text-sm text-cool-gray">{resource.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
