import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Code2,
  Cpu,
  BookOpen,
  GraduationCap,
  Award,
  School,
  Globe,
  Sun,
  Moon,
  Search,
  Download,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Binary,
  HelpCircle,
  FileText,
  Calendar,
  ShieldCheck,
  Monitor,
  Database,
  Send,
  X,
  Play,
  RotateCcw,
  Copy,
  Check,
  Command,
  UserCheck,
  Briefcase,
  Atom,
  Calculator
} from 'lucide-react';

// --- BILINGUAL CONTENT DICTIONARY ---
const CONTENT = {
  en: {
    badge: "ravimahar.in • Official Educator & Tech Portfolio",
    greeting: "Hello, I'm",
    name: "Ravi Mahar",
    hindiSubtitle: "बेसिक कंप्यूटर अनुदेशक | राजकीय उच्च माध्यमिक विद्यालय कीकरवाली 60RB",
    roles: [
      "Basic Computer Instructor",
      "M.Sc. Computer Science Post-Graduate",
      "Digital Education Innovator",
      "Science & PCM Educator"
    ],
    heroBio: "Empowering students at Government Senior Secondary School, Kikarwali 60RB with modern computing, Python programming, digital literacy, and scientific problem-solving under the Rajasthan Education Department.",
    ctaLab: "Explore Interactive CS Lab",
    ctaResources: "Student Resources",
    ctaProfile: "Download Educator Profile",
    stats: [
      { label: "Students Mentored", value: "500+", icon: UserCheck },
      { label: "Digital Lab Sessions", value: "1,200+", icon: Monitor },
      { label: "Post-Grad Qualification", value: "M.Sc. CS", icon: GraduationCap },
      { label: "School Code / Block", value: "60RB / RSNR", icon: School }
    ],
    nav: {
      home: "Home",
      about: "Journey",
      lab: "CS Lab",
      school: "School Impact",
      skills: "Skills",
      resources: "Resources",
      contact: "Contact"
    }
  },
  hi: {
    badge: "ravimahar.in • आधिकारिक शिक्षक एवं तकनीकी पोर्टफोलियो",
    greeting: "नमस्ते, मैं हूँ",
    name: "रवि माहर (Ravi Mahar)",
    hindiSubtitle: "बेसिक कंप्यूटर अनुदेशक | राजकीय उच्च माध्यमिक विद्यालय कीकरवाली 60RB (श्री गंगानगर)",
    roles: [
      "बेसिक कंप्यूटर अनुदेशक (BCI)",
      "एम.एससी. कंप्यूटर साइंस स्नातकोत्तर",
      "डिजिटल शिक्षा नवाचारक",
      "विज्ञान एवं गणित (PCM) मार्गदर्शक"
    ],
    heroBio: "राजस्थान शिक्षा विभाग के अंतर्गत राजकीय उच्च माध्यमिक विद्यालय, कीकरवाली 60RB के विद्यार्थियों को आधुनिक कंप्यूटर विज्ञान, पायथन प्रोग्रामिंग, डिजिटल साक्षरता और वैज्ञानिक दृष्टिकोण से सशक्त बनाने के लिए समर्पित।",
    ctaLab: "इंटरैक्टिव कंप्यूटर लैब देखें",
    ctaResources: "विद्यार्थी अध्ययन सामग्री",
    ctaProfile: "प्रोफ़ाइल डाउनलोड करें",
    stats: [
      { label: "लाभांवित विद्यार्थी", value: "500+", icon: UserCheck },
      { label: "डिजिटल लैब सत्र", value: "1,200+", icon: Monitor },
      { label: "उच्च शिक्षा", value: "M.Sc. CS", icon: GraduationCap },
      { label: "विद्यालय क्षेत्र", value: "60RB / रायसिंहनगर", icon: School }
    ],
    nav: {
      home: "मुख्य पृष्ठ",
      about: "शैक्षिक यात्रा",
      lab: "कंप्यूटर लैब",
      school: "विद्यालय पहल",
      skills: "कौशल",
      resources: "संसाधन",
      contact: "संपर्क"
    }
  }
};

// --- ACADEMIC & CAREER TIMELINE DATA ---
const TIMELINE_DATA = [
  {
    id: 1,
    year: "Present",
    title: "Basic Computer Instructor (बेसिक कंप्यूटर अनुदेशक)",
    institution: "Govt. Senior Secondary School, Kikarwali 60RB",
    location: "Raisinghnagar, Sri Ganganagar (Rajasthan Education Dept.)",
    description: "Leading ICT lab operations, teaching RBSE Class 9–12 Computer Science & ICT curriculum, Python programming, cyber security awareness, and managing digital governance platforms including ShalaDarpan and UDISE+.",
    tags: ["RBSE ICT Curriculum", "ICT Lab In-Charge", "ShalaDarpan", "Digital Pedagogy"],
    type: "work",
    highlight: true
  },
  {
    id: 2,
    year: "Post-Graduation",
    title: "Master of Science in Computer Science (M.Sc. CS)",
    institution: "Post-Graduate Specialization in Advanced Computing",
    location: "Rajasthan, India",
    description: "Mastered advanced computer science paradigms including Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks, Software Engineering, and Object-Oriented Programming.",
    tags: ["Algorithms", "DBMS & SQL", "Operating Systems", "Software Engineering", "Python & C++"],
    type: "education",
    highlight: false
  },
  {
    id: 3,
    year: "Graduation",
    title: "Bachelor of Science (B.Sc.) in PCM",
    institution: "Undergraduate Degree in Core Sciences",
    location: "Physics, Chemistry & Mathematics",
    description: "Built a rigorous analytical and mathematical foundation studying Classical & Modern Physics, Calculus, Linear Algebra, Differential Equations, and Physical/Organic Chemistry.",
    tags: ["Physics", "Higher Mathematics", "Chemistry", "Analytical Modelling"],
    type: "education",
    highlight: false
  },
  {
    id: 4,
    year: "Senior Secondary (12th)",
    title: "Senior Secondary Certificate (Science - Math / PCM)",
    institution: "Board of Secondary Education, Rajasthan (RBSE)",
    location: "Science Stream (Physics, Chemistry, Mathematics)",
    description: "Completed senior secondary education with a strong focus on quantitative reasoning, foundational physics, and scientific inquiry.",
    tags: ["12th PCM", "Scientific Temperament", "Mathematics"],
    type: "education",
    highlight: false
  }
];

