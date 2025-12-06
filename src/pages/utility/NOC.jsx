import { FileCheck, Download, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';

const NOC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const nocTypes = [
        { value: 'transfer', label: 'Transfer to Another Institution' },
        { value: 'employment', label: 'Employment/Job Purpose' },
        { value: 'passport', label: 'Passport/Visa Application' },
        { value: 'higher-study', label: 'Higher Study Abroad' },
        { value: 'other', label: 'Other Purpose' }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="No Objection Certificate (NOC)"
                subtitle="Request NOC for various official purposes"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'NOC' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-2xl mx-auto">
                        {/* NOC Request Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
                                    <FileCheck size={32} className="text-navy" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-army-dark">Request NOC</h2>
                                    <p className="text-cool-gray text-sm">For current students and alumni</p>
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
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
                                        <div>
                                            <label className="block text-sm font-semibold text-army-dark mb-2">
                                                Current Semester/Status
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g., 6th Semester / Alumni"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold text-army-dark mb-2">
                                            NOC Purpose
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" required>
                                            <option value="">Select Purpose</option>
                                            {nocTypes.map((type) => (
                                                <option key={type.value} value={type.value}>{type.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold text-army-dark mb-2">
                                            Detailed Reason
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Please provide detailed reason for NOC request..."
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold text-army-dark mb-2">
                                            Contact Phone
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="flex items-start gap-3">
                                            <input type="checkbox" className="w-4 h-4 mt-1 text-navy" required />
                                            <span className="text-sm text-cool-gray">
                                                I declare that the information provided is accurate and I have no pending dues or disciplinary issues with AIBA.
                                            </span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        <FileCheck size={20} />
                                        Submit NOC Request
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <CheckCircle size={64} className="text-sage-deep mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-army-dark mb-2">Request Submitted!</h3>
                                    <p className="text-cool-gray mb-4">
                                        Your NOC request has been received and is under review. You will be notified once approved.
                                    </p>
                                    <p className="text-sm text-cool-gray">
                                        Reference No: <strong className="text-navy">NOC-2024-{Math.floor(Math.random() * 10000)}</strong>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Important Notes */}
                        <div className="bg-sage-light/30 rounded-xl p-6 mb-8">
                            <h3 className="font-bold text-army-dark mb-3 flex items-center gap-2">
                                <AlertCircle size={20} className="text-sage-deep" />
                                Important Notes
                            </h3>
                            <ul className="space-y-2 text-sm text-cool-gray">
                                <li>• NOC will not be issued if there are pending dues</li>
                                <li>• Library books must be returned before NOC issuance</li>
                                <li>• NOC is valid for 3 months from date of issue</li>
                                <li>• Original student ID must be presented for collection</li>
                            </ul>
                        </div>

                        {/* Processing Time */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="font-bold text-army-dark mb-3 flex items-center gap-2">
                                <Clock size={20} className="text-navy" />
                                Processing Time
                            </h3>
                            <ul className="space-y-2 text-sm text-cool-gray">
                                <li>• Current Students: 3-5 working days</li>
                                <li>• Alumni: 5-7 working days</li>
                                <li>• Fee: ৳200</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NOC;
