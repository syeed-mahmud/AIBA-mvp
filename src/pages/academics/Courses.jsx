import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Users, ChevronDown, ChevronRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const Courses = () => {
    const [activeProgram, setActiveProgram] = useState('bba');

    const programs = {
        bba: {
            title: 'Bachelor of Business Administration (BBA)',
            duration: '4 Years (8 Semesters)',
            credits: '130 Credits',
            description: 'A comprehensive undergraduate program designed to build strong business foundations.',
            semesters: [
                {
                    name: 'Year 1 - Semester 1',
                    courses: [
                        { code: 'BBA-101', name: 'Principles of Management', credits: 3 },
                        { code: 'BBA-102', name: 'Business Mathematics', credits: 3 },
                        { code: 'BBA-103', name: 'Principles of Accounting', credits: 3 },
                        { code: 'BBA-104', name: 'English Language Skills', credits: 3 },
                        { code: 'BBA-105', name: 'Introduction to Business', credits: 3 }
                    ]
                },
                {
                    name: 'Year 1 - Semester 2',
                    courses: [
                        { code: 'BBA-106', name: 'Principles of Marketing', credits: 3 },
                        { code: 'BBA-107', name: 'Business Statistics', credits: 3 },
                        { code: 'BBA-108', name: 'Financial Accounting', credits: 3 },
                        { code: 'BBA-109', name: 'Microeconomics', credits: 3 },
                        { code: 'BBA-110', name: 'Business Communication', credits: 3 }
                    ]
                },
                // Add more semesters as needed
            ]
        },
        mbaRegular: {
            title: 'MBA (Regular)',
            duration: '2 Years (4 Semesters)',
            credits: '60 Credits',
            description: 'Full-time graduate program for developing advanced management expertise.',
            semesters: [
                {
                    name: 'Semester 1',
                    courses: [
                        { code: 'MBA-501', name: 'Managerial Economics', credits: 3 },
                        { code: 'MBA-502', name: 'Financial Management', credits: 3 },
                        { code: 'MBA-503', name: 'Marketing Management', credits: 3 },
                        { code: 'MBA-504', name: 'Organizational Behavior', credits: 3 },
                        { code: 'MBA-505', name: 'Quantitative Methods', credits: 3 }
                    ]
                },
                {
                    name: 'Semester 2',
                    courses: [
                        { code: 'MBA-506', name: 'Operations Management', credits: 3 },
                        { code: 'MBA-507', name: 'Human Resource Management', credits: 3 },
                        { code: 'MBA-508', name: 'Management Accounting', credits: 3 },
                        { code: 'MBA-509', name: 'Business Research Methods', credits: 3 },
                        { code: 'MBA-510', name: 'Strategic Management', credits: 3 }
                    ]
                }
            ]
        },
        emba: {
            title: 'Executive MBA (EMBA)',
            duration: '2 Years (Weekend Classes)',
            credits: '60 Credits',
            description: 'Designed for working professionals seeking to enhance their management skills.',
            semesters: [
                {
                    name: 'Semester 1',
                    courses: [
                        { code: 'EMBA-501', name: 'Executive Leadership', credits: 3 },
                        { code: 'EMBA-502', name: 'Corporate Finance', credits: 3 },
                        { code: 'EMBA-503', name: 'Strategic Marketing', credits: 3 },
                        { code: 'EMBA-504', name: 'Business Analytics', credits: 3 }
                    ]
                }
            ]
        },
        mbaBBA: {
            title: 'MBA for BBA Graduates',
            duration: '1 Year (2 Semesters)',
            credits: '36 Credits',
            description: 'Accelerated MBA program exclusively for BBA graduates.',
            semesters: [
                {
                    name: 'Semester 1',
                    courses: [
                        { code: 'MBA-601', name: 'Advanced Financial Management', credits: 3 },
                        { code: 'MBA-602', name: 'Strategic Marketing Management', credits: 3 },
                        { code: 'MBA-603', name: 'Advanced Operations Management', credits: 3 },
                        { code: 'MBA-604', name: 'Leadership & Change Management', credits: 3 }
                    ]
                }
            ]
        }
    };

    const [expandedSemesters, setExpandedSemesters] = useState({});

    const toggleSemester = (semesterName) => {
        setExpandedSemesters(prev => ({
            ...prev,
            [semesterName]: !prev[semesterName]
        }));
    };

    return (
        <div className="min-h-screen bg-off-white">
            <PageHeader 
                title="Course Catalog"
                subtitle="Explore our comprehensive curriculum across all programs"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Academics', path: '/academics' },
                    { label: 'Courses' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    {/* Program Tabs */}
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        {Object.entries(programs).map(([key, program]) => (
                            <button
                                key={key}
                                onClick={() => setActiveProgram(key)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                    activeProgram === key
                                        ? 'bg-navy text-white shadow-md'
                                        : 'bg-white text-army-dark hover:bg-sage-light'
                                }`}
                            >
                                {key === 'bba' ? 'BBA' : key === 'mbaRegular' ? 'MBA Regular' : key === 'emba' ? 'EMBA' : 'MBA for BBA'}
                            </button>
                        ))}
                    </div>

                    {/* Active Program Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProgram}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Program Header */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                                <h2 className="text-2xl lg:text-3xl font-bold text-army-dark mb-4">
                                    {programs[activeProgram].title}
                                </h2>
                                <p className="text-cool-gray mb-6">{programs[activeProgram].description}</p>
                                
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                                            <Clock size={20} className="text-navy" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-cool-gray uppercase">Duration</p>
                                            <p className="font-semibold text-army-dark">{programs[activeProgram].duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                                            <BookOpen size={20} className="text-navy" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-cool-gray uppercase">Total Credits</p>
                                            <p className="font-semibold text-army-dark">{programs[activeProgram].credits}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Course List by Semester */}
                            <div className="space-y-4">
                                {programs[activeProgram].semesters.map((semester, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                        <button
                                            onClick={() => toggleSemester(semester.name)}
                                            className="w-full px-6 py-4 flex items-center justify-between bg-sage-light/30 hover:bg-sage-light/50 transition-colors"
                                        >
                                            <span className="font-bold text-army-dark">{semester.name}</span>
                                            {expandedSemesters[semester.name] ? (
                                                <ChevronDown size={20} className="text-sage-deep" />
                                            ) : (
                                                <ChevronRight size={20} className="text-sage-deep" />
                                            )}
                                        </button>
                                        
                                        <AnimatePresence>
                                            {expandedSemesters[semester.name] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="p-6">
                                                        <table className="w-full">
                                                            <thead>
                                                                <tr className="border-b border-gray-200">
                                                                    <th className="text-left py-3 px-4 text-sm font-bold text-army-dark">Course Code</th>
                                                                    <th className="text-left py-3 px-4 text-sm font-bold text-army-dark">Course Name</th>
                                                                    <th className="text-center py-3 px-4 text-sm font-bold text-army-dark">Credits</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {semester.courses.map((course, idx) => (
                                                                    <tr key={idx} className="border-b border-gray-100 last:border-0">
                                                                        <td className="py-3 px-4 text-sm font-medium text-navy">{course.code}</td>
                                                                        <td className="py-3 px-4 text-sm text-cool-gray">{course.name}</td>
                                                                        <td className="py-3 px-4 text-sm text-center text-army-dark font-medium">{course.credits}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default Courses;
