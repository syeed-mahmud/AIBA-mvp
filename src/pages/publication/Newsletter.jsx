import { motion } from 'framer-motion';
import { FileText, Calendar, Download, ChevronRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const Newsletter = () => {
    const newsletters = [
        {
            title: 'AIBA Quarterly - Winter 2024',
            edition: 'Vol. 4, Issue 4',
            date: 'December 2024',
            highlights: [
                'Annual Convocation Highlights',
                'New MoU with International University',
                'Student Achievement Awards',
                'Alumni Success Stories'
            ],
            coverImage: null
        },
        {
            title: 'AIBA Quarterly - Fall 2024',
            edition: 'Vol. 4, Issue 3',
            date: 'September 2024',
            highlights: [
                'Independence Day Celebration',
                'Business Plan Competition Results',
                'Faculty Research Publications',
                'Career Fair 2024'
            ],
            coverImage: null
        },
        {
            title: 'AIBA Quarterly - Summer 2024',
            edition: 'Vol. 4, Issue 2',
            date: 'June 2024',
            highlights: [
                'New Academic Programs Launch',
                'Industry Partnership Expansion',
                'Student Exchange Program',
                'Graduation Ceremony'
            ],
            coverImage: null
        },
        {
            title: 'AIBA Quarterly - Spring 2024',
            edition: 'Vol. 4, Issue 1',
            date: 'March 2024',
            highlights: [
                'Academic Year Inauguration',
                'Guest Lecture Series',
                'Sports Week Events',
                'Cultural Programs'
            ],
            coverImage: null
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Newsletter"
                subtitle="Stay updated with AIBA's latest news and events"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Publication', path: '/publication' },
                    { label: 'Newsletter' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {newsletters.map((newsletter, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                            >
                                {/* Cover Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                                    <FileText size={64} className="text-white/50" />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-sage-light text-army-dark text-xs font-bold rounded-full">
                                            {newsletter.edition}
                                        </span>
                                        <span className="flex items-center gap-1 text-sm text-cool-gray">
                                            <Calendar size={14} />
                                            {newsletter.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-army-dark mb-4 group-hover:text-navy transition-colors">
                                        {newsletter.title}
                                    </h3>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-bold text-army-dark mb-2">In This Issue:</h4>
                                        <ul className="space-y-1">
                                            {newsletter.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-cool-gray">
                                                    <ChevronRight size={14} className="text-sage-deep" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="flex items-center gap-2 px-4 py-2 bg-navy/10 text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors">
                                        <Download size={18} />
                                        Download PDF
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Subscribe Section */}
                    <div className="mt-16 bg-gradient-to-r from-army-dark to-sage-deep rounded-2xl p-8 lg:p-12 text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Get the latest updates from AIBA delivered directly to your inbox. Stay informed about events, achievements, and opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-gold"
                            />
                            <button className="px-6 py-3 bg-soft-gold text-army-dark font-bold rounded-lg hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;
