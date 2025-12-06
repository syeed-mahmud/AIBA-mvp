import PageHeader from '../../components/common/PageHeader';
import { Bell, Calendar, FileText, Download, ExternalLink } from 'lucide-react';

const AdmissionNotices = () => {
    const notices = [
        {
            id: 1,
            title: 'Admission Open for Fall 2025 Semester',
            date: '2025-01-15',
            category: 'Announcement',
            priority: 'high',
            description: 'Applications are now being accepted for BBA and MBA programs for Fall 2025 semester. Early applicants may be eligible for application fee waiver.',
            hasAttachment: true,
            attachmentName: 'Fall_2025_Admission_Circular.pdf',
        },
        {
            id: 2,
            title: 'Revised Admission Test Schedule',
            date: '2025-01-12',
            category: 'Schedule',
            priority: 'high',
            description: 'The admission test date for BBA program has been rescheduled. Please check the updated schedule and prepare accordingly.',
            hasAttachment: true,
            attachmentName: 'Admission_Test_Schedule_2025.pdf',
        },
        {
            id: 3,
            title: 'Scholarship Applications Now Open',
            date: '2025-01-10',
            category: 'Financial Aid',
            priority: 'medium',
            description: 'Merit-based and need-based scholarship applications are now being accepted. Submit your scholarship application along with admission application.',
            hasAttachment: false,
        },
        {
            id: 4,
            title: 'Document Verification Process',
            date: '2025-01-08',
            category: 'Information',
            priority: 'medium',
            description: 'All shortlisted candidates must bring original documents for verification. Check the list of required documents before visiting.',
            hasAttachment: true,
            attachmentName: 'Required_Documents_Checklist.pdf',
        },
        {
            id: 5,
            title: 'Merit List for MBA Winter 2024',
            date: '2024-12-20',
            category: 'Results',
            priority: 'high',
            description: 'The merit list for MBA Winter 2024 batch has been published. Selected candidates are requested to complete enrollment within 7 working days.',
            hasAttachment: true,
            attachmentName: 'MBA_Winter_2024_Merit_List.pdf',
        },
        {
            id: 6,
            title: 'Holiday Notice: Admission Office',
            date: '2024-12-15',
            category: 'Notice',
            priority: 'low',
            description: 'The admission office will remain closed from December 25 to January 1 for winter holidays. Online applications will continue to be accepted.',
            hasAttachment: false,
        },
    ];

    const getCategoryColor = (category) => {
        const colors = {
            'Announcement': 'bg-blue-100 text-blue-700',
            'Schedule': 'bg-purple-100 text-purple-700',
            'Financial Aid': 'bg-green-100 text-green-700',
            'Information': 'bg-gray-100 text-gray-700',
            'Results': 'bg-soft-gold/30 text-army-dark',
            'Notice': 'bg-orange-100 text-orange-700',
        };
        return colors[category] || 'bg-gray-100 text-gray-700';
    };

    const getPriorityBadge = (priority) => {
        if (priority === 'high') {
            return <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded">Important</span>;
        }
        return null;
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader
                title="Admission Notice Board"
                subtitle="Stay updated with the latest admission announcements and schedules"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button className="px-4 py-2 bg-sage-deep text-white rounded-lg text-sm font-semibold">
                        All Notices
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Announcements
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Schedule
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Results
                    </button>
                </div>

                {/* Notices List */}
                <div className="space-y-4">
                    {notices.map((notice) => (
                        <div
                            key={notice.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(notice.category)}`}>
                                        {notice.category}
                                    </span>
                                    {getPriorityBadge(notice.priority)}
                                    <div className="flex items-center gap-1 text-gray-500 text-sm ml-auto">
                                        <Calendar className="w-4 h-4" />
                                        {formatDate(notice.date)}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-army-dark mb-2 hover:text-sage-deep transition-colors cursor-pointer">
                                    {notice.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    {notice.description}
                                </p>

                                {notice.hasAttachment && (
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                        <FileText className="w-5 h-5 text-sage-deep" />
                                        <span className="text-sm text-gray-600">{notice.attachmentName}</span>
                                        <button className="ml-auto flex items-center gap-1 text-sm text-sage-deep hover:text-army-dark font-semibold transition-colors">
                                            <Download className="w-4 h-4" />
                                            Download
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-8 text-center">
                    <button className="px-6 py-3 border-2 border-sage-deep text-sage-deep font-semibold rounded-lg hover:bg-sage-deep hover:text-white transition-colors">
                        Load More Notices
                    </button>
                </div>

                {/* Subscribe Section */}
                <div className="mt-16 bg-navy text-white rounded-xl p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                            <Bell className="w-8 h-8 text-soft-gold" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2">Subscribe to Admission Updates</h3>
                            <p className="text-gray-300">Get notified about important admission announcements and deadlines.</p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-lg text-gray-800 w-64 focus:outline-none focus:ring-2 focus:ring-soft-gold"
                            />
                            <button className="px-6 py-3 bg-soft-gold text-army-dark font-semibold rounded-lg hover:bg-[#d4c178] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 grid md:grid-cols-3 gap-4">
                    <a href="/admission/apply" className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                        <ExternalLink className="w-5 h-5 text-sage-deep" />
                        <span className="font-semibold text-gray-700">Apply Now</span>
                    </a>
                    <a href="/admission/eligibility" className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                        <ExternalLink className="w-5 h-5 text-sage-deep" />
                        <span className="font-semibold text-gray-700">Check Eligibility</span>
                    </a>
                    <a href="/contact" className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                        <ExternalLink className="w-5 h-5 text-sage-deep" />
                        <span className="font-semibold text-gray-700">Contact Admission Office</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdmissionNotices;
