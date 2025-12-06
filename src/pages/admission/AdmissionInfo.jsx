import PageHeader from '../../components/common/PageHeader';
import { CheckCircle } from 'lucide-react';

const AdmissionInfo = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Admission Information" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Information' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Undergraduate */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[var(--color-primary)]">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Undergraduate Program (BBA)</h2>
                        <h3 className="font-bold text-gray-800 mb-3">Eligibility Criteria</h3>
                        <ul className="space-y-2 mb-6 text-gray-600">
                            <li className="flex items-start"><CheckCircle size={18} className="mr-2 text-green-500 flex-shrink-0 mt-1" /> SSC & HSC or equivalent with minimum GPA 3.50 in each.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="mr-2 text-green-500 flex-shrink-0 mt-1" /> Total GPA 7.00 (SSC + HSC).</li>
                            <li className="flex items-start"><CheckCircle size={18} className="mr-2 text-green-500 flex-shrink-0 mt-1" /> For O/A Level: 5 subjects in O Level with min GPA 2.50 and 2 subjects in A Level with min GPA 2.00.</li>
                        </ul>
                        <h3 className="font-bold text-gray-800 mb-3">Admission Test</h3>
                        <p className="text-gray-600 mb-4">
                            Candidates must appear for a written admission test covering English, Mathematics, and General Knowledge. Shortlisted candidates will be called for a Viva-Voce.
                        </p>
                    </div>

                    {/* Graduate */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[var(--color-secondary)]">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Graduate Program (MBA)</h2>
                        <h3 className="font-bold text-gray-800 mb-3">Eligibility Criteria</h3>
                        <ul className="space-y-2 mb-6 text-gray-600">
                            <li className="flex items-start"><CheckCircle size={18} className="mr-2 text-green-500 flex-shrink-0 mt-1" /> Bachelor's degree in any discipline from a recognized university.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="mr-2 text-green-500 flex-shrink-0 mt-1" /> Minimum CGPA 2.50 or 2nd Class.</li>
                            <li className="flex items-start"><CheckCircle size={18} className="mr-2 text-green-500 flex-shrink-0 mt-1" /> For EMBA: Minimum 2 years of work experience is required.</li>
                        </ul>
                        <h3 className="font-bold text-gray-800 mb-3">Admission Test</h3>
                        <p className="text-gray-600 mb-4">
                            Written test followed by an interview. Candidates with high GMAT/GRE scores may be exempted from the written test.
                        </p>
                    </div>
                </div>

                {/* Roadmap */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12 font-serif">Admission Roadmap</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 hidden md:block"></div>
                        {['Apply Online', 'Written Test', 'Viva-Voce', 'Final Selection', 'Admission'].map((step, index) => (
                            <div key={index} className="flex flex-col items-center bg-gray-50 p-4 z-10">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                                    {index + 1}
                                </div>
                                <span className="font-bold text-gray-800">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionInfo;
