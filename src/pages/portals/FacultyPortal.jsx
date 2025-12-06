import { useState } from 'react';
import { 
    User, BookOpen, Users, FileText, Calendar, ClipboardCheck,
    Bell, LogOut, ChevronRight, Upload, Check, X, Edit, Save
} from 'lucide-react';

const FacultyPortal = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({ facultyId: '', password: '' });
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [attendanceData, setAttendanceData] = useState({});
    const [gradesData, setGradesData] = useState({});

    const facultyData = {
        name: 'Dr. Kamal Hossain',
        facultyId: 'FAC-2018-012',
        designation: 'Associate Professor',
        department: 'Management Studies',
        email: 'kamal.hossain@aibasavar.edu.bd',
        phone: '+880 1812-345678',
        office: 'Room 305, Academic Building',
    };

    const myCourses = [
        { code: 'MGT-401', name: 'Strategic Management', section: 'A', students: 35, schedule: 'Sun, Tue 10:00 AM', room: 'Room 201' },
        { code: 'MGT-301', name: 'Principles of Management', section: 'B', students: 42, schedule: 'Mon, Wed 11:30 AM', room: 'Room 203' },
        { code: 'MGT-501', name: 'Corporate Strategy (MBA)', section: 'A', students: 28, schedule: 'Fri 6:00 PM', room: 'Room 401' },
    ];

    const studentsInCourse = [
        { id: 'BBA-2022-045', name: 'Rafiq Ahmed Khan', email: 'rafiq.ahmed@student.aibasavar.edu.bd' },
        { id: 'BBA-2022-046', name: 'Fatema Akter', email: 'fatema.akter@student.aibasavar.edu.bd' },
        { id: 'BBA-2022-047', name: 'Mohammad Hasan', email: 'mohammad.hasan@student.aibasavar.edu.bd' },
        { id: 'BBA-2022-048', name: 'Nusrat Jahan', email: 'nusrat.jahan@student.aibasavar.edu.bd' },
        { id: 'BBA-2022-049', name: 'Arif Rahman', email: 'arif.rahman@student.aibasavar.edu.bd' },
        { id: 'BBA-2022-050', name: 'Sabrina Islam', email: 'sabrina.islam@student.aibasavar.edu.bd' },
    ];

    const todaySchedule = [
        { time: '10:00 AM', course: 'Strategic Management', room: 'Room 201', type: 'Lecture' },
        { time: '2:00 PM', course: 'Department Meeting', room: 'Conference Room', type: 'Meeting' },
        { time: '4:00 PM', course: 'Student Consultation', room: 'Room 305', type: 'Office Hours' },
    ];

    const pendingTasks = [
        { task: 'Submit Mid-term Grades - MGT-401', due: 'Dec 15, 2024', priority: 'high' },
        { task: 'Upload Course Materials - Week 12', due: 'Dec 10, 2024', priority: 'medium' },
        { task: 'Review Student Presentations', due: 'Dec 12, 2024', priority: 'medium' },
        { task: 'Prepare Final Exam Questions', due: 'Dec 20, 2024', priority: 'low' },
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.facultyId && credentials.password) {
            setIsLoggedIn(true);
        }
    };

    const handleAttendanceChange = (studentId, status) => {
        setAttendanceData(prev => ({ ...prev, [studentId]: status }));
    };

    const handleGradeChange = (studentId, field, value) => {
        setGradesData(prev => ({
            ...prev,
            [studentId]: { ...prev[studentId], [field]: value }
        }));
    };

    const sidebarItems = [
        { id: 'dashboard', name: 'Dashboard', icon: User },
        { id: 'courses', name: 'My Courses', icon: BookOpen },
        { id: 'attendance', name: 'Attendance', icon: ClipboardCheck },
        { id: 'grades', name: 'Grade Submission', icon: FileText },
        { id: 'materials', name: 'Course Materials', icon: Upload },
        { id: 'students', name: 'Student List', icon: Users },
        { id: 'schedule', name: 'Schedule', icon: Calendar },
        { id: 'notices', name: 'Notices', icon: Bell },
    ];

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-army-dark via-navy to-sage-deep flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-10 h-10 text-navy" />
                        </div>
                        <h1 className="text-2xl font-bold text-army-dark">Faculty Portal</h1>
                        <p className="text-gray-500 mt-2">Army Institute of Business Administration</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Faculty ID</label>
                            <input
                                type="text"
                                placeholder="e.g., FAC-2018-012"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                                value={credentials.facultyId}
                                onChange={(e) => setCredentials({ ...credentials, facultyId: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-navy text-white font-semibold rounded-lg hover:bg-army-dark transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>Demo:</strong> Enter any Faculty ID and password to explore the portal.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const renderDashboard = () => (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-navy to-army-dark rounded-xl p-6 text-white">
                <h2 className="text-2xl font-bold">Welcome, {facultyData.name}!</h2>
                <p className="text-gray-300 mt-1">{facultyData.designation} • {facultyData.department}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-md">
                    <p className="text-gray-500 text-sm">Active Courses</p>
                    <p className="text-3xl font-bold text-army-dark">{myCourses.length}</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                    <p className="text-gray-500 text-sm">Total Students</p>
                    <p className="text-3xl font-bold text-army-dark">{myCourses.reduce((acc, c) => acc + c.students, 0)}</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                    <p className="text-gray-500 text-sm">Pending Tasks</p>
                    <p className="text-3xl font-bold text-orange-500">{pendingTasks.length}</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5" /> Today&apos;s Schedule
                    </h3>
                    <div className="space-y-3">
                        {todaySchedule.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm font-semibold text-navy w-20">{item.time}</span>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">{item.course}</p>
                                    <p className="text-sm text-gray-500">{item.room}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded ${
                                    item.type === 'Lecture' ? 'bg-blue-100 text-blue-700' :
                                    item.type === 'Meeting' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                                }`}>
                                    {item.type}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-army-dark mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5" /> Pending Tasks
                    </h3>
                    <div className="space-y-3">
                        {pendingTasks.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                    item.priority === 'high' ? 'bg-red-500' :
                                    item.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                }`} />
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">{item.task}</p>
                                    <p className="text-sm text-gray-500">Due: {item.due}</p>
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
            <h2 className="text-xl font-bold text-army-dark">My Courses</h2>
            <div className="grid gap-4">
                {myCourses.map((course, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-navy/10 text-navy text-sm font-semibold rounded">{course.code}</span>
                                    <h3 className="text-lg font-bold text-army-dark">{course.name}</h3>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                                    <span>Section: {course.section}</span>
                                    <span>Students: {course.students}</span>
                                    <span>{course.schedule}</span>
                                    <span>{course.room}</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => { setSelectedCourse(course); setActiveTab('attendance'); }}
                                    className="px-4 py-2 bg-sage-deep text-white rounded-lg text-sm hover:bg-army-dark transition-colors"
                                >
                                    Attendance
                                </button>
                                <button 
                                    onClick={() => { setSelectedCourse(course); setActiveTab('grades'); }}
                                    className="px-4 py-2 bg-navy text-white rounded-lg text-sm hover:bg-army-dark transition-colors"
                                >
                                    Grades
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderAttendance = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-army-dark">Mark Attendance</h2>
                <select 
                    className="px-4 py-2 border rounded-lg"
                    value={selectedCourse?.code || ''}
                    onChange={(e) => setSelectedCourse(myCourses.find(c => c.code === e.target.value))}
                >
                    <option value="">Select Course</option>
                    {myCourses.map(c => (
                        <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                    ))}
                </select>
            </div>

            {selectedCourse && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-navy text-white px-6 py-4">
                        <h3 className="font-bold">{selectedCourse.code} - {selectedCourse.name}</h3>
                        <p className="text-sm text-gray-300">Date: {new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="p-4">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm border-b">
                                    <th className="pb-3 px-2">Student ID</th>
                                    <th className="pb-3 px-2">Name</th>
                                    <th className="pb-3 px-2 text-center">Present</th>
                                    <th className="pb-3 px-2 text-center">Absent</th>
                                    <th className="pb-3 px-2 text-center">Late</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentsInCourse.map((student) => (
                                    <tr key={student.id} className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-2 font-mono text-sm">{student.id}</td>
                                        <td className="py-3 px-2">{student.name}</td>
                                        <td className="py-3 px-2 text-center">
                                            <button 
                                                onClick={() => handleAttendanceChange(student.id, 'present')}
                                                className={`w-8 h-8 rounded-full ${
                                                    attendanceData[student.id] === 'present' 
                                                        ? 'bg-green-500 text-white' 
                                                        : 'bg-gray-200 hover:bg-green-200'
                                                }`}
                                            >
                                                <Check className="w-4 h-4 mx-auto" />
                                            </button>
                                        </td>
                                        <td className="py-3 px-2 text-center">
                                            <button 
                                                onClick={() => handleAttendanceChange(student.id, 'absent')}
                                                className={`w-8 h-8 rounded-full ${
                                                    attendanceData[student.id] === 'absent' 
                                                        ? 'bg-red-500 text-white' 
                                                        : 'bg-gray-200 hover:bg-red-200'
                                                }`}
                                            >
                                                <X className="w-4 h-4 mx-auto" />
                                            </button>
                                        </td>
                                        <td className="py-3 px-2 text-center">
                                            <button 
                                                onClick={() => handleAttendanceChange(student.id, 'late')}
                                                className={`w-8 h-8 rounded-full ${
                                                    attendanceData[student.id] === 'late' 
                                                        ? 'bg-yellow-500 text-white' 
                                                        : 'bg-gray-200 hover:bg-yellow-200'
                                                }`}
                                            >
                                                L
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4 flex justify-end">
                            <button className="px-6 py-2 bg-sage-deep text-white rounded-lg hover:bg-army-dark transition-colors flex items-center gap-2">
                                <Save className="w-4 h-4" /> Save Attendance
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderGrades = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-army-dark">Grade Submission</h2>
                <select 
                    className="px-4 py-2 border rounded-lg"
                    value={selectedCourse?.code || ''}
                    onChange={(e) => setSelectedCourse(myCourses.find(c => c.code === e.target.value))}
                >
                    <option value="">Select Course</option>
                    {myCourses.map(c => (
                        <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                    ))}
                </select>
            </div>

            {selectedCourse && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-navy text-white px-6 py-4">
                        <h3 className="font-bold">{selectedCourse.code} - {selectedCourse.name}</h3>
                        <p className="text-sm text-gray-300">Mid-term Examination</p>
                    </div>
                    <div className="p-4 overflow-x-auto">
                        <table className="w-full min-w-[700px]">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm border-b">
                                    <th className="pb-3 px-2">Student ID</th>
                                    <th className="pb-3 px-2">Name</th>
                                    <th className="pb-3 px-2 text-center">Attendance (10)</th>
                                    <th className="pb-3 px-2 text-center">Assignment (20)</th>
                                    <th className="pb-3 px-2 text-center">Mid-term (30)</th>
                                    <th className="pb-3 px-2 text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentsInCourse.map((student) => {
                                    const grades = gradesData[student.id] || {};
                                    const total = (parseFloat(grades.attendance) || 0) + (parseFloat(grades.assignment) || 0) + (parseFloat(grades.midterm) || 0);
                                    return (
                                        <tr key={student.id} className="border-b hover:bg-gray-50">
                                            <td className="py-3 px-2 font-mono text-sm">{student.id}</td>
                                            <td className="py-3 px-2">{student.name}</td>
                                            <td className="py-3 px-2 text-center">
                                                <input 
                                                    type="number" 
                                                    max="10" 
                                                    min="0"
                                                    className="w-16 px-2 py-1 border rounded text-center"
                                                    value={grades.attendance || ''}
                                                    onChange={(e) => handleGradeChange(student.id, 'attendance', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3 px-2 text-center">
                                                <input 
                                                    type="number" 
                                                    max="20" 
                                                    min="0"
                                                    className="w-16 px-2 py-1 border rounded text-center"
                                                    value={grades.assignment || ''}
                                                    onChange={(e) => handleGradeChange(student.id, 'assignment', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3 px-2 text-center">
                                                <input 
                                                    type="number" 
                                                    max="30" 
                                                    min="0"
                                                    className="w-16 px-2 py-1 border rounded text-center"
                                                    value={grades.midterm || ''}
                                                    onChange={(e) => handleGradeChange(student.id, 'midterm', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3 px-2 text-center font-bold">{total || '-'}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="mt-4 flex justify-end gap-3">
                            <button className="px-6 py-2 border border-navy text-navy rounded-lg hover:bg-navy/10 transition-colors">
                                Save Draft
                            </button>
                            <button className="px-6 py-2 bg-sage-deep text-white rounded-lg hover:bg-army-dark transition-colors flex items-center gap-2">
                                <Upload className="w-4 h-4" /> Submit Grades
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderMaterials = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Course Materials</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-sage-deep transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Drop files here or click to upload</p>
                    <p className="text-sm text-gray-400 mt-2">Supports: PDF, PPT, DOC, XLS (Max 50MB)</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold text-army-dark mb-4">Recent Uploads</h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Week 11 - Strategic Analysis.pdf', date: 'Dec 3, 2024', size: '2.4 MB' },
                            { name: 'Case Study - Apple Inc.pptx', date: 'Nov 28, 2024', size: '5.1 MB' },
                            { name: 'Assignment Guidelines.docx', date: 'Nov 25, 2024', size: '156 KB' },
                        ].map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <FileText className="w-8 h-8 text-sage-deep" />
                                    <div>
                                        <p className="font-medium text-gray-800">{file.name}</p>
                                        <p className="text-sm text-gray-500">{file.date} • {file.size}</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-red-500">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStudents = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-army-dark">Student List</h2>
                <select className="px-4 py-2 border rounded-lg">
                    <option>All Courses</option>
                    {myCourses.map(c => (
                        <option key={c.code}>{c.code} - {c.name}</option>
                    ))}
                </select>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-gray-500 text-sm">
                            <th className="px-6 py-3">Student ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsInCourse.map((student, idx) => (
                            <tr key={idx} className="border-t hover:bg-gray-50">
                                <td className="px-6 py-4 font-mono text-sm">{student.id}</td>
                                <td className="px-6 py-4 font-medium">{student.name}</td>
                                <td className="px-6 py-4 text-gray-600">{student.email}</td>
                                <td className="px-6 py-4">
                                    <button className="text-sage-deep hover:text-army-dark">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderSchedule = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Weekly Schedule</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="grid grid-cols-6 gap-2 text-sm">
                    <div className="font-semibold text-gray-500">Time</div>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].map(day => (
                        <div key={day} className="font-semibold text-center text-army-dark">{day}</div>
                    ))}
                    
                    {['9:00 AM', '10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM'].map(time => (
                        <>
                            <div key={time} className="py-4 text-gray-500">{time}</div>
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].map(day => {
                                const hasClass = (time === '10:00 AM' && (day === 'Sun' || day === 'Tue')) ||
                                               (time === '11:30 AM' && (day === 'Mon' || day === 'Wed'));
                                return (
                                    <div key={`${day}-${time}`} className={`py-4 text-center rounded ${
                                        hasClass ? 'bg-sage-light/50 text-sage-deep font-medium' : ''
                                    }`}>
                                        {hasClass && (time === '10:00 AM' ? 'MGT-401' : 'MGT-301')}
                                    </div>
                                );
                            })}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderNotices = () => (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-army-dark">Notices & Announcements</h2>
            <div className="space-y-4">
                {[
                    { title: 'Final Exam Schedule Released', date: 'Dec 5, 2024', content: 'The final examination schedule has been published...' },
                    { title: 'Faculty Meeting - December', date: 'Dec 3, 2024', content: 'Monthly faculty meeting scheduled for December 10th...' },
                    { title: 'Grade Submission Deadline', date: 'Dec 1, 2024', content: 'All mid-term grades must be submitted by December 15th...' },
                ].map((notice, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h3 className="font-bold text-army-dark">{notice.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{notice.date}</p>
                        <p className="text-gray-600 mt-3">{notice.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return renderDashboard();
            case 'courses': return renderCourses();
            case 'attendance': return renderAttendance();
            case 'grades': return renderGrades();
            case 'materials': return renderMaterials();
            case 'students': return renderStudents();
            case 'schedule': return renderSchedule();
            case 'notices': return renderNotices();
            default: return renderDashboard();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-army-dark text-white px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-xl font-bold">AIBA Faculty Portal</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm hidden md:block">{facultyData.name}</span>
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
                                                    ? 'bg-navy text-white'
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

export default FacultyPortal;
