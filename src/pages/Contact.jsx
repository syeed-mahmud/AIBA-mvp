import PageHeader from '../components/common/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Contact Us" breadcrumb={[{ name: 'Contact' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8 font-serif">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                    <MapPin className="text-[var(--color-primary)]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Address</h3>
                                    <p className="text-gray-600">Army Institute of Business Administration (AIBA)</p>
                                    <p className="text-gray-600">Savar Cantonment, Savar, Dhaka-1344</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                    <Phone className="text-[var(--color-primary)]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <p className="text-gray-600">+880 1769-098191</p>
                                    <p className="text-gray-600">+880 2 7792618 (Ext: 4268)</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                    <Mail className="text-[var(--color-primary)]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-600">info@aibasavar.edu.bd</p>
                                    <p className="text-gray-600">admission@aibasavar.edu.bd</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                    <Clock className="text-[var(--color-primary)]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                                    <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 3:00 PM</p>
                                    <p className="text-gray-600">Friday & Saturday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" placeholder="Inquiry about..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" placeholder="Your message here..."></textarea>
                            </div>
                            <button type="button" className="btn btn-primary w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
