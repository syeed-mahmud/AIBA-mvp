import PageHeader from '../../components/common/PageHeader';
import { Handshake } from 'lucide-react';

const Partnerships = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Partnerships & Affiliations" breadcrumb={[{ name: 'About Us', path: '/about' }, { name: 'Partnerships' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="bg-white p-8 rounded-lg shadow-sm mb-8 flex items-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0 mr-8 flex items-center justify-center">
                        {/* Placeholder for BUP Logo */}
                        <span className="font-bold text-gray-500">BUP</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Bangladesh University of Professionals (BUP)</h2>
                        <p className="text-gray-600">
                            AIBA Savar is an affiliated institute of BUP. All academic programs are conducted under the regulations and supervision of BUP.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[var(--color-secondary)]">
                        <div className="flex items-center mb-4">
                            <Handshake className="text-[var(--color-secondary)] mr-3" size={28} />
                            <h3 className="text-xl font-bold text-gray-800">Corporate Partners</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            We have strong ties with leading corporate houses in Bangladesh for internships, placements, and industry visits.
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            <li>Bank Asia</li>
                            <li>Trust Bank</li>
                            <li>Grameenphone</li>
                            <li>Robi Axiata</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[var(--color-primary)]">
                        <div className="flex items-center mb-4">
                            <Handshake className="text-[var(--color-primary)] mr-3" size={28} />
                            <h3 className="text-xl font-bold text-gray-800">International Collaborations</h3>
                        </div>
                        <p className="text-gray-600">
                            AIBA Savar is actively seeking collaborations with foreign universities for student exchange programs and joint research initiatives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partnerships;
