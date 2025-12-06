import { useState } from 'react';
import { 
    User, Users, FileText, BarChart3, Settings, Bell, LogOut,
    Search, Plus, Edit, Trash2, Eye, Download, Upload, Check, 
    AlertTriangle, TrendingUp, GraduationCap, Building
} from 'lucide-react';

const AdminPortal = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({ adminId: '', password: '' });
    const [showResultModal, setShowResultModal] = useState(false);
    const [selectedExam, setSelectedExam] = useState(null);

    const adminData = {
        name: 'Md. Shahidul Islam',
        adminId: 'ADM-2020-001',
        role: 'System Administrator',
        department: 'IT & Administration',
        email: 'admin@aibasavar.edu.bd',
    };

    const dashboardStats = [
        { label: 'Total Students', value: 1250, icon: GraduationCap, change: '+45', color: 'blue' },
        { label: 'Total Faculty', value: 48, icon: Users, change: '+3', color: 'green' },
        { label: 'Active Courses', value: 86, icon: FileText, change: '+12', color: 'purple' },
        { label: 'Departments', value: 6, icon: Building, change: '0', color: 'orange' },
    ];

    const recentActivities = [
        { action: 'New student registered', user: 'Admission Office', time: '5 mins ago', type: 'success' },
        { action: 'Grade submitted for MGT-401', user: 'Dr. Kamal Hossain', time: '1 hour ago', type: 'info' },
        { action: 'Notice posted: Exam Schedule', user: 'Academic Office', time: '2 hours ago', type: 'info' },
        { action: 'Fee payment received', user: 'Accounts', time: '3 hours ago', type: 'success' },
        { action: 'System backup completed', user: 'System', time: '6 hours ago', type: 'warning' },
    ];

    const usersList = [
        { id: 'STU-001', name: 'Rafiq Ahmed Khan', type: 'Student', status: 'Active', lastLogin: '2024-12-06' },
        { id: 'FAC-001', name: 'Dr. Kamal Hossain', type: 'Faculty', status: 'Active', lastLogin: '2024-12-06' },
        { id: 'STU-002', name: 'Fatema Akter', type: 'Student', status: 'Active', lastLogin: '2024-12-05' },
        { id: 'FAC-002', name: 'Prof. Nasreen Akter', type: 'Faculty', status: 'Active', lastLogin: '2024-12-06' },
        { id: 'STU-003', name: 'Mohammad Hasan', type: 'Student', status: 'Inactive', lastLogin: '2024-11-20' },
    ];

    const examsList = [
        { id: 'EXAM-2024-MID-01', name: 'Mid-term Fall 2024 - BBA', program: 'BBA', semester: '6th', status: 'Results Pending', date: '2024-11-25' },
        { id: 'EXAM-2024-MID-02', name: 'Mid-term Fall 2024 - MBA', program: 'MBA', semester: '3rd', status: 'Results Published', date: '2024-11-20' },
        { id: 'EXAM-2024-FIN-01', name: 'Final Spring 2024 - BBA', program: 'BBA', semester: '5th', status: 'Results Published', date: '2024-06-15' },
    ];

    const resultInputData = [
        { studentId: 'BBA-2022-045', name: 'Rafiq Ahmed Khan', courses: [
            { code: 'MGT-401', midterm: '', final: '', total: '' },
            { code: 'FIN-402', midterm: '', final: '', total: '' },
        ]},
        { studentId: 'BBA-2022-046', name: 'Fatema Akter', courses: [
            { code: 'MGT-401', midterm: '', final: '', total: '' },
            { code: 'FIN-402', midterm: '', final: '', total: '' },
        ]},
        { studentId: 'BBA-2022-047', name: 'Mohammad Hasan', courses: [
            { code: 'MGT-401', midterm: '', final: '', total: '' },
            { code: 'FIN-402', midterm: '', final: '', total: '' },
        ]},
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.adminId && credentials.password) {
            setIsLoggedIn(true);
        }
    };

    const sidebarItems = [
        { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
        { id: 'users', name: 'User Management', icon: Users },
        { id: 'results', name: 'Result Management', icon: FileText },
        { id: 'notices', name: 'Notice Board', icon: Bell },
        { id: 'reports', name: 'Reports', icon: TrendingUp },
        { id: 'settings', name: 'Settings', icon: Settings },
    ];

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-army-dark to-navy flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Settings className="w-10 h-10 text-red-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-army-dark">Administration Portal</h1>
                        <p className="text-gray-500 mt-2">Authorized Personnel Only</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Admin ID</label>
                            <input
                                type="text"
                                placeholder="e.g., ADM-2020-001"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                value={credentials.adminId}
                                onChange={(e) => setCredentials({ ...credentials, adminId: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-800">
                            <AlertTriangle className="w-4 h-4 inline mr-2" />
                            <strong>Demo:</strong> Enter any Admin ID and password to explore.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const renderDashboard = () => (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
                <h2 className="text-2xl font-bold">Administration Dashboard</h2>
                <p className="text-gray-400 mt-1">Welcome back, {adminData.name}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {dashboardStats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="bg-white rounded-xl p-5 shadow-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm">{stat.label}</p>
                                    <p className="text-2xl font-bold text-army-dark">{stat.value.toLocaleString()}</p>
                                    <span className={`text-xs ${stat.change.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>
                                        {stat.change} this month
                                    </span>
                                </div>
                                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4">Recent Activities</h3>
                    <div className="space-y-3">
                        {recentActivities.map((activity, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                    activity.type === 'success' ? 'bg-green-500' :
                                    activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                                }`} />
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">{activity.action}</p>
                                    <p className="text-sm text-gray-500">{activity.user} • {activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: 'Add User', icon: Plus, color: 'blue' },
                            { label: 'Post Notice', icon: Bell, color: 'green' },
                            { label: 'Generate Report', icon: Download, color: 'purple' },
                            { label: 'System Settings', icon: Settings, color: 'gray' },
                        ].map((action, idx) => {
                            const Icon = action.icon;
                            return (
                                <button key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left">
                                    <Icon className={`w-6 h-6 text-${action.color}-600 mb-2`} />
                                    <p className="font-medium text-gray-700">{action.label}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderUsers = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-army-dark">User Management</h2>
                <button className="px-4 py-2 bg-sage-deep text-white rounded-lg flex items-center gap-2 hover:bg-army-dark transition-colors">
                    <Plus className="w-4 h-4" /> Add User
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1 relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search users..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-deep"
                        />
                    </div>
                    <select className="px-4 py-2 border rounded-lg">
                        <option>All Types</option>
                        <option>Students</option>
                        <option>Faculty</option>
                        <option>Staff</option>
                    </select>
                    <select className="px-4 py-2 border rounded-lg">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-gray-500 text-sm">
                                <th className="px-4 py-3">User ID</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Last Login</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersList.map((user, idx) => (
                                <tr key={idx} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-3 font-mono text-sm">{user.id}</td>
                                    <td className="px-4 py-3 font-medium">{user.name}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs rounded ${
                                            user.type === 'Student' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                        }`}>
                                            {user.type}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs rounded ${
                                            user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-500">{user.lastLogin}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded"><Eye className="w-4 h-4" /></button>
                                            <button className="p-1 text-green-600 hover:bg-green-50 rounded"><Edit className="w-4 h-4" /></button>
                                            <button className="p-1 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderResults = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-army-dark">Result Management</h2>
                <button 
                    onClick={() => setShowResultModal(true)}
                    className="px-4 py-2 bg-sage-deep text-white rounded-lg flex items-center gap-2 hover:bg-army-dark transition-colors"
                >
                    <Plus className="w-4 h-4" /> Input Results
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b">
                    <h3 className="font-bold text-army-dark">Examination List</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-gray-500 text-sm">
                                <th className="px-6 py-3">Exam ID</th>
                                <th className="px-6 py-3">Examination</th>
                                <th className="px-6 py-3">Program</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {examsList.map((exam, idx) => (
                                <tr key={idx} className="border-t hover:bg-gray-50">
                                    <td className="px-6 py-4 font-mono text-sm">{exam.id}</td>
                                    <td className="px-6 py-4 font-medium">{exam.name}</td>
                                    <td className="px-6 py-4">{exam.program} - {exam.semester} Sem</td>
                                    <td className="px-6 py-4 text-gray-500">{exam.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded ${
                                            exam.status === 'Results Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {exam.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => { setSelectedExam(exam); setShowResultModal(true); }}
                                                className="px-3 py-1 text-sm bg-navy text-white rounded hover:bg-army-dark transition-colors"
                                            >
                                                {exam.status === 'Results Pending' ? 'Input' : 'View'}
                                            </button>
                                            {exam.status === 'Results Published' && (
                                                <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                                                    <Download className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Result Input Modal */}
            {showResultModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                        <div className="bg-navy text-white px-6 py-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Result Input System</h3>
                                <p className="text-sm text-gray-300">{selectedExam?.name || 'Mid-term Fall 2024'}</p>
                            </div>
                            <button onClick={() => setShowResultModal(false)} className="text-white hover:text-gray-300">
                                ✕
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="mb-4 flex gap-4">
                                <select className="px-4 py-2 border rounded-lg">
                                    <option>Select Course</option>
                                    <option>MGT-401 - Strategic Management</option>
                                    <option>FIN-402 - Investment Analysis</option>
                                </select>
                                <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-2">
                                    <Upload className="w-4 h-4" /> Import from Excel
                                </button>
                            </div>
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr className="text-left text-gray-500 text-sm">
                                        <th className="px-4 py-3">Student ID</th>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3 text-center">Mid-term (30)</th>
                                        <th className="px-4 py-3 text-center">Final (40)</th>
                                        <th className="px-4 py-3 text-center">Total (100)</th>
                                        <th className="px-4 py-3 text-center">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultInputData.map((student) => (
                                        <tr key={student.studentId} className="border-t">
                                            <td className="px-4 py-3 font-mono text-sm">{student.studentId}</td>
                                            <td className="px-4 py-3">{student.name}</td>
                                            <td className="px-4 py-3 text-center">
                                                <input type="number" max="30" className="w-16 px-2 py-1 border rounded text-center" />
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <input type="number" max="40" className="w-16 px-2 py-1 border rounded text-center" />
                                            </td>
                                            <td className="px-4 py-3 text-center font-bold">-</td>
                                            <td className="px-4 py-3 text-center">
                                                <select className="px-2 py-1 border rounded">
                                                    <option>-</option>
                                                    <option>A+</option>
                                                    <option>A</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B</option>
                                                    <option>B-</option>
                                                    <option>C+</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>F</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t flex justify-end gap-3">
                            <button 
                                onClick={() => setShowResultModal(false)}
                                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                                Save Draft
                            </button>
                            <button className="px-4 py-2 bg-sage-deep text-white rounded-lg hover:bg-army-dark flex items-center gap-2">
                                <Check className="w-4 h-4" /> Publish Results
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderNotices = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-army-dark">Notice Board Management</h2>
                <button className="px-4 py-2 bg-sage-deep text-white rounded-lg flex items-center gap-2 hover:bg-army-dark transition-colors">
                    <Plus className="w-4 h-4" /> Post Notice
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="space-y-4">
                    {[
                        { title: 'Final Exam Schedule - Fall 2024', category: 'Academic', date: '2024-12-05', views: 450, status: 'Published' },
                        { title: 'Winter Vacation Notice', category: 'Holiday', date: '2024-12-03', views: 320, status: 'Published' },
                        { title: 'Library Extended Hours', category: 'Facility', date: '2024-12-01', views: 180, status: 'Published' },
                        { title: 'Convocation 2025 Announcement', category: 'Event', date: '2024-11-28', views: 890, status: 'Draft' },
                    ].map((notice, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="font-semibold text-gray-800">{notice.title}</h4>
                                    <span className={`px-2 py-0.5 text-xs rounded ${
                                        notice.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                        {notice.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                    <span>{notice.category}</span>
                                    <span>{notice.date}</span>
                                    <span>{notice.views} views</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Eye className="w-4 h-4" /></button>
                                <button className="p-2 text-green-600 hover:bg-green-50 rounded"><Edit className="w-4 h-4" /></button>
                                <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderReports = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Reports & Analytics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { title: 'Student Enrollment Report', desc: 'Semester-wise enrollment statistics', icon: GraduationCap },
                    { title: 'Academic Performance', desc: 'GPA distribution and trends', icon: TrendingUp },
                    { title: 'Attendance Report', desc: 'Course-wise attendance summary', icon: Check },
                    { title: 'Fee Collection Report', desc: 'Revenue and outstanding dues', icon: FileText },
                    { title: 'Faculty Workload', desc: 'Course assignments and schedules', icon: Users },
                    { title: 'Admission Statistics', desc: 'Application and enrollment data', icon: BarChart3 },
                ].map((report, idx) => {
                    const Icon = report.icon;
                    return (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <Icon className="w-8 h-8 text-sage-deep mb-3" />
                            <h3 className="font-bold text-army-dark">{report.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{report.desc}</p>
                            <button className="mt-4 text-sm text-sage-deep font-medium flex items-center gap-1 hover:text-army-dark">
                                Generate <Download className="w-4 h-4" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">System Settings</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4">Academic Settings</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Semester</label>
                            <select className="w-full px-4 py-2 border rounded-lg">
                                <option>Fall 2024</option>
                                <option>Spring 2025</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Grading Scale</label>
                            <select className="w-full px-4 py-2 border rounded-lg">
                                <option>4.0 Scale</option>
                                <option>Letter Grade</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4">System Maintenance</h3>
                    <div className="space-y-3">
                        <button className="w-full p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <p className="font-medium">Backup Database</p>
                            <p className="text-sm text-gray-500">Last backup: 6 hours ago</p>
                        </button>
                        <button className="w-full p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <p className="font-medium">Clear Cache</p>
                            <p className="text-sm text-gray-500">Improve system performance</p>
                        </button>
                        <button className="w-full p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <p className="font-medium">System Logs</p>
                            <p className="text-sm text-gray-500">View error and activity logs</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return renderDashboard();
            case 'users': return renderUsers();
            case 'results': return renderResults();
            case 'notices': return renderNotices();
            case 'reports': return renderReports();
            case 'settings': return renderSettings();
            default: return renderDashboard();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gray-900 text-white px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-xl font-bold">AIBA Administration Portal</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm hidden md:block">{adminData.name}</span>
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
                                                    ? 'bg-gray-900 text-white'
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

export default AdminPortal;
