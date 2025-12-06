import PageHeader from '../../components/common/PageHeader';
import { User } from 'lucide-react';

const Faculties = () => {
    // Placeholder data
    const faculties = Array(8).fill(null).map((_, i) => ({
        name: `Faculty Member ${i + 1}`,
        designation: i % 2 === 0 ? "Associate Professor" : "Lecturer",
        department: i % 3 === 0 ? "Finance" : i % 3 === 1 ? "Marketing" : "Management",
        email: `faculty${i + 1}@aibasavar.edu.bd`
    }));

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Faculty Members" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Faculties' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {faculties.map((faculty, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center group-hover:ring-4 ring-[var(--color-secondary)] transition-all">
                                <User size={48} className="text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-1">{faculty.name}</h3>
                            <p className="text-gray-600 font-medium text-sm mb-1">{faculty.designation}</p>
                            <p className="text-[var(--color-secondary)] text-xs uppercase font-bold mb-3">{faculty.department}</p>
                            <a href={`mailto:${faculty.email}`} className="text-sm text-gray-500 hover:text-[var(--color-primary)]">{faculty.email}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faculties;
