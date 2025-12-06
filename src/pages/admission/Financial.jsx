import PageHeader from '../../components/common/PageHeader';

const Financial = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Financial Information" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Financial Info' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Tuition Fees */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Tuition & Fees</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200">
                                        <th className="p-3 font-semibold text-gray-700">Item</th>
                                        <th className="p-3 font-semibold text-gray-700 text-right">Amount (BDT)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr className="border-b border-gray-100"><td className="p-3">Admission Fee (One time)</td><td className="p-3 text-right">25,000</td></tr>
                                    <tr className="border-b border-gray-100"><td className="p-3">Semester Fee (Per Semester)</td><td className="p-3 text-right">15,000</td></tr>
                                    <tr className="border-b border-gray-100"><td className="p-3">Tuition Fee (Per Credit)</td><td className="p-3 text-right">4,500</td></tr>
                                    <tr className="border-b border-gray-100"><td className="p-3">Library Fee (Per Semester)</td><td className="p-3 text-right">2,000</td></tr>
                                    <tr className="border-b border-gray-100"><td className="p-3">Computer Lab Fee (Per Semester)</td><td className="p-3 text-right">2,500</td></tr>
                                    <tr className="font-bold bg-gray-50"><td className="p-3">Total (Approx. per semester)</td><td className="p-3 text-right">85,000</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">* Fees are subject to change without prior notice.</p>
                    </div>

                    {/* Scholarships */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Scholarships & Waivers</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-[var(--color-secondary)] pl-4">
                                <h3 className="font-bold text-lg text-gray-800">Merit Scholarship</h3>
                                <p className="text-gray-600">
                                    Students with GPA 3.80+ in semester final exams are eligible for 25% - 100% tuition fee waiver.
                                </p>
                            </div>
                            <div className="border-l-4 border-[var(--color-secondary)] pl-4">
                                <h3 className="font-bold text-lg text-gray-800">Freedom Fighter Quota</h3>
                                <p className="text-gray-600">
                                    Children of Freedom Fighters are eligible for tuition fee waiver as per government rules.
                                </p>
                            </div>
                            <div className="border-l-4 border-[var(--color-secondary)] pl-4">
                                <h3 className="font-bold text-lg text-gray-800">Sibling Waiver</h3>
                                <p className="text-gray-600">
                                    25% tuition fee waiver for the second sibling studying at AIBA Savar simultaneously.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Financial;
