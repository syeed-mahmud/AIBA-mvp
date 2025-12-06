import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import { ChevronDown, HelpCircle } from 'lucide-react';

const AdmissionFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: 'Application Process',
            questions: [
                {
                    q: 'How do I apply for admission at AIBA?',
                    a: 'You can apply online through our website by visiting the "Apply Now" page. Fill out the application form, upload required documents, and pay the application fee to complete your submission.',
                },
                {
                    q: 'What is the application deadline?',
                    a: 'Application deadlines vary by semester. Please check our Notice Board or contact the admission office for current admission cycle dates.',
                },
                {
                    q: 'Can I apply to multiple programs?',
                    a: 'Yes, you can apply to multiple programs, but a separate application and application fee are required for each program.',
                },
                {
                    q: 'How can I track my application status?',
                    a: 'Once you submit your application, you will receive a confirmation email with your application ID. You can use this ID to track your status through our admission portal.',
                },
            ],
        },
        {
            category: 'Eligibility & Requirements',
            questions: [
                {
                    q: 'What are the minimum requirements for BBA admission?',
                    a: 'For BBA, you need minimum GPA 2.50 in both SSC and HSC (or equivalent), with a combined total of at least 6.00. For O-Level and A-Level students, specific grade requirements apply.',
                },
                {
                    q: 'Can I apply if I am awaiting my final exam results?',
                    a: 'Yes, students appearing in HSC or equivalent examinations may apply provisionally. Admission will be confirmed upon receiving satisfactory results.',
                },
                {
                    q: 'Is work experience required for MBA admission?',
                    a: 'Work experience is preferred but not mandatory for Regular MBA. For Executive MBA, a minimum of 2-3 years of professional experience is typically expected.',
                },
                {
                    q: 'Do you accept foreign qualifications?',
                    a: 'Yes, we accept foreign qualifications equivalent to Bangladeshi standards. Equivalency certificates from the Ministry of Education may be required.',
                },
            ],
        },
        {
            category: 'Admission Test',
            questions: [
                {
                    q: 'What subjects are covered in the admission test?',
                    a: 'The admission test typically covers English, Mathematics/Quantitative Aptitude, and General Knowledge/Current Affairs. Specific syllabus details are provided after application submission.',
                },
                {
                    q: 'How long is the admission test?',
                    a: 'The written admission test is usually 1.5 to 2 hours long. The duration may vary by program.',
                },
                {
                    q: 'Is there a viva/interview after the written test?',
                    a: 'Yes, shortlisted candidates from the written test are called for a viva voce (personal interview) to assess communication skills, motivation, and overall suitability.',
                },
                {
                    q: 'Can I reschedule my admission test?',
                    a: 'Test rescheduling is generally not allowed. However, in exceptional circumstances, please contact the admission office well in advance.',
                },
            ],
        },
        {
            category: 'Fees & Financial Aid',
            questions: [
                {
                    q: 'What is the tuition fee structure?',
                    a: 'Tuition fees vary by program. Please visit our Financial Information page for detailed fee structures for BBA and MBA programs.',
                },
                {
                    q: 'Are scholarships available?',
                    a: 'Yes, AIBA offers various scholarships including merit-based scholarships, need-based financial aid, and special quotas for children of armed forces personnel.',
                },
                {
                    q: 'Can I pay fees in installments?',
                    a: 'Yes, semester fees can be paid in installments. Please contact the accounts department for installment plan options.',
                },
                {
                    q: 'Is there any fee waiver for armed forces families?',
                    a: 'Children of serving and retired armed forces personnel may be eligible for special fee concessions. Please provide relevant documentation during admission.',
                },
            ],
        },
        {
            category: 'General Queries',
            questions: [
                {
                    q: 'What is the medium of instruction at AIBA?',
                    a: 'The medium of instruction at AIBA is English. All courses, examinations, and official communications are conducted in English.',
                },
                {
                    q: 'Is hostel accommodation available?',
                    a: 'Yes, limited hostel facilities are available on campus. Priority is given to outstation students. Please apply early as seats fill up quickly.',
                },
                {
                    q: 'What are the class timings?',
                    a: 'Regular programs typically have morning to afternoon classes. Executive MBA classes are usually held on weekends to accommodate working professionals.',
                },
                {
                    q: 'How can I contact the admission office?',
                    a: 'You can reach the admission office via email at admission@aibasavar.edu.bd or call during office hours. Visit our Contact page for more details.',
                },
            ],
        },
    ];

    const handleToggle = (categoryIndex, questionIndex) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader
                title="Admission FAQ"
                subtitle="Find answers to frequently asked questions about admissions"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {faqs.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-sage-deep rounded-lg flex items-center justify-center">
                                <HelpCircle className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-army-dark">
                                {category.category}
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {category.questions.map((faq, questionIndex) => {
                                const key = `${categoryIndex}-${questionIndex}`;
                                const isOpen = openIndex === key;

                                return (
                                    <div
                                        key={questionIndex}
                                        className="bg-white rounded-lg shadow-md overflow-hidden"
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                                            onClick={() => handleToggle(categoryIndex, questionIndex)}
                                        >
                                            <span className="font-semibold text-gray-800 pr-4">
                                                {faq.q}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-sage-deep shrink-0 transition-transform ${
                                                    isOpen ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>
                                        {isOpen && (
                                            <div className="px-5 pb-5 border-t border-gray-100">
                                                <p className="text-gray-600 pt-4">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Contact CTA */}
                <div className="mt-12 bg-sage-light/30 rounded-xl p-8 text-center">
                    <h3 className="text-xl font-bold text-army-dark mb-3">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Our admission team is here to help you with any queries.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-6 py-3 border-2 border-army-dark text-army-dark font-semibold rounded-lg hover:bg-army-dark hover:text-white transition-colors"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/admission/apply"
                            className="px-6 py-3 bg-soft-gold text-army-dark font-semibold rounded-lg hover:bg-[#d4c178] transition-colors"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionFAQ;
