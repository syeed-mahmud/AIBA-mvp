import PageHeader from '../../components/common/PageHeader';
import { FileText, Download } from 'lucide-react';

const Notices = () => {
    const notices = [
        { id: 1, date: "Nov 28, 2025", title: "Admission Open for Spring 2026", file: "admission_circular.pdf" },
        { id: 2, date: "Nov 25, 2025", title: "Final Exam Schedule - Fall 2025", file: "exam_routine.pdf" },
        { id: 3, date: "Nov 20, 2025", title: "Seminar on Digital Marketing Trends", file: null },
        { id: 4, date: "Nov 15, 2025", title: "Holiday Notice - Victory Day", file: "holiday_notice.pdf" },
        { id: 5, date: "Nov 10, 2025", title: "Class Suspension Notice", file: null },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Notice Board" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Notices' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="space-y-4">
                    {notices.map((notice) => (
                        <div key={notice.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between border-l-4 border-[var(--color-primary)]">
                            <div className="mb-4 md:mb-0">
                                <div className="text-sm text-gray-500 mb-1">{notice.date}</div>
                                <h3 className="text-lg font-bold text-gray-800 hover:text-[var(--color-primary)] cursor-pointer">{notice.title}</h3>
                            </div>
                            {notice.file && (
                                <button className="flex items-center text-[var(--color-primary)] font-medium hover:underline">
                                    <Download size={18} className="mr-2" /> Download
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notices;
