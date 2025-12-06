import { useState } from 'react';
import { 
    User, BookOpen, Calendar, FileText, CreditCard, Library, 
    Bell, LogOut, ChevronRight, Download, Clock,
    AlertCircle, TrendingUp, Award
} from 'lucide-react';

const StudentPortal = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({ studentId: '', password: '' });

    // Demo student data
    const studentData = {
        name: 'Rafiq Ahmed Khan',
        studentId: 'BBA-2022-045',
        program: 'Bachelor of Business Administration',
        semester: '6th Semester',
        batch: 'Fall 2022',
        cgpa: 3.67,
        creditsCompleted: 96,
        totalCredits: 132,
        email: 'rafiq.ahmed@student.aibasavar.edu.bd',
        phone: '+880 1712-345678',
    };

    const currentCourses = [
        { code: 'MGT-401', name: 'Strategic Management', credits: 3, instructor: 'Dr. Kamal Hossain', schedule: 'Sun, Tue 10:00 AM' },
        { code: 'FIN-402', name: 'Investment Analysis', credits: 3, instructor: 'Prof. Nasreen Akter', schedule: 'Mon, Wed 11:30 AM' },
        { code: 'MKT-403', name: 'Digital Marketing', credits: 3, instructor: 'Dr. Zahir Rahman', schedule: 'Sun, Tue 2:00 PM' },
        { code: 'HRM-404', name: 'Organizational Behavior', credits: 3, instructor: 'Dr. Fatema Begum', schedule: 'Mon, Wed 3:30 PM' },
    ];

    const results = [
        { semester: '5th Semester', gpa: 3.72, credits: 15, courses: [
            { code: 'ACC-301', name: 'Cost Accounting', grade: 'A-', credits: 3 },
            { code: 'FIN-302', name: 'Corporate Finance', grade: 'A', credits: 3 },
            { code: 'MKT-303', name: 'Consumer Behavior', grade: 'B+', credits: 3 },
            { code: 'MGT-304', name: 'Operations Management', grade: 'A-', credits: 3 },
            { code: 'ECO-305', name: 'Managerial Economics', grade: 'A', credits: 3 },
        ]},
        { semester: '4th Semester', gpa: 3.65, credits: 15, courses: [
            { code: 'ACC-201', name: 'Financial Accounting', grade: 'A-', credits: 3 },
            { code: 'FIN-202', name: 'Financial Management', grade: 'B+', credits: 3 },
            { code: 'MKT-203', name: 'Marketing Management', grade: 'A', credits: 3 },
            { code: 'MGT-204', name: 'Business Communication', grade: 'A-', credits: 3 },
            { code: 'LAW-205', name: 'Business Law', grade: 'A', credits: 3 },
        ]},
    ];

    const attendance = [
        { course: 'Strategic Management', present: 12, total: 14, percentage: 86 },
        { course: 'Investment Analysis', present: 13, total: 14, percentage: 93 },
        { course: 'Digital Marketing', present: 11, total: 13, percentage: 85 },
        { course: 'Organizational Behavior', present: 14, total: 14, percentage: 100 },
    ];

    const feeStatus = {
        currentDue: 45000,
        paymentHistory: [
            { id: 'TXN-2024-0915', amount: 45000, date: '2024-09-15', method: 'bKash', status: 'Completed' },
            { id: 'TXN-2024-0315', amount: 45000, date: '2024-03-15', method: 'Bank Transfer', status: 'Completed' },
            { id: 'TXN-2023-0912', amount: 42000, date: '2023-09-12', method: 'bKash', status: 'Completed' },
        ]
    };

    const notices = [
        { title: 'Mid-term Exam Schedule Released', date: '2024-12-05', priority: 'high' },
        { title: 'Library Hours Extended During Exams', date: '2024-12-03', priority: 'medium' },
        { title: 'Course Registration for Spring 2025', date: '2024-12-01', priority: 'high' },
        { title: 'Holiday Notice: Victory Day', date: '2024-11-28', priority: 'low' },
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.studentId && credentials.password) {
            setIsLoggedIn(true);
        }
    };

    const sidebarItems = [
        { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
        { id: 'courses', name: 'My Courses', icon: BookOpen },
        { id: 'results', name: 'Results', icon: Award },
        { id: 'attendance', name: 'Attendance', icon: Calendar },
        { id: 'fees', name: 'Fees & Payments', icon: CreditCard },
        { id: 'library', name: 'Library', icon: Library },
        { id: 'notices', name: 'Notices', icon: Bell },
        { id: 'profile', name: 'Profile', icon: User },
    ];

    // Login Screen
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-navy via-army-dark to-sage-deep flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-10 h-10 text-sage-deep" />
                        </div>
                        <h1 className="text-2xl font-bold text-army-dark">Student Portal</h1>
                        <p className="text-gray-500 mt-2">Army Institute of Business Administration</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                            <input
                                type="text"
                                placeholder="e.g., BBA-2022-045"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-deep focus:border-transparent"
                                value={credentials.studentId}
                                onChange={(e) => setCredentials({ ...credentials, studentId: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-deep focus:border-transparent"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-sage-deep text-white font-semibold rounded-lg hover:bg-army-dark transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>Demo:</strong> Enter any Student ID and password to explore the portal.
                        </p>
                    </div>

                    <div className="mt-4 text-center">
                        <a href="#" className="text-sm text-sage-deep hover:underline">Forgot Password?</a>
                    </div>
                </div>
            </div>
        );
    }

    // Dashboard Content
    const renderDashboard = () => (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-sage-deep to-army-dark rounded-xl p-6 text-white">
                <h2 className="text-2xl font-bold">Welcome back, {studentData.name.split(' ')[0]}!</h2>
                <p className="text-sage-light mt-1">{studentData.program} • {studentData.semester}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Current CGPA</p>
                            <p className="text-2xl font-bold text-army-dark">{studentData.cgpa}</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Credits Done</p>
                            <p className="text-2xl font-bold text-army-dark">{studentData.creditsCompleted}/{studentData.totalCredits}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Current Courses</p>
                            <p className="text-2xl font-bold text-army-dark">{currentCourses.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Due Amount</p>
                            <p className="text-2xl font-bold text-army-dark">৳{feeStatus.currentDue.toLocaleString()}</p>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5" /> Today&apos;s Classes
                    </h3>
                    <div className="space-y-3">
                        {currentCourses.slice(0, 3).map((course, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-800">{course.name}</p>
                                    <p className="text-sm text-gray-500">{course.instructor}</p>
                                </div>
                                <span className="text-sm text-sage-deep font-medium">{course.schedule.split(' ')[2]} {course.schedule.split(' ')[3]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5" /> Recent Notices
                    </h3>
                    <div className="space-y-3">
                        {notices.map((notice, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                    notice.priority === 'high' ? 'bg-red-500' : 
                                    notice.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                }`} />
                                <div>
                                    <p className="font-medium text-gray-800">{notice.title}</p>
                                    <p className="text-sm text-gray-500">{notice.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCourses = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Current Semester Courses</h2>
            <div className="grid gap-4">
                {currentCourses.map((course, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-sage-light text-sage-deep text-sm font-semibold rounded">{course.code}</span>
                                    <h3 className="text-lg font-bold text-army-dark">{course.name}</h3>
                                </div>
                                <p className="text-gray-600 mt-2">Instructor: {course.instructor}</p>
                                <p className="text-gray-500 text-sm mt-1">Schedule: {course.schedule}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">{course.credits} Credits</span>
                                <button className="px-4 py-2 bg-sage-deep text-white rounded-lg text-sm hover:bg-army-dark transition-colors">
                                    View Materials
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderResults = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-army-dark">Academic Results</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-sage-deep text-white rounded-lg text-sm hover:bg-army-dark transition-colors">
                    <Download className="w-4 h-4" /> Download Transcript
                </button>
            </div>

            <div className="bg-gradient-to-r from-soft-gold/20 to-sage-light/30 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-600">Cumulative GPA</p>
                        <p className="text-4xl font-bold text-army-dark">{studentData.cgpa}</p>
                        <p className="text-sm text-gray-500 mt-1">Out of 4.00</p>
                    </div>
                    <Award className="w-16 h-16 text-soft-gold" />
                </div>
            </div>

            {results.map((sem, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-navy text-white px-6 py-4 flex justify-between items-center">
                        <h3 className="font-bold">{sem.semester}</h3>
                        <span className="px-3 py-1 bg-white/20 rounded">GPA: {sem.gpa}</span>
                    </div>
                    <div className="p-4">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm">
                                    <th className="pb-3">Course Code</th>
                                    <th className="pb-3">Course Name</th>
                                    <th className="pb-3 text-center">Credits</th>
                                    <th className="pb-3 text-center">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sem.courses.map((course, cidx) => (
                                    <tr key={cidx} className="border-t">
                                        <td className="py-3 font-medium">{course.code}</td>
                                        <td className="py-3">{course.name}</td>
                                        <td className="py-3 text-center">{course.credits}</td>
                                        <td className="py-3 text-center">
                                            <span className={`px-2 py-1 rounded text-sm font-semibold ${
                                                course.grade.startsWith('A') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                                {course.grade}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderAttendance = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Attendance Record</h2>
            <div className="grid gap-4">
                {attendance.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-army-dark">{item.course}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                item.percentage >= 90 ? 'bg-green-100 text-green-700' :
                                item.percentage >= 75 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                            }`}>
                                {item.percentage}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                                className={`h-3 rounded-full transition-all ${
                                    item.percentage >= 90 ? 'bg-green-500' :
                                    item.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${item.percentage}%` }}
                            />
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Present: {item.present} / {item.total} classes</p>
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Minimum 75% attendance is required to sit for exams.
                </p>
            </div>
        </div>
    );

    const renderFees = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Fees & Payments</h2>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
                <p className="text-orange-100">Current Semester Due</p>
                <p className="text-4xl font-bold mt-2">৳{feeStatus.currentDue.toLocaleString()}</p>
                <button className="mt-4 px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                    Pay Now
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-army-dark mb-4">Payment Methods</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['bKash', 'Nagad', 'Rocket', 'Bank Transfer'].map((method) => (
                        <button key={method} className="p-4 border-2 border-gray-200 rounded-lg hover:border-sage-deep transition-colors text-center">
                            <p className="font-semibold text-gray-700">{method}</p>
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b">
                    <h3 className="font-bold text-army-dark">Payment History</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-gray-500 text-sm">
                                <th className="px-6 py-3">Transaction ID</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Amount</th>
                                <th className="px-6 py-3">Method</th>
                                <th className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeStatus.paymentHistory.map((payment, idx) => (
                                <tr key={idx} className="border-t">
                                    <td className="px-6 py-4 font-mono text-sm">{payment.id}</td>
                                    <td className="px-6 py-4">{payment.date}</td>
                                    <td className="px-6 py-4 font-semibold">৳{payment.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4">{payment.method}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderLibrary = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Library Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4">Borrowed Books</h3>
                    <div className="space-y-3">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="font-semibold">Principles of Management</p>
                            <p className="text-sm text-gray-500">Due: Dec 20, 2024</p>
                            <span className="text-xs text-green-600">On Time</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="font-semibold">Financial Management</p>
                            <p className="text-sm text-gray-500">Due: Dec 15, 2024</p>
                            <span className="text-xs text-orange-600">Due Soon</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        {['Search Catalog', 'E-Resources', 'Request Book'].map((action) => (
                            <button key={action} className="w-full p-4 text-left bg-sage-light/30 rounded-lg hover:bg-sage-light/50 transition-colors flex items-center justify-between">
                                <span>{action}</span>
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderProfile = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">My Profile</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 bg-sage-light rounded-full flex items-center justify-center">
                        <User className="w-16 h-16 text-sage-deep" />
                    </div>
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                        {[
                            { label: 'Full Name', value: studentData.name },
                            { label: 'Student ID', value: studentData.studentId },
                            { label: 'Program', value: studentData.program },
                            { label: 'Batch', value: studentData.batch },
                            { label: 'Email', value: studentData.email },
                            { label: 'Phone', value: studentData.phone },
                        ].map((item, idx) => (
                            <div key={idx}>
                                <p className="text-sm text-gray-500">{item.label}</p>
                                <p className="font-semibold text-gray-800">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderNotices = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Notice Board</h2>
            <div className="space-y-4">
                {notices.map((notice, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className={`w-3 h-3 rounded-full mt-2 ${
                                notice.priority === 'high' ? 'bg-red-500' : 
                                notice.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                            }`} />
                            <div className="flex-1">
                                <h3 className="font-bold text-army-dark">{notice.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{notice.date}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return renderDashboard();
            case 'courses': return renderCourses();
            case 'results': return renderResults();
            case 'attendance': return renderAttendance();
            case 'fees': return renderFees();
            case 'library': return renderLibrary();
            case 'profile': return renderProfile();
            case 'notices': return renderNotices();
            default: return renderDashboard();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-navy text-white px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-xl font-bold">AIBA Student Portal</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm hidden md:block">{studentData.name}</span>
                        <button 
                            onClick={() => setIsLoggedIn(false)}
                            className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden md:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <aside className="lg:w-64 shrink-0">
                        <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
                            <nav className="space-y-1">
                                {sidebarItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                                activeTab === item.id
                                                    ? 'bg-sage-deep text-white'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            {item.name}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>
                    <main className="flex-1">{renderContent()}</main>
                </div>
            </div>
        </div>
    );
};

export default StudentPortal;
