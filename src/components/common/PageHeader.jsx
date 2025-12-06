import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb }) => {
    return (
        <div className="bg-[var(--color-primary)] text-white py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">{title}</h1>
                <div className="flex items-center text-sm text-gray-300">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    {breadcrumb.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <ChevronRight size={14} className="mx-2" />
                            {item.path ? (
                                <Link to={item.path} className="hover:text-white transition-colors">{item.name}</Link>
                            ) : (
                                <span className="text-[var(--color-secondary)] font-medium">{item.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
