import PageHeader from '../../components/common/PageHeader';
import { BookOpen, Award, Clock } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: "Bachelor of Business Administration (BBA)",
            duration: "4 Years",
            credits: "126 Credits",
            description: "A comprehensive undergraduate program designed to provide a strong foundation in business principles and management practices.",
            features: ["Major areas: Finance, Marketing, HRM, SCM", "Internship opportunities", "Industry visits"]
        },
        {
            title: "Master of Business Administration (MBA) - Regular",
            duration: "2 Years",
            credits: "60 Credits",
            description: "Designed for fresh graduates who want to specialize in a specific area of business and enhance their career prospects.",
            features: ["Evening classes", "Case-based learning", "Research project"]
        },
        {
            title: "Executive MBA (EMBA)",
            duration: "1.5 Years",
            credits: "48 Credits",
            description: "Tailored for working professionals who want to accelerate their career growth and develop leadership skills.",
            features: ["Weekend classes", "Networking opportunities", "Strategic management focus"]
        },
        {
            title: "MBA for BBA Graduates",
            duration: "1 Year",
            credits: "36 Credits",
            description: "An accelerated program for students with a BBA degree, focusing on advanced topics and specialization.",
            features: ["Fast-track completion", "Advanced electives", "Thesis option"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Academic Programs" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Programs' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--color-primary)]">
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{program.title}</h3>
                            <div className="flex space-x-6 mb-6 text-sm text-gray-600">
                                <div className="flex items-center"><Clock size={16} className="mr-2 text-[var(--color-secondary)]" /> {program.duration}</div>
                                <div className="flex items-center"><Award size={16} className="mr-2 text-[var(--color-secondary)]" /> {program.credits}</div>
                            </div>
                            <p className="text-gray-600 mb-6">{program.description}</p>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center"><BookOpen size={16} className="mr-2" /> Key Features</h4>
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;
