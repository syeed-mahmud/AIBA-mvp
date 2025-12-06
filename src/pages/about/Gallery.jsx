import PageHeader from '../../components/common/PageHeader';

const Gallery = () => {
    // Placeholder images
    const images = [1, 2, 3, 4, 5, 6];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHeader title="Photo Gallery" breadcrumb={[{ name: 'About Us', path: '/about' }, { name: 'Gallery' }]} />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img) => (
                        <div key={img} className="aspect-video bg-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold bg-gray-200">
                                Image {img}
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