// --- TEACHER'S DAILY DIARY & INITIATIVES DATA ---
const DIARY_LESSONS = [
  {
    id: "d1",
    classLevel: "Class 11 & 12",
    subject: "Computer Science (Python & SQL)",
    topic: "Python Control Flow, Lists, Dictionaries & MySQL Connectivity",
    objective: "Enable senior secondary students to write modular Python programs and perform CRUD operations on relational databases.",
    pedagogy: "Live Projection Coding + Hands-on Lab Exercises at GSSS Kikarwali 60RB ICT Lab",
    outcome: "Students independently built a Student Result Calculator CLI script in Python."
  },
  {
    id: "d2",
    classLevel: "Class 9 & 10",
    subject: "RBSE ICT & Computer Fundamentals",
    topic: "Number Systems, Logic Gates, Operating Systems & Office Automation",
    objective: "Build strong digital foundations covering binary arithmetic, hardware architecture, MS Word/Excel documentation, and internet protocols.",
    pedagogy: "Interactive Visual Simulators + Practical File Assignments",
    outcome: "100% students gained hands-on proficiency in spreadsheet formulas and binary conversions."
  },
  {
    id: "d3",
    classLevel: "All Classes (6–12)",
    subject: "Cyber Safety & Digital Citizenship",
    topic: "Safe Internet Practices, OTP Fraud Prevention, & National Digital Libraries",
    objective: "Spread cyber hygiene in the rural community of Kikarwali 60RB and introduce students to DIKSHA and e-Pathshala portals.",
    pedagogy: "Interactive Workshop, Case Studies & Poster Making",
    outcome: "Empowered students to act as Digital Ambassadors for their families and village."
  },
  {
    id: "d4",
    classLevel: "Science Stream",
    subject: "PCM + Computing Integration",
    topic: "Visualizing Physics & Mathematical Functions using Computers",
    objective: "Bridge B.Sc. PCM concepts (Kinematics, Optics, Trigonometry) with M.Sc. Computer Science simulations.",
    pedagogy: "Graphical Plotting & Interactive Problem Solving",
    outcome: "Enhanced conceptual clarity in both Science and Computer studies."
  }
];

// --- STUDENT RESOURCES DATA ---
const RESOURCES_DATA = [
  {
    id: "res-1",
    title: "RBSE Class 9 & 10 ICT Complete Bilingual Notes",
    category: "RBSE ICT",
    grade: "Class 9–10",
    format: "PDF / Interactive Guide",
    size: "2.4 MB",
    summary: "Comprehensive bilingual (Hindi & English) notes covering Computer Generations, Input/Output Devices, Operating Systems, MS Office, and Internet basics.",
    previewContent: [
      "1. कंप्यूटर का परिचय एवं पीढ़ियां (Generations of Computer: Vacuum Tubes to AI)",
      "2. हार्डवेयर व सॉफ्टवेयर (System Software vs Application Software)",
      "3. संख्या प्रणाली (Binary, Octal, Decimal, Hexadecimal Conversions)",
      "4. साइबर सुरक्षा एवं ई-गवर्नेंस (ShalaDarpan, SSO ID, DigiLocker, Cyber Ethics)"
    ]
  },
  {
    id: "res-2",
    title: "Python Programming Quick-Start Cheat Sheet",
    category: "Programming",
    grade: "Class 11–12 & Beginners",
    format: "Code Reference",
    size: "1.8 MB",
    summary: "Curated by Ravi Mahar (M.Sc. CS) for quick lab reference: Variables, Loops, Functions, Lists, Strings, and basic File Handling.",
    previewContent: [
      "# Python Quick Reference for GSSS Kikarwali 60RB Lab",
      "def check_even_odd(n):",
      "    return 'Even (सम)' if n % 2 == 0 else 'Odd (विषम)'",
      "",
      "students = ['Aman', 'Priya', 'Rohit', 'Simran']",
      "for idx, name in enumerate(students, 1):",
      "    print(f'{idx}. {name} - ICT Lab Verified')"
    ]
  },
  {
    id: "res-3",
    title: "ICT Lab Practical File Format & Viva Questions",
    category: "Lab Manual",
    grade: "Class 9–12",
    format: "Practical Template",
    size: "3.1 MB",
    summary: "Standardized practical file index, step-by-step MS Office / Python lab exercises, and top 50 viva-voce questions for board practicals.",
    previewContent: [
      "• Practical 1: Create a formatted school newsletter in MS Word / LibreOffice Writer.",
      "• Practical 2: Prepare a class mark-sheet in Excel using SUM, AVERAGE, IF, and Rank formulas.",
      "• Practical 3: Design a 10-slide presentation on 'Digital India & Cyber Hygiene'.",
      "• Practical 4: Write Python programs for Prime Numbers, Fibonacci Series, and Palindrome check."
    ]
  },
  {
    id: "res-4",
    title: "PCM & Computer Science Bridge Formulas",
    category: "Science & Math",
    grade: "Class 11–12 Science",
    format: "Study Sheet",
    size: "2.0 MB",
    summary: "Leveraging B.Sc. (PCM) + M.Sc. (CS) expertise: Boolean Algebra laws alongside Physics Logic Circuits and Mathematical Matrices.",
    previewContent: [
      "• De Morgan's Laws: (A + B)' = A' · B'  and  (A · B)' = A' + B'",
      "• Semiconductor Logic (Physics Class 12) ↔ Digital Logic Gates (CS)",
      "• Matrix Multiplication Algorithm Complexity: O(n³) standard vs vectorized",
      "• Projectile Motion Simulation Equations in Python"
    ]
  }
];

// --- QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    q: "Which component is known as the 'Brain of the Computer' and executes instructions?",
    qHi: "कंप्यूटर का 'मस्तिष्क' किसे कहा जाता है जो निर्देशों को निष्पादित करता है?",
    options: ["RAM (रैम)", "CPU (सीपीयू)", "Hard Disk (हार्ड डिस्क)", "Monitor (मॉनिटर)"],
    answer: 1,
    explanation: "CPU (Central Processing Unit) performs arithmetic, logic, and control operations."
  },
  {
    q: "What is the Binary equivalent of the Decimal number 13?",
    qHi: "दशमलव संख्या 13 का बाइनरी (Binary) समतुल्य क्या है?",
    options: ["1011", "1101", "1110", "1001"],
    answer: 1,
    explanation: "13 = 8 + 4 + 0 + 1 = (1×2³) + (1×2²) + (0×2¹) + (1×2⁰) = 1101₂."
  },
  {
    q: "Which logic gate outputs HIGH (1) ONLY when both inputs are HIGH (1)?",
    qHi: "कौन सा लॉजिक गेट केवल तभी 1 (HIGH) आउटपुट देता है जब दोनों इनपुट 1 हों?",
    options: ["OR Gate", "XOR Gate", "AND Gate", "NAND Gate"],
    answer: 2,
    explanation: "The AND gate follows Boolean multiplication (Y = A · B), so 1 · 1 = 1."
  },
  {
    q: "Which web portal is used by the Rajasthan Education Department for school & student management?",
    qHi: "राजस्थान शिक्षा विभाग द्वारा विद्यालय एवं विद्यार्थी प्रबंधन के लिए किस पोर्टल का उपयोग किया जाता है?",
    options: ["ShalaDarpan (शालादर्पण)", "IRCTC", "SWAYAM", "GitHub"],
    answer: 0,
    explanation: "ShalaDarpan is the official e-Governance portal for Government Schools in Rajasthan."
  },
  {
    q: "In Python, which keyword is used to define a function?",
    qHi: "पायथन (Python) प्रोग्रामिंग में फ़ंक्शन बनाने के लिए किस कीवर्ड का उपयोग होता है?",
    options: ["func", "define", "def", "function"],
    answer: 2,
    explanation: "In Python, the 'def' keyword is used to declare a function (e.g., def my_func():)."
  }
];

