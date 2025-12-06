import { Mail, ExternalLink, Shield, Info } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const Webmail = () => {
    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Webmail"
                subtitle="Access your AIBA email account"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Webmail' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-2xl mx-auto">
                        {/* Webmail Access Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center mb-8">
                            <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail size={40} className="text-navy" />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-army-dark mb-4">AIBA Webmail Portal</h2>
                            <p className="text-cool-gray mb-8">
                                Click the button below to access your institutional email. 
                                Use your AIBA credentials to login.
                            </p>

                            <a
                                href="https://mail.aiba.edu.bd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors"
                                style={{ color: '#FFFFFF' }}
                            >
                                <Mail size={20} />
                                Open Webmail
                                <ExternalLink size={18} />
                            </a>
                        </div>

                        {/* Login Info */}
                        <div className="bg-sage-light/30 rounded-xl p-6 mb-8">
                            <div className="flex items-start gap-4">
                                <Info size={24} className="text-sage-deep shrink-0" />
                                <div>
                                    <h3 className="font-bold text-army-dark mb-2">Login Credentials</h3>
                                    <ul className="text-sm text-cool-gray space-y-2">
                                        <li><strong>Students:</strong> studentid@student.aiba.edu.bd</li>
                                        <li><strong>Faculty:</strong> firstname.lastname@aiba.edu.bd</li>
                                        <li><strong>Staff:</strong> firstname.lastname@aiba.edu.bd</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Security Notice */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <div className="flex items-start gap-4">
                                <Shield size={24} className="text-navy shrink-0" />
                                <div>
                                    <h3 className="font-bold text-army-dark mb-2">Security Notice</h3>
                                    <ul className="text-sm text-cool-gray space-y-1">
                                        <li>• Never share your password with anyone</li>
                                        <li>• Always logout after using public computers</li>
                                        <li>• Report suspicious emails to IT support</li>
                                        <li>• Change your password regularly</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="text-center mt-8 text-sm text-cool-gray">
                            <p>Having trouble accessing your email?</p>
                            <p>Contact IT Support: <a href="mailto:it@aiba.edu.bd" className="text-navy font-medium hover:underline">it@aiba.edu.bd</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Webmail;
