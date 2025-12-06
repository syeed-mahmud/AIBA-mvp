import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, subtitle, breadcrumb, breadcrumbs }) => {
    // Support both 'breadcrumb' and 'breadcrumbs' props, and both 'name' and 'label' keys
    const items = breadcrumb || breadcrumbs || [];
    
    return (
        <div className="bg-army-dark text-white py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">{title}</h1>
                {subtitle && <p className="text-white/80 mb-4">{subtitle}</p>}
                <div className="flex items-center text-sm text-gray-300">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <ChevronRight size={14} className="mx-2" />
                            {item.path ? (
                                <Link to={item.path} className="hover:text-white transition-colors">{item.name || item.label}</Link>
                            ) : (
                                <span className="text-soft-gold font-medium">{item.name || item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
