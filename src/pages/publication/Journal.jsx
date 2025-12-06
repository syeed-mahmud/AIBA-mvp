import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Search, Filter, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';

const Journal = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['All', 'Finance', 'Marketing', 'HRM', 'Management', 'Economics'];

    const articles = [
        {
            title: 'Digital Transformation in Bangladesh Banking Sector: Challenges and Opportunities',
            authors: ['Dr. Mohammad Rahman', 'Fatema Akter'],
            category: 'Finance',
            volume: 'Vol. 3, Issue 2',
            year: '2024',
            doi: '10.xxxxx/aibaj.2024.0302.001',
            abstract: 'This paper examines the current state of digital transformation in Bangladesh\'s banking sector, identifying key challenges faced by traditional banks and opportunities presented by fintech innovations...'
        },
        {
            title: 'Consumer Trust in E-commerce: A Study on Bangladeshi Online Shoppers',
            authors: ['Dr. Kamal Hossain'],
            category: 'Marketing',
            volume: 'Vol. 3, Issue 1',
            year: '2024',
            doi: '10.xxxxx/aibaj.2024.0301.003',
            abstract: 'An empirical investigation into factors influencing consumer trust in e-commerce platforms, with specific focus on the Bangladeshi market context...'
        },
        {
            title: 'Impact of Work-from-Home on Employee Productivity: Evidence from IT Sector',
            authors: ['Dr. Farhana Akter', 'Imran Hossain'],
            category: 'HRM',
            volume: 'Vol. 2, Issue 4',
            year: '2023',
            doi: '10.xxxxx/aibaj.2023.0204.002',
            abstract: 'Analysis of productivity metrics and employee satisfaction levels during the shift to remote work arrangements in Bangladesh\'s IT industry...'
        },
        {
            title: 'Strategic Planning Practices in SMEs: A Qualitative Study',
            authors: ['Dr. Nasreen Begum'],
            category: 'Management',
            volume: 'Vol. 2, Issue 3',
            year: '2023',
            doi: '10.xxxxx/aibaj.2023.0203.001',
            abstract: 'Exploring strategic planning adoption and implementation challenges among small and medium enterprises in developing economies...'
        }
    ];

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="AIBA Journal"
                subtitle="Peer-reviewed academic journal for business research"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Publication', path: '/publication' },
                    { label: 'Journal' }
                ]}
            />

            {/* Journal Info */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block bg-navy/10 rounded-full px-4 py-2 mb-4">
                            <span className="text-navy font-bold text-sm">ISSN: XXXX-XXXX (Online)</span>
                        </div>
                        <h2 className="text-2xl font-bold text-army-dark mb-4">AIBA Journal of Business Studies</h2>
                        <p className="text-cool-gray">
                            A bi-annual peer-reviewed journal publishing original research in business administration, 
                            management, finance, marketing, and related fields. Indexed in leading academic databases.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8 bg-off-white sticky top-0 z-10 border-b">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cool-gray" />
                            <input
                                type="text"
                                placeholder="Search articles or authors..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto">
                            <Filter size={18} className="text-cool-gray shrink-0" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category.toLowerCase())}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                        selectedCategory === category.toLowerCase()
                                            ? 'bg-navy text-white'
                                            : 'bg-white text-army-dark hover:bg-sage-light'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="space-y-6">
                        {filteredArticles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-bold rounded-full">
                                        {article.category}
                                    </span>
                                    <span className="text-sm text-cool-gray">{article.volume}</span>
                                    <span className="flex items-center gap-1 text-sm text-cool-gray">
                                        <Calendar size={14} />
                                        {article.year}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-army-dark mb-3 hover:text-navy transition-colors cursor-pointer">
                                    {article.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-4">
                                    <User size={16} className="text-sage-deep" />
                                    <span className="text-cool-gray text-sm">{article.authors.join(', ')}</span>
                                </div>

                                <p className="text-cool-gray text-sm mb-4 line-clamp-3">{article.abstract}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-xs text-cool-gray">DOI: {article.doi}</span>
                                    <button className="flex items-center gap-2 text-navy font-semibold text-sm hover:text-navy-light transition-colors">
                                        <BookOpen size={16} />
                                        Read Full Article
                                        <ExternalLink size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}

                        {filteredArticles.length === 0 && (
                            <div className="text-center py-12">
                                <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
                                <p className="text-cool-gray">No articles found matching your search criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Call for Papers */}
            <section className="py-16 bg-gradient-to-r from-army-dark to-sage-deep">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Call for Papers</h2>
                    <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                        We invite researchers to submit original manuscripts for our upcoming issues. 
                        Topics covering all areas of business administration and management are welcome.
                    </p>
                    <button className="px-8 py-4 bg-white text-army-dark font-bold rounded-lg hover:bg-soft-gold transition-colors">
                        Submission Guidelines
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Journal;
