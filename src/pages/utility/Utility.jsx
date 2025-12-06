import PageHeader from '../../components/common/PageHeader';
import { Mail, FileCheck, ShieldCheck, Link as LinkIcon, FileText } from 'lucide-react';

const Utility = () => {
    const links = [
        {
            title: "Webmail",
            description: "Access your official email account.",
            icon: <Mail size={32} className="text-[var(--color-primary)]" />,
            link: "#", // Placeholder
            btnText: "Login to Webmail"
        },
        {
            title: "NOC Application",
            description: "Apply for No Objection Certificate (NOC).",
            icon: <FileCheck size={32} className="text-[var(--color-primary)]" />,
            link: "/noc", // Internal link if implemented, or placeholder
            btnText: "Apply for NOC"
        },
        {
            title: "Degree Verification",
            description: "Verify academic degrees issued by AIBA/BUP.",
            icon: <ShieldCheck size={32} className="text-[var(--color-primary)]" />,
            link: "#", // Back link placeholder
            btnText: "Verify Degree"
        },
        {
            title: "Certificate Attestation",
            description: "Information regarding certificate attestation.",
            icon: <FileText size={32} className="text-[var(--color-primary)]" />,
            link: "#", // Back link placeholder
            btnText: "Learn More"
        },
        {
            title: "Student Clubs",
            description: "Explore various student clubs and activities.",
            icon: <LinkIcon size={32} className="text-[var(--color-primary)]" />,
            link: "#",
            btnText: "View Clubs"
        },
        {
            title: "Career",
            description: "Job opportunities at AIBA Savar.",
            icon: <LinkIcon size={32} className="text-[var(--color-primary)]" />,
            link: "/career",
            btnText: "View Openings"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Useful Links & Utilities" breadcrumb={[{ name: 'Utility' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {links.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm h-10">{item.description}</p>
                            <a href={item.link} className="btn btn-primary w-full">{item.btnText}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Utility;
