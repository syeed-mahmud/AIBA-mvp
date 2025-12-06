import PageHeader from '../../components/common/PageHeader';
import { User } from 'lucide-react';

const Director = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Message from Director" breadcrumb={[{ name: 'Administration', path: '/administration' }, { name: 'Director' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center">
                            <User size={64} className="text-gray-400" />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-[var(--color-primary)]">Brigadier General [Name]</h3>
                            <p className="text-[var(--color-secondary)] font-bold">Director, AIBA Savar</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 font-serif">Director's Message</h2>
                        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Welcome to AIBA Savar, a place where education meets discipline. Our mission is to transform young minds into future business leaders who are not only professionally competent but also socially responsible.
                            </p>
                            <p>
                                We have a team of dedicated faculty members who are experts in their respective fields. They are committed to providing the best possible education to our students. Our state-of-the-art facilities and conducive learning environment ensure that our students get the best possible exposure.
                            </p>
                            <p>
                                At AIBA Savar, we emphasize on character building along with academic excellence. We believe that discipline is the key to success. Our students are trained to be disciplined, punctual, and respectful.
                            </p>
                            <p>
                                I invite you to explore our website and learn more about our programs and activities. We look forward to welcoming you to our campus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Director;
