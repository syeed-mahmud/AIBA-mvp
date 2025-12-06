import { useState } from 'react';
import { 
    User, FileText, CreditCard, Ticket, MapPin, ClipboardList,
    CheckCircle, Clock, Download, Upload, ChevronRight, AlertCircle,
    Calendar, Building, Phone, Mail, ArrowLeft, Printer
} from 'lucide-react';

const AdmissionPortal = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [applicationData, setApplicationData] = useState({
        program: '',
        personalInfo: {},
        education: {},
        documents: [],
    });
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [applicationId, setApplicationId] = useState(null);
    const [applyStep, setApplyStep] = useState(1);

    // Demo data
    const demoApplication = {
        id: 'AIBA-2025-FA-00234',
        name: 'Mohammad Rifat Hossain',
        program: 'BBA',
        status: 'Payment Complete',
        submittedDate: '2024-12-05',
        examDate: '2024-12-28',
        examTime: '10:00 AM',
        examVenue: 'AIBA Main Campus, Building A',
        seatNumber: 'A-156',
        rollNumber: 'BBA-2025-FA-156',
        photo: null,
    };

    const seatPlan = {
        venue: 'AIBA Main Campus',
        building: 'Academic Building A',
        floor: '2nd Floor',
        room: 'Room 201',
        seat: 'Row 3, Seat 12',
        examDate: 'December 28, 2024',
        reportingTime: '9:30 AM',
        examTime: '10:00 AM - 12:00 PM',
    };

    const admissionResults = [
        { roll: 'BBA-2025-FA-156', name: 'Mohammad Rifat Hossain', merit: 45, status: 'Selected', remarks: 'Merit Scholarship' },
        { roll: 'BBA-2025-FA-157', name: 'Nusrat Jahan Mim', merit: 52, status: 'Selected', remarks: '-' },
        { roll: 'BBA-2025-FA-158', name: 'Tanvir Ahmed', merit: 68, status: 'Selected', remarks: '-' },
        { roll: 'BBA-2025-FA-159', name: 'Farhana Akter', merit: 89, status: 'Waiting List', remarks: 'Position: 3' },
        { roll: 'BBA-2025-FA-160', name: 'Rakib Hasan', merit: 95, status: 'Waiting List', remarks: 'Position: 9' },
    ];

    const handleStartApplication = () => {
        setApplicationId('AIBA-2025-FA-00234');
        setActiveSection('apply');
    };

    const handlePayment = () => {
        // Simulate payment processing
        setPaymentStatus('processing');
        setTimeout(() => {
            setPaymentStatus('success');
        }, 2000);
    };

    // Home Section
    const renderHome = () => (
        <div className="min-h-screen bg-gradient-to-br from-soft-gold/20 via-white to-sage-light/20">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-army-dark mb-4">AIBA Admission Portal</h1>
                    <p className="text-gray-600 text-lg">Your gateway to Army Institute of Business Administration</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {[
                        { title: 'Apply Online', desc: 'Start your admission application', icon: FileText, action: () => handleStartApplication(), color: 'sage' },
                        { title: 'Payment Gateway', desc: 'Pay application & admission fees', icon: CreditCard, action: () => setActiveSection('payment'), color: 'blue' },
                        { title: 'Download Admit Card', desc: 'Get your exam admit card', icon: Ticket, action: () => setActiveSection('admit-card'), color: 'purple' },
                        { title: 'Seat Plan', desc: 'View exam seating arrangement', icon: MapPin, action: () => setActiveSection('seat-plan'), color: 'orange' },
                        { title: 'Check Results', desc: 'View admission test results', icon: ClipboardList, action: () => setActiveSection('results'), color: 'green' },
                        { title: 'Track Application', desc: 'Check application status', icon: Clock, action: () => setActiveSection('track'), color: 'gray' },
                    ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={idx}
                                onClick={item.action}
                                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                    <Icon className={`w-7 h-7 text-${item.color}-600`} />
                                </div>
                                <h3 className="text-lg font-bold text-army-dark mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                <ChevronRight className="w-5 h-5 text-gray-400 mt-3" />
                            </button>
                        );
                    })}
                </div>

                {/* Quick Status Check */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-army-dark mb-4">Quick Status Check</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Enter Application ID (e.g., AIBA-2025-FA-00234)"
                            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sage-deep"
                        />
                        <button className="px-6 py-3 bg-sage-deep text-white font-semibold rounded-lg hover:bg-army-dark transition-colors">
                            Check Status
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Apply Section - Multi-step form
    const renderApply = () => {
        const step = applyStep;
        const setStep = setApplyStep;
        const totalSteps = 5;

        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <button 
                        onClick={() => setActiveSection('home')}
                        className="flex items-center gap-2 text-gray-600 hover:text-army-dark mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </button>

                    {/* Progress Bar */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                            {['Program', 'Personal', 'Education', 'Documents', 'Review'].map((label, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                                        step > idx + 1 ? 'bg-green-500 text-white' :
                                        step === idx + 1 ? 'bg-sage-deep text-white' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                        {step > idx + 1 ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                                    </div>
                                    <span className="text-xs mt-1 text-gray-500">{label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-sage-deep h-2 rounded-full transition-all"
                                style={{ width: `${(step / totalSteps) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        {step === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold text-army-dark mb-6">Select Program</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { id: 'bba', name: 'Bachelor of Business Administration (BBA)', duration: '4 Years', seats: 120 },
                                        { id: 'mba', name: 'Master of Business Administration (MBA)', duration: '2 Years', seats: 60 },
                                        { id: 'emba', name: 'Executive MBA (EMBA)', duration: '2 Years', seats: 40 },
                                    ].map((program) => (
                                        <label
                                            key={program.id}
                                            className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                                                applicationData.program === program.id
                                                    ? 'border-sage-deep bg-sage-light/20'
                                                    : 'border-gray-200 hover:border-sage-light'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="program"
                                                value={program.id}
                                                className="sr-only"
                                                onChange={(e) => setApplicationData({ ...applicationData, program: e.target.value })}
                                            />
                                            <h3 className="font-bold text-army-dark">{program.name}</h3>
                                            <p className="text-sm text-gray-500 mt-2">Duration: {program.duration}</p>
                                            <p className="text-sm text-gray-500">Available Seats: {program.seats}</p>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-2xl font-bold text-army-dark mb-6">Personal Information</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name (English)</label>
                                        <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="As per SSC certificate" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name (Bangla)</label>
                                        <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Father&apos;s Name</label>
                                        <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mother&apos;s Name</label>
                                        <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                        <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                        <select className="w-full px-4 py-2 border rounded-lg">
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                        <input type="tel" className="w-full px-4 py-2 border rounded-lg" placeholder="+880 1XXX-XXXXXX" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input type="email" className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Present Address</label>
                                        <textarea className="w-full px-4 py-2 border rounded-lg" rows={2} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="text-2xl font-bold text-army-dark mb-6">Educational Background</h2>
                                <div className="space-y-6">
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold text-army-dark mb-4">SSC / O-Level</h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-1">Board / Exam</label>
                                                <select className="w-full px-3 py-2 border rounded-lg">
                                                    <option>Dhaka Board</option>
                                                    <option>Rajshahi Board</option>
                                                    <option>Chittagong Board</option>
                                                    <option>Edexcel (O-Level)</option>
                                                    <option>Cambridge (O-Level)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-1">Passing Year</label>
                                                <input type="number" className="w-full px-3 py-2 border rounded-lg" placeholder="2020" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-1">GPA / Grade</label>
                                                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="5.00 or A+" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold text-army-dark mb-4">HSC / A-Level</h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-1">Board / Exam</label>
                                                <select className="w-full px-3 py-2 border rounded-lg">
                                                    <option>Dhaka Board</option>
                                                    <option>Rajshahi Board</option>
                                                    <option>Chittagong Board</option>
                                                    <option>Edexcel (A-Level)</option>
                                                    <option>Cambridge (A-Level)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-1">Passing Year</label>
                                                <input type="number" className="w-full px-3 py-2 border rounded-lg" placeholder="2022" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-1">GPA / Grade</label>
                                                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="5.00 or A+" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <h2 className="text-2xl font-bold text-army-dark mb-6">Upload Documents</h2>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Passport Size Photo', required: true, format: 'JPG/PNG, Max 500KB' },
                                        { name: 'SSC/O-Level Certificate', required: true, format: 'PDF, Max 2MB' },
                                        { name: 'SSC/O-Level Mark Sheet', required: true, format: 'PDF, Max 2MB' },
                                        { name: 'HSC/A-Level Certificate', required: true, format: 'PDF, Max 2MB' },
                                        { name: 'HSC/A-Level Mark Sheet', required: true, format: 'PDF, Max 2MB' },
                                        { name: 'National ID / Birth Certificate', required: true, format: 'PDF, Max 2MB' },
                                    ].map((doc, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 border-2 border-dashed rounded-lg hover:border-sage-deep transition-colors">
                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    {doc.name}
                                                    {doc.required && <span className="text-red-500 ml-1">*</span>}
                                                </p>
                                                <p className="text-sm text-gray-500">{doc.format}</p>
                                            </div>
                                            <label className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center gap-2">
                                                <Upload className="w-4 h-4" />
                                                <span>Upload</span>
                                                <input type="file" className="hidden" />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 5 && (
                            <div>
                                <h2 className="text-2xl font-bold text-army-dark mb-6">Review & Submit</h2>
                                <div className="space-y-6">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                                            <div>
                                                <p className="font-semibold text-green-800">Application Ready</p>
                                                <p className="text-sm text-green-600">Your application is complete and ready for submission.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="font-semibold text-army-dark mb-4">Application Summary</h3>
                                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-gray-500">Application ID:</span>
                                                <span className="ml-2 font-mono font-semibold">{applicationId}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Program:</span>
                                                <span className="ml-2 font-semibold">BBA</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Application Fee:</span>
                                                <span className="ml-2 font-semibold">৳1,500</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Status:</span>
                                                <span className="ml-2 text-yellow-600 font-semibold">Pending Payment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" id="declaration" className="mt-1" />
                                        <label htmlFor="declaration" className="text-sm text-gray-600">
                                            I hereby declare that all information provided in this application is true and correct. 
                                            I understand that any false information may result in cancellation of my admission.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 pt-6 border-t">
                            <button
                                onClick={() => setStep(Math.max(1, step - 1))}
                                className={`px-6 py-2 border rounded-lg ${step === 1 ? 'invisible' : 'hover:bg-gray-50'}`}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => {
                                    if (step < totalSteps) {
                                        setStep(step + 1);
                                    } else {
                                        setActiveSection('payment');
                                    }
                                }}
                                className="px-6 py-2 bg-sage-deep text-white rounded-lg hover:bg-army-dark transition-colors"
                            >
                                {step === totalSteps ? 'Proceed to Payment' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Payment Section
    const renderPayment = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-2xl mx-auto px-4">
                <button 
                    onClick={() => setActiveSection('home')}
                    className="flex items-center gap-2 text-gray-600 hover:text-army-dark mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-navy text-white px-6 py-4">
                        <h2 className="text-xl font-bold">Payment Gateway</h2>
                        <p className="text-gray-300 text-sm">Secure payment processing</p>
                    </div>

                    {paymentStatus === 'success' ? (
                        <div className="p-8 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h3>
                            <p className="text-gray-600 mb-4">Your payment has been processed successfully.</p>
                            <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
                                <p className="text-sm"><span className="text-gray-500">Transaction ID:</span> <span className="font-mono">TXN-2024120700123</span></p>
                                <p className="text-sm"><span className="text-gray-500">Amount Paid:</span> <span className="font-semibold">৳1,500</span></p>
                                <p className="text-sm"><span className="text-gray-500">Application ID:</span> <span className="font-mono">{applicationId || demoApplication.id}</span></p>
                            </div>
                            <button 
                                onClick={() => setActiveSection('admit-card')}
                                className="px-6 py-3 bg-sage-deep text-white rounded-lg hover:bg-army-dark transition-colors"
                            >
                                Download Admit Card
                            </button>
                        </div>
                    ) : paymentStatus === 'processing' ? (
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 border-4 border-sage-deep border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Processing Payment...</h3>
                            <p className="text-gray-500">Please wait while we verify your payment.</p>
                        </div>
                    ) : (
                        <div className="p-6">
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <h3 className="font-semibold text-army-dark mb-2">Payment Details</h3>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Application Fee</span>
                                    <span className="font-semibold">৳1,500</span>
                                </div>
                            </div>

                            <h3 className="font-semibold text-army-dark mb-4">Select Payment Method</h3>
                            <div className="space-y-3">
                                {[
                                    { name: 'bKash', logo: '🟠', desc: 'Pay via bKash mobile wallet' },
                                    { name: 'Nagad', logo: '🔴', desc: 'Pay via Nagad mobile wallet' },
                                    { name: 'Rocket', logo: '🟣', desc: 'Pay via Rocket mobile wallet' },
                                    { name: 'Credit/Debit Card', logo: '💳', desc: 'Visa, Mastercard, AMEX' },
                                    { name: 'Bank Transfer', logo: '🏦', desc: 'Direct bank transfer' },
                                ].map((method) => (
                                    <button
                                        key={method.name}
                                        onClick={() => handlePayment(method.name)}
                                        className="w-full p-4 border-2 rounded-lg hover:border-sage-deep transition-colors flex items-center gap-4 text-left"
                                    >
                                        <span className="text-2xl">{method.logo}</span>
                                        <div>
                                            <p className="font-semibold text-gray-800">{method.name}</p>
                                            <p className="text-sm text-gray-500">{method.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    // Admit Card Section
    const renderAdmitCard = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-3xl mx-auto px-4">
                <button 
                    onClick={() => setActiveSection('home')}
                    className="flex items-center gap-2 text-gray-600 hover:text-army-dark mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden" id="admit-card">
                    {/* Header */}
                    <div className="bg-navy text-white px-8 py-6 text-center">
                        <h1 className="text-2xl font-bold">ARMY INSTITUTE OF BUSINESS ADMINISTRATION</h1>
                        <p className="text-gray-300">Savar Cantonment, Savar</p>
                        <h2 className="text-xl mt-4 font-semibold text-soft-gold">ADMISSION TEST ADMIT CARD</h2>
                        <p className="text-sm text-gray-300">Fall Semester 2025</p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="flex gap-8">
                            {/* Photo */}
                            <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300">
                                <User className="w-16 h-16 text-gray-400" />
                            </div>

                            {/* Details */}
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Roll Number</p>
                                    <p className="font-bold text-lg">{demoApplication.rollNumber}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Application ID</p>
                                    <p className="font-mono font-semibold">{demoApplication.id}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-sm text-gray-500">Candidate Name</p>
                                    <p className="font-bold text-xl">{demoApplication.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Program Applied</p>
                                    <p className="font-semibold">{demoApplication.program}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Seat Number</p>
                                    <p className="font-semibold">{demoApplication.seatNumber}</p>
                                </div>
                            </div>
                        </div>

                        {/* Exam Details */}
                        <div className="mt-8 p-4 bg-soft-gold/20 rounded-lg">
                            <h3 className="font-bold text-army-dark mb-3 flex items-center gap-2">
                                <Calendar className="w-5 h-5" /> Examination Schedule
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-500">Date</p>
                                    <p className="font-semibold">{demoApplication.examDate}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Time</p>
                                    <p className="font-semibold">{demoApplication.examTime}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Venue</p>
                                    <p className="font-semibold">{demoApplication.examVenue}</p>
                                </div>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="mt-6 p-4 bg-red-50 rounded-lg">
                            <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" /> Important Instructions
                            </h3>
                            <ul className="text-sm text-red-600 space-y-1 list-disc list-inside">
                                <li>Report to the exam center at least 30 minutes before exam time</li>
                                <li>Bring this admit card and a valid photo ID</li>
                                <li>Mobile phones and electronic devices are not allowed</li>
                                <li>Carry blue/black ballpoint pen only</li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-4 border-t flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                            <p>Generated: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Controller of Examinations</p>
                            <p className="font-semibold">AIBA, Savar</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <button className="px-6 py-3 bg-sage-deep text-white rounded-lg hover:bg-army-dark transition-colors flex items-center gap-2">
                        <Download className="w-5 h-5" /> Download PDF
                    </button>
                    <button className="px-6 py-3 border-2 border-navy text-navy rounded-lg hover:bg-navy/10 transition-colors flex items-center gap-2">
                        <Printer className="w-5 h-5" /> Print
                    </button>
                </div>
            </div>
        </div>
    );

    // Seat Plan Section
    const renderSeatPlan = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <button 
                    onClick={() => setActiveSection('home')}
                    className="flex items-center gap-2 text-gray-600 hover:text-army-dark mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-navy text-white px-6 py-4">
                        <h2 className="text-xl font-bold">Exam Seat Plan</h2>
                        <p className="text-gray-300 text-sm">Admission Test - Fall 2025</p>
                    </div>

                    <div className="p-6">
                        {/* Search */}
                        <div className="mb-6 flex gap-4">
                            <input
                                type="text"
                                placeholder="Enter Roll Number or Application ID"
                                className="flex-1 px-4 py-3 border rounded-lg"
                                defaultValue={demoApplication.rollNumber}
                            />
                            <button className="px-6 py-3 bg-sage-deep text-white rounded-lg hover:bg-army-dark transition-colors">
                                Search
                            </button>
                        </div>

                        {/* Seat Info */}
                        <div className="bg-gradient-to-r from-sage-light/30 to-soft-gold/20 rounded-xl p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center">
                                    <MapPin className="w-10 h-10 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-army-dark mb-4">Your Seat Information</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3">
                                            <Building className="w-5 h-5 text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Venue</p>
                                                <p className="font-semibold">{seatPlan.venue}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Building className="w-5 h-5 text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Building & Floor</p>
                                                <p className="font-semibold">{seatPlan.building}, {seatPlan.floor}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Room</p>
                                                <p className="font-semibold">{seatPlan.room}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <User className="w-5 h-5 text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Seat</p>
                                                <p className="font-semibold">{seatPlan.seat}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Exam Date</p>
                                                <p className="font-semibold">{seatPlan.examDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Exam Time</p>
                                                <p className="font-semibold">{seatPlan.examTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Room Layout Visual */}
                        <div className="mt-8">
                            <h3 className="font-bold text-army-dark mb-4">Room Layout - {seatPlan.room}</h3>
                            <div className="bg-gray-100 rounded-xl p-6">
                                <div className="text-center mb-4 py-2 bg-gray-300 rounded">BOARD</div>
                                <div className="grid grid-cols-6 gap-2">
                                    {Array.from({ length: 30 }).map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-3 rounded text-center text-sm ${
                                                idx === 17 // Row 3, Seat 12 would be index 17
                                                    ? 'bg-sage-deep text-white font-bold'
                                                    : 'bg-white border'
                                            }`}
                                        >
                                            {idx === 17 ? 'YOU' : idx + 1}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-4 mt-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-sage-deep rounded" />
                                        <span>Your Seat</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-white border rounded" />
                                        <span>Other Seats</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Results Section
    const renderResults = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <button 
                    onClick={() => setActiveSection('home')}
                    className="flex items-center gap-2 text-gray-600 hover:text-army-dark mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-navy text-white px-6 py-4">
                        <h2 className="text-xl font-bold">Admission Test Results</h2>
                        <p className="text-gray-300 text-sm">Fall Semester 2025</p>
                    </div>

                    <div className="p-6">
                        {/* Search */}
                        <div className="mb-6 flex gap-4">
                            <input
                                type="text"
                                placeholder="Enter Roll Number"
                                className="flex-1 px-4 py-3 border rounded-lg"
                            />
                            <button className="px-6 py-3 bg-sage-deep text-white rounded-lg hover:bg-army-dark transition-colors">
                                Search
                            </button>
                        </div>

                        {/* Results Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr className="text-left text-gray-500 text-sm">
                                        <th className="px-4 py-3">Roll No</th>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3 text-center">Merit Position</th>
                                        <th className="px-4 py-3 text-center">Status</th>
                                        <th className="px-4 py-3">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admissionResults.map((result, idx) => (
                                        <tr key={idx} className={`border-t ${
                                            result.roll === 'BBA-2025-FA-156' ? 'bg-green-50' : ''
                                        }`}>
                                            <td className="px-4 py-3 font-mono">{result.roll}</td>
                                            <td className="px-4 py-3 font-medium">{result.name}</td>
                                            <td className="px-4 py-3 text-center font-bold">{result.merit}</td>
                                            <td className="px-4 py-3 text-center">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                    result.status === 'Selected' 
                                                        ? 'bg-green-100 text-green-700' 
                                                        : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {result.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600">{result.remarks}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Next Steps */}
                        <div className="mt-8 p-4 bg-green-50 rounded-lg">
                            <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" /> Next Steps for Selected Candidates
                            </h3>
                            <ul className="text-sm text-green-600 space-y-1 list-disc list-inside">
                                <li>Complete online enrollment within 7 days</li>
                                <li>Pay admission fee through the payment portal</li>
                                <li>Submit original documents at the admission office</li>
                                <li>Collect student ID and orientation schedule</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Track Application Section
    const renderTrack = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-2xl mx-auto px-4">
                <button 
                    onClick={() => setActiveSection('home')}
                    className="flex items-center gap-2 text-gray-600 hover:text-army-dark mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-navy text-white px-6 py-4">
                        <h2 className="text-xl font-bold">Track Application</h2>
                    </div>

                    <div className="p-6">
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Enter Application ID"
                                className="w-full px-4 py-3 border rounded-lg"
                                defaultValue={demoApplication.id}
                            />
                        </div>

                        {/* Status Timeline */}
                        <div className="relative">
                            {[
                                { step: 'Application Submitted', date: 'Dec 5, 2024', status: 'complete' },
                                { step: 'Payment Received', date: 'Dec 5, 2024', status: 'complete' },
                                { step: 'Documents Verified', date: 'Dec 6, 2024', status: 'complete' },
                                { step: 'Admit Card Generated', date: 'Dec 6, 2024', status: 'complete' },
                                { step: 'Admission Test', date: 'Dec 28, 2024', status: 'pending' },
                                { step: 'Result Declaration', date: 'Jan 5, 2025', status: 'upcoming' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 pb-6">
                                    <div className="relative">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                            item.status === 'complete' ? 'bg-green-500' :
                                            item.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-300'
                                        }`}>
                                            {item.status === 'complete' ? (
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            ) : (
                                                <Clock className="w-4 h-4 text-white" />
                                            )}
                                        </div>
                                        {idx < 5 && (
                                            <div className={`absolute left-1/2 top-8 w-0.5 h-8 -translate-x-1/2 ${
                                                item.status === 'complete' ? 'bg-green-500' : 'bg-gray-300'
                                            }`} />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{item.step}</p>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">
                                Need help? Contact us at{' '}
                                <a href="mailto:admission@aibasavar.edu.bd" className="text-sage-deep font-medium">
                                    admission@aibasavar.edu.bd
                                </a>
                                {' '}or call{' '}
                                <a href="tel:+8801XXXXXXXXX" className="text-sage-deep font-medium">
                                    +880 1XXX-XXXXXX
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Main render
    const renderSection = () => {
        switch (activeSection) {
            case 'home': return renderHome();
            case 'apply': return renderApply();
            case 'payment': return renderPayment();
            case 'admit-card': return renderAdmitCard();
            case 'seat-plan': return renderSeatPlan();
            case 'results': return renderResults();
            case 'track': return renderTrack();
            default: return renderHome();
        }
    };

    return renderSection();
};

export default AdmissionPortal;
