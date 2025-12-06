import PageHeader from '../../components/common/PageHeader';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What programs does AIBA Savar offer?",
            answer: "AIBA Savar offers BBA and MBA programs. The MBA program includes Regular MBA, Executive MBA (EMBA), and MBA for BBA Graduates."
        },
        {
            question: "Is AIBA Savar a public or private institution?",
            answer: "AIBA Savar is an institute run by the Bangladesh Army and is affiliated with the Bangladesh University of Professionals (BUP), which is a public university."
        },
        {
            question: "How can I apply for admission?",
            answer: "You can apply online through our website during the admission window. Please check the Admission section for detailed eligibility criteria and roadmap."
        },
        {
            question: "Does AIBA Savar offer scholarships?",
            answer: "Yes, AIBA Savar offers scholarships based on merit and financial need. Details can be found in the Financial Information section."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Frequently Asked Questions" breadcrumb={[{ name: 'About Us', path: '/about' }, { name: 'FAQ' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-bold text-lg text-gray-800">{faq.question}</span>
                                {openIndex === index ? <Minus className="text-[var(--color-primary)]" /> : <Plus className="text-gray-400" />}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
