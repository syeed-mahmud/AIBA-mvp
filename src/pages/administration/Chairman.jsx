import PageHeader from '../../components/common/PageHeader';
import { User } from 'lucide-react';

const Chairman = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Message from Chairman" breadcrumb={[{ name: 'Administration', path: '/administration' }, { name: 'Chairman' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center">
                            <User size={64} className="text-gray-400" />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-[var(--color-primary)]">Major General [Name]</h3>
                            <p className="text-gray-600">Area Commander, Savar Area</p>
                            <p className="text-[var(--color-secondary)] font-bold">Chairman, Governing Body</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 font-serif">Chairman's Message</h2>
                        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                It gives me immense pleasure to welcome you to the Army Institute of Business Administration (AIBA), Savar. As an institution run by the Bangladesh Army, we are committed to upholding the highest standards of discipline, integrity, and academic excellence.
                            </p>
                            <p>
                                In today's rapidly changing global business environment, the demand for competent and ethical leaders is higher than ever. At AIBA Savar, we strive to groom our students to meet these challenges with confidence and capability.
                            </p>
                            <p>
                                Our curriculum is designed to provide a strong theoretical foundation while also emphasizing practical application. We believe in holistic development, and thus, we encourage our students to participate in various co-curricular and extra-curricular activities.
                            </p>
                            <p>
                                I am confident that the graduates of AIBA Savar will make significant contributions to the national and global economy. I wish the institute and its students all the success in their future endeavors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chairman;