// --- SKILLS DATA ---
const SKILL_CATEGORIES = [
  {
    title: "Computer Science & Programming (M.Sc. CS)",
    icon: Code2,
    color: "emerald",
    skills: [
      { name: "Python Programming", level: 95 },
      { name: "C & C++ / OOPs", level: 90 },
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "DBMS & SQL Queries", level: 92 },
      { name: "Web Tech (HTML5, CSS3, JS, React)", level: 89 },
      { name: "Operating Systems & Computer Architecture", level: 93 }
    ]
  },
  {
    title: "Educational Tech & e-Governance",
    icon: School,
    color: "cyan",
    skills: [
      { name: "ICT Lab Administration & Networking", level: 98 },
      { name: "ShalaDarpan & UDISE+ Management", level: 96 },
      { name: "RBSE Computer Science Pedagogy", level: 97 },
      { name: "MS Office Suite & LibreOffice Automation", level: 96 },
      { name: "Cyber Security & Digital Literacy Training", level: 94 },
      { name: "Smart Classroom & Interactive Teaching", level: 95 }
    ]
  },
  {
    title: "Core Sciences & Quantitative (B.Sc. & 12th PCM)",
    icon: Atom,
    color: "indigo",
    skills: [
      { name: "Physics (Electronics, Optics & Mechanics)", level: 92 },
      { name: "Mathematics (Calculus, Algebra & Logic)", level: 94 },
      { name: "Chemistry & Scientific Methodology", level: 86 },
      { name: "Boolean Algebra & Digital Electronics", level: 96 }
    ]
  }
];

