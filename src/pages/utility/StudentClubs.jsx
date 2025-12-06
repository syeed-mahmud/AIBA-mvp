import { motion } from 'framer-motion';
import { Users, Briefcase, ExternalLink, Music, Camera, Mic, Globe, Code, TrendingUp } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const StudentClubs = () => {
    const clubs = [
        {
            name: 'AIBA Business Club',
            icon: TrendingUp,
            description: 'Platform for entrepreneurship, business competitions, and industry exposure.',
            activities: ['Business Plan Competition', 'Case Study Workshops', 'Industry Visits', 'Guest Lectures'],
            members: '120+',
            advisor: 'Dr. Mohammad Rahman'
        },
        {
            name: 'AIBA IT Club',
            icon: Code,
            description: 'Promoting technological innovation and digital literacy among students.',
            activities: ['Coding Workshops', 'Hackathons', 'Tech Seminars', 'Web Development Training'],
            members: '85+',
            advisor: 'Mr. Aminul Islam'
        },
        {
            name: 'AIBA Cultural Club',
            icon: Music,
            description: 'Celebrating arts, culture, and creative expression.',
            activities: ['Cultural Programs', 'Music Competitions', 'Drama Performances', 'Art Exhibitions'],
            members: '150+',
            advisor: 'Ms. Fatema Akter'
        },
        {
            name: 'AIBA Photography Club',
            icon: Camera,
            description: 'Capturing moments and developing visual storytelling skills.',
            activities: ['Photo Walks', 'Photography Workshops', 'Exhibitions', 'Event Coverage'],
            members: '60+',
            advisor: 'Mr. Rakib Hasan'
        },
        {
            name: 'AIBA Debate Club',
            icon: Mic,
            description: 'Enhancing communication, critical thinking, and public speaking.',
            activities: ['Inter-college Debates', 'Parliamentary Sessions', 'Public Speaking Workshops'],
            members: '75+',
            advisor: 'Dr. Kamal Hossain'
        },
        {
            name: 'AIBA Social Service Club',
            icon: Globe,
            description: 'Contributing to society through community service initiatives.',
            activities: ['Blood Donation Camps', 'Charity Events', 'Educational Outreach', 'Environmental Campaigns'],
            members: '100+',
            advisor: 'Dr. Farhana Akter'
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Student Clubs"
                subtitle="Explore co-curricular opportunities and develop your interests"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Useful Links', path: '/useful-links' },
                    { label: 'Student Clubs' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {clubs.map((club, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                                    <club.icon size={40} className="text-white mb-3" />
                                    <h3 className="text-xl font-bold text-white">{club.name}</h3>
                                </div>
                                
                                <div className="p-6">
                                    <p className="text-cool-gray text-sm mb-4">{club.description}</p>
                                    
                                    <div className="mb-4">
                                        <h4 className="text-xs font-bold text-army-dark uppercase tracking-wider mb-2">Activities</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {club.activities.slice(0, 3).map((activity, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-sage-light/50 text-army-dark text-xs rounded">
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm">
                                        <span className="text-cool-gray">
                                            <Users size={14} className="inline mr-1" />
                                            {club.members} Members
                                        </span>
                                        <button className="text-navy font-semibold hover:text-navy-light transition-colors">
                                            Join Club
                                        </button>
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

export default StudentClubs;
