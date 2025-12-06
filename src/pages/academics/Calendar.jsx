import PageHeader from '../../components/common/PageHeader';

const Calendar = () => {
    const events = [
        { date: "Jan 15, 2026", event: "Spring Semester Begins", type: "Academic" },
        { date: "Feb 21, 2026", event: "International Mother Language Day", type: "Holiday" },
        { date: "Mar 10-15, 2026", event: "Mid-Term Examinations", type: "Exam" },
        { date: "Mar 26, 2026", event: "Independence Day", type: "Holiday" },
        { date: "Apr 14, 2026", event: "Pohela Boishakh", type: "Holiday" },
        { date: "May 20-30, 2026", event: "Final Examinations", type: "Exam" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Academic Calendar" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Calendar' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[var(--color-primary)] text-white">
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold">Event</th>
                                <th className="p-4 font-semibold">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((item, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-medium text-gray-800">{item.date}</td>
                                    <td className="p-4 text-gray-600">{item.event}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.type === 'Holiday' ? 'bg-red-100 text-red-600' :
                                                item.type === 'Exam' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-green-100 text-green-700'
                                            }`}>
                                            {item.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
