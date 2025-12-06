import PageHeader from '../../components/common/PageHeader';
import { Target, Eye, Compass } from 'lucide-react';

const Vision = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Vision, Mission & Strategy" breadcrumb={[{ name: 'About Us', path: '/about' }, { name: 'Vision & Mission' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Vision */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[var(--color-primary)] hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6">
                            <Eye size={32} className="text-[var(--color-primary)]" />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-serif">Vision</h2>
                        <p className="text-gray-600">
                            To be a center of excellence in business education and research, producing globally competitive and morally upright leaders.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[var(--color-secondary)] hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center mb-6">
                            <Target size={32} className="text-[var(--color-secondary)]" />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-serif">Mission</h2>
                        <ul className="text-gray-600 space-y-2 list-disc pl-5">
                            <li>Provide quality business education through modern teaching methodologies.</li>
                            <li>Foster critical thinking, innovation, and leadership skills.</li>
                            <li>Instill ethical values and discipline.</li>
                            <li>Conduct research to contribute to knowledge and society.</li>
                        </ul>
                    </div>

                    {/* Strategy */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-600 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <Compass size={32} className="text-gray-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-serif">Strategy</h2>
                        <p className="text-gray-600">
                            Continuously updating curriculum, enhancing faculty development, strengthening industry-academia linkage, and ensuring a disciplined learning environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
