import PageHeader from '../../components/common/PageHeader';
import { BookOpen, FileText } from 'lucide-react';

const Research = () => {
    const publications = [
        {
            title: "Impact of Digital Marketing on Consumer Behavior in Bangladesh",
            author: "Faculty Member A",
            journal: "Journal of Business Studies",
            year: "2024"
        },
        {
            title: "Sustainable Supply Chain Management Practices in RMG Sector",
            author: "Faculty Member B",
            journal: "International Journal of SCM",
            year: "2023"
        },
        {
            title: "Financial Inclusion and Economic Growth: Evidence from South Asia",
            author: "Faculty Member C",
            journal: "Asian Economic Review",
            year: "2023"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Research & Publications" breadcrumb={[{ name: 'Research', path: '/research' }, { name: 'Highlights' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Research Highlights */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Research Highlights</h2>
                        <div className="space-y-6">
                            {publications.map((pub, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[var(--color-secondary)]">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{pub.title}</h3>
                                    <p className="text-gray-600 text-sm mb-1"><span className="font-semibold">Author:</span> {pub.author}</p>
                                    <p className="text-gray-600 text-sm"><span className="font-semibold">Journal:</span> {pub.journal} ({pub.year})</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Journals & Newsletters */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center"><BookOpen size={20} className="mr-2" /> AIBA Journal</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                AIBA Journal of Management and Business is a peer-reviewed journal published annually.
                            </p>
                            <button className="btn btn-primary w-full text-sm">View Archive</button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center"><FileText size={20} className="mr-2" /> Newsletter</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Stay updated with the latest news and events of AIBA Savar through our quarterly newsletter.
                            </p>
                            <button className="btn btn-secondary w-full text-sm">Download Latest Issue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;
