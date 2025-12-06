import PageHeader from '../../components/common/PageHeader';
import { User } from 'lucide-react';

const GoverningBody = () => {
    const members = [
        { name: "Major General [Name]", role: "Chairman", designation: "Area Commander, Savar Area" },
        { name: "Brigadier General [Name]", role: "Member Secretary", designation: "Director, AIBA Savar" },
        { name: "[Name]", role: "Member", designation: "Dean, FBS, BUP" },
        { name: "[Name]", role: "Member", designation: "Representative, Ministry of Defense" },
        // Add more members as needed
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Governing Body" breadcrumb={[{ name: 'Administration', path: '/administration' }, { name: 'Governing Body' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User size={40} className="text-gray-500" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">{member.name}</h3>
                            <p className="text-[var(--color-secondary)] font-bold text-sm uppercase mb-2">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GoverningBody;
