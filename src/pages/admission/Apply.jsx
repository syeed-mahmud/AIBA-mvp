import PageHeader from '../../components/common/PageHeader';

const Apply = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Apply Now" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Apply' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center font-serif">Online Application Form</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Program Applying For</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none">
                                <option>Select Program</option>
                                <option>BBA</option>
                                <option>MBA (Regular)</option>
                                <option>Executive MBA</option>
                                <option>MBA for BBA Graduates</option>
                            </select>
                        </div>

                        <div className="pt-4">
                            <button type="button" className="btn btn-primary w-full py-3 text-lg">Submit Application</button>
                        </div>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            By clicking Submit, you agree to our Terms and Conditions.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Apply;