export default function App() {
  // Theme & Language States
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');

  // Hero Role Typewriter State
  const [roleIndex, setRoleIndex] = useState(0);

  // Command Palette (Ctrl+K) Modal State
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState('');

  // Hero Interactive Terminal State
  const [termInput, setTermInput] = useState('');
  const [termHistory, setTermHistory] = useState([
    {
      type: 'system',
      text: 'Welcome to RaviOS v2.6 (ravimahar.in) — GSSS Kikarwali 60RB Terminal'
    },
    {
      type: 'info',
      text: 'Type "help", "whoami", "education", "school", "skills", or "contact" and press Enter.'
    }
  ]);
  const terminalEndRef = useRef(null);

  // Interactive CS Lab Tab State
  const [labTab, setLabTab] = useState('converter'); // 'converter' | 'logic' | 'quiz'

  // Lab 1: Number Converter State
  const [decimalValue, setDecimalValue] = useState(60); // Default 60 for 60RB!
  const [rawInput, setRawInput] = useState('60');
  const [inputBase, setInputBase] = useState(10);

  // Lab 2: Logic Gate Simulator State
  const [selectedGate, setSelectedGate] = useState('AND');
  const [inputA, setInputA] = useState(1);
  const [inputB, setInputB] = useState(1);

  // Lab 3: Quiz State
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // School Diary Filter State
  const [diaryFilter, setDiaryFilter] = useState('All');

  // Resource Preview Modal State
  const [selectedResource, setSelectedResource] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Profile Modal State
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    role: 'Student',
    contact: '',
    message: ''
  });
  const [toastMsg, setToastMsg] = useState(null);

  const t = CONTENT[lang];

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [t.roles.length]);

  // Keyboard shortcut Ctrl+K / Cmd+K for Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setCmdOpen(false);
        setSelectedResource(null);
        setProfileModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll terminal to bottom inside container only
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [termHistory]);

  // Show temporary toast helper
  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 4000);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    setActiveSection(id);
    setCmdOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Terminal Command Execution
  const handleTerminalCommand = (e) => {
    e.preventDefault();
    const cmd = termInput.trim().toLowerCase();
    if (!cmd) return;

    const newEntries = [{ type: 'command', text: `ravi@ravimahar.in:~$ ${termInput}` }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: 'Available commands:\n  whoami     → Instructor profile summary\n  education  → Academic qualifications (M.Sc. CS, B.Sc. PCM, 12th PCM)\n  school     → Details about GSSS Kikarwali 60RB\n  skills     → Technical & Science competencies\n  lab        → Jump to Interactive CS Lab\n  contact    → Official domain & location info\n  clear      → Clear terminal screen'
        });
        break;
      case 'whoami':
        newEntries.push({
          type: 'output',
          text: 'Ravi Mahar (रवि महर)\nRole: Basic Computer Instructor (बेसिक कंप्यूटर अनुदेशक)\nDepartment: Department of Education, Government of Rajasthan\nDomain: https://ravimahar.in'
        });
        break;
      case 'education':
        newEntries.push({
          type: 'output',
          text: '1. M.Sc. in Computer Science (Post-Graduation)\n2. B.Sc. in Physics, Chemistry & Mathematics (PCM)\n3. Senior Secondary (12th) in Science-Math (PCM)'
        });
        break;
      case 'school':
        newEntries.push({
          type: 'output',
          text: 'Institution: Government Senior Secondary School, Kikarwali 60RB\nHindi: राजकीय उच्च माध्यमिक विद्यालय कीकरवाली 60RB\nBlock: Raisinghnagar | District: Sri Ganganagar, Rajasthan'
        });
        break;
      case 'skills':
        newEntries.push({
          type: 'output',
          text: '• Programming: Python, C, C++, SQL, JavaScript, React\n• CS Core: Data Structures, DBMS, OS, Networking, Boolean Logic\n• School ICT: ShalaDarpan, UDISE+, Smart Class, Cyber Hygiene\n• Sciences: Physics, Mathematics, Analytical Modelling'
        });
        break;
      case 'lab':
        newEntries.push({
          type: 'output',
          text: 'Opening Interactive CS Lab section...'
        });
        scrollToSection('lab');
        break;
      case 'contact':
        newEntries.push({
          type: 'output',
          text: 'Website: ravimahar.in\nWorkplace: ICT Lab, GSSS Kikarwali 60RB, Raisinghnagar (Raj.)\nEmail: contact@ravimahar.in'
        });
        break;
      case 'clear':
        setTermHistory([]);
        setTermInput('');
        return;
      default:
        newEntries.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for available commands.`
        });
    }

    setTermHistory((prev) => [...prev, ...newEntries]);
    setTermInput('');
  };

  // Number System Converter Handler
  const handleNumberChange = (val, base) => {
    setRawInput(val);
    setInputBase(base);
    if (!val.trim()) {
      setDecimalValue(0);
      return;
    }
    const parsed = parseInt(val.trim(), base);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 65535) {
      setDecimalValue(parsed);
    }
  };

  // Logic Gate Evaluation Helper
  const evaluateGate = (gate, a, b) => {
    switch (gate) {
      case 'AND':
        return a & b;
      case 'OR':
        return a | b;
      case 'XOR':
        return a ^ b;
      case 'NAND':
        return (a & b) === 1 ? 0 : 1;
      case 'NOR':
        return (a | b) === 1 ? 0 : 1;
      case 'NOT':
        return a === 1 ? 0 : 1;
      default:
        return 0;
    }
  };

  const currentGateOutput = evaluateGate(selectedGate, inputA, inputB);

  // Calculate Quiz Score
  const calculateQuizScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((item, idx) => {
      if (quizAnswers[idx] === item.answer) score += 1;
    });
    return score;
  };

  // Handle Contact Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) {
      triggerToast('Please enter your name and message.');
      return;
    }
    triggerToast(`Thank you, ${contactForm.name}! Your message to Ravi Mahar has been recorded.`);
    setContactForm({ name: '', role: 'Student', contact: '', message: '' });
  };

  // Copy helper
  const handleCopyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    triggerToast('Copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-emerald-500 selection:text-white ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-emerald-500' : 'bg-emerald-300'
          }`}
        />
        <div
          className={`absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-cyan-500' : 'bg-cyan-300'
          }`}
        />
        <div
          className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 ${
            darkMode ? 'bg-indigo-500' : 'bg-indigo-300'
          }`}
        />
      </div>

      {/* TOAST NOTIFICATION */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border bg-emerald-600 text-white border-emerald-400 animate-bounce">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium">{toastMsg}</span>
        </div>
      )}

      {/* STICKY HEADER / NAVBAR */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
          darkMode
            ? 'bg-slate-950/80 border-slate-800/80'
            : 'bg-white/85 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              RM
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-base sm:text-lg">
                  Ravi Mahar
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono">
                  .in
                </span>
              </div>
              <p
                className={`text-[11px] leading-none ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                GSSS Kikarwali 60RB
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === key
                    ? 'bg-emerald-500/15 text-emerald-400 font-semibold'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right Controls: Command Palette, Language Toggle, Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setCmdOpen(true)}
              title="Quick Command Palette (Ctrl+K)"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-emerald-500/50'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-emerald-500'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">Quick Jump</span>
              <kbd
                className={`hidden sm:inline-block px-1.5 py-0.5 text-[10px] rounded font-mono ${
                  darkMode ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500 border'
                }`}
              >
                Ctrl+K
              </kbd>
            </button>

            {/* Bilingual Toggle (EN / हिंदी) */}
            <button
              onClick={() => setLang((prev) => (prev === 'en' ? 'hi' : 'en'))}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-emerald-400 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-emerald-700 hover:bg-slate-100'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Bottom Scrollable Bar */}
        <div
          className={`flex md:hidden overflow-x-auto px-3 py-2 gap-1.5 border-t ${
            darkMode ? 'border-slate-900 bg-slate-950/95' : 'border-slate-100 bg-white/95'
          }`}
        >
          {Object.entries(t.nav).map(([key, label]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
                activeSection === key
                  ? 'bg-emerald-500 text-white'
                  : darkMode
                  ? 'text-slate-400 bg-slate-900'
                  : 'text-slate-600 bg-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-24">
        {/* =========================================================
            1. HERO SECTION
           ========================================================= */}
        <section id="home" className="pt-2 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Intro & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Official Domain Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>

              {/* Main Name & Hindi Subtitle */}
              <div className="space-y-2">
                <p
                  className={`text-sm sm:text-base font-medium ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {t.greeting}
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
                    {t.name}
                  </span>
                </h1>
                <p
                  className={`text-sm sm:text-base font-semibold flex flex-wrap items-center gap-2 pt-1 ${
                    darkMode ? 'text-amber-300/90' : 'text-amber-700'
                  }`}
                >
                  <School className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>{t.hindiSubtitle}</span>
                </p>
              </div>

              {/* Animated Role Switcher */}
              <div
                className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-emerald-500">
                    Current Designation & Focus
                  </div>
                  <div className="text-base sm:text-lg font-bold truncate transition-all duration-300">
                    {t.roles[roleIndex]}
                  </div>
                </div>
              </div>

              {/* Bio Description */}
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {t.heroBio}
              </p>

              {/* Academic Qualification Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 text-emerald-300'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  M.Sc. Computer Science
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 text-cyan-300'
                      : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                  }`}
                >
                  <Atom className="w-3.5 h-3.5" />
                  B.Sc. (Physics, Chemistry, Math)
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 text-indigo-300'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-800'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  12th Science-Math (PCM)
                </span>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => scrollToSection('lab')}
                  className="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all flex items-center gap-2"
                >
                  <Binary className="w-4 h-4" />
                  <span>{t.ctaLab}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('resources')}
                  className={`px-5 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-emerald-500/50'
                      : 'bg-white border-slate-300 text-slate-800 hover:border-emerald-500'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <span>{t.ctaResources}</span>
                </button>

                <button
                  onClick={() => setProfileModalOpen(true)}
                  className={`px-4 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 ${
                    darkMode
                      ? 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>{t.ctaProfile}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Hero Terminal */}
            <div className="lg:col-span-5">
              <div
                className={`rounded-2xl border overflow-hidden shadow-2xl transition-all ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-800 shadow-emerald-950/30'
                    : 'bg-slate-900 border-slate-700 text-slate-100 shadow-xl'
                }`}
              >
                {/* Terminal Top Bar */}
                <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      ravi@ravimahar.in:~ (Interactive Shell)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    60RB-LAB
                  </span>
                </div>

                {/* Quick Command Pills */}
                <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto">
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">
                    Try clicking:
                  </span>
                  {['whoami', 'education', 'school', 'skills', 'clear'].map((cmdName) => (
                    <button
                      key={cmdName}
                      onClick={() => {
                        setTermInput(cmdName);
                      }}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-emerald-400 hover:bg-emerald-500/20 border border-slate-700 transition-colors"
                    >
                      {cmdName}
                    </button>
                  ))}
                </div>

                {/* Terminal Output Body */}
                <div
                  ref={terminalEndRef}
                  className="p-4 h-64 overflow-y-auto font-mono text-xs sm:text-sm space-y-2.5 bg-slate-950/90 text-slate-200"
                >
                  {termHistory.map((item, index) => (
                    <div key={index} className="leading-relaxed whitespace-pre-wrap">
                      {item.type === 'system' && (
                        <span className="text-emerald-400 font-semibold">{item.text}</span>
                      )}
                      {item.type === 'info' && (
                        <span className="text-slate-400">{item.text}</span>
                      )}
                      {item.type === 'command' && (
                        <span className="text-cyan-400 font-semibold">{item.text}</span>
                      )}
                      {item.type === 'output' && (
                        <div className="pl-2 border-l-2 border-emerald-500/50 text-slate-200">
                          {item.text}
                        </div>
                      )}
                      {item.type === 'error' && (
                        <span className="text-rose-400">{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Terminal Input Form */}
                <form
                  onSubmit={handleTerminalCommand}
                  className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
                >
                  <span className="text-emerald-400 font-mono text-xs sm:text-sm shrink-0">
                    ravi@60RB:~$
                  </span>
                  <input
                    type="text"
                    value={termInput}
                    onChange={(e) => setTermInput(e.target.value)}
                    placeholder="Type command (e.g. education) & press Enter..."
                    className="w-full bg-transparent text-slate-100 font-mono text-xs sm:text-sm focus:outline-none placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white text-xs font-mono transition-colors"
                  >
                    Run
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Key Highlights Counter Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {t.stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800/90 hover:border-emerald-500/40'
                      : 'bg-white border-slate-200 shadow-sm hover:border-emerald-500'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs sm:text-sm font-medium ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            2. ABOUT & ACADEMIC JOURNEY TIMELINE
           ========================================================= */}
        <section id="about" className="scroll-mt-20 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Professional Pedigree</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                From Core Sciences (PCM) to{' '}
                <span className="text-emerald-400">Advanced Computing</span>
              </h2>
            </div>
            <p
              className={`max-w-md text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Combining a strong foundation in Physics, Chemistry & Mathematics with a
              Master’s degree in Computer Science to deliver holistic STEM education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Bio Card */}
            <div
              className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border space-y-6 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
                  RM
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ravi Mahar</h3>
                  <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                    Basic Computer Instructor (Govt. of Rajasthan)
                  </p>
                  <p
                    className={`text-xs ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    GSSS Kikarwali 60RB, Raisinghnagar
                  </p>
                </div>
              </div>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                As a <strong>Basic Computer Instructor</strong> at{' '}
                <strong>Government Senior Secondary School, Kikarwali 60RB</strong>, my
                mission is to bridge the urban-rural digital divide. With an{' '}
                <strong>M.Sc. in Computer Science</strong> and a{' '}
                <strong>B.Sc. in PCM</strong>, I strive to make abstract computing
                concepts—from binary logic gates to Python algorithms—intuitive and
                exciting for every student.
              </p>

              <div
                className={`p-4 rounded-2xl border space-y-2 ${
                  darkMode
                    ? 'bg-slate-950/70 border-slate-800'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Core Educational Philosophy
                </div>
                <p
                  className={`text-xs sm:text-sm italic ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  "जब ग्रामीण विद्यालय का प्रत्येक विद्यार्थी कोडिंग, तार्किक चिंतन और डिजिटल तकनीक
                  में दक्ष होगा, तभी डिजिटल भारत का सपना साकार होगा।"
                </p>
              </div>

              {/* Quick Credentials Checklist */}
              <div className="space-y-2.5 pt-1">
                {[
                  'Post-Graduate: M.Sc. in Computer Science',
                  'Graduate: B.Sc. in Physics, Chemistry & Mathematics (PCM)',
                  'Senior Secondary: 12th Science-Math (PCM)',
                  'State Cadre: Basic Computer Instructor, Rajasthan Education Dept.'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Timeline Cards */}
            <div className="lg:col-span-7 space-y-4">
              {TIMELINE_DATA.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 rounded-2xl border transition-all relative overflow-hidden ${
                    item.highlight
                      ? darkMode
                        ? 'bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border-emerald-500/50'
                        : 'bg-gradient-to-r from-emerald-50/70 to-white border-emerald-400 shadow-md'
                      : darkMode
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.highlight
                          ? 'bg-emerald-500 text-white'
                          : darkMode
                          ? 'bg-slate-800 text-cyan-400'
                          : 'bg-slate-100 text-cyan-700'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span
                      className={`text-xs font-medium flex items-center gap-1 ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                  <p className="text-sm font-semibold text-emerald-400 mb-2">
                    {item.institution}
                  </p>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${
                          darkMode
                            ? 'bg-slate-950 text-slate-300 border border-slate-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. INTERACTIVE CS LAB & STUDENT CORNER
           ========================================================= */}
        <section id="lab" className="scroll-mt-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <Binary className="w-4 h-4" />
                <span>Interactive Student Corner • वर्चुअल कंप्यूटर लैब</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                GSSS Kikarwali 60RB{' '}
                <span className="text-cyan-400">Virtual CS Playground</span>
              </h2>
            </div>

            {/* Lab Switcher Tabs */}
            <div
              className={`inline-flex p-1.5 rounded-2xl border ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}
            >
              {[
                { id: 'converter', label: 'Number Systems', icon: Binary },
                { id: 'logic', label: 'Logic Gates', icon: Cpu },
                { id: 'quiz', label: 'RBSE ICT Quiz', icon: HelpCircle }
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setLabTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      labTab === tab.id
                        ? 'bg-emerald-500 text-white shadow'
                        : darkMode
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* LAB MODULE 1: NUMBER SYSTEM CONVERTER */}
          {labTab === 'converter' && (
            <div
              className={`p-6 sm:p-8 rounded-3xl border ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Binary className="w-5 h-5 text-emerald-400" />
                      <span>Real-Time Number System Converter (संख्या प्रणाली रूपांतरक)</span>
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Type in any base below (Decimal, Binary, Octal, or Hexadecimal) to
                      see instant conversions and bit-level breakdowns for Class 9–12 CS.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Decimal Input */}
                    <div
                      className={`p-4 rounded-2xl border ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <label className="text-xs font-bold uppercase text-emerald-400 block mb-1">
                        Decimal (Base 10)
                      </label>
                      <input
                        type="text"
                        value={inputBase === 10 ? rawInput : decimalValue.toString(10)}
                        onChange={(e) => handleNumberChange(e.target.value, 10)}
                        className="w-full bg-transparent text-lg font-mono font-bold focus:outline-none"
                      />
                    </div>

                    {/* Binary Input */}
                    <div
                      className={`p-4 rounded-2xl border ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <label className="text-xs font-bold uppercase text-cyan-400 block mb-1">
                        Binary (Base 2)
                      </label>
                      <input
                        type="text"
                        value={inputBase === 2 ? rawInput : decimalValue.toString(2)}
                        onChange={(e) => handleNumberChange(e.target.value, 2)}
                        className="w-full bg-transparent text-lg font-mono font-bold focus:outline-none"
                      />
                    </div>

                    {/* Octal Input */}
                    <div
                      className={`p-4 rounded-2xl border ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <label className="text-xs font-bold uppercase text-indigo-400 block mb-1">
                        Octal (Base 8)
                      </label>
                      <input
                        type="text"
                        value={inputBase === 8 ? rawInput : decimalValue.toString(8)}
                        onChange={(e) => handleNumberChange(e.target.value, 8)}
                        className="w-full bg-transparent text-lg font-mono font-bold focus:outline-none"
                      />
                    </div>

                    {/* Hexadecimal Input */}
                    <div
                      className={`p-4 rounded-2xl border ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <label className="text-xs font-bold uppercase text-amber-400 block mb-1">
                        Hexadecimal (Base 16)
                      </label>
                      <input
                        type="text"
                        value={
                          inputBase === 16
                            ? rawInput.toUpperCase()
                            : decimalValue.toString(16).toUpperCase()
                        }
                        onChange={(e) => handleNumberChange(e.target.value, 16)}
                        className="w-full bg-transparent text-lg font-mono font-bold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Quick Preset Numbers */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-slate-400">
                      Quick Presets:
                    </span>
                    {[10, 42, 60, 128, 255, 1024].map((num) => (
                      <button
                        key={num}
                        onClick={() => {
                          setDecimalValue(num);
                          setRawInput(String(num));
                          setInputBase(10);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${
                          decimalValue === num
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-emerald-500/50'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {num === 60 ? '60 (60RB!)' : num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column: Step-by-Step 8-Bit Visualizer */}
                <div
                  className={`lg:col-span-5 p-6 rounded-2xl border space-y-4 ${
                    darkMode
                      ? 'bg-slate-950/90 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      8-Bit Binary Place Value Breakdown
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ({decimalValue})₁₀ = ({decimalValue.toString(2)})₂
                    </span>
                  </div>

                  {decimalValue <= 255 ? (
                    <div className="grid grid-cols-8 gap-1.5 text-center">
                      {[128, 64, 32, 16, 8, 4, 2, 1].map((weight) => {
                        const bitOn = (decimalValue & weight) !== 0;
                        return (
                          <div
                            key={weight}
                            onClick={() => {
                              const nextVal = bitOn
                                ? decimalValue - weight
                                : decimalValue + weight;
                              setDecimalValue(nextVal);
                              setRawInput(String(nextVal));
                              setInputBase(10);
                            }}
                            className={`p-2 rounded-xl border cursor-pointer transition-all select-none ${
                              bitOn
                                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
                                : darkMode
                                ? 'bg-slate-900 border-slate-800 text-slate-500'
                                : 'bg-white border-slate-200 text-slate-400'
                            }`}
                          >
                            <div className="text-[10px] font-mono">{weight}</div>
                            <div className="text-base font-mono mt-1">
                              {bitOn ? '1' : '0'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono">
                      Full Binary Representation: {decimalValue.toString(2)} (
                      {decimalValue.toString(2).length} bits)
                    </div>
                  )}

                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong>Tip for Students:</strong> Click any bit box above (128 down to
                    1) to toggle it between <code className="text-emerald-400">1</code> and{' '}
                    <code className="text-emerald-400">0</code> and watch the Decimal number
                    update live!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* LAB MODULE 2: LOGIC GATE SIMULATOR */}
          {labTab === 'logic' && (
            <div
              className={`p-6 sm:p-8 rounded-3xl border ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Gate Controls */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                      <span>Interactive Digital Logic Gate Simulator (लॉजिक गेट सिम्युलेटर)</span>
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Covers both Class 12 Physics (Semiconductor Electronics) and Computer
                      Science (Boolean Algebra).
                    </p>
                  </div>

                  {/* Select Gate Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR'].map((gate) => (
                      <button
                        key={gate}
                        onClick={() => setSelectedGate(gate)}
                        className={`px-4 py-2 rounded-xl font-mono text-sm font-bold border transition-all ${
                          selectedGate === gate
                            ? 'bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/25'
                            : darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-cyan-500/40'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        {gate} Gate
                      </button>
                    ))}
                  </div>

                  {/* Interactive Input Switches & Live Output */}
                  <div
                    className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-around gap-6 ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    {/* Inputs */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm font-bold w-16">Input A:</span>
                        <button
                          onClick={() => setInputA((prev) => (prev === 1 ? 0 : 1))}
                          className={`w-20 py-2 rounded-xl font-mono font-bold text-sm transition-all ${
                            inputA === 1
                              ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {inputA} ({inputA === 1 ? 'HIGH' : 'LOW'})
                        </button>
                      </div>

                      {selectedGate !== 'NOT' && (
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm font-bold w-16">Input B:</span>
                          <button
                            onClick={() => setInputB((prev) => (prev === 1 ? 0 : 1))}
                            className={`w-20 py-2 rounded-xl font-mono font-bold text-sm transition-all ${
                              inputB === 1
                                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {inputB} ({inputB === 1 ? 'HIGH' : 'LOW'})
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Gate Box Visual */}
                    <div className="px-6 py-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-center">
                      <div className="text-xs font-mono uppercase text-cyan-400">
                        Active Gate
                      </div>
                      <div className="text-2xl font-extrabold font-mono my-1">
                        {selectedGate}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {selectedGate === 'AND' && 'Y = A · B'}
                        {selectedGate === 'OR' && 'Y = A + B'}
                        {selectedGate === 'NOT' && "Y = A'"}
                        {selectedGate === 'NAND' && "Y = (A · B)'"}
                        {selectedGate === 'NOR' && "Y = (A + B)'"}
                        {selectedGate === 'XOR' && 'Y = A ⊕ B'}
                      </div>
                    </div>

                    {/* Output Bulb */}
                    <div className="text-center">
                      <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                        Output (Y)
                      </div>
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center font-mono text-2xl font-extrabold border-4 transition-all mx-auto ${
                          currentGateOutput === 1
                            ? 'bg-emerald-500 text-white border-emerald-300 shadow-xl shadow-emerald-500/50 scale-105'
                            : 'bg-slate-900 text-slate-500 border-slate-700'
                        }`}
                      >
                        {currentGateOutput}
                      </div>
                      <div className="text-xs font-semibold mt-2 text-emerald-400">
                        {currentGateOutput === 1 ? 'LED ON (HIGH)' : 'LED OFF (LOW)'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Truth Table Highlight */}
                <div
                  className={`lg:col-span-5 p-6 rounded-2xl border ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
                    Live Truth Table ({selectedGate} Gate)
                  </h4>
                  <table className="w-full text-center font-mono text-sm border-collapse">
                    <thead>
                      <tr
                        className={`border-b ${
                          darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-300'
                        }`}
                      >
                        <th className="py-2">A</th>
                        {selectedGate !== 'NOT' && <th className="py-2">B</th>}
                        <th className="py-2 text-emerald-400">Output (Y)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(selectedGate === 'NOT'
                        ? [[0, 0], [1, 0]]
                        : [
                            [0, 0],
                            [0, 1],
                            [1, 0],
                            [1, 1]
                          ]
                      ).map(([a, b], idx) => {
                        const out = evaluateGate(selectedGate, a, b);
                        const isActiveRow =
                          selectedGate === 'NOT'
                            ? a === inputA
                            : a === inputA && b === inputB;
                        return (
                          <tr
                            key={idx}
                            className={`border-b transition-colors ${
                              isActiveRow
                                ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                                : darkMode
                                ? 'border-slate-900 text-slate-400'
                                : 'border-slate-200 text-slate-600'
                            }`}
                          >
                            <td className="py-2.5">{a}</td>
                            {selectedGate !== 'NOT' && <td className="py-2.5">{b}</td>}
                            <td className="py-2.5 font-bold">{out}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* LAB MODULE 3: QUICK RBSE ICT QUIZ */}
          {labTab === 'quiz' && (
            <div
              className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-emerald-400" />
                    <span>RBSE Computer Science & ICT Self-Assessment Quiz</span>
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Test your fundamentals in Computer Architecture, Binary Math, Logic
                    Gates, ShalaDarpan, and Python!
                  </p>
                </div>

                {quizSubmitted && (
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm">
                    Your Score: {calculateQuizScore()} / {QUIZ_QUESTIONS.length}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {QUIZ_QUESTIONS.map((item, qIdx) => (
                  <div
                    key={qIdx}
                    className={`p-5 rounded-2xl border space-y-3 ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-sm sm:text-base">
                      <span className="text-emerald-400 font-mono mr-2">
                        Q{qIdx + 1}.
                      </span>
                      {item.q}
                      <div
                        className={`text-xs font-normal mt-0.5 ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {item.qHi}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.options.map((opt, oIdx) => {
                        const isSelected = quizAnswers[qIdx] === oIdx;
                        const isCorrect = item.answer === oIdx;

                        let btnStyle = darkMode
                          ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300';

                        if (isSelected && !quizSubmitted) {
                          btnStyle =
                            'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold';
                        } else if (quizSubmitted) {
                          if (isCorrect) {
                            btnStyle =
                              'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold';
                          } else if (isSelected && !isCorrect) {
                            btnStyle =
                              'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={quizSubmitted}
                            onClick={() =>
                              setQuizAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))
                            }
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <p className="text-xs text-emerald-400 pt-1">
                        ✓ Explanation: {item.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    Submit Quiz & View Explanations
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Quiz</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* =========================================================
            4. SCHOOL DIGITAL INITIATIVES & TEACHER'S DAILY DIARY
           ========================================================= */}
        <section id="school" className="scroll-mt-20 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <School className="w-4 h-4" />
                <span>GSSS Kikarwali 60RB • विद्यालय डिजिटल पहल</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Digital Governance &{' '}
                <span className="text-emerald-400">Teacher's Daily Diary</span>
              </h2>
            </div>
            <p
              className={`max-w-md text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Leading digital transformation at Government Senior Secondary School,
              Kikarwali 60RB through structured lesson planning and ICT management.
            </p>
          </div>

          {/* 4 Pillar Cards of GSSS Kikarwali 60RB Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'ICT Lab & Smart Classrooms',
                hindi: 'आईसीटी लैब एवं स्मार्ट कक्षा संचालन',
                desc: 'Maintaining computer systems, local networking, interactive projectors, and ensuring regular hands-on practical sessions for students.',
                icon: Monitor
              },
              {
                title: 'ShalaDarpan & e-Governance',
                hindi: 'शालादर्पण एवं यू-डाइस+ प्रबंधन',
                desc: 'Streamlining online attendance, board form verifications, scholarship portals, UDISE+ data entry, and digital school records.',
                icon: Database
              },
              {
                title: 'Coding & Scientific Temperament',
                hindi: 'कोडिंग, पायथन एवं विज्ञान समन्वय',
                desc: 'Teaching Python programming, SQL, and connecting B.Sc. PCM concepts with computer simulations for deeper conceptual clarity.',
                icon: Code2
              },
              {
                title: 'Cyber Hygiene & Career Guidance',
                hindi: 'साइबर सुरक्षा एवं कैरियर मार्गदर्शन',
                desc: 'Conducting awareness drives on safe internet usage, digital payments safety, and guiding rural students toward IT & STEM careers.',
                icon: ShieldCheck
              }
            ].map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border space-y-3 transition-all ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40'
                      : 'bg-white border-slate-200 shadow-sm hover:border-emerald-400'
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold">{pillar.title}</h3>
                  <div className="text-xs font-semibold text-amber-400">
                    {pillar.hindi}
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Teacher's Daily Diary (अध्यापक दैनिक डायरी) Showcase */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Structured Lesson Plans & Teacher's Daily Diary (अध्यापक दैनिक डायरी)
                  </h3>
                  <p
                    className={`text-xs ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Curriculum execution snapshots at GSSS Kikarwali 60RB
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['All', 'Class 11 & 12', 'Class 9 & 10', 'All Classes (6–12)', 'Science Stream'].map(
                  (filterName) => (
                    <button
                      key={filterName}
                      onClick={() => setDiaryFilter(filterName)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        diaryFilter === filterName
                          ? 'bg-cyan-500 text-white'
                          : darkMode
                          ? 'bg-slate-950 text-slate-400 hover:text-white'
                          : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {filterName}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DIARY_LESSONS.filter(
                (item) => diaryFilter === 'All' || item.classLevel === diaryFilter
              ).map((lesson) => (
                <div
                  key={lesson.id}
                  className={`p-5 rounded-2xl border space-y-2.5 ${
                    darkMode
                      ? 'bg-slate-950/80 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {lesson.classLevel}
                    </span>
                    <span className="text-xs font-semibold text-cyan-400">
                      {lesson.subject}
                    </span>
                  </div>
                  <h4 className="font-bold text-base">{lesson.topic}</h4>
                  <p
                    className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    <strong>Objective:</strong> {lesson.objective}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    <strong>Lab Method:</strong> {lesson.pedagogy}
                  </p>
                  <div className="pt-1 text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{lesson.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. TECHNICAL SKILLS & CORE COMPETENCIES
           ========================================================= */}
        <section id="skills" className="scroll-mt-20 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>Multidisciplinary Skill Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Technical, Pedagogical &{' '}
              <span className="text-indigo-400">Scientific Competencies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border space-y-5 ${
                    darkMode
                      ? 'bg-slate-900/70 border-slate-800'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base">{cat.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((sk, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span>{sk.name}</span>
                          <span className="text-emerald-400 font-mono">{sk.level}%</span>
                        </div>
                        <div
                          className={`w-full h-2 rounded-full overflow-hidden ${
                            darkMode ? 'bg-slate-800' : 'bg-slate-100'
                          }`}
                        >
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500"
                            style={{ width: `${sk.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            6. STUDENT & EDUCATOR RESOURCE HUB
           ========================================================= */}
        <section id="resources" className="scroll-mt-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Open Educational Resources • अध्ययन सामग्री</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Student Notes, Lab Manuals &{' '}
                <span className="text-emerald-400">Cheat Sheets</span>
              </h2>
            </div>
            <p
              className={`max-w-md text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Click "Preview Material" on any card below to inspect syllabus notes,
              Python snippets, or practical file templates right inside your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES_DATA.map((res) => (
              <div
                key={res.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between gap-4 transition-all ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/40'
                    : 'bg-white border-slate-200 shadow-sm hover:border-emerald-400'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {res.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {res.grade} • {res.size}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold">{res.title}</h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {res.summary}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedResource(res)}
                    className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Preview Material</span>
                  </button>

                  <button
                    onClick={() =>
                      handleCopyText(res.previewContent.join('\n'), res.id)
                    }
                    className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      darkMode
                        ? 'border-slate-800 text-slate-300 hover:bg-slate-800'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {copiedId === res.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Notes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            7. CONTACT & SCHOOL LOCATION SECTION
           ========================================================= */}
        <section id="contact" className="scroll-mt-20 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Mail className="w-4 h-4" />
              <span>Connect with Ravi Mahar • संपर्क करें</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get in Touch or Visit{' '}
              <span className="text-cyan-400">GSSS Kikarwali 60RB</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-6 rounded-3xl border space-y-4 ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Official Workplace</h3>
                    <p className="text-sm font-semibold text-emerald-400">
                      Government Senior Secondary School, Kikarwali 60RB
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      राजकीय उच्च माध्यमिक विद्यालय कीकरवाली 60RB
                      <br />
                      Block: Raisinghnagar, District: Sri Ganganagar, Rajasthan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Official Website & Domain</h3>
                    <p className="text-sm font-mono text-cyan-400">https://ravimahar.in</p>
                    <p
                      className={`text-xs mt-0.5 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Digital hub for ICT notes, student updates & portfolio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Email & Academic Inquiries</h3>
                    <p className="text-sm font-mono text-indigo-400">
                      contact@ravimahar.in
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Available for student guidance, ICT workshops & educator
                      collaboration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Message Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleContactSubmit}
                className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <h3 className="text-lg font-bold">
                  Send a Message to Ravi Sir (संदेश भेजें)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold block mb-1.5">
                      Your Name (आपका नाम) *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder="e.g. Amanpreet / Rajesh Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-100'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold block mb-1.5">
                      You are a (आपकी भूमिका)
                    </label>
                    <select
                      value={contactForm.role}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, role: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-100'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      <option value="Student">Student (विद्यार्थी)</option>
                      <option value="Parent">Parent / Guardian (अभिभावक)</option>
                      <option value="Fellow Educator">
                        Fellow Teacher / Educator (शिक्षक साथी)
                      </option>
                      <option value="Visitor">Website Visitor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5">
                    Email or Phone (मोबाइल / ईमेल - वैकल्पिक)
                  </label>
                  <input
                    type="text"
                    value={contactForm.contact}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, contact: e.target.value })
                    }
                    placeholder="Your email or phone number"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-100'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-1.5">
                    Message / Question (आपका संदेश या प्रश्न) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    placeholder="Ask about RBSE ICT notes, Python doubts, or school digital initiatives..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-emerald-500 ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-100'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
         ========================================================= */}
      <footer
        className={`mt-20 border-t py-8 ${
          darkMode
            ? 'bg-slate-950 border-slate-900 text-slate-400'
            : 'bg-white border-slate-200 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-emerald-400">ravimahar.in</span>
            <span>•</span>
            <span>
              Ravi Mahar (M.Sc. CS, B.Sc. PCM) — Basic Computer Instructor
            </span>
          </div>
          <div>
            Government Senior Secondary School, Kikarwali 60RB (Rajasthan)
          </div>
        </div>
      </footer>

      {/* =========================================================
          MODAL 1: COMMAND PALETTE (Ctrl+K)
         ========================================================= */}
      {cmdOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
          <div
            className={`w-full max-w-lg rounded-2xl border overflow-hidden shadow-2xl ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="p-3.5 border-b border-slate-800 flex items-center gap-3">
              <Command className="w-4 h-4 text-emerald-400" />
              <input
                type="text"
                autoFocus
                value={cmdQuery}
                onChange={(e) => setCmdQuery(e.target.value)}
                placeholder="Type a section or action (e.g. lab, diary, theme, hindi)..."
                className="w-full bg-transparent text-sm focus:outline-none"
              />
              <button
                onClick={() => setCmdOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2 max-h-72 overflow-y-auto space-y-1">
              {[
                { label: 'Go to Hero & Terminal', action: () => scrollToSection('home') },
                {
                  label: 'Go to Academic Journey (M.Sc. CS, B.Sc. PCM)',
                  action: () => scrollToSection('about')
                },
                {
                  label: 'Open Number System Converter (CS Lab)',
                  action: () => {
                    setLabTab('converter');
                    scrollToSection('lab');
                  }
                },
                {
                  label: 'Open Logic Gate Simulator (CS Lab)',
                  action: () => {
                    setLabTab('logic');
                    scrollToSection('lab');
                  }
                },
                {
                  label: 'Take RBSE ICT Quiz',
                  action: () => {
                    setLabTab('quiz');
                    scrollToSection('lab');
                  }
                },
                {
                  label: 'View GSSS Kikarwali 60RB Initiatives & Diary',
                  action: () => scrollToSection('school')
                },
                {
                  label: 'Switch Language (English / हिंदी)',
                  action: () => {
                    setLang((l) => (l === 'en' ? 'hi' : 'en'));
                    setCmdOpen(false);
                  }
                },
                {
                  label: 'Toggle Dark / Light Theme',
                  action: () => {
                    setDarkMode((d) => !d);
                    setCmdOpen(false);
                  }
                }
              ]
                .filter((item) =>
                  item.label.toLowerCase().includes(cmdQuery.toLowerCase())
                )
                .map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.action}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between transition-colors ${
                      darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-emerald-400" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          MODAL 2: RESOURCE PREVIEW MODAL
         ========================================================= */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-xl rounded-3xl border p-6 space-y-4 shadow-2xl ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase text-emerald-400">
                  {selectedResource.category} • {selectedResource.grade}
                </span>
                <h3 className="text-xl font-bold mt-1">{selectedResource.title}</h3>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-1.5 rounded-xl hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className={`p-4 rounded-2xl border font-mono text-xs sm:text-sm space-y-2 overflow-x-auto ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-emerald-300'
                  : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}
            >
              {selectedResource.previewContent.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() =>
                  handleCopyText(
                    selectedResource.previewContent.join('\n'),
                    selectedResource.id
                  )
                }
                className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Content</span>
              </button>
              <button
                onClick={() => setSelectedResource(null)}
                className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          MODAL 3: EDUCATOR PROFILE / CV SUMMARY MODAL
         ========================================================= */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-2xl font-extrabold text-emerald-400">
                  Ravi Mahar (रवि महर)
                </h3>
                <p className="text-sm font-semibold">
                  Basic Computer Instructor | Govt. Sr. Sec. School, Kikarwali 60RB
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Official Portfolio: https://ravimahar.in
                </p>
              </div>
              <button
                onClick={() => setProfileModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="font-bold uppercase text-cyan-400 mb-1">
                  Academic Qualifications
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>M.Sc. in Computer Science</strong> — Advanced Computing,
                    Algorithms, DBMS, Operating Systems & Programming
                  </li>
                  <li>
                    <strong>B.Sc. (PCM)</strong> — Bachelor of Science in Physics,
                    Chemistry, and Mathematics
                  </li>
                  <li>
                    <strong>Senior Secondary (12th)</strong> — Science-Math (PCM) Stream
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-bold uppercase text-cyan-400 mb-1">
                  Current Role & Responsibilities
                </div>
                <p>
                  Serving as Basic Computer Instructor under the Department of Education,
                  Government of Rajasthan at GSSS Kikarwali 60RB (Raisinghnagar, Sri
                  Ganganagar). Responsible for ICT Lab management, teaching Class 9–12
                  Computer Science & Python, ShalaDarpan administration, and promoting
                  digital literacy.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                onClick={() => setProfileModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}