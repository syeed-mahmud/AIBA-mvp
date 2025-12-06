import { motion } from 'framer-motion';
import { Award, DollarSign, HelpCircle, ChevronDown, ChevronUp, BookOpen, Users, Star } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';

const Scholarships = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const scholarships = [
        {
            title: 'Merit Scholarship',
            icon: Star,
            coverage: 'Up to 100% Tuition Waiver',
            criteria: [
                'GPA 5.00 in both SSC & HSC: 100% waiver',
                'GPA 5.00 in SSC or HSC: 50% waiver',
                'Top 3 in admission test: 25% waiver'
            ],
            duration: 'Entire program (subject to CGPA maintenance)'
        },
        {
            title: 'Army Ward Scholarship',
            icon: Award,
            coverage: 'Up to 50% Tuition Waiver',
            criteria: [
                'Children of serving Army personnel',
                'Children of retired Army personnel',
                'Children of martyred Army personnel: 100% waiver'
            ],
            duration: 'Entire program'
        },
        {
            title: 'Need-Based Financial Aid',
            icon: Users,
            coverage: 'Up to 30% Tuition Waiver',
            criteria: [
                'Demonstrated financial need',
                'Minimum CGPA 3.00',
                'Recommendation from faculty advisor'
            ],
            duration: 'Semester-based (renewable)'
        },
        {
            title: 'Sibling Scholarship',
            icon: BookOpen,
            coverage: '15% Tuition Waiver',
            criteria: [
                'Sibling currently enrolled at AIBA',
                'Both students maintain minimum CGPA 3.00'
            ],
            duration: 'As long as both siblings are enrolled'
        }
    ];

    const feeStructure = {
        bba: {
            program: 'BBA',
            admissionFee: '50,000',
            semesterFee: '45,000',
            otherFees: '15,000',
            totalPerSemester: '60,000',
            note: '* First semester includes admission fee'
        },
        mba: {
            program: 'MBA (Regular)',
            admissionFee: '60,000',
            semesterFee: '55,000',
            otherFees: '18,000',
            totalPerSemester: '73,000',
            note: '* First semester includes admission fee'
        },
        emba: {
            program: 'Executive MBA',
            admissionFee: '75,000',
            semesterFee: '70,000',
            otherFees: '20,000',
            totalPerSemester: '90,000',
            note: '* First semester includes admission fee'
        }
    };

    const faqs = [
        {
            question: 'Can I combine multiple scholarships?',
            answer: 'Merit scholarship and Army Ward scholarship can be combined up to a maximum of 100% tuition waiver. Need-based aid cannot be combined with other scholarships.'
        },
        {
            question: 'What is the CGPA requirement to maintain scholarship?',
            answer: 'Students must maintain a minimum CGPA of 3.50 to continue receiving merit scholarship. For Army Ward scholarship, the minimum requirement is CGPA 3.00.'
        },
        {
            question: 'Is there an installment option for fees?',
            answer: 'Yes, semester fees can be paid in 2 installments. 60% at the beginning of the semester and 40% before mid-term examination.'
        },
        {
            question: 'Are there any hidden fees?',
            answer: 'No hidden fees. The fee structure includes tuition, library, laboratory, sports, and cultural fees. Only examination fees are charged separately per credit hour.'
        },
        {
            question: 'What happens if I lose my scholarship?',
            answer: 'If CGPA falls below the required threshold, scholarship will be suspended for one semester. It can be reinstated if CGPA improves in the next semester.'
        }
    ];

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Financial Information"
                subtitle="Scholarships, Tuition Fees & FAQs"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Admission', path: '/admission' },
                    { label: 'Financial Information' }
                ]}
            />

            {/* Scholarships Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Financial Aid
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Scholarships</h2>
                        <p className="text-cool-gray mt-3 max-w-2xl mx-auto">
                            AIBA offers various scholarships to support deserving students in their academic journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {scholarships.map((scholarship, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-off-white rounded-2xl p-6 lg:p-8 border border-gray-100"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center">
                                        <scholarship.icon size={28} className="text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-army-dark">{scholarship.title}</h3>
                                        <p className="text-sage-deep font-semibold">{scholarship.coverage}</p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-sm font-bold text-army-dark uppercase tracking-wider mb-2">Criteria</h4>
                                    <ul className="space-y-2">
                                        {scholarship.criteria.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-cool-gray">
                                                <span className="w-1.5 h-1.5 bg-sage-deep rounded-full mt-2 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-cool-gray">
                                        <strong className="text-army-dark">Duration:</strong> {scholarship.duration}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tuition & Fees */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            Fee Structure
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Tuition & Other Fees</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-navy text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-bold">Program</th>
                                            <th className="px-6 py-4 text-right font-bold">Admission Fee</th>
                                            <th className="px-6 py-4 text-right font-bold">Semester Fee</th>
                                            <th className="px-6 py-4 text-right font-bold">Other Fees</th>
                                            <th className="px-6 py-4 text-right font-bold">Total/Semester</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.values(feeStructure).map((fee, index) => (
                                            <tr key={index} className="border-b border-gray-100 last:border-0">
                                                <td className="px-6 py-4 font-medium text-army-dark">{fee.program}</td>
                                                <td className="px-6 py-4 text-right text-cool-gray">৳{fee.admissionFee}</td>
                                                <td className="px-6 py-4 text-right text-cool-gray">৳{fee.semesterFee}</td>
                                                <td className="px-6 py-4 text-right text-cool-gray">৳{fee.otherFees}</td>
                                                <td className="px-6 py-4 text-right font-bold text-navy">৳{fee.totalPerSemester}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-6 py-4 bg-sage-light/30 text-sm text-cool-gray">
                                * All amounts are in Bangladeshi Taka (BDT). Fees are subject to change.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block text-navy font-bold uppercase tracking-widest mb-3 text-xs bg-navy/10 px-4 py-2 rounded-full">
                            FAQ
                        </span>
                        <h2 className="text-3xl font-bold text-army-dark">Frequently Asked Questions</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="mb-4"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between bg-off-white rounded-xl px-6 py-4 text-left hover:bg-sage-light/30 transition-colors"
                                >
                                    <span className="font-semibold text-army-dark pr-4">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp size={20} className="text-sage-deep shrink-0" />
                                    ) : (
                                        <ChevronDown size={20} className="text-sage-deep shrink-0" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        className="px-6 py-4 text-cool-gray bg-white border border-gray-100 rounded-b-xl -mt-2"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Scholarships;
