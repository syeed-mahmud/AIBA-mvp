import PageHeader from '../../components/common/PageHeader';

const History = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="History of AIBA" breadcrumb={[{ name: 'About Us', path: '/about' }, { name: 'History' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Our Journey</h2>
                    <div className="prose max-w-none text-gray-600 leading-relaxed">
                        <p className="mb-4">
                            Army Institute of Business Administration (AIBA), Savar was established on 15 January 2015 at Savar Cantonment, Dhaka. It is an affiliated institute of Bangladesh University of Professionals (BUP), the 31st public university of Bangladesh run by the Bangladesh Armed Forces.
                        </p>
                        <p className="mb-4">
                            The institute started its journey with the vision of becoming a center of excellence in business education. Since its inception, AIBA Savar has been committed to providing quality education with a unique blend of academic rigor and military discipline.
                        </p>
                        <p className="mb-4">
                            Over the years, AIBA Savar has expanded its academic programs and infrastructure. It now offers Bachelor of Business Administration (BBA) and Master of Business Administration (MBA) programs tailored to meet the dynamic needs of the corporate world.
                        </p>
                        <p>
                            The institute is governed by a high-powered Governing Body headed by the Area Commander, Savar Area, Bangladesh Army. The day-to-day administration is run by a Director, who is a Brigadier General of the Bangladesh Army.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
