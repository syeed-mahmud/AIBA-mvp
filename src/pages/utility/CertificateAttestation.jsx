import { FileSignature, Upload, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';

const CertificateAttestation = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Certificate Attestation"
                subtitle="Request attestation for your academic certificates"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Certificate Attestation' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-2xl mx-auto">
                        {/* Attestation Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
                                    <FileSignature size={32} className="text-navy" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-army-dark">Request Attestation</h2>
                                    <p className="text-cool-gray text-sm">For AIBA students and alumni</p>
                                </div>
                            </div>

                            {!formSubmitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-army-dark mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-army-dark mb-2">
                                                Student ID
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your student ID"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold text-army-dark mb-2">
                                            Program
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" required>
                                            <option value="">Select Program</option>
                                            <option value="bba">BBA</option>
                                            <option value="mba">MBA (Regular)</option>
                                            <option value="emba">Executive MBA</option>
                                            <option value="mba-bba">MBA for BBA Graduates</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold text-army-dark mb-2">
                                            Document Type
                                        </label>
                                        <div className="space-y-2">
                                            {['Transcript', 'Provisional Certificate', 'Character Certificate', 'Other'].map((doc) => (
                                                <label key={doc} className="flex items-center gap-3">
                                                    <input type="checkbox" className="w-4 h-4 text-navy" />
                                                    <span className="text-cool-gray">{doc}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold text-army-dark mb-2">
                                            Purpose of Attestation
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" required>
                                            <option value="">Select Purpose</option>
                                            <option value="higher-study">Higher Study Abroad</option>
                                            <option value="employment">Employment</option>
                                            <option value="embassy">Embassy/Visa Processing</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-army-dark mb-2">
                                            Upload Document Copy
                                        </label>
                                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-navy transition-colors cursor-pointer">
                                            <Upload size={32} className="text-cool-gray mx-auto mb-2" />
                                            <p className="text-sm text-cool-gray">Click to upload or drag and drop</p>
                                            <p className="text-xs text-cool-gray mt-1">PDF, JPG, PNG (Max 5MB)</p>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        <FileSignature size={20} />
                                        Submit Attestation Request
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <CheckCircle size={64} className="text-sage-deep mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-army-dark mb-2">Request Submitted!</h3>
                                    <p className="text-cool-gray mb-4">
                                        Your attestation request has been received. You will be notified via email once it's ready for collection.
                                    </p>
                                    <p className="text-sm text-cool-gray">
                                        Reference No: <strong className="text-navy">ATT-2024-{Math.floor(Math.random() * 10000)}</strong>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Fee Info */}
                        <div className="bg-sage-light/30 rounded-xl p-6 mb-8">
                            <h3 className="font-bold text-army-dark mb-3 flex items-center gap-2">
                                <FileText size={20} className="text-sage-deep" />
                                Fee Structure
                            </h3>
                            <ul className="space-y-2 text-sm text-cool-gray">
                                <li>• Transcript Attestation: ৳500 per copy</li>
                                <li>• Certificate Attestation: ৳300 per copy</li>
                                <li>• Express Service (24 hours): Additional ৳500</li>
                            </ul>
                        </div>

                        {/* Processing Time */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="font-bold text-army-dark mb-3 flex items-center gap-2">
                                <AlertCircle size={20} className="text-navy" />
                                Processing Time
                            </h3>
                            <ul className="space-y-2 text-sm text-cool-gray">
                                <li>• Regular Processing: 5-7 working days</li>
                                <li>• Express Processing: 24 hours</li>
                                <li>• Collection: In person with valid ID</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CertificateAttestation;
