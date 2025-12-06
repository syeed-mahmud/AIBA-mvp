import { Award, Search, FileCheck, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';

const DegreeVerification = () => {
    const [registrationNo, setRegistrationNo] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);

    const handleVerification = (e) => {
        e.preventDefault();
        // Placeholder for verification logic
        if (registrationNo) {
            setVerificationResult({
                status: 'pending',
                message: 'Verification request submitted. You will receive a response within 3-5 working days.'
            });
        }
    };

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Degree Verification"
                subtitle="Verify authenticity of AIBA degrees and certificates"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Degree Verification' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-2xl mx-auto">
                        {/* Verification Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
                                    <Award size={32} className="text-navy" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-army-dark">Verify a Degree</h2>
                                    <p className="text-cool-gray text-sm">For employers and institutions</p>
                                </div>
                            </div>

                            <form onSubmit={handleVerification}>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-army-dark mb-2">
                                        Registration/Roll Number
                                    </label>
                                    <input
                                        type="text"
                                        value={registrationNo}
                                        onChange={(e) => setRegistrationNo(e.target.value)}
                                        placeholder="Enter registration or roll number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-army-dark mb-2">
                                        Student's Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter student's full name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-army-dark mb-2">
                                        Program
                                    </label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy">
                                        <option value="">Select Program</option>
                                        <option value="bba">BBA</option>
                                        <option value="mba">MBA (Regular)</option>
                                        <option value="emba">Executive MBA</option>
                                        <option value="mba-bba">MBA for BBA Graduates</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-army-dark mb-2">
                                        Requester's Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors"
                                    style={{ color: '#FFFFFF' }}
                                >
                                    <Search size={20} />
                                    Submit Verification Request
                                </button>
                            </form>

                            {verificationResult && (
                                <div className="mt-6 p-4 bg-sage-light/30 rounded-lg flex items-start gap-3">
                                    <CheckCircle size={24} className="text-sage-deep shrink-0" />
                                    <p className="text-sm text-army-dark">{verificationResult.message}</p>
                                </div>
                            )}
                        </div>

                        {/* Process Info */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="font-bold text-army-dark mb-4 flex items-center gap-2">
                                <FileCheck size={20} className="text-navy" />
                                Verification Process
                            </h3>
                            <ol className="space-y-3 text-sm text-cool-gray">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                                    Submit the verification request with required details
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                                    Our registrar's office will verify the records
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                                    Verification result will be sent to the provided email
                                </li>
                            </ol>
                        </div>

                        {/* Contact */}
                        <div className="mt-8 text-center text-sm text-cool-gray">
                            <p>For urgent verification requests, contact:</p>
                            <p className="font-medium text-navy">registrar@aiba.edu.bd | +880-2-XXXXXXXX</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DegreeVerification;
