import PageHeader from '../../components/common/PageHeader';
import { CheckCircle, ArrowRight, GraduationCap, FileText, Calendar, ClipboardList } from 'lucide-react';

const Eligibility = () => {
    const bbaEligibility = [
        'Minimum GPA 2.50 in both SSC and HSC (or equivalent)',
        'Minimum total GPA 6.00 combined in SSC and HSC',
        'O-Level: Minimum 5 subjects with at least 2 B grades and no grade below C',
        'A-Level: Minimum 2 subjects with at least 1 B grade and no grade below C',
        'Students appearing in final HSC/A-Level exams may apply provisionally',
        'Maximum age 22 years at the time of admission',
    ];

    const mbaEligibility = [
        'Bachelor\'s degree from a recognized university with minimum CGPA 2.50 (out of 4.00)',
        'Or Second Class/Division in any discipline',
        'Candidates with professional experience are preferred',
        'Maximum age 35 years for Regular MBA',
        'No age limit for Executive MBA candidates',
        'Working professionals must provide employer NOC',
    ];

    const admissionRoadmap = [
        {
            step: 1,
            title: 'Application Submission',
            description: 'Complete the online application form and upload required documents',
            icon: FileText,
            timeline: 'Application Period',
        },
        {
            step: 2,
            title: 'Document Verification',
            description: 'Submitted documents are reviewed and verified by the admission office',
            icon: ClipboardList,
            timeline: '3-5 Working Days',
        },
        {
            step: 3,
            title: 'Admission Test',
            description: 'Written test covering English, Mathematics, and General Knowledge',
            icon: Calendar,
            timeline: 'As per Schedule',
        },
        {
            step: 4,
            title: 'Viva Voce',
            description: 'Personal interview to assess communication skills and motivation',
            icon: GraduationCap,
            timeline: 'After Written Test',
        },
        {
            step: 5,
            title: 'Result Declaration',
            description: 'Merit list published based on combined scores',
            icon: CheckCircle,
            timeline: 'Within 1 Week',
        },
        {
            step: 6,
            title: 'Enrollment',
            description: 'Complete enrollment by paying fees and submitting original documents',
            icon: ArrowRight,
            timeline: 'Within 7 Days',
        },
    ];

    const requiredDocuments = [
        'Attested copies of all academic certificates and mark sheets',
        'Recent passport-sized photographs (6 copies)',
        'National ID card or Birth Certificate copy',
        'Citizenship certificate (if applicable)',
        'Character certificate from last attended institution',
        'NOC from employer (for working professionals)',
        'Migration certificate (for transfer students)',
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader
                title="Eligibility & Admission Roadmap"
                subtitle="Know the requirements and follow the path to joining AIBA"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Eligibility Criteria */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-army-dark text-center mb-12">
                        Eligibility Criteria
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* BBA Eligibility */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-sage-deep rounded-lg flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-army-dark">
                                    Undergraduate (BBA)
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {bbaEligibility.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-sage-deep shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* MBA Eligibility */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-army-dark">
                                    Graduate (MBA)
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {mbaEligibility.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Admission Roadmap */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-army-dark text-center mb-4">
                        Admission Roadmap
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Follow these steps to complete your admission process at AIBA
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {admissionRoadmap.map((step) => {
                            const IconComponent = step.icon;
                            return (
                                <div key={step.step} className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-soft-gold rounded-full flex items-center justify-center font-bold text-army-dark">
                                        {step.step}
                                    </div>
                                    <div className="mt-4">
                                        <div className="w-12 h-12 bg-sage-light rounded-lg flex items-center justify-center mb-4">
                                            <IconComponent className="w-6 h-6 text-sage-deep" />
                                        </div>
                                        <h3 className="text-lg font-bold text-army-dark mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {step.description}
                                        </p>
                                        <span className="inline-block px-3 py-1 bg-sage-light/50 text-sage-deep text-xs font-semibold rounded-full">
                                            {step.timeline}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Required Documents */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-army-dark mb-6 text-center">
                        Required Documents
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {requiredDocuments.map((doc, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <FileText className="w-5 h-5 text-sage-deep shrink-0 mt-0.5" />
                                <span className="text-gray-700">{doc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">
                        Ready to start your journey with AIBA?
                    </p>
                    <a
                        href="/admission/apply"
                        className="inline-block px-8 py-4 bg-soft-gold text-army-dark font-bold rounded-lg shadow-lg hover:bg-[#d4c178] transition-colors"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Eligibility;
