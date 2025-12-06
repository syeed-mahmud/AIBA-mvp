import PageHeader from '../../components/common/PageHeader';
import { User, Phone, Mail } from 'lucide-react';

const Office = () => {
    const officers = [
        { name: "Lt Col [Name]", designation: "Additional Director (Admin)", phone: "+880 17...", email: "ad_admin@aibasavar.edu.bd" },
        { name: "Major [Name]", designation: "Deputy Director (Admin)", phone: "+880 17...", email: "dd_admin@aibasavar.edu.bd" },
        { name: "[Name]", designation: "Program Coordinator (BBA)", phone: "+880 17...", email: "pc_bba@aibasavar.edu.bd" },
        { name: "[Name]", designation: "Program Coordinator (MBA)", phone: "+880 17...", email: "pc_mba@aibasavar.edu.bd" },
        { name: "[Name]", designation: "Accounts Officer", phone: "+880 17...", email: "accounts@aibasavar.edu.bd" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Administrative Office" breadcrumb={[{ name: 'Administration', path: '/administration' }, { name: 'Office' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[var(--color-primary)] text-white">
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Designation</th>
                                <th className="p-4 font-semibold hidden md:table-cell">Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {officers.map((officer, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3 text-gray-500">
                                                <User size={20} />
                                            </div>
                                            <span className="font-medium text-gray-800">{officer.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-600">{officer.designation}</td>
                                    <td className="p-4 hidden md:table-cell">
                                        <div className="flex flex-col space-y-1 text-sm text-gray-600">
                                            <span className="flex items-center"><Phone size={14} className="mr-2 text-[var(--color-secondary)]" /> {officer.phone}</span>
                                            <span className="flex items-center"><Mail size={14} className="mr-2 text-[var(--color-secondary)]" /> {officer.email}</span>
                                        </div>
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

export default Office;
