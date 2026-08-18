import {
  BarChart,
  LineChart,
  PieChart,
  Button,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  IconButton,
  Row,
  Select,
  Spacer,
  Stack,
  Table,
  Text,
  TextArea,
  TextInput,
  canvasTokensLight,
  mergeStyle,
  useCanvasState,
} from "cursor/canvas";

const BRAND = "#002c76";
const FONT = "Poppins, system-ui, sans-serif";
const WHITE = "#ffffff";
const PAGE = "#F5F7FA";
const SOFT = "#E8F1FF";
const LINE = "#EEF1F6";
const MUTED = "#6B7280";
const INK = "#1B2430";
const SUCCESS = "#1F8A65";
const t = canvasTokensLight;

const MASTER_TITLES = [
  "Award Category",
  "SA Batch",
  "Training Region",
  "Certificate Category",
];

const DASH_TITLES = [
  "Executive Dashboard",
  "Student Dashboard",
  "Partner School Dashboard",
  "Activities Dashboard",
  "Hall of Fame Dashboard",
];

const ANNOUNCE_TITLES = [
  "Event Management",
  "Volunteer Management",
  "Job Management",
];

function LineIcon({
  name,
  size,
  color,
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  const s = size || 16;
  const stroke = color || BRAND;
  const common = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "users") {
    if (name === "log") {
    return (
      <svg {...common}>
        <path d="M12 7v5l3 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  }
  return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (name === "school") {
    return (
      <svg {...common}>
        <path d="M3 10l9-7 9 7" />
        <path d="M5 10v9h14v-9" />
        <path d="M9 19v-6h6v6" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
      </svg>
    );
  }
  if (name === "heart") {
    return (
      <svg {...common}>
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z" />
      </svg>
    );
  }
  if (name === "briefcase") {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    );
  }
  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    );
  }
  if (name === "award") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 13L7 21l5-3 5 3-1.5-8" />
      </svg>
    );
  }
  if (name === "file") {
    return (
      <svg {...common}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
      </svg>
    );
  }
  if (name === "image") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M21 16l-5-5-11 8" />
      </svg>
    );
  }
  if (name === "settings") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.7a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.7a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" />
      </svg>
    );
  }
  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
    );
  }
  if (name === "filter") {
    return (
      <svg {...common}>
        <path d="M4 5h16l-6.5 7.5V19l-3 1.5V12.5L4 5z" />
      </svg>
    );
  }
  if (name === "bell") {
    return (
      <svg {...common}>
        <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
        <path d="M10 19a2 2 0 004 0" />
      </svg>
    );
  }
  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    );
  }
  if (name === "tag") {
    return (
      <svg {...common}>
        <path d="M20 13l-7 7-9-9V4h7z" />
        <circle cx="7.5" cy="7.5" r="1" />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5" />
      </svg>
    );
  }
  if (name === "map") {
    return (
      <svg {...common}>
        <path d="M9 4l6 2 6-2v14l-6 2-6-2-6 2V6z" />
        <path d="M9 4v14" />
        <path d="M15 6v14" />
      </svg>
    );
  }
  if (name === "badge") {
    return (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
      </svg>
    );
  }
  if (name === "more") {
    return (
      <svg {...common}>
        <circle cx="12" cy="5" r="1.7" fill={stroke} stroke="none" />
        <circle cx="12" cy="12" r="1.7" fill={stroke} stroke="none" />
        <circle cx="12" cy="19" r="1.7" fill={stroke} stroke="none" />
      </svg>
    );
  }
  if (name === "eye") {
    return (
      <svg {...common}>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (name === "download") {
    return (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="M7 11l5 5 5-5" />
        <path d="M4 21h16" />
      </svg>
    );
  }
  if (name === "back") {
    return (
      <svg {...common}>
        <path d="M15 5l-7 7 7 7" />
      </svg>
    );
  }
  if (name === "megaphone") {
    return (
      <svg {...common}>
        <path d="M3 11v2a2 2 0 0 0 2 2h1l3 4V7L6 9H5a2 2 0 0 0-2 2z" />
        <path d="M9 8.5v7c5 1.5 8 3.5 11 4.5V4c-3 1-6 3-11 4.5z" />
      </svg>
    );
  }
  if (name === "log") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

type PageId =
  | "students"
  | "schools"
  | "events"
  | "volunteers"
  | "jobs"
  | "kpi"
  | "fame"
  | "certificates"
  | "banners"
  | "activity"
  | "dash-exec"
  | "dash-student"
  | "dash-school"
  | "dash-activity"
  | "dash-fame"
  | "award-category"
  | "sa-batch"
  | "training-region"
  | "certificate-category";

type ModalMode = "closed" | "add" | "edit" | "view" | "import" | "delete";

type Student = {
  id: string;
  studentId: string;
  name: string;
  college: string;
  region: string;
  township: string;
  address: string;
  batch: string;
  gender: string;
  age: string;
  dob: string;
  payPhone: string;
  contactPhone: string;
  email: string;
  education: string;
  major: string;
  graduation: string;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

type School = {
  id: string;
  college: string;
  region: string;
  totalStudents: string;
  partnerSince: string;
  established: string;
  status: string;
  about: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  logo: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

type EventRec = {
  id: string;
  title: string;
  region: string;
  status: string;
  venue: string;
  datetime: string;
  regStart: string;
  regEnd: string;
  max: string;
  summary: string;
  details: string;
  cover: string;
  meeting: string;
  registered: number;
};

type Volunteer = {
  id: string;
  title: string;
  region: string;
  status: string;
  venue: string;
  datetime: string;
  regStart: string;
  regEnd: string;
  duration: string;
  max: string;
  summary: string;
  details: string;
  cover: string;
  registered: number;
};

type Job = {
  id: string;
  title: string;
  type: string;
  company: string;
  location: string;
  vacancies: string;
  start: string;
  deadline: string;
  summary: string;
  responsibilities: string;
  requirements: string;
  pdf: string;
  cover: string;
  applicants: number;
};

type KpiRow = {
  id: string;
  studentId: string;
  name: string;
  phone: string;
  college: string;
  attendance: number;
  operation: number;
  onboarding: number;
  social: number;
  assignment: number;
  total: number;
};

type Fame = {
  id: string;
  studentId: string;
  name: string;
  college: string;
  batch: string;
  category: string;
  title: string;
  year: string;
  description: string;
};

type CertFile = {
  id: string;
  fileName: string;
  studentId: string;
  name: string;
  college: string;
  phone: string;
  email: string;
  batch: string;
  ok: boolean;
  error: string;
};

type CertPack = {
  id: string;
  batch: string;
  category: string;
  file: string;
  count: string;
  uploaded: string;
  files: CertFile[];
};

type Banner = {
  id: string;
  title: string;
  status: string;
  link: string;
  image: string;
  order: string;
};

type ActivityLog = {
  id: string;
  datetime: string;
  user: string;
  module: string;
  action: string;
  record: string;
  detail: string;
};

type MasterItem = {
  id: string;
  name: string;
  extra: string;
  status: string;
};

type JoinStatus = "Pending" | "Approved" | "Rejected" | "Cancelled";

type JoinRecord = {
  id: string;
  parentId: string;
  studentId: string;
  name: string;
  college: string;
  phone: string;
  email: string;
  batch: string;
  appliedAt: string;
  status: JoinStatus;
};

type JobCandidate = {
  id: string;
  jobId: string;
  studentId: string;
  name: string;
  college: string;
  phone: string;
  email: string;
  batch: string;
  appliedAt: string;
};

const JOIN_TABS: { id: JoinStatus; label: string }[] = [
  { id: "Pending", label: "Pending" },
  { id: "Approved", label: "Approve" },
  { id: "Rejected", label: "Reject" },
  { id: "Cancelled", label: "Cancel" },
];

const SEED_STUDENTS: Student[] = [
  {
    id: "s1",
    studentId: "SA-2026-001",
    name: "Aye Chan Moe",
    college: "University of Yangon",
    region: "Yangon",
    township: "Kamayut",
    address: "No. 12, Inya Road, Kamayut",
    batch: "Batch 6",
    gender: "Female",
    age: "21",
    dob: "2005-03-14",
    payPhone: "09 250 441 102",
    contactPhone: "09 250 441 199",
    email: "ayechan.moe@uy.edu.mm",
    education: "Bachelor",
    major: "International Relations",
    graduation: "2027-05-15",
    status: "Active",
    createdAt: "2026-01-12 09:14",
    createdBy: "Program Admin",
    updatedAt: "2026-07-02 11:20",
    updatedBy: "Program Admin",
  },
  {
    id: "s2",
    studentId: "SA-2026-002",
    name: "Min Khant Kyaw",
    college: "Yangon Technological University",
    region: "Yangon",
    township: "Insein",
    address: "Hlaing Campus Hostel B",
    batch: "Batch 6",
    gender: "Male",
    age: "22",
    dob: "2004-07-02",
    payPhone: "09 421 883 190",
    contactPhone: "09 421 883 201",
    email: "minkhant.kyaw@ytu.edu.mm",
    education: "Bachelor",
    major: "Computer Engineering",
    graduation: "2026-11-20",
    status: "Active",
    createdAt: "2026-01-12 09:18",
    createdBy: "Program Admin",
    updatedAt: "2026-06-18 16:05",
    updatedBy: "Program Admin",
  },
  {
    id: "s3",
    studentId: "SA-2026-003",
    name: "Su Myat Hnin",
    college: "University of Mandalay",
    region: "Mandalay",
    township: "Chanayethazan",
    address: "78th Street, between 28th and 29th",
    batch: "Batch 5",
    gender: "Female",
    age: "23",
    dob: "2003-11-21",
    payPhone: "09 797 221 045",
    contactPhone: "09 797 221 088",
    email: "sumyat.hnin@mu.edu.mm",
    education: "Bachelor",
    major: "Economics",
    graduation: "2026-10-01",
    status: "Active",
    createdAt: "2025-11-03 10:02",
    createdBy: "Program Admin",
    updatedAt: "2026-04-22 09:40",
    updatedBy: "Program Admin",
  },
  {
    id: "s4",
    studentId: "SA-2026-004",
    name: "Thura Aung",
    college: "Dagon University",
    region: "Yangon",
    township: "North Dagon",
    address: "Ward 49, North Dagon",
    batch: "Batch 6",
    gender: "Male",
    age: "20",
    dob: "2006-01-09",
    payPhone: "09 254 019 773",
    contactPhone: "09 254 019 800",
    email: "thura.aung@dagon.edu.mm",
    education: "Bachelor",
    major: "Business Administration",
    graduation: "2028-03-30",
    status: "Blacklist",
    createdAt: "2026-02-08 13:45",
    createdBy: "Program Admin",
    updatedAt: "2026-08-01 08:12",
    updatedBy: "Program Admin",
  },
  {
    id: "s5",
    studentId: "SA-2026-005",
    name: "Khin Htet Htet",
    college: "University of Computer Studies, Yangon",
    region: "Yangon",
    township: "Hlaing",
    address: "UCSY Campus, Hlaing",
    batch: "Batch 5",
    gender: "Female",
    age: "22",
    dob: "2004-05-30",
    payPhone: "09 969 330 218",
    contactPhone: "09 969 330 250",
    email: "khinhtet@ucsy.edu.mm",
    education: "Bachelor",
    major: "Software Engineering",
    graduation: "2026-12-15",
    status: "Active",
    createdAt: "2025-11-03 10:08",
    createdBy: "Program Admin",
    updatedAt: "2026-05-19 14:33",
    updatedBy: "Program Admin",
  },
  {
    id: "s6",
    studentId: "SA-2026-006",
    name: "Zwe Yan Naing",
    college: "University of Medicine 1, Yangon",
    region: "Yangon",
    township: "Lanmadaw",
    address: "Pyay Road, Lanmadaw",
    batch: "Batch 6",
    gender: "Male",
    age: "21",
    dob: "2005-09-18",
    payPhone: "09 431 667 904",
    contactPhone: "09 431 667 910",
    email: "zweyan.naing@um1.edu.mm",
    education: "Bachelor",
    major: "Medicine",
    graduation: "2029-01-10",
    status: "Active",
    createdAt: "2026-01-20 11:55",
    createdBy: "Program Admin",
    updatedAt: "2026-07-28 17:02",
    updatedBy: "Program Admin",
  },
];
const SEED_SCHOOLS: School[] = [
  {
    id: "c1",
    college: "University of Yangon",
    region: "Yangon",
    totalStudents: "18,500",
    partnerSince: "2022",
    established: "1878",
    status: "Active",
    about: "Flagship arts and science university and founding SA partner campus.",
    contact: "Daw Ni Ni Win",
    phone: "01 535 196",
    email: "partnerships@uy.edu.mm",
    address: "University Avenue, Kamayut, Yangon",
    logo: "UY.png",
    createdAt: "2022-06-01 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-03-12 10:00",
    updatedBy: "Program Admin",
  },
  {
    id: "c2",
    college: "Yangon Technological University",
    region: "Yangon",
    totalStudents: "8,200",
    partnerSince: "2023",
    established: "1924",
    status: "Active",
    about: "Engineering campus for digital payments and campus merchant outreach.",
    contact: "U Kyaw Zeya",
    phone: "01 966 3254",
    email: "industry@ytu.edu.mm",
    address: "Insein Road, Gyogone, Yangon",
    logo: "YTU.png",
    createdAt: "2023-02-14 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-04-08 11:30",
    updatedBy: "Program Admin",
  },
  {
    id: "c3",
    college: "University of Mandalay",
    region: "Mandalay",
    totalStudents: "12,400",
    partnerSince: "2022",
    established: "1925",
    status: "Active",
    about: "Upper Myanmar hub for ambassador recruitment and regional events.",
    contact: "Daw Thin Thin Aye",
    phone: "02 406 5321",
    email: "sa@mu.edu.mm",
    address: "University Drive, Maha Aung Myay, Mandalay",
    logo: "MU.png",
    createdAt: "2022-08-20 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-02-19 15:10",
    updatedBy: "Program Admin",
  },
  {
    id: "c4",
    college: "University of Computer Studies, Yangon",
    region: "Yangon",
    totalStudents: "4,500",
    partnerSince: "2024",
    established: "1971",
    status: "Active",
    about: "Computer studies campus focused on fintech literacy workshops.",
    contact: "Dr. Aung Myat",
    phone: "01 664 399",
    email: "admin@ucsy.edu.mm",
    address: "No. 4, Main Road, Hlaing, Yangon",
    logo: "UCSY.png",
    createdAt: "2024-01-09 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-05-03 13:45",
    updatedBy: "Program Admin",
  },
];

const SEED_EVENTS: EventRec[] = [
  {
    id: "e1",
    title: "SA Orientation Day 2026",
    region: "Yangon",
    status: "Active",
    venue: "Novotel Yangon Max",
    datetime: "2026-09-12 09:00",
    regStart: "2026-08-01",
    regEnd: "2026-09-05",
    max: "200",
    summary: "Kick-off briefing for Batch 6 ambassadors covering program goals and KBZPay tools.",
    details: "SA_Orientation_2026.pdf",
    cover: "orientation-cover.jpg",
    meeting: "https://meet.kbzpay.com/sa-orientation-2026",
    registered: 164,
  },
  {
    id: "e2",
    title: "Digital Literacy Workshop",
    region: "Mandalay",
    status: "Active",
    venue: "University of Mandalay Convocation Hall",
    datetime: "2026-09-26 13:00",
    regStart: "2026-08-20",
    regEnd: "2026-09-20",
    max: "120",
    summary: "Hands-on session on safe digital payments and campus merchant onboarding.",
    details: "Digital_Literacy_MDY.pdf",
    cover: "literacy-cover.jpg",
    meeting: "https://meet.kbzpay.com/literacy-mdy",
    registered: 88,
  },
  {
    id: "e3",
    title: "Campus Outreach Day",
    region: "Naypyidaw",
    status: "Inactive",
    venue: "Naypyidaw State Academy",
    datetime: "2026-07-18 10:00",
    regStart: "2026-06-01",
    regEnd: "2026-07-10",
    max: "80",
    summary: "Closed outreach day for central region partner schools.",
    details: "Outreach_NPT.pdf",
    cover: "outreach-cover.jpg",
    meeting: "",
    registered: 76,
  },
];

const SEED_VOLUNTEERS: Volunteer[] = [
  {
    id: "v1",
    title: "Community Banking Awareness",
    region: "Yangon",
    status: "Active",
    venue: "Bahan Township Community Hall",
    datetime: "2026-10-04 08:30",
    regStart: "2026-09-01",
    regEnd: "2026-09-28",
    duration: "6 hours",
    max: "40",
    summary: "Street-level education on KBZPay cash-in, bills, and student discounts.",
    details: "Volunteer_Banking_YGN.pdf",
    cover: "vol-banking.jpg",
    registered: 31,
  },
  {
    id: "v2",
    title: "Financial Literacy Drive",
    region: "Mandalay",
    status: "Active",
    venue: "Chanayethazan Youth Center",
    datetime: "2026-10-18 09:00",
    regStart: "2026-09-10",
    regEnd: "2026-10-12",
    duration: "4 hours",
    max: "30",
    summary: "Peer coaching for first-year students on budgeting and digital wallets.",
    details: "Volunteer_Literacy_MDY.pdf",
    cover: "vol-literacy.jpg",
    registered: 22,
  },
];

const SEED_JOBS: Job[] = [
  {
    id: "j1",
    title: "Campus Marketing Intern",
    type: "Internship",
    company: "KBZPay",
    location: "Yangon",
    vacancies: "8",
    start: "2026-09-01",
    deadline: "2026-08-25",
    summary: "Support campus campaigns, booth setup, and ambassador content.",
    responsibilities: "Run weekly campus activations; collect merchant leads; report KPIs.",
    requirements: "Current SA in good standing; strong communication; own smartphone.",
    pdf: "JD_Campus_Marketing_Intern.pdf",
    cover: "job-intern.jpg",
    applicants: 42,
  },
  {
    id: "j2",
    title: "Student Ambassador Coordinator",
    type: "Full-time",
    company: "KBZPay",
    location: "Yangon",
    vacancies: "2",
    start: "2026-08-15",
    deadline: "2026-08-20",
    summary: "Coordinate regional SA batches and partner-school relationships.",
    responsibilities: "Plan events; coach ambassadors; own monthly KPI reviews.",
    requirements: "Graduate; 1+ year campus program experience; Burmese and English.",
    pdf: "JD_SA_Coordinator.pdf",
    cover: "job-coordinator.jpg",
    applicants: 19,
  },
  {
    id: "j3",
    title: "Social Media Content Associate",
    type: "Part-time",
    company: "KBZPay",
    location: "Mandalay",
    vacancies: "4",
    start: "2026-09-10",
    deadline: "2026-08-30",
    summary: "Produce short-form campus stories for KBZPay SA channels.",
    responsibilities: "Shoot and edit weekly reels; moderate comments; track reach.",
    requirements: "Portfolio of campus content; Batch 5 or 6 ambassador preferred.",
    pdf: "JD_Content_Associate.pdf",
    cover: "job-content.jpg",
    applicants: 27,
  },
];

function asJoin(
  id: string,
  parentId: string,
  student: Student,
  appliedAt: string,
  status: JoinStatus,
): JoinRecord {
  return {
    id,
    parentId,
    studentId: student.studentId,
    name: student.name,
    college: student.college,
    phone: student.payPhone,
    email: student.email,
    batch: student.batch,
    appliedAt,
    status,
  };
}

function asCandidate(
  id: string,
  jobId: string,
  student: Student,
  appliedAt: string,
): JobCandidate {
  return {
    id,
    jobId,
    studentId: student.studentId,
    name: student.name,
    college: student.college,
    phone: student.payPhone,
    email: student.email,
    batch: student.batch,
    appliedAt,
  };
}

const SS = SEED_STUDENTS;

const SEED_JOINS: JoinRecord[] = [
  asJoin("e1p1", "e1", SS[0], "2026-08-02", "Pending"),
  asJoin("e1p2", "e1", SS[1], "2026-08-03", "Pending"),
  asJoin("e1p3", "e1", SS[2], "2026-08-04", "Approved"),
  asJoin("e1p4", "e1", SS[3], "2026-08-05", "Approved"),
  asJoin("e1p5", "e1", SS[4], "2026-08-06", "Rejected"),
  asJoin("e1p6", "e1", SS[5], "2026-08-07", "Cancelled"),
  asJoin("e2p1", "e2", SS[0], "2026-08-21", "Approved"),
  asJoin("e2p2", "e2", SS[1], "2026-08-22", "Rejected"),
  asJoin("e2p3", "e2", SS[2], "2026-08-23", "Pending"),
  asJoin("e2p4", "e2", SS[3], "2026-08-24", "Cancelled"),
  asJoin("e2p5", "e2", SS[4], "2026-08-25", "Pending"),
  asJoin("e2p6", "e2", SS[5], "2026-08-26", "Approved"),
  asJoin("e3p1", "e3", SS[0], "2026-06-04", "Cancelled"),
  asJoin("e3p2", "e3", SS[1], "2026-06-05", "Approved"),
  asJoin("e3p3", "e3", SS[2], "2026-06-06", "Rejected"),
  asJoin("e3p4", "e3", SS[3], "2026-06-07", "Pending"),
  asJoin("e3p5", "e3", SS[4], "2026-06-08", "Approved"),
  asJoin("e3p6", "e3", SS[5], "2026-06-09", "Pending"),
  asJoin("v1p1", "v1", SS[0], "2026-09-02", "Pending"),
  asJoin("v1p2", "v1", SS[1], "2026-09-03", "Pending"),
  asJoin("v1p3", "v1", SS[2], "2026-09-04", "Approved"),
  asJoin("v1p4", "v1", SS[3], "2026-09-05", "Approved"),
  asJoin("v1p5", "v1", SS[4], "2026-09-06", "Rejected"),
  asJoin("v1p6", "v1", SS[5], "2026-09-07", "Cancelled"),
  asJoin("v2p1", "v2", SS[0], "2026-09-12", "Approved"),
  asJoin("v2p2", "v2", SS[1], "2026-09-13", "Pending"),
  asJoin("v2p3", "v2", SS[2], "2026-09-14", "Pending"),
  asJoin("v2p4", "v2", SS[3], "2026-09-15", "Rejected"),
  asJoin("v2p5", "v2", SS[4], "2026-09-16", "Cancelled"),
  asJoin("v2p6", "v2", SS[5], "2026-09-17", "Approved"),
];

const SEED_CANDIDATES: JobCandidate[] = [
  asCandidate("j1c1", "j1", SS[0], "2026-08-04"),
  asCandidate("j1c2", "j1", SS[1], "2026-08-06"),
  asCandidate("j1c3", "j1", SS[3], "2026-08-08"),
  asCandidate("j1c4", "j1", SS[4], "2026-08-10"),
  asCandidate("j2c1", "j2", SS[2], "2026-08-03"),
  asCandidate("j2c2", "j2", SS[5], "2026-08-07"),
  asCandidate("j2c3", "j2", SS[0], "2026-08-11"),
  asCandidate("j3c1", "j3", SS[1], "2026-08-12"),
  asCandidate("j3c2", "j3", SS[2], "2026-08-14"),
  asCandidate("j3c3", "j3", SS[4], "2026-08-16"),
  asCandidate("j3c4", "j3", SS[5], "2026-08-18"),
];

const SEED_KPI: KpiRow[] = [
  {
    id: "k1",
    studentId: "SA-2026-001",
    name: "Aye Chan Moe",
    phone: "09 250 441 102",
    college: "University of Yangon",
    attendance: 96,
    operation: 88,
    onboarding: 92,
    social: 85,
    assignment: 90,
    total: 90,
  },
  {
    id: "k2",
    studentId: "SA-2026-002",
    name: "Min Khant Kyaw",
    phone: "09 421 883 190",
    college: "Yangon Technological University",
    attendance: 91,
    operation: 94,
    onboarding: 80,
    social: 88,
    assignment: 86,
    total: 88,
  },
  {
    id: "k3",
    studentId: "SA-2026-003",
    name: "Su Myat Hnin",
    phone: "09 797 221 045",
    college: "University of Mandalay",
    attendance: 98,
    operation: 90,
    onboarding: 95,
    social: 93,
    assignment: 94,
    total: 94,
  },
  {
    id: "k4",
    studentId: "SA-2026-004",
    name: "Thura Aung",
    phone: "09 254 019 773",
    college: "Dagon University",
    attendance: 84,
    operation: 79,
    onboarding: 88,
    social: 81,
    assignment: 76,
    total: 82,
  },
  {
    id: "k5",
    studentId: "SA-2026-005",
    name: "Khin Htet Htet",
    phone: "09 969 330 218",
    college: "University of Computer Studies, Yangon",
    attendance: 93,
    operation: 91,
    onboarding: 89,
    social: 97,
    assignment: 92,
    total: 92,
  },
  {
    id: "k6",
    studentId: "SA-2026-006",
    name: "Zwe Yan Naing",
    phone: "09 431 667 904",
    college: "University of Medicine 1, Yangon",
    attendance: 87,
    operation: 83,
    onboarding: 85,
    social: 74,
    assignment: 88,
    total: 83,
  },
];

const SEED_FAME: Fame[] = [
  {
    id: "f1",
    studentId: "SA-2026-003",
    name: "Su Myat Hnin",
    college: "University of Mandalay",
    batch: "Batch 5",
    category: "Top Performer",
    title: "National KPI Champion",
    year: "2025",
    description: "Highest combined KPI across attendance, operations, and assignments.",
  },
  {
    id: "f2",
    studentId: "SA-2026-005",
    name: "Khin Htet Htet",
    college: "University of Computer Studies, Yangon",
    batch: "Batch 5",
    category: "Social Media Excellence",
    title: "Best Campus Storyteller",
    year: "2025",
    description: "Led Batch 5 social reach with consistent weekly campus content.",
  },
  {
    id: "f3",
    studentId: "SA-2026-001",
    name: "Aye Chan Moe",
    college: "University of Yangon",
    batch: "Batch 6",
    category: "Leadership",
    title: "Batch Lead — Yangon",
    year: "2026",
    description: "Coordinated orientation logistics and peer onboarding for 40 ambassadors.",
  },
  {
    id: "f4",
    studentId: "SA-2026-002",
    name: "Min Khant Kyaw",
    college: "Yangon Technological University",
    batch: "Batch 6",
    category: "Community Impact",
    title: "Merchant Onboarding Star",
    year: "2026",
    description: "Onboarded 28 campus merchants during the digital literacy drive.",
  },
];

function studentIdFromFile(fileName: string) {
  const found = fileName.match(/SA-\d{4}-\d+/i);
  return found ? found[0].toUpperCase() : "";
}

function reviewZipEntries(
  entries: Array<{ fileName: string; studentId: string }>,
  batch: string,
  all: Student[],
  idPrefix: string,
): CertFile[] {
  return entries.map((entry, i) => {
    const sid = entry.studentId || studentIdFromFile(entry.fileName);
    const student = all.find((s) => s.studentId === sid);
    if (!sid) {
      return {
        id: `${idPrefix}-${i}`,
        fileName: entry.fileName,
        studentId: "—",
        name: "—",
        college: "—",
        phone: "—",
        email: "—",
        batch: "—",
        ok: false,
        error: "File name does not match a student ID",
      };
    }
    if (!student) {
      return {
        id: `${idPrefix}-${i}`,
        fileName: entry.fileName,
        studentId: sid,
        name: "—",
        college: "—",
        phone: "—",
        email: "—",
        batch: "—",
        ok: false,
        error: "Student ID not found in student records",
      };
    }
    if (student.batch !== batch) {
      return {
        id: `${idPrefix}-${i}`,
        fileName: entry.fileName,
        studentId: student.studentId,
        name: student.name,
        college: student.college,
        phone: student.payPhone,
        email: student.email,
        batch: student.batch,
        ok: false,
        error: `Not in ${batch} student list`,
      };
    }
    return {
      id: `${idPrefix}-${i}`,
      fileName: entry.fileName,
      studentId: student.studentId,
      name: student.name,
      college: student.college,
      phone: student.payPhone,
      email: student.email,
      batch: student.batch,
      ok: true,
      error: "",
    };
  });
}

function zipEntriesForBatch(batch: string, all: Student[], withErrors: boolean) {
  const inBatch = all.filter((s) => s.batch === batch);
  const others = all.filter((s) => s.batch !== batch);
  const entries = inBatch.map((s) => ({
    fileName: `${s.studentId}_${s.name.replace(/ /g, "")}.pdf`,
    studentId: s.studentId,
  }));
  if (withErrors) {
    others.slice(0, 2).forEach((s) => {
      entries.push({
        fileName: `${s.studentId}_${s.name.replace(/ /g, "")}.pdf`,
        studentId: s.studentId,
      });
    });
    entries.push({
      fileName: "SA-2024-099_GuestSpeaker.pdf",
      studentId: "SA-2024-099",
    });
    entries.push({
      fileName: "certificate_unlabeled.pdf",
      studentId: "",
    });
  }
  return entries;
}

function simulateZip(fileName: string, batch: string, all: Student[]) {
  return reviewZipEntries(zipEntriesForBatch(batch, all, true), batch, all, fileName);
}

function filesForPack(id: string, batch: string, withErrors: boolean) {
  return reviewZipEntries(
    zipEntriesForBatch(batch, SEED_STUDENTS, withErrors),
    batch,
    SEED_STUDENTS,
    id,
  );
}

const SEED_CERTS: CertPack[] = [
  {
    id: "z1",
    batch: "Batch 5",
    category: "Completion",
    file: "SA_Batch5_Completion.zip",
    count: "2 certificates",
    uploaded: "2026-03-12",
    files: filesForPack("z1", "Batch 5", false),
  },
  {
    id: "z2",
    batch: "Batch 5",
    category: "Excellence",
    file: "SA_Batch5_Excellence.zip",
    count: "2 certificates",
    uploaded: "2026-03-12",
    files: filesForPack("z2", "Batch 5", false),
  },
  {
    id: "z3",
    batch: "Batch 6",
    category: "Participation",
    file: "SA_Batch6_Participation.zip",
    count: "4 certificates",
    uploaded: "2026-07-02",
    files: filesForPack("z3", "Batch 6", true),
  },
];

const SEED_BANNERS: Banner[] = [
  {
    id: "b1",
    title: "Welcome Batch 6",
    status: "Active",
    link: "/events/orientation-2026",
    image: "banner-batch6.jpg",
    order: "1",
  },
  {
    id: "b2",
    title: "Campus Recruitment Drive",
    status: "Active",
    link: "/jobs",
    image: "banner-recruit.jpg",
    order: "2",
  },
  {
    id: "b3",
    title: "Hall of Fame 2025",
    status: "Inactive",
    link: "/hall-of-fame",
    image: "banner-fame.jpg",
    order: "3",
  },
];

const SEED_ACTIVITY: ActivityLog[] = [
  {
    id: "al1",
    datetime: "2026-08-16 10:32",
    user: "Program Admin",
    module: "Event Management",
    action: "Restore",
    record: "Aye Chan Moe · SA Orientation Day 2026",
    detail: "Restored a cancelled participant to Approved.",
  },
  {
    id: "al2",
    datetime: "2026-08-16 10:18",
    user: "Program Admin",
    module: "Volunteer Management",
    action: "Cancel",
    record: "Zwe Yan Naing · Community Banking Awareness",
    detail: "Cancelled an approved volunteer participant.",
  },
  {
    id: "al3",
    datetime: "2026-08-16 10:13",
    user: "Program Admin",
    module: "Student Record",
    action: "Update",
    record: "SA-2026-004 Thura Aung",
    detail: "Status changed from Active to Blacklist.",
  },
  {
    id: "al4",
    datetime: "2026-08-14 11:22",
    user: "Program Admin",
    module: "Certificate Management",
    action: "Upload",
    record: "SA_Batch6_Participation.zip",
    detail: "ZIP checked against Batch 6. 4 matched, 4 files not in the batch list.",
  },
  {
    id: "al5",
    datetime: "2026-08-14 11:05",
    user: "Program Admin",
    module: "Event Management",
    action: "Approve",
    record: "Min Khant Kyaw · SA Orientation Day 2026",
    detail: "Approved a pending event registration.",
  },
  {
    id: "al6",
    datetime: "2026-08-12 16:40",
    user: "Program Admin",
    module: "Partner School",
    action: "Update",
    record: "University of Yangon",
    detail: "Updated contact person and partner since year.",
  },
  {
    id: "al7",
    datetime: "2026-08-08 09:14",
    user: "Program Admin",
    module: "Job Management",
    action: "Create",
    record: "Campus Marketing Intern",
    detail: "Posted a new internship with 8 vacancies.",
  },
  {
    id: "al8",
    datetime: "2026-07-28 17:02",
    user: "Program Admin",
    module: "Student Record",
    action: "Update",
    record: "SA-2026-006 Zwe Yan Naing",
    detail: "Updated contact phone number.",
  },
  {
    id: "al9",
    datetime: "2026-07-02 09:00",
    user: "Program Admin",
    module: "Banner Management",
    action: "Create",
    record: "Welcome Batch 6",
    detail: "Published the Batch 6 welcome banner.",
  },
  {
    id: "al10",
    datetime: "2026-03-12 09:14",
    user: "Program Admin",
    module: "Hall of Fame",
    action: "Create",
    record: "Aye Chan Moe · Top Performer 2025",
    detail: "Added a Hall of Fame award record.",
  },
];

const SEED_AWARDS: MasterItem[] = [
  { id: "a1", name: "Top Performer", extra: "Highest overall KPI", status: "Active" },
  { id: "a2", name: "Leadership", extra: "Batch and campus leads", status: "Active" },
  { id: "a3", name: "Community Impact", extra: "Outreach and merchant work", status: "Active" },
  { id: "a4", name: "Social Media Excellence", extra: "Content and reach", status: "Active" },
];

const SEED_BATCHES: MasterItem[] = [
  { id: "bt4", name: "Batch 4", extra: "2024", status: "Inactive" },
  { id: "bt5", name: "Batch 5", extra: "2025", status: "Active" },
  { id: "bt6", name: "Batch 6", extra: "2026", status: "Active" },
  { id: "bt7", name: "Batch 7", extra: "2027", status: "Active" },
];

const SEED_REGIONS: MasterItem[] = [
  { id: "r1", name: "Yangon", extra: "YGN", status: "Active" },
  { id: "r2", name: "Mandalay", extra: "MDY", status: "Active" },
  { id: "r3", name: "Naypyidaw", extra: "NPT", status: "Active" },
  { id: "r4", name: "Ayeyarwady", extra: "AYY", status: "Active" },
  { id: "r5", name: "Shan State", extra: "SHN", status: "Active" },
];

const SEED_CERT_CATS: MasterItem[] = [
  { id: "cc1", name: "Completion", extra: "Program completion", status: "Active" },
  { id: "cc2", name: "Excellence", extra: "High KPI recognition", status: "Active" },
  { id: "cc3", name: "Participation", extra: "Event attendance", status: "Active" },
  { id: "cc4", name: "Leadership", extra: "Batch lead certificate", status: "Active" },
];

const DASH_NAV: { id: PageId; label: string; icon: string }[] = [
  { id: "dash-exec", label: "Executive Dashboard", icon: "grid" },
  { id: "dash-student", label: "Student Dashboard", icon: "users" },
  { id: "dash-school", label: "Partner School Dashboard", icon: "school" },
  { id: "dash-activity", label: "Activities Dashboard", icon: "calendar" },
  { id: "dash-fame", label: "Hall of Fame Dashboard", icon: "award" },
];

const PROGRAM_NAV: { id: PageId; label: string; icon: string }[] = [
  { id: "students", label: "Student Record", icon: "users" },
  { id: "schools", label: "Partner School", icon: "school" },
];

const ANNOUNCE_NAV: { id: PageId; label: string; icon: string }[] = [
  { id: "events", label: "Event Management", icon: "calendar" },
  { id: "volunteers", label: "Volunteer Management", icon: "heart" },
  { id: "jobs", label: "Job Management", icon: "briefcase" },
];

const PROGRAM_NAV_AFTER: { id: PageId; label: string; icon: string }[] = [
  { id: "kpi", label: "KPI Management", icon: "chart" },
  { id: "fame", label: "Hall of Fame", icon: "award" },
  { id: "certificates", label: "Certificate Management", icon: "file" },
  { id: "banners", label: "Banner Management", icon: "image" },
  { id: "activity", label: "Activity Log", icon: "log" },
];

const MASTER_NAV: { id: PageId; label: string; icon: string }[] = [
  { id: "award-category", label: "Award Category", icon: "tag" },
  { id: "sa-batch", label: "SA Batch", icon: "layers" },
  { id: "training-region", label: "Training Region", icon: "map" },
  { id: "certificate-category", label: "Certificate Category", icon: "badge" },
];

const STATUS_OPTS = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const SA_STATUS_OPTS = [
  { value: "Active", label: "Active" },
  { value: "Blacklist", label: "Blacklist" },
];

const GENDER_OPTS = [
  { value: "Female", label: "Female" },
  { value: "Male", label: "Male" },
];

const JOB_TYPES = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Internship", label: "Internship" },
  { value: "Contract", label: "Contract" },
];

function uid(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}`;
}

function matches(hay: string, q: string) {
  return hay.toLowerCase().includes(q.toLowerCase());
}

function inDateRange(createdAt: string, from: string, to: string) {
  const day = (createdAt || "").slice(0, 10);
  if (!day) return true;
  if (from && day < from) return false;
  if (to && day > to) return false;
  return true;
}

function nextStudentId(rows: Student[]) {
  const nums = rows.map((r) => Number(r.studentId.split("-").pop() || "0"));
  const n = Math.max(0, ...nums) + 1;
  return `SA-2026-${String(n).padStart(3, "0")}`;
}

function auditPairs(row: Record<string, string>): Array<[string, string]> {
  return [
    ["Created date & time", row.createdAt || "2026-03-12 09:14"],
    ["Created by", row.createdBy || "Program Admin"],
    ["Updated date & time", row.updatedAt || "2026-08-14 11:22"],
    ["Updated by", row.updatedBy || "Program Admin"],
  ];
}

function stampAudit(row: Record<string, string>, isEdit: boolean) {
  const now = "2026-08-16 10:13";
  return {
    createdAt: isEdit && row.createdAt ? row.createdAt : now,
    createdBy: isEdit && row.createdBy ? row.createdBy : "Program Admin",
    updatedAt: now,
    updatedBy: "Program Admin",
  };
}

function downloadCsv(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

const STUDENT_TEMPLATE =
  "SA ID,Student Name,College Name,Training Region,Township,SA Batch,Gender,Age,Date of Birth,Pay Phone Number,Contact Phone Number,Email,Education,Major,Expected Graduation Date,Address,Status\nSA-2026-000,Sample Ambassador,University of Yangon,Yangon,Kamayut,Batch 6,Female,21,2005-01-01,09 000 000 000,09 000 000 001,sample.sa@uy.edu.mm,Bachelor,International Relations,2027-05-15,No. 1 Sample Street,Active\n";

const KPI_TEMPLATE =
  "Student ID,Student Name,Contact Number,College Name,Attendance,Operation Performance,Onboarding,Social Media,Assignment,Total KPI (%)\nSA-2026-001,Aye Chan Moe,09 250 441 102,University of Yangon,96,88,92,85,90,90\n";

function TemplateButton({
  filename,
  csv,
}: {
  filename: string;
  csv: string;
}) {
  return (
    <div
      className="sa-template"
      onClick={() => downloadCsv(filename, csv)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        borderRadius: 6,
        background: WHITE,
        border: `1px solid ${LINE}`,
        color: BRAND,
        fontFamily: FONT,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      <LineIcon name="download" color={BRAND} size={15} />
      Sample template
    </div>
  );
}

function StatusMark({ value }: { value: string; key?: string }) {
  const on = value === "Active";
  const blocked = value === "Blacklist";
  return (
    <div
      className={blocked ? "sa-status-block" : on ? "sa-status-on" : "sa-status-off"}
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 999,
        fontFamily: FONT,
        fontSize: 11,
        fontWeight: 600,
        background: blocked ? "#FDECEC" : on ? SOFT : "#F3F4F6",
        color: blocked ? "#C62828" : on ? BRAND : MUTED,
      }}
    >
      {value}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children?: Parameters<typeof Stack>[0]["children"];
}) {
  return (
    <Stack gap={4}>
      <Text size="small" weight="medium">
        {label}
      </Text>
      {children}
    </Stack>
  );
}

function FilePick({
  label,
  accept,
  value,
  onChange,
}: {
  label: string;
  accept: string;
  value: string;
  onChange: (name: string) => void;
}) {
  return (
    <Field label={label}>
      <input
        type="file"
        accept={accept}
        style={{
          fontFamily: FONT,
          fontSize: 12,
          color: t.text.secondary,
          background: WHITE,
          width: "100%",
        }}
        onChange={(e: { target?: { files?: Array<{ name: string }> } }) => {
          const list = e.target?.files;
          const name = list && list[0] ? list[0].name : "";
          if (name) onChange(name);
        }}
      />
      {value ? (
        <Text size="small" tone="secondary">
          Selected: {value}
        </Text>
      ) : null}
    </Field>
  );
}

function BrandButton({
  children,
  onClick,
  disabled,
}: {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      className="sa-primary-btn"
      onClick={disabled ? undefined : onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 14px",
        borderRadius: 6,
        background: "#002c76",
        color: WHITE,
        fontFamily: FONT,
        fontSize: 13,
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  );
}

function NavItem({
  label,
  icon,
  active,
  indent,
  onClick,
}: {
  key?: string;
  label: string;
  icon: string;
  active: boolean;
  indent?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: FONT,
        fontSize: 13,
        lineHeight: "18px",
        fontWeight: active ? 600 : 400,
        color: active ? BRAND : MUTED,
        background: active ? SOFT : "transparent",
        padding: indent ? "8px 12px 8px 36px" : "8px 12px",
        borderRadius: 8,
        cursor: "pointer",
      }}
    >
      {active ? (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 8,
            bottom: 8,
            width: 3,
            borderRadius: 2,
            background: BRAND,
          }}
        />
      ) : null}
      <LineIcon name={icon} color={active ? BRAND : MUTED} />
      {label}
    </div>
  );
}

function Toast({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 60,
        background: WHITE,
        color: INK,
        fontFamily: FONT,
        fontSize: 13,
        fontWeight: 500,
        padding: "10px 12px",
        borderRadius: 8,
        border: `1px solid ${SUCCESS}`,
        display: "flex",
        alignItems: "center",
        gap: 10,
        minWidth: 240,
      }}
    >
      <LineIcon name="check" color={SUCCESS} />
      <span style={{ flex: 1, color: INK }}>{message}</span>
      <IconButton title="Close" onClick={onClose}>
        <span style={{ fontSize: 13, color: MUTED }}>x</span>
      </IconButton>
    </div>
  );
}

function ModalShell({
  title,
  children,
  onClose,
  wide,
}: {
  title: string;
  children?: Parameters<typeof Stack>[0]["children"];
  onClose: () => void;
  wide?: boolean;
}) {
  return (
    <div
      className="sa-modal"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(0, 20, 48, 0.32)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: FONT,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e: { stopPropagation?: () => void }) => {
          e.stopPropagation?.();
        }}
        style={{
          width: wide ? "min(920px, 100%)" : "min(760px, 100%)",
          maxHeight: "88vh",
          overflow: "auto",
          background: WHITE,
          border: `1px solid ${t.stroke.secondary}`,
          borderRadius: 8,
          padding: 20,
          color: t.text.primary,
        }}
      >
        <Row align="center">
          <H2>{title}</H2>
          <Spacer />
          <IconButton title="Close" onClick={onClose}>
            <span style={{ fontSize: 14, color: t.text.secondary }}>x</span>
          </IconButton>
        </Row>
        <Divider />
        <Stack gap={14}>{children}</Stack>
      </div>
    </div>
  );
}

function CertFileTable({ files }: { files: CertFile[] }) {
  return (
    <div className="sa-plain-table" style={{ overflow: "auto", background: WHITE, borderRadius: 8 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: FONT,
          fontSize: 13,
        }}
      >
        <thead>
          <tr>
            {[
              "File",
              "Student ID",
              "Student Name",
              "College Name",
              "SA Batch",
              "Note",
            ].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "10px 12px",
                  background: SOFT,
                  color: BRAND,
                  fontWeight: 600,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {files.map((row) => (
            <tr key={row.id} className={row.ok ? undefined : "sa-cert-error"}>
              <td style={{ padding: "10px 12px" }}>{row.fileName}</td>
              <td style={{ padding: "10px 12px" }}>{row.studentId}</td>
              <td style={{ padding: "10px 12px" }}>{row.name}</td>
              <td style={{ padding: "10px 12px" }}>{row.college}</td>
              <td style={{ padding: "10px 12px" }}>{row.batch}</td>
              <td style={{ padding: "10px 12px" }}>{row.error || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PageIntro({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  const section =
    MASTER_TITLES.indexOf(title) >= 0
      ? "Master Setup"
      : ANNOUNCE_TITLES.indexOf(title) >= 0
        ? "Announcement"
        : DASH_TITLES.indexOf(title) >= 0
          ? "Dashboard"
          : "Program";
  return (
    <Stack gap={6}>
      <H1 style={mergeStyle({ color: INK, fontFamily: FONT })}>{title}</H1>
      <Text size="small" tone="secondary" style={{ color: MUTED, fontFamily: FONT }}>
        KBZPay SA &gt; {section} &gt; {title}
      </Text>
      <Text tone="secondary" style={{ color: MUTED }}>
        {body}
      </Text>
    </Stack>
  );
}

function DashStat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: WHITE,
        padding: 14,
        borderRadius: 8,
        border: `1px solid ${LINE}`,
      }}
    >
      <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
        {label}
      </Text>
      <H2 style={mergeStyle({ color: BRAND, fontFamily: FONT, marginTop: 4 })}>
        {value}
      </H2>
    </div>
  );
}

function ChartPanel({
  title,
  axes,
  caption,
  children,
}: {
  title: string;
  axes: string;
  caption: string;
  children?: Parameters<typeof Stack>[0]["children"];
}) {
  return (
    <div
      style={{
        background: WHITE,
        padding: 16,
        borderRadius: 8,
        border: `1px solid ${LINE}`,
      }}
    >
      <Stack gap={8}>
        <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>{title}</H2>
        <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
          {axes}
        </Text>
        {children}
        <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
          {caption}
        </Text>
      </Stack>
    </div>
  );
}

function tally(values: string[]) {
  const map: Record<string, number> = {};
  values.forEach((v) => {
    map[v] = (map[v] || 0) + 1;
  });
  const labels = Object.keys(map);
  return { labels, data: labels.map((k) => map[k]) };
}

function parseCount(value: string) {
  return Number(String(value).replace(/,/g, "")) || 0;
}

const MONTH_LABEL: Record<string, string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

function ymLabel(ym: string) {
  const parts = ym.split("-");
  return `${MONTH_LABEL[parts[1]] || parts[1]} ${parts[0]}`;
}

function unique(values: string[]) {
  const seen: Record<string, boolean> = {};
  const out: string[] = [];
  values.forEach((v) => {
    if (!seen[v]) {
      seen[v] = true;
      out.push(v);
    }
  });
  return out;
}

function DashboardView({
  page,
  students,
  schools,
  events,
  volunteers,
  jobs,
  fame,
  kpis,
  joins,
  candidates,
}: {
  page: PageId;
  students: Student[];
  schools: School[];
  events: EventRec[];
  volunteers: Volunteer[];
  jobs: Job[];
  fame: Fame[];
  kpis: KpiRow[];
  joins: JoinRecord[];
  candidates: JobCandidate[];
}) {
  const caption = "Source: KBZPay SA admin records · Jan–Aug 2026";
  const activeSa = students.filter((s) => s.status === "Active").length;
  const blacklistSa = students.filter((s) => s.status === "Blacklist").length;
  const regionTally = tally(students.map((s) => s.region));
  const statusPie = tally(students.map((s) => s.status));
  const rosterMonths = ["2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"];
  const rosterCounts = rosterMonths.map(
    (ym) => students.filter((s) => s.createdAt.slice(0, 7) <= ym).length,
  );
  const batchTally = tally(students.map((s) => s.batch));
  const collegeTally = tally(students.map((s) => s.college));
  const genderTally = tally(students.map((s) => s.gender));
  const gradYears = unique(students.map((s) => s.graduation.slice(0, 4))).sort();
  const gradCounts = gradYears.map(
    (y) => students.filter((s) => s.graduation.slice(0, 4) === y).length,
  );
  const enrollCats = schools.map((s) => s.college);
  const enrollData = schools.map((s) => parseCount(s.totalStudents));
  const schoolRegion = tally(schools.map((s) => s.region));
  const sinceTally = tally(schools.map((s) => s.partnerSince));
  const campusHeadcount = schools.reduce((sum, s) => sum + parseCount(s.totalStudents), 0);
  const actRegions = unique([
    ...events.map((e) => e.region),
    ...volunteers.map((v) => v.region),
    ...jobs.map((j) => j.location),
  ]);
  const eventByRegion = actRegions.map((r) => events.filter((e) => e.region === r).length);
  const volByRegion = actRegions.map((r) => volunteers.filter((v) => v.region === r).length);
  const jobByRegion = actRegions.map((r) => jobs.filter((j) => j.location === r).length);
  const applyMonths = unique(
    [...joins.map((j) => j.appliedAt.slice(0, 7)), ...candidates.map((c) => c.appliedAt.slice(0, 7))],
  ).sort();
  const eventIds: Record<string, boolean> = {};
  events.forEach((e) => {
    eventIds[e.id] = true;
  });
  const volIds: Record<string, boolean> = {};
  volunteers.forEach((v) => {
    volIds[v.id] = true;
  });
  const eventRegs = applyMonths.map(
    (ym) => joins.filter((j) => eventIds[j.parentId] && j.appliedAt.slice(0, 7) === ym).length,
  );
  const volRegs = applyMonths.map(
    (ym) => joins.filter((j) => volIds[j.parentId] && j.appliedAt.slice(0, 7) === ym).length,
  );
  const jobRegs = applyMonths.map(
    (ym) => candidates.filter((c) => c.appliedAt.slice(0, 7) === ym).length,
  );
  const mixPie = [
    { label: "Events", value: events.length },
    { label: "Volunteer drives", value: volunteers.length },
    { label: "Jobs", value: jobs.length },
  ].filter((d) => d.value > 0);
  const upcoming = [
    ...events.map((e) => ({
      kind: "Event",
      title: e.title,
      when: e.datetime,
      place: `${e.region} · ${e.venue}`,
      count: String(e.registered),
    })),
    ...volunteers.map((v) => ({
      kind: "Volunteer",
      title: v.title,
      when: v.datetime,
      place: `${v.region} · ${v.venue}`,
      count: String(v.registered),
    })),
  ]
    .filter((row) => row.when >= "2026-08-01")
    .sort((a, b) => (a.when < b.when ? -1 : 1));
  const fameCat = tally(fame.map((f) => f.category));
  const fameBatch = tally(fame.map((f) => f.batch));
  const fameYear = tally(fame.map((f) => f.year));
  const avgKpi =
    kpis.length > 0
      ? Math.round(kpis.reduce((sum, k) => sum + k.total, 0) / kpis.length)
      : 0;

  if (page === "dash-exec") {
    return (
      <Stack gap={16}>
        <PageIntro
          title="Executive Dashboard"
          body="Program snapshot of ambassadors, partner schools, activities, and Hall of Fame awards."
        />
        <Grid columns={4} gap={12}>
          <DashStat label="Student ambassadors" value={String(students.length)} />
          <DashStat label="Partner schools" value={String(schools.length)} />
          <DashStat
            label="Activity listings"
            value={String(events.length + volunteers.length + jobs.length)}
          />
          <DashStat label="Hall of Fame awards" value={String(fame.length)} />
        </Grid>
        <ChartPanel
          title="Ambassador roster size by month"
          axes="Month (x) · Cumulative ambassadors on file (y)"
          caption={`${caption}. Cumulative count of records with created date on or before each month.`}
        >
          <LineChart
            categories={rosterMonths.map(ymLabel)}
            series={[{ name: "Ambassadors on file", data: rosterCounts }]}
            fill
            height={220}
            showValues
          />
        </ChartPanel>
        <Grid columns={2} gap={12}>
          <ChartPanel
            title="Ambassadors by training region"
            axes="Training region (x) · Ambassador count (y)"
            caption={caption}
          >
            <BarChart
              categories={regionTally.labels}
              series={[{ name: "Ambassadors", data: regionTally.data }]}
              height={220}
            />
          </ChartPanel>
          <ChartPanel
            title="Ambassador status mix"
            axes="Status (slices) · Share of roster (%)"
            caption={`${caption}. Active vs Blacklist.`}
          >
            <PieChart
              donut
              data={statusPie.labels.map((label, i) => ({
                label,
                value: statusPie.data[i],
                tone: label === "Active" ? "success" : "danger",
              }))}
            />
          </ChartPanel>
        </Grid>
        {kpis.length ? (
          <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
            Mean combined KPI across {kpis.length} scored ambassadors: {avgKpi} points.
          </Text>
        ) : null}
      </Stack>
    );
  }

  if (page === "dash-student") {
    return (
      <Stack gap={16}>
        <PageIntro
          title="Student Dashboard"
          body="Ambassador composition by batch, college, gender, and expected graduation year."
        />
        <Grid columns={4} gap={12}>
          <DashStat label="Active ambassadors" value={String(activeSa)} />
          <DashStat label="Blacklist" value={String(blacklistSa)} />
          <DashStat label="Colleges represented" value={String(collegeTally.labels.length)} />
          <DashStat label="Batches on file" value={String(batchTally.labels.length)} />
        </Grid>
        <Grid columns={2} gap={12}>
          <ChartPanel
            title="Ambassadors by SA batch"
            axes="SA batch (x) · Ambassador count (y)"
            caption={caption}
          >
            <BarChart
              categories={batchTally.labels}
              series={[{ name: "Ambassadors", data: batchTally.data }]}
              height={220}
            />
          </ChartPanel>
          <ChartPanel
            title="Gender mix of ambassadors"
            axes="Gender (slices) · Share of roster (%)"
            caption={caption}
          >
            <PieChart
              donut
              data={genderTally.labels.map((label, i) => ({
                label,
                value: genderTally.data[i],
              }))}
            />
          </ChartPanel>
        </Grid>
        <ChartPanel
          title="Ambassadors by partner college"
          axes="Ambassador count (x) · College name (y)"
          caption={caption}
        >
          <BarChart
            horizontal
            categories={collegeTally.labels}
            series={[{ name: "Ambassadors", data: collegeTally.data }]}
            height={Math.max(220, collegeTally.labels.length * 42)}
          />
        </ChartPanel>
        <ChartPanel
          title="Expected graduation year"
          axes="Graduation year (x) · Ambassador count (y)"
          caption={`${caption}. Year taken from expected graduation date.`}
        >
          <LineChart
            categories={gradYears}
            series={[{ name: "Ambassadors graduating", data: gradCounts }]}
            fill
            height={200}
            showValues
          />
        </ChartPanel>
      </Stack>
    );
  }

  if (page === "dash-school") {
    return (
      <Stack gap={16}>
        <PageIntro
          title="Partner School Dashboard"
          body="Partner campus enrollment, regional coverage, and year each school joined the program."
        />
        <Grid columns={3} gap={12}>
          <DashStat label="Partner schools" value={String(schools.length)} />
          <DashStat label="Campus headcount" value={campusHeadcount.toLocaleString()} />
          <DashStat label="Regions covered" value={String(schoolRegion.labels.length)} />
        </Grid>
        <ChartPanel
          title="Campus enrollment at partner schools"
          axes="College name (y) · Enrolled students, headcount (x)"
          caption={`${caption}. Headcount is the college total, not SA roster size.`}
        >
          <BarChart
            horizontal
            categories={enrollCats}
            series={[{ name: "Campus enrollment", data: enrollData }]}
            height={Math.max(220, enrollCats.length * 48)}
          />
        </ChartPanel>
        <Grid columns={2} gap={12}>
          <ChartPanel
            title="Partner schools by region"
            axes="Region (slices) · Share of partner schools (%)"
            caption={caption}
          >
            <PieChart
              donut
              data={schoolRegion.labels.map((label, i) => ({
                label,
                value: schoolRegion.data[i],
              }))}
            />
          </ChartPanel>
          <ChartPanel
            title="Schools by partner-since year"
            axes="Year joined (x) · Partner school count (y)"
            caption={caption}
          >
            <BarChart
              categories={sinceTally.labels}
              series={[{ name: "Partner schools", data: sinceTally.data }]}
              height={220}
            />
          </ChartPanel>
        </Grid>
      </Stack>
    );
  }

  if (page === "dash-activity") {
    return (
      <Stack gap={16}>
        <PageIntro
          title="Activities Dashboard"
          body="Events, volunteer drives, and jobs by region, plus monthly registrations from ambassador applications."
        />
        <Grid columns={4} gap={12}>
          <DashStat label="Events" value={String(events.length)} />
          <DashStat label="Volunteer drives" value={String(volunteers.length)} />
          <DashStat label="Job listings" value={String(jobs.length)} />
          <DashStat
            label="Applications on file"
            value={String(joins.length + candidates.length)}
          />
        </Grid>
        <ChartPanel
          title="Activity listings by region"
          axes="Region (x) · Listing count (y)"
          caption={`${caption}. Jobs use posting location as region.`}
        >
          <BarChart
            categories={actRegions}
            series={[
              { name: "Events", data: eventByRegion },
              { name: "Volunteer drives", data: volByRegion },
              { name: "Jobs", data: jobByRegion },
            ]}
            height={240}
          />
        </ChartPanel>
        <Grid columns={2} gap={12}>
          <ChartPanel
            title="Monthly applications"
            axes="Application month (x) · Application count (y)"
            caption={`${caption}. Event and volunteer counts from join records; jobs from candidate applications.`}
          >
            <LineChart
              categories={applyMonths.map(ymLabel)}
              series={[
                { name: "Event applications", data: eventRegs },
                { name: "Volunteer applications", data: volRegs },
                { name: "Job applications", data: jobRegs },
              ]}
              fill
              height={220}
            />
          </ChartPanel>
          <ChartPanel
            title="Activity mix"
            axes="Activity type (slices) · Share of listings (%)"
            caption={caption}
          >
            <PieChart donut data={mixPie} />
          </ChartPanel>
        </Grid>
        {upcoming.length ? (
          <Stack gap={8}>
            <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
              Upcoming events and volunteer drives
            </H2>
            <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
              Scheduled from Aug 2026 onward · registered headcount as of the listing record
            </Text>
            <div className="sa-plain-table">
              <Table
                striped
                headers={["Type", "Title", "Date and time", "Place", "Registered"]}
                columnAlign={["left", "left", "left", "left", "right"]}
                rows={upcoming.map((row) => [
                  row.kind,
                  row.title,
                  row.when,
                  row.place,
                  row.count,
                ])}
              />
            </div>
            <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
              {caption}
            </Text>
          </Stack>
        ) : null}
      </Stack>
    );
  }

  return (
    <Stack gap={16}>
      <PageIntro
        title="Hall of Fame Dashboard"
        body="Award distribution by category, SA batch, and recognition year."
      />
      <Grid columns={3} gap={12}>
        <DashStat label="Awards recorded" value={String(fame.length)} />
        <DashStat label="Award categories" value={String(fameCat.labels.length)} />
        <DashStat label="Batches recognized" value={String(fameBatch.labels.length)} />
      </Grid>
      <ChartPanel
        title="Awards by category"
        axes="Award category (x) · Award count (y)"
        caption={caption}
      >
        <BarChart
          categories={fameCat.labels}
          series={[{ name: "Awards", data: fameCat.data }]}
          height={240}
        />
      </ChartPanel>
      <Grid columns={2} gap={12}>
        <ChartPanel
          title="Awards by SA batch"
          axes="SA batch (slices) · Share of awards (%)"
          caption={caption}
        >
          <PieChart
            donut
            data={fameBatch.labels.map((label, i) => ({
              label,
              value: fameBatch.data[i],
            }))}
          />
        </ChartPanel>
        <ChartPanel
          title="Awards by recognition year"
          axes="Year (x) · Award count (y)"
          caption={caption}
        >
          <BarChart
            categories={fameYear.labels}
            series={[{ name: "Awards", data: fameYear.data }]}
            height={220}
          />
        </ChartPanel>
      </Grid>
    </Stack>
  );
}

function SearchField({
  value,
  onChange,
  placeholder,
  width,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  width?: number;
}) {
  return (
    <div style={{ position: "relative", width: width || 280 }}>
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 6,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <LineIcon name="search" color={MUTED} size={15} />
      </div>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          paddingLeft: 32,
          borderRadius: 20,
          background: WHITE,
          border: `1px solid ${LINE}`,
          fontFamily: FONT,
        }}
      />
    </div>
  );
}

function DateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Field label={label}>
      <input
        className="sa-date"
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          height: 32,
          padding: "0 10px",
          borderRadius: 8,
          border: `1px solid ${LINE}`,
          fontFamily: FONT,
          fontSize: 13,
          background: WHITE,
          color: INK,
        }}
      />
    </Field>
  );
}

function FilterToggle({
  open,
  count,
  onClick,
}: {
  open: boolean;
  count: number;
  onClick: () => void;
}) {
  const on = open || count > 0;
  return (
    <div
      className={on ? "sa-adv-btn-on" : "sa-adv-btn"}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        borderRadius: 6,
        cursor: "pointer",
        fontFamily: FONT,
        fontSize: 13,
        fontWeight: 600,
        border: `1px solid ${on ? "#002c76" : LINE}`,
        background: on ? BRAND : WHITE,
        color: on ? WHITE : BRAND,
        whiteSpace: "nowrap",
      }}
    >
      <LineIcon name="filter" color={on ? WHITE : BRAND} size={14} />
      Advanced filter{count ? ` (${count})` : ""}
    </div>
  );
}

function TablePager({ total }: { total: number }) {
  return (
    <Row align="center" gap={10}>
      <Text size="small" style={{ color: MUTED }}>
        Show 10 entries
      </Text>
      <Text size="small" style={{ color: MUTED }}>
        Total : {total}
      </Text>
      <Spacer />
      <Row gap={6} align="center">
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 4,
            border: `1px solid ${LINE}`,
            background: WHITE,
            color: MUTED,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT,
            fontSize: 12,
          }}
        >
          &lt;
        </div>
        <div
          className="sa-page-on"
          style={{
            width: 28,
            height: 28,
            borderRadius: 4,
            background: BRAND,
            color: WHITE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          1
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 4,
            border: `1px solid ${LINE}`,
            background: WHITE,
            color: MUTED,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT,
            fontSize: 12,
          }}
        >
          &gt;
        </div>
      </Row>
    </Row>
  );
}

function Thumb({
  label,
  wide,
}: {
  key?: string;
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      style={{
        width: wide ? "100%" : 36,
        height: wide ? 88 : 36,
        borderRadius: 4,
        background: BRAND,
        color: "#ffffff",
        fontFamily: FONT,
        fontSize: wide ? 12 : 10,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: 0.3,
        flexShrink: 0,
      }}
      className="sa-thumb"
    >
      {label}
    </div>
  );
}

function ViewDetailsBtn({
  onClick,
}: {
  key?: string;
  onClick: () => void;
}) {
  return (
    <div
      className="sa-chip-view"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 6,
        background: SOFT,
        color: BRAND,
        fontFamily: FONT,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      <LineIcon name="eye" color={BRAND} size={14} />
      View Details
    </div>
  );
}

function MiniAction({
  kind,
  label,
  onClick,
}: {
  key?: string;
  kind: "approve" | "reject" | "cancel" | "restore";
  label: string;
  onClick: () => void;
}) {
  const cls =
    kind === "approve" || kind === "restore"
      ? "sa-chip-edit"
      : kind === "reject"
        ? "sa-chip-delete"
        : "sa-chip-cancel";
  const primary = kind === "approve" || kind === "restore";
  return (
    <div
      className={cls}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 10px",
        borderRadius: 6,
        fontFamily: FONT,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        background: primary ? BRAND : kind === "reject" ? "#FDECEC" : "#F3F4F6",
        color: primary ? WHITE : kind === "reject" ? "#C62828" : MUTED,
      }}
    >
      {label}
    </div>
  );
}

function JoinTabs({
  value,
  counts,
  onChange,
}: {
  value: JoinStatus;
  counts: Record<JoinStatus, number>;
  onChange: (tab: JoinStatus) => void;
}) {
  return (
    <Row gap={8} align="center">
      {JOIN_TABS.map((tab) => {
        const on = value === tab.id;
        return (
          <div
            key={tab.id}
            className={on ? "sa-tab-on" : "sa-tab-off"}
            onClick={() => onChange(tab.id)}
            style={{
              padding: "7px 14px",
              borderRadius: 6,
              fontFamily: FONT,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              background: on ? BRAND : WHITE,
              color: on ? WHITE : MUTED,
              border: on ? "1px solid #002c76" : `1px solid ${LINE}`,
            }}
          >
            {tab.label} ({counts[tab.id]})
          </div>
        );
      })}
    </Row>
  );
}

function ReadGrid({ pairs }: { pairs: Array<[string, string]> }) {
  return (
    <Grid columns={2} gap={12}>
      {pairs.map(([k, v]) => (
        <div key={k}>
          <Stack gap={2}>
            <Text size="small" tone="tertiary">
              {k}
            </Text>
            <Text weight="medium">{v || "—"}</Text>
          </Stack>
        </div>
      ))}
    </Grid>
  );
}

export default function StudentManagementPortal() {
  const [page, setPage] = useCanvasState<PageId>("page", "students");
  const [masterOpen, setMasterOpen] = useCanvasState("masterOpen", true);
  const [announceOpen, setAnnounceOpen] = useCanvasState("announceOpen", true);
  const [dashOpen, setDashOpen] = useCanvasState("dashOpen", true);
  const [modal, setModal] = useCanvasState<ModalMode>("modal", "closed");
  const [editId, setEditId] = useCanvasState("editId", "");
  const [toast, setToast] = useCanvasState("toast", "");
  const [form, setForm] = useCanvasState<Record<string, string>>("form", {});
  const [search, setSearch] = useCanvasState("search", "");
  const [regionFilter, setRegionFilter] = useCanvasState("regionFilter", "All");
  const [batchFilter, setBatchFilter] = useCanvasState("batchFilter", "All");
  const [collegeFilter, setCollegeFilter] = useCanvasState("collegeFilter", "All");
  const [statusFilter, setStatusFilter] = useCanvasState("statusFilter", "All");
  const [dateFrom, setDateFrom] = useCanvasState("dateFrom", "");
  const [dateTo, setDateTo] = useCanvasState("dateTo", "");
  const [advOpen, setAdvOpen] = useCanvasState("advOpen", false);
  const [kpiImported, setKpiImported] = useCanvasState("kpiImported", "");
  const [navOpen, setNavOpen] = useCanvasState("navOpen", true);
  const [detailId, setDetailId] = useCanvasState("detailId", "");
  const [menuId, setMenuId] = useCanvasState("menuId", "");
  const [partTab, setPartTab] = useCanvasState<JoinStatus>("partTab", "Pending");
  const [certZipFiles, setCertZipFiles] = useCanvasState<CertFile[]>(
    "certZipFiles",
    [],
  );

  const [students, setStudents] = useCanvasState<Student[]>("saStudents", SEED_STUDENTS);
  const [schools, setSchools] = useCanvasState<School[]>("saSchools", SEED_SCHOOLS);
  const [events, setEvents] = useCanvasState<EventRec[]>("events", SEED_EVENTS);
  const [volunteers, setVolunteers] = useCanvasState<Volunteer[]>(
    "volunteers",
    SEED_VOLUNTEERS,
  );
  const [jobs, setJobs] = useCanvasState<Job[]>("jobs", SEED_JOBS);
  const [joins, setJoins] = useCanvasState<JoinRecord[]>("joins", SEED_JOINS);
  const [candidates] = useCanvasState<JobCandidate[]>(
    "candidates",
    SEED_CANDIDATES,
  );
  const [kpis, setKpis] = useCanvasState<KpiRow[]>("kpis", SEED_KPI);
  const [fame, setFame] = useCanvasState<Fame[]>("fame", SEED_FAME);
  const [certs, setCerts] = useCanvasState<CertPack[]>("certPacks", SEED_CERTS);
  const [banners, setBanners] = useCanvasState<Banner[]>("banners", SEED_BANNERS);
  const [logs] = useCanvasState<ActivityLog[]>("activityLogs", SEED_ACTIVITY);
  const [awards, setAwards] = useCanvasState<MasterItem[]>("awards", SEED_AWARDS);
  const [batches, setBatches] = useCanvasState<MasterItem[]>("batches", SEED_BATCHES);
  const [regions, setRegions] = useCanvasState<MasterItem[]>("regions", SEED_REGIONS);
  const [certCats, setCertCats] = useCanvasState<MasterItem[]>(
    "certCats",
    SEED_CERT_CATS,
  );

  const regionOpts = [
    { value: "All", label: "All regions" },
    ...regions.map((r) => ({ value: r.name, label: r.name })),
  ];
  const batchOpts = [
    { value: "All", label: "All batches" },
    ...batches.map((b) => ({ value: b.name, label: b.name })),
  ];
  const regionSelect = regions.map((r) => ({ value: r.name, label: r.name }));
  const batchSelect = batches.map((b) => ({ value: b.name, label: b.name }));
  const collegeSelect = schools.map((s) => ({ value: s.college, label: s.college }));
  const collegeOpts = [
    { value: "All", label: "All colleges" },
    ...collegeSelect,
  ];
  const schoolStatusOpts = [
    { value: "All", label: "All statuses" },
    ...STATUS_OPTS,
  ];
  const awardSelect = awards.map((a) => ({ value: a.name, label: a.name }));
  const certCatSelect = certCats.map((c) => ({ value: c.name, label: c.name }));

  function flash(message: string) {
    setToast(message);
    setTimeout(() => setToast(""), 2800);
  }

  function openAdd(defaults: Record<string, string>) {
    setForm(defaults);
    setEditId("");
    setModal("add");
    setCertZipFiles([]);
  }

  function openEdit(id: string, defaults: Record<string, string>) {
    setForm(defaults);
    setEditId(id);
    setModal("edit");
  }

  function openDetails(id: string, defaults: Record<string, string>) {
    setForm(defaults);
    setEditId(id);
    setDetailId(id);
    setMenuId("");
    setPartTab("Pending");
  }

  function closeDetails() {
    setDetailId("");
    setMenuId("");
    setPartTab("Pending");
  }

  function openView(id: string, defaults: Record<string, string>) {
    openDetails(id, defaults);
  }

  function closeModal() {
    setModal("closed");
    if (!detailId) setEditId("");
    setCertZipFiles([]);
  }

  function setField(key: string, value: string) {
    setForm({ ...form, [key]: value });
  }

  function go(id: PageId) {
    setPage(id);
    setSearch("");
    setRegionFilter("All");
    setBatchFilter("All");
    setCollegeFilter("All");
    setStatusFilter("All");
    setDateFrom("");
    setDateTo("");
    setAdvOpen(false);
    setModal("closed");
    setKpiImported("");
    setDetailId("");
    setMenuId("");
    setPartTab("Pending");
    if (DASH_NAV.some((item) => item.id === id)) setDashOpen(true);
    if (ANNOUNCE_NAV.some((item) => item.id === id)) setAnnounceOpen(true);
    if (MASTER_NAV.some((item) => item.id === id)) setMasterOpen(true);
  }

  const q = search.trim();

  const detailJoins = joins.filter((j) => j.parentId === detailId);
  const joinCounts: Record<JoinStatus, number> = {
    Pending: detailJoins.filter((j) => j.status === "Pending").length,
    Approved: detailJoins.filter((j) => j.status === "Approved").length,
    Rejected: detailJoins.filter((j) => j.status === "Rejected").length,
    Cancelled: detailJoins.filter((j) => j.status === "Cancelled").length,
  };
  const tabJoins = detailJoins.filter((j) => j.status === partTab);
  const detailCandidates = candidates.filter((c) => c.jobId === detailId);
  const detailCert = certs.find((c) => c.id === detailId);

  function moveJoin(id: string, status: JoinStatus, message: string) {
    setJoins(joins.map((j) => (j.id === id ? { ...j, status } : j)));
    flash(message);
  }

  const filteredStudents = students.filter((s) => {
    if (regionFilter !== "All" && s.region !== regionFilter) return false;
    if (batchFilter !== "All" && s.batch !== batchFilter) return false;
    if (collegeFilter !== "All" && s.college !== collegeFilter) return false;
    if (!inDateRange(s.createdAt, dateFrom, dateTo)) return false;
    if (!q) return true;
    return matches(s.studentId, q) || matches(s.name, q);
  });

  const filteredSchools = schools.filter((s) => {
    if (regionFilter !== "All" && s.region !== regionFilter) return false;
    if (statusFilter !== "All" && s.status !== statusFilter) return false;
    if (!inDateRange(s.createdAt, dateFrom, dateTo)) return false;
    if (!q) return true;
    return matches(s.college, q);
  });

  const studentAdvCount =
    (batchFilter !== "All" ? 1 : 0) +
    (collegeFilter !== "All" ? 1 : 0) +
    (regionFilter !== "All" ? 1 : 0) +
    (dateFrom ? 1 : 0) +
    (dateTo ? 1 : 0);

  const schoolAdvCount =
    (regionFilter !== "All" ? 1 : 0) +
    (statusFilter !== "All" ? 1 : 0) +
    (dateFrom ? 1 : 0) +
    (dateTo ? 1 : 0);

  function clearAdvFilters() {
    setBatchFilter("All");
    setCollegeFilter("All");
    setRegionFilter("All");
    setStatusFilter("All");
    setDateFrom("");
    setDateTo("");
  }

  const filteredLogs = logs.filter((row) =>
    q
      ? matches(
          `${row.datetime} ${row.user} ${row.module} ${row.action} ${row.record} ${row.detail}`,
          q,
        )
      : true,
  );

  const masterMeta: Record<
    string,
    {
      title: string;
      body: string;
      extraLabel: string;
      items: MasterItem[];
      setItems: (rows: MasterItem[]) => void;
    }
  > = {
    "award-category": {
      title: "Award Category",
      body: "Create and maintain award categories used on Hall of Fame records.",
      extraLabel: "Description",
      items: awards,
      setItems: setAwards,
    },
    "sa-batch": {
      title: "SA Batch",
      body: "Manage Student Ambassador batches used across records, certificates, and KPI imports.",
      extraLabel: "Year",
      items: batches,
      setItems: setBatches,
    },
    "training-region": {
      title: "Training Region",
      body: "Maintain training regions for student records, events, and volunteer assignments.",
      extraLabel: "Code",
      items: regions,
      setItems: setRegions,
    },
    "certificate-category": {
      title: "Certificate Category",
      body: "Define certificate types used when uploading ZIP packages by batch.",
      extraLabel: "Notes",
      items: certCats,
      setItems: setCertCats,
    },
  };

  const isMaster = page in masterMeta;
  const master = isMaster ? masterMeta[page] : null;
  const masterFiltered = master
    ? master.items.filter((item) =>
        q ? matches(`${item.name} ${item.extra} ${item.status}`, q) : true,
      )
    : [];

  const detailTitle =
    form.name ||
    form.title ||
    form.college ||
    form.file ||
    form.action ||
    form.record ||
    "Record details";

  function detailPairs(): Array<[string, string]> {
    if (page === "students") {
      return [
        ["SA ID", form.studentId],
        ["Student Name", form.name],
        ["College Name", form.college],
        ["Training Region", form.region],
        ["Township", form.township],
        ["SA Batch", form.batch],
        ["Gender", form.gender],
        ["Age", form.age],
        ["Date of Birth", form.dob],
        ["Pay Phone Number", form.payPhone],
        ["Contact Phone Number", form.contactPhone],
        ["Email", form.email],
        ["Education", form.education],
        ["Major", form.major],
        ["Expected Graduation Date", form.graduation],
        ["Address", form.address],
        ["Status", form.status],
        ...auditPairs(form),
      ];
    }
    if (page === "schools") {
      return [
        ["College Name", form.college],
        ["Region", form.region],
        ["Total Students", form.totalStudents],
        ["Partner Since", form.partnerSince],
        ["Year Established", form.established],
        ["Status", form.status],
        ["Contact Person", form.contact],
        ["Phone Number", form.phone],
        ["Email", form.email],
        ["College Address", form.address],
        ["College Logo", form.logo],
        ["About School", form.about],
        ...auditPairs(form),
      ];
    }
    if (page === "events") {
      return [
        ["Event Title", form.title],
        ["Region", form.region],
        ["Status", form.status],
        ["Event Venue", form.venue],
        ["Event Date and Time", form.datetime],
        ["Registration Start Date", form.regStart],
        ["Registration End Date", form.regEnd],
        ["Maximum Participants", form.max],
        ["Registered", form.registered],
        ["Event Summary", form.summary],
        ["Event Details", form.details],
        ["Event Cover Image", form.cover],
        ["Meeting Link", form.meeting],
        ...auditPairs(form),
      ];
    }
    if (page === "volunteers") {
      return [
        ["Volunteer Title", form.title],
        ["Region", form.region],
        ["Status", form.status],
        ["Venue", form.venue],
        ["Volunteer Date and Time", form.datetime],
        ["Registration Start Date", form.regStart],
        ["Registration End Date", form.regEnd],
        ["Duration", form.duration],
        ["Maximum Participants", form.max],
        ["Registered", form.registered],
        ["Volunteer Summary", form.summary],
        ["Volunteer Details", form.details],
        ["Cover Image", form.cover],
        ...auditPairs(form),
      ];
    }
    if (page === "jobs") {
      return [
        ["Job Title", form.title],
        ["Job Type", form.type],
        ["Company Name", form.company],
        ["Location", form.location],
        ["Number of Vacancies", form.vacancies],
        ["Application Start Date", form.start],
        ["Application Deadline", form.deadline],
        ["Applicants", form.applicants],
        ["Job Summary", form.summary],
        ["Job Responsibilities", form.responsibilities],
        ["Job Requirements", form.requirements],
        ["Job Description", form.pdf],
        ["Job Cover Photo", form.cover],
        ...auditPairs(form),
      ];
    }
    if (page === "kpi") {
      return [
        ["Student ID", form.studentId],
        ["Student Name", form.name],
        ["Contact Number", form.phone],
        ["College Name", form.college],
        ["Attendance", form.attendance],
        ["Operation", form.operation],
        ["Onboarding", form.onboarding],
        ["Social Media", form.social],
        ["Assignment", form.assignment],
        ["Total KPI (%)", form.total],
        ...auditPairs(form),
      ];
    }
    if (page === "fame") {
      return [
        ["Student ID", form.studentId],
        ["Student Name", form.name],
        ["College Name", form.college],
        ["SA Batch", form.batch],
        ["Award Category", form.category],
        ["Award Title", form.title],
        ["Award Year", form.year],
        ["Achievement Description", form.description],
        ...auditPairs(form),
      ];
    }
    if (page === "certificates") {
      return [
        ["SA Batch", form.batch],
        ["Certificate Category", form.category],
        ["ZIP file", form.file],
        ["Count", form.count],
        ["Uploaded", form.uploaded],
        ...auditPairs(form),
      ];
    }
    if (page === "banners") {
      return [
        ["Banner title", form.title],
        ["Status", form.status],
        ["Link", form.link],
        ["Thumbnail", form.image],
        ["Display order", form.order],
        ...auditPairs(form),
      ];
    }
    if (page === "activity") {
      return [
        ["Date & time", form.datetime],
        ["User", form.user],
        ["Menu", form.module],
        ["Action", form.action],
        ["Record", form.record],
        ["Detail", form.detail],
      ];
    }
    if (master) {
      return [
        ["Name", form.name],
        [master.extraLabel, form.extra],
        ["Status", form.status],
        ...auditPairs(form),
      ];
    }
    return [];
  }

  return (
    <div
      className="sa-light"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        height: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        fontFamily: FONT,
        background: PAGE,
        color: INK,
      }}
    >
      <style>
        {`
          .sa-light, .sa-modal {
            color-scheme: light;
            color: ${INK};
            font-family: ${FONT};
          }
          .sa-light {
            background: ${PAGE};
            height: 100% !important;
            max-height: 100% !important;
            overflow: hidden !important;
          }
          .sa-light main {
            background: ${PAGE};
            color: ${INK};
          }
          .sa-light main h1, .sa-light main h2, .sa-light main h3,
          .sa-modal h1, .sa-modal h2, .sa-modal h3 {
            color: ${INK} !important;
            -webkit-text-fill-color: ${INK} !important;
            font-family: ${FONT} !important;
          }
          .sa-light main p, .sa-light main span, .sa-light main label,
          .sa-light main li, .sa-light main div,
          .sa-modal p, .sa-modal span, .sa-modal label,
          .sa-modal li, .sa-modal div {
            color: ${INK} !important;
            -webkit-text-fill-color: ${INK} !important;
            font-family: ${FONT} !important;
          }
          .sa-light main button, .sa-modal button {
            color: ${INK} !important;
            -webkit-text-fill-color: ${INK} !important;
            background: ${WHITE} !important;
            border: 1px solid ${LINE} !important;
            font-family: ${FONT} !important;
          }
          .sa-light main button[style*="002c76"],
          .sa-modal button[style*="002c76"],
          .sa-light main button[style*="0, 44, 118"],
          .sa-modal button[style*="0, 44, 118"] {
            color: ${WHITE} !important;
            -webkit-text-fill-color: ${WHITE} !important;
            background: #002c76 !important;
            border-color: #002c76 !important;
          }
          .sa-light main div.sa-primary-btn, .sa-modal div.sa-primary-btn {
            color: ${WHITE} !important;
            -webkit-text-fill-color: ${WHITE} !important;
            background: #002c76 !important;
          }
          .sa-light table, .sa-light th, .sa-light td,
          .sa-modal table, .sa-modal th, .sa-modal td {
            background-color: ${WHITE} !important;
            color: ${INK} !important;
            -webkit-text-fill-color: ${INK} !important;
            border: none !important;
            border-color: transparent !important;
            box-shadow: none !important;
            font-family: ${FONT} !important;
          }
          .sa-light table, .sa-modal table {
            outline: none !important;
          }
          .sa-light thead th, .sa-light thead td,
          .sa-modal thead th, .sa-modal thead td {
            background-color: ${SOFT} !important;
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            font-weight: 600 !important;
          }
          .sa-light tbody tr:nth-child(even) td {
            background-color: ${PAGE} !important;
          }
          .sa-light tbody tr.sa-cert-error td,
          .sa-modal tbody tr.sa-cert-error td,
          .sa-light tbody tr.sa-cert-error:nth-child(even) td,
          .sa-modal tbody tr.sa-cert-error:nth-child(even) td {
            background-color: #FDECEC !important;
            color: #C62828 !important;
            -webkit-text-fill-color: #C62828 !important;
          }
          .sa-light input, .sa-light select, .sa-light textarea,
          .sa-modal input, .sa-modal select, .sa-modal textarea {
            background-color: ${WHITE} !important;
            color: ${INK} !important;
            -webkit-text-fill-color: ${INK} !important;
            border: 1px solid ${LINE} !important;
            font-family: ${FONT} !important;
            border-radius: 8px !important;
            color-scheme: light !important;
          }
          .sa-light input::placeholder, .sa-light textarea::placeholder,
          .sa-modal input::placeholder, .sa-modal textarea::placeholder {
            color: ${MUTED} !important;
            -webkit-text-fill-color: ${MUTED} !important;
            opacity: 1 !important;
          }
          .sa-light option, .sa-modal option {
            background: ${WHITE} !important;
            color: ${INK} !important;
          }
          .sa-light svg text, .sa-modal svg text {
            fill: ${INK} !important;
          }
          .sa-light main div.sa-template {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            background: ${WHITE} !important;
            border: 1px solid ${LINE} !important;
          }
          .sa-light main div.sa-thumb, .sa-modal div.sa-thumb {
            color: ${WHITE} !important;
            -webkit-text-fill-color: ${WHITE} !important;
            background: ${BRAND} !important;
          }
          .sa-light main div.sa-chip-view, .sa-modal div.sa-chip-view {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            background: ${SOFT} !important;
          }
          .sa-light main div.sa-chip-edit, .sa-modal div.sa-chip-edit {
            color: ${WHITE} !important;
            -webkit-text-fill-color: ${WHITE} !important;
            background: ${BRAND} !important;
          }
          .sa-light main div.sa-chip-delete, .sa-modal div.sa-chip-delete {
            color: #C62828 !important;
            -webkit-text-fill-color: #C62828 !important;
            background: #FDECEC !important;
          }
          .sa-light main div.sa-status-on, .sa-modal div.sa-status-on {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            background: ${SOFT} !important;
          }
          .sa-light main div.sa-status-off, .sa-modal div.sa-status-off {
            color: ${MUTED} !important;
            -webkit-text-fill-color: ${MUTED} !important;
            background: #F3F4F6 !important;
          }
          .sa-light main div.sa-status-block, .sa-modal div.sa-status-block {
            color: #C62828 !important;
            -webkit-text-fill-color: #C62828 !important;
            background: #FDECEC !important;
          }
          .sa-light main thead th:last-child {
            position: sticky;
            right: 0;
            z-index: 4;
            background-color: ${SOFT} !important;
            border-left: 1px solid ${LINE} !important;
          }
          .sa-light main tbody td:last-child {
            position: sticky;
            right: 0;
            z-index: 3;
            background-color: ${WHITE} !important;
            border-left: 1px solid ${LINE} !important;
          }
          .sa-light main tbody tr:nth-child(even) td:last-child {
            background-color: ${PAGE} !important;
          }
          .sa-light main .sa-plain-table thead th:last-child,
          .sa-light main .sa-plain-table tbody td:last-child {
            position: static !important;
            border-left: none !important;
          }
          .sa-light main div.sa-menu {
            background: ${WHITE} !important;
            border: 1px solid ${LINE} !important;
          }
          .sa-light main div.sa-menu-item {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            background: ${SOFT} !important;
          }
          .sa-light main div.sa-back {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
          }
          .sa-light main div.sa-page-on {
            color: ${WHITE} !important;
            -webkit-text-fill-color: ${WHITE} !important;
            background: ${BRAND} !important;
          }
          .sa-light main div.sa-tab-on {
            color: ${WHITE} !important;
            -webkit-text-fill-color: ${WHITE} !important;
            background: #002c76 !important;
            border-color: #002c76 !important;
          }
          .sa-light main div.sa-tab-off {
            color: ${MUTED} !important;
            -webkit-text-fill-color: ${MUTED} !important;
            background: ${WHITE} !important;
          }
          .sa-light main div.sa-chip-cancel {
            color: ${MUTED} !important;
            -webkit-text-fill-color: ${MUTED} !important;
            background: #F3F4F6 !important;
          }
          .sa-light main div.sa-adv-btn {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            background: ${WHITE} !important;
          }
          .sa-light main div.sa-adv-btn-on {
            color: ${WHITE} !important;
            -webkit-text-fill-color: ${WHITE} !important;
            background: #002c76 !important;
            border-color: #002c76 !important;
          }
          .sa-light main div.sa-clear {
            color: ${MUTED} !important;
            -webkit-text-fill-color: ${MUTED} !important;
          }
        `}
      </style>
      <header
        style={{
          height: 56,
          flexShrink: 0,
          background: WHITE,
          borderBottom: `1px solid ${LINE}`,
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          gap: 12,
        }}
      >
        <div
          onClick={() => setNavOpen(!navOpen)}
          style={{ cursor: "pointer", display: "flex", padding: 4 }}
        >
          <LineIcon name="menu" color={BRAND} />
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            background: BRAND,
            color: WHITE,
            fontFamily: FONT,
            fontSize: 10,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          KBZ
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            background: SOFT,
            color: BRAND,
            fontFamily: FONT,
            fontSize: 10,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          SA
        </div>
        <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: BRAND }}>
          KBZPay Student Ambassador
        </div>
        <Spacer />
        <LineIcon name="bell" color={BRAND} />
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            background: SOFT,
            color: BRAND,
            fontFamily: FONT,
            fontSize: 11,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          PA
        </div>
        <div style={{ fontFamily: FONT, fontSize: 13, color: INK, fontWeight: 500 }}>
          Program Admin
        </div>
      </header>
      <div style={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden" }}>
      {navOpen ? (
      <aside
        style={{
          width: 248,
          flexShrink: 0,
          background: WHITE,
          color: INK,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          borderRight: `1px solid ${LINE}`,
          overflow: "auto",
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 0.6,
            color: MUTED,
            padding: "8px 12px 4px",
          }}
        >
          PROGRAM
        </div>
        <div
          onClick={() => setDashOpen(!dashOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: FONT,
            fontSize: 13,
            color: DASH_NAV.some((item) => item.id === page) ? BRAND : MUTED,
            fontWeight: DASH_NAV.some((item) => item.id === page) ? 600 : 400,
            background: DASH_NAV.some((item) => item.id === page) && !dashOpen ? SOFT : "transparent",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          <LineIcon
            name="grid"
            color={DASH_NAV.some((item) => item.id === page) ? BRAND : MUTED}
          />
          <span style={{ flex: 1 }}>Dashboard</span>
          <span style={{ fontSize: 11, color: MUTED }}>{dashOpen ? "v" : ">"}</span>
        </div>
        {dashOpen
          ? DASH_NAV.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                icon={item.icon}
                active={page === item.id}
                indent
                onClick={() => go(item.id)}
              />
            ))
          : null}
        {PROGRAM_NAV.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={page === item.id}
            onClick={() => go(item.id)}
          />
        ))}
        <div
          onClick={() => setAnnounceOpen(!announceOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: FONT,
            fontSize: 13,
            color: ANNOUNCE_NAV.some((item) => item.id === page) ? BRAND : MUTED,
            fontWeight: ANNOUNCE_NAV.some((item) => item.id === page) ? 600 : 400,
            background: ANNOUNCE_NAV.some((item) => item.id === page) && !announceOpen ? SOFT : "transparent",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          <LineIcon
            name="megaphone"
            color={ANNOUNCE_NAV.some((item) => item.id === page) ? BRAND : MUTED}
          />
          <span style={{ flex: 1 }}>Announcement</span>
          <span style={{ fontSize: 11, color: MUTED }}>{announceOpen ? "v" : ">"}</span>
        </div>
        {announceOpen
          ? ANNOUNCE_NAV.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                icon={item.icon}
                active={page === item.id}
                indent
                onClick={() => go(item.id)}
              />
            ))
          : null}
        {PROGRAM_NAV_AFTER.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={page === item.id}
            onClick={() => go(item.id)}
          />
        ))}
        <div
          onClick={() => setMasterOpen(!masterOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: FONT,
            fontSize: 13,
            color: MUTED,
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer",
            marginTop: 8,
          }}
        >
          <LineIcon name="settings" color={MUTED} />
          <span style={{ flex: 1 }}>Master Setup</span>
          <span style={{ fontSize: 11, color: MUTED }}>{masterOpen ? "v" : ">"}</span>
        </div>
        {masterOpen
          ? MASTER_NAV.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                icon={item.icon}
                active={page === item.id}
                indent
                onClick={() => go(item.id)}
              />
            ))
          : null}
      </aside>
      ) : null}

      <main
        style={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          height: "100%",
          overflow: "auto",
          padding: 24,
          background: PAGE,
          color: INK,
        }}
      >
        <Stack gap={18}>
          {detailId ? (
            <>
              <div
                className="sa-back"
                onClick={closeDetails}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  fontFamily: FONT,
                  fontSize: 13,
                  fontWeight: 600,
                  color: BRAND,
                  width: "fit-content",
                }}
              >
                <LineIcon name="back" color={BRAND} />
                Back to list
              </div>
              <H1 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                {detailTitle}
              </H1>
              <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                KBZPay SA &gt; {master ? "Master Setup" : ANNOUNCE_NAV.some((item) => item.id === page) ? "Announcement" : "Program"} &gt; Details
              </Text>
              <Row gap={8}>
                {page === "certificates" || page === "kpi" || page === "activity" ? null : (
                  <BrandButton onClick={() => setModal("edit")}>Edit</BrandButton>
                )}
              </Row>
              <div
                style={{
                  background: WHITE,
                  padding: 20,
                  borderRadius: 8,
                  border: `1px solid ${LINE}`,
                }}
              >
                <ReadGrid pairs={detailPairs()} />
              </div>
              {page === "events" || page === "volunteers" ? (
                <Stack gap={12}>
                  <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                    Participants
                  </H2>
                  <JoinTabs
                    value={partTab}
                    counts={joinCounts}
                    onChange={setPartTab}
                  />
                  {tabJoins.length ? (
                    <>
                      <Table
                        stickyHeader
                        striped
                        framed={false}
                        headers={[
                          "Student ID",
                          "Student Name",
                          "College Name",
                          "SA Batch",
                          "Phone",
                          "Email",
                          "Applied",
                          ...(partTab === "Pending" ||
                          partTab === "Approved" ||
                          partTab === "Cancelled"
                            ? ["Action"]
                            : []),
                        ]}
                        rows={tabJoins.map((row) => {
                          const cells = [
                            row.studentId,
                            row.name,
                            row.college,
                            row.batch,
                            row.phone,
                            row.email,
                            row.appliedAt,
                          ];
                          if (partTab === "Pending") {
                            cells.push(
                              <Row key={`${row.id}-act`} gap={6}>
                                <MiniAction
                                  kind="approve"
                                  label="Approve"
                                  onClick={() =>
                                    moveJoin(
                                      row.id,
                                      "Approved",
                                      "successfully approved",
                                    )
                                  }
                                />
                                <MiniAction
                                  kind="reject"
                                  label="Reject"
                                  onClick={() =>
                                    moveJoin(
                                      row.id,
                                      "Rejected",
                                      "successfully rejected",
                                    )
                                  }
                                />
                              </Row>,
                            );
                          }
                          if (partTab === "Approved") {
                            cells.push(
                              <MiniAction
                                key={`${row.id}-act`}
                                kind="cancel"
                                label="Cancel"
                                onClick={() =>
                                  moveJoin(
                                    row.id,
                                    "Cancelled",
                                    "successfully cancelled",
                                  )
                                }
                              />,
                            );
                          }
                          if (partTab === "Cancelled") {
                            cells.push(
                              <MiniAction
                                key={`${row.id}-act`}
                                kind="restore"
                                label="Restore"
                                onClick={() =>
                                  moveJoin(
                                    row.id,
                                    "Approved",
                                    "successfully restored",
                                  )
                                }
                              />,
                            );
                          }
                          return cells;
                        })}
                      />
                      <TablePager total={tabJoins.length} />
                    </>
                  ) : null}
                </Stack>
              ) : null}
              {page === "jobs" && detailCandidates.length ? (
                <Stack gap={12}>
                  <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                    Candidates
                  </H2>
                  <Table
                    stickyHeader
                    striped
                    framed={false}
                    headers={[
                      "Student ID",
                      "Student Name",
                      "College Name",
                      "SA Batch",
                      "Phone",
                      "Email",
                      "Applied",
                    ]}
                    rows={detailCandidates.map((row) => [
                      row.studentId,
                      row.name,
                      row.college,
                      row.batch,
                      row.phone,
                      row.email,
                      row.appliedAt,
                    ])}
                  />
                  <TablePager total={detailCandidates.length} />
                </Stack>
              ) : null}
              {page === "certificates" &&
              detailCert &&
              (detailCert.files || []).length ? (
                <Stack gap={12}>
                  <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                    Students
                  </H2>
                  <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                    Files in this ZIP matched against the {detailCert.batch} student
                    list. Error rows are not in that batch.
                  </Text>
                  <CertFileTable files={detailCert.files || []} />
                  <TablePager total={(detailCert.files || []).length} />
                </Stack>
              ) : null}
            </>
          ) : (
            <>
          {DASH_NAV.some((item) => item.id === page) ? (
            <DashboardView
              page={page}
              students={students}
              schools={schools}
              events={events}
              volunteers={volunteers}
              jobs={jobs}
              fame={fame}
              kpis={kpis}
              joins={joins}
              candidates={candidates}
            />
          ) : page === "students" ? (
            <>
              <PageIntro
                title="Student Record"
                body="Add, view, search, filter, and export Student Ambassador records. Import Batch files in Excel, or add a single ambassador from the popup."
              />
              <Row gap={8} align="center" wrap>
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by SA ID or student name"
                  width={280}
                />
                <FilterToggle
                  open={advOpen}
                  count={studentAdvCount}
                  onClick={() => setAdvOpen(!advOpen)}
                />
                <Spacer />
                <Button
                  variant="secondary"
                  onClick={() => flash("Student records exported")}
                >
                  Export
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setForm({ file: "" });
                    setModal("import");
                  }}
                >
                  Import Excel
                </Button>
                <TemplateButton
                  filename="SA_Student_Import_Template.csv"
                  csv={STUDENT_TEMPLATE}
                />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      studentId: nextStudentId(students),
                      name: "",
                      college: schools[0]?.college || "",
                      region: regions[0]?.name || "Yangon",
                      township: "",
                      address: "",
                      batch: batches.find((b) => b.status === "Active")?.name || "Batch 6",
                      gender: "Female",
                      age: "",
                      dob: "",
                      payPhone: "",
                      contactPhone: "",
                      email: "",
                      education: "Bachelor",
                      major: "",
                      graduation: "",
                      status: "Active",
                    })
                  }
                >
                  Add student
                </BrandButton>
              </Row>
              {advOpen ? (
                <div
                  style={{
                    background: WHITE,
                    border: `1px solid ${LINE}`,
                    borderRadius: 8,
                    padding: 14,
                  }}
                >
                  <Stack gap={12}>
                    <Row align="center">
                      <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                        Filter by batch, college, training region, and created date
                      </Text>
                      <Spacer />
                      <div
                        className="sa-clear"
                        onClick={clearAdvFilters}
                        style={{
                          fontFamily: FONT,
                          fontSize: 13,
                          fontWeight: 600,
                          color: MUTED,
                          cursor: "pointer",
                        }}
                      >
                        Clear
                      </div>
                    </Row>
                    <Grid columns={3} gap={12}>
                      <Field label="SA Batch">
                        <Select
                          value={batchFilter}
                          onChange={setBatchFilter}
                          options={batchOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <Field label="College Name">
                        <Select
                          value={collegeFilter}
                          onChange={setCollegeFilter}
                          options={collegeOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <Field label="Training Region">
                        <Select
                          value={regionFilter}
                          onChange={setRegionFilter}
                          options={regionOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <DateField label="From date" value={dateFrom} onChange={setDateFrom} />
                      <DateField label="To date" value={dateTo} onChange={setDateTo} />
                    </Grid>
                  </Stack>
                </div>
              ) : null}
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "SA ID",
                  "Student Name",
                  "College Name",
                  "Training Region",
                  "Township",
                  "SA Batch",
                  "Gender",
                  "Age",
                  "Date of Birth",
                  "Pay Phone Number",
                  "Contact Phone Number",
                  "Email",
                  "Education",
                  "Major",
                  "Expected Graduation Date",
                  "Address",
                  "Status",
                  "Action",
                ]}
                rows={filteredStudents.map((s) => [
                  s.studentId,
                  s.name,
                  s.college,
                  s.region,
                  s.township,
                  s.batch,
                  s.gender,
                  s.age,
                  s.dob,
                  s.payPhone,
                  s.contactPhone,
                  s.email,
                  s.education,
                  s.major,
                  s.graduation,
                  s.address,
                  <StatusMark key={`${s.id}-st`} value={s.status} />,
                  <ViewDetailsBtn
                    key={s.id}
                    onClick={() => openDetails(s.id, { ...s })}
                  />,
                ])}
                emptyMessage="No matching student records"
              />
              <TablePager total={filteredStudents.length} />
            </>
          ) : null}

          {page === "schools" ? (
            <>
              <PageIntro
                title="Partner School"
                body="Register each partner college with contact details, campus profile, and logo for operational reporting."
              />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by college name"
                  width={280}
                />
                <FilterToggle
                  open={advOpen}
                  count={schoolAdvCount}
                  onClick={() => setAdvOpen(!advOpen)}
                />
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      college: "",
                      region: regions[0]?.name || "Yangon",
                      totalStudents: "",
                      partnerSince: "2026",
                      established: "",
                      status: "Active",
                      about: "",
                      contact: "",
                      phone: "",
                      email: "",
                      address: "",
                      logo: "",
                    })
                  }
                >
                  Add school
                </BrandButton>
              </Row>
              {advOpen ? (
                <div
                  style={{
                    background: WHITE,
                    border: `1px solid ${LINE}`,
                    borderRadius: 8,
                    padding: 14,
                  }}
                >
                  <Stack gap={12}>
                    <Row align="center">
                      <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                        Filter by region, status, and created date
                      </Text>
                      <Spacer />
                      <div
                        className="sa-clear"
                        onClick={clearAdvFilters}
                        style={{
                          fontFamily: FONT,
                          fontSize: 13,
                          fontWeight: 600,
                          color: MUTED,
                          cursor: "pointer",
                        }}
                      >
                        Clear
                      </div>
                    </Row>
                    <Grid columns={4} gap={12}>
                      <Field label="Region">
                        <Select
                          value={regionFilter}
                          onChange={setRegionFilter}
                          options={regionOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <Field label="Status">
                        <Select
                          value={statusFilter}
                          onChange={setStatusFilter}
                          options={schoolStatusOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <DateField label="From date" value={dateFrom} onChange={setDateFrom} />
                      <DateField label="To date" value={dateTo} onChange={setDateTo} />
                    </Grid>
                  </Stack>
                </div>
              ) : null}
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "College Name",
                  "Region",
                  "Total Students",
                  "Partner Since",
                  "Year Established",
                  "Status",
                  "Contact Person",
                  "Phone Number",
                  "Email",
                  "College Address",
                  "Action",
                ]}
                rows={filteredSchools.map((s) => [
                    s.college,
                    s.region,
                    s.totalStudents,
                    s.partnerSince,
                    s.established,
                    <StatusMark key={`${s.id}-st`} value={s.status} />,
                    s.contact,
                    s.phone,
                    s.email,
                    s.address,
                    <ViewDetailsBtn
                      key={`${s.id}-a`}
                      onClick={() => openDetails(s.id, { ...s })}
                    />,
                  ])}
              />
              <TablePager total={filteredSchools.length} />
            </>
          ) : null}

          {page === "events" ? (
            <>
              <PageIntro
                title="Event Management"
                body="Create, update, and monitor KBZPay Student Ambassador events, including registration windows and participant capacity."
              />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search here ..."
                  width={280}
                />
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      title: "",
                      region: regions[0]?.name || "Yangon",
                      status: "Active",
                      venue: "",
                      datetime: "",
                      regStart: "",
                      regEnd: "",
                      max: "",
                      summary: "",
                      details: "",
                      cover: "",
                      meeting: "",
                    })
                  }
                >
                  Add event
                </BrandButton>
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                rowTone={events.map((e) =>
                  e.status === "Active" ? "success" : "neutral",
                )}
                headers={[
                  "Event Title",
                  "Region",
                  "Status",
                  "Venue",
                  "Date and Time",
                  "Reg. Start",
                  "Reg. End",
                  "Max",
                  "Registered",
                  "Meeting Link",
                  "Action",
                ]}
                rows={events
                  .filter((e) =>
                    q ? matches(`${e.title} ${e.venue} ${e.region}`, q) : true,
                  )
                  .map((e) => [
                    e.title,
                    e.region,
                    <StatusMark key={`${e.id}-st`} value={e.status} />,
                    e.venue,
                    e.datetime,
                    e.regStart,
                    e.regEnd,
                    e.max,
                    String(e.registered),
                    e.meeting ? "Linked" : "—",
                    <ViewDetailsBtn
                      key={`${e.id}-a`}
                      onClick={() =>
                        openDetails(e.id, { ...e, registered: String(e.registered) })
                      }
                    />,
                  ])}
              />
            </>
          ) : null}

          {page === "volunteers" ? (
            <>
              <PageIntro
                title="Volunteer Management"
                body="Publish volunteer activities, control registration dates, and track participant capacity by region."
              />
              <Row gap={8} align="center">
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      title: "",
                      region: regions[0]?.name || "Yangon",
                      status: "Active",
                      venue: "",
                      datetime: "",
                      regStart: "",
                      regEnd: "",
                      duration: "",
                      max: "",
                      summary: "",
                      details: "",
                      cover: "",
                    })
                  }
                >
                  Add volunteer
                </BrandButton>
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "Volunteer Title",
                  "Region",
                  "Status",
                  "Venue",
                  "Date and Time",
                  "Reg. Start",
                  "Reg. End",
                  "Duration",
                  "Max",
                  "Registered",
                  "Action",
                ]}
                rows={volunteers.map((v) => [
                  v.title,
                  v.region,
                  <StatusMark key={`${v.id}-st`} value={v.status} />,
                  v.venue,
                  v.datetime,
                  v.regStart,
                  v.regEnd,
                  v.duration,
                  v.max,
                  String(v.registered),
                  <ViewDetailsBtn
                    key={`${v.id}-a`}
                    onClick={() =>
                      openDetails(v.id, { ...v, registered: String(v.registered) })
                    }
                  />,
                ])}
              />
            </>
          ) : null}

          {page === "jobs" ? (
            <>
              <PageIntro
                title="Job Management"
                body="Post and monitor job opportunities for Student Ambassadors. Track vacancies, application windows, and incoming applicants."
              />
              <Row>
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      title: "",
                      type: "Internship",
                      company: "KBZPay",
                      location: "Yangon",
                      vacancies: "",
                      start: "",
                      deadline: "",
                      summary: "",
                      responsibilities: "",
                      requirements: "",
                      pdf: "",
                      cover: "",
                    })
                  }
                >
                  Add job
                </BrandButton>
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "Job Title",
                  "Job Type",
                  "Company",
                  "Location",
                  "Vacancies",
                  "Apply Start",
                  "Deadline",
                  "Applicants",
                  "Action",
                ]}
                rows={jobs.map((j) => [
                  j.title,
                  j.type,
                  j.company,
                  j.location,
                  j.vacancies,
                  j.start,
                  j.deadline,
                  String(j.applicants),
                  <ViewDetailsBtn
                    key={j.id}
                    onClick={() =>
                      openDetails(j.id, { ...j, applicants: String(j.applicants) })
                    }
                  />,
                ])}
              />
            </>
          ) : null}

          {page === "kpi" ? (
            <>
              <PageIntro
                title="KPI Management"
                body="Import Student Ambassador KPI scores from Excel. The portal validates rows before updating attendance, operations, onboarding, social media, assignment, and total KPI."
              />
              {kpiImported ? (
                <Callout
                  tone="success"
                  title="Validation passed"
                  style={{
                    background: "#E8F6EE",
                    color: INK,
                    border: `1px solid ${SUCCESS}`,
                  }}
                >
                  {kpiImported}
                </Callout>
              ) : null}
              <Row>
                <Spacer />
                <TemplateButton
                  filename="SA_KPI_Import_Template.csv"
                  csv={KPI_TEMPLATE}
                />
                <BrandButton
                  onClick={() => {
                    setForm({ file: "" });
                    setModal("import");
                  }}
                >
                  Import KPI
                </BrandButton>
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "Student ID",
                  "Student Name",
                  "Contact Number",
                  "College Name",
                  "Attendance",
                  "Operation",
                  "Onboarding",
                  "Social Media",
                  "Assignment",
                  "Total KPI (%)",
                  "Action",
                ]}
                columnAlign={[
                  "left",
                  "left",
                  "left",
                  "left",
                  "right",
                  "right",
                  "right",
                  "right",
                  "right",
                  "right",
                  "left",
                ]}
                rows={kpis.map((k) => [
                  k.studentId,
                  k.name,
                  k.phone,
                  k.college,
                  `${k.attendance}%`,
                  `${k.operation}%`,
                  `${k.onboarding}%`,
                  `${k.social}%`,
                  `${k.assignment}%`,
                  `${k.total}%`,
                  <ViewDetailsBtn
                    key={k.id}
                    onClick={() =>
                      openDetails(k.id, {
                        studentId: k.studentId,
                        name: k.name,
                        phone: k.phone,
                        college: k.college,
                        attendance: String(k.attendance),
                        operation: String(k.operation),
                        onboarding: String(k.onboarding),
                        social: String(k.social),
                        assignment: String(k.assignment),
                        total: String(k.total),
                      })
                    }
                  />,
                ])}
              />
            </>
          ) : null}

          {page === "fame" ? (
            <>
              <PageIntro
                title="Hall of Fame"
                body="Recognize outstanding Student Ambassadors. Add and update award records by category, title, and year."
              />
              <Row>
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      studentId: students[0]?.studentId || "",
                      name: students[0]?.name || "",
                      college: students[0]?.college || "",
                      batch: students[0]?.batch || "",
                      category: awards[0]?.name || "",
                      title: "",
                      year: "2026",
                      description: "",
                    })
                  }
                >
                  Add award
                </BrandButton>
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "Student ID",
                  "Student Name",
                  "College Name",
                  "SA Batch",
                  "Award Category",
                  "Award Title",
                  "Award Year",
                  "Achievement",
                  "Action",
                ]}
                rows={fame.map((f) => [
                  f.studentId,
                  f.name,
                  f.college,
                  f.batch,
                  f.category,
                  f.title,
                  f.year,
                  f.description,
                  <ViewDetailsBtn
                    key={f.id}
                    onClick={() => openDetails(f.id, { ...f })}
                  />,
                ])}
              />
            </>
          ) : null}

          {page === "certificates" ? (
            <>
              <PageIntro
                title="Certificate Management"
                body="Upload, manage, and distribute certificates as ZIP files organized by Student Ambassador batch and certificate category."
              />
              <Row>
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      batch: batches.find((b) => b.status === "Active")?.name || "Batch 6",
                      category: certCats[0]?.name || "Completion",
                      file: "",
                      count: "",
                    })
                  }
                >
                  Upload ZIP
                </BrandButton>
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "SA Batch",
                  "Certificate Category",
                  "ZIP file",
                  "Count",
                  "Uploaded",
                  "Action",
                ]}
                rows={certs.map((c) => [
                  c.batch,
                  c.category,
                  c.file,
                  c.count,
                  c.uploaded,
                  <ViewDetailsBtn
                    key={c.id}
                    onClick={() =>
                      openDetails(c.id, {
                        batch: c.batch,
                        category: c.category,
                        file: c.file,
                        count: c.count,
                        uploaded: c.uploaded,
                      })
                    }
                  />,
                ])}
              />
            </>
          ) : null}

          {page === "banners" ? (
            <>
              <PageIntro
                title="Banner Management"
                body="Create homepage banner thumbnails for campaigns, recruitment, and Hall of Fame highlights."
              />
              <Row>
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({
                      title: "",
                      status: "Active",
                      link: "",
                      image: "",
                      order: String(banners.length + 1),
                    })
                  }
                >
                  Add banner
                </BrandButton>
              </Row>
              <Grid columns={3} gap={14}>
                {banners.map((b) => (
                  <div key={b.id}>
                    <Card
                      style={{
                        background: WHITE,
                        color: INK,
                        border: `1px solid ${LINE}`,
                      }}
                    >
                      <CardHeader
                        style={{ background: WHITE, color: INK }}
                        trailing={
                          <StatusMark value={b.status} />
                        }
                      >
                        {b.title}
                      </CardHeader>
                      <CardBody style={{ background: WHITE, color: INK }}>
                        <Stack gap={10}>
                          <Thumb label={b.title} wide />
                          <Text size="small" tone="secondary">
                            {b.image} · order {b.order}
                          </Text>
                          <Text size="small" tone="tertiary">
                            {b.link}
                          </Text>
                          <Row>
                            <ViewDetailsBtn
                              onClick={() => openDetails(b.id, { ...b })}
                            />
                          </Row>
                        </Stack>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </Grid>
            </>
          ) : null}

          {page === "activity" ? (
            <>
              <PageIntro
                title="Activity Log"
                body="Review admin actions across Student Record, Announcement, certificates, and other program menus."
              />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search here ..."
                  width={280}
                />
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                headers={[
                  "Date & time",
                  "User",
                  "Menu",
                  "Activity",
                  "Record",
                  "Detail",
                  "Action",
                ]}
                rows={filteredLogs.map((row) => [
                  row.datetime,
                  row.user,
                  row.module,
                  row.action,
                  row.record,
                  row.detail,
                  <ViewDetailsBtn
                    key={row.id}
                    onClick={() => openDetails(row.id, { ...row })}
                  />,
                ])}
              />
              <TablePager total={filteredLogs.length} />
            </>
          ) : null}

          {master ? (
            <>
              <PageIntro title={master.title} body={master.body} />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search here ..."
                  width={280}
                />
                <Spacer />
                <BrandButton
                  onClick={() =>
                    openAdd({ name: "", extra: "", status: "Active" })
                  }
                >
                  Add record
                </BrandButton>
              </Row>
              <Table
                stickyHeader
                striped
                framed={false}
                headers={["Name", master.extraLabel, "Status", "Action"]}
                rows={masterFiltered.map((item) => [
                  item.name,
                  item.extra,
                  <StatusMark key={`${item.id}-st`} value={item.status} />,
                  <ViewDetailsBtn
                    key={`${item.id}-a`}
                    onClick={() =>
                      openDetails(item.id, {
                        name: item.name,
                        extra: item.extra,
                        status: item.status,
                      })
                    }
                  />,
                ])}
                emptyMessage="No matching records"
              />
              <TablePager total={masterFiltered.length} />
            </>
          ) : null}
            </>
          )}
        </Stack>
      </main>
      </div>

      {toast ? <Toast message={toast} onClose={() => setToast("")} /> : null}

      {modal !== "closed" && page === "students" && modal === "import" ? (
        <ModalShell title="Import Student Ambassador records" onClose={closeModal}>
          <Text tone="secondary">
            Upload an Excel (.xlsx) file. Columns must match the student list:
            Student ID through Expected Graduation.
          </Text>
          <FilePick
            label="Excel file"
            accept=".xlsx,.xls"
            value={form.file || ""}
            onChange={(name) => setField("file", name)}
          />
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              disabled={!form.file}
              onClick={() => {
                const extras: Student[] = [
                  {
                    id: uid("s"),
                    studentId: nextStudentId(students),
                    name: "Hnin Wai Lwin",
                    college: "Dagon University",
                    region: "Yangon",
                    township: "East Dagon",
                    address: "Ward 12, East Dagon",
                    batch: "Batch 6",
                    gender: "Female",
                    age: "20",
                    dob: "2006-04-11",
                    payPhone: "09 888 221 009",
                    contactPhone: "09 888 221 010",
                    email: "hninwai.lwin@dagon.edu.mm",
                    education: "Bachelor",
                    major: "English",
                    graduation: "2028-05-20",
                    status: "Active",
                    ...stampAudit({}, false),
                  },
                ];
                setStudents([...extras, ...students]);
                closeModal();
                flash("successfully added");
              }}
            >
              Import
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "students" &&
      (modal === "add" || modal === "edit" || modal === "view") ? (
        <ModalShell
          title={
            modal === "view"
              ? "Student record"
              : modal === "edit"
                ? "Edit student"
                : "Add student"
          }
          onClose={closeModal}
        >
          {modal === "view" ? (
            <ReadGrid
              pairs={[
                ["SA ID", form.studentId],
                ["Student Name", form.name],
                ["College Name", form.college],
                ["Training Region", form.region],
                ["Township", form.township],
                ["SA Batch", form.batch],
                ["Gender", form.gender],
                ["Age", form.age],
                ["Date of Birth", form.dob],
                ["Pay Phone Number", form.payPhone],
                ["Contact Phone Number", form.contactPhone],
                ["Email", form.email],
                ["Education", form.education],
                ["Major", form.major],
                ["Expected Graduation Date", form.graduation],
                ["Address", form.address],
                ["Status", form.status],
                ...auditPairs(form),
              ]}
            />
          ) : (
            <Grid columns={2} gap={12}>
              <Field label="SA ID">
                <TextInput
                  value={form.studentId || ""}
                  onChange={(v) => setField("studentId", v)}
                />
              </Field>
              <Field label="Student Name">
                <TextInput
                  value={form.name || ""}
                  onChange={(v) => setField("name", v)}
                />
              </Field>
              <Field label="College Name">
                <Select
                  value={form.college || ""}
                  onChange={(v) => setField("college", v)}
                  options={collegeSelect}
                />
              </Field>
              <Field label="Training Region">
                <Select
                  value={form.region || ""}
                  onChange={(v) => setField("region", v)}
                  options={regionSelect}
                />
              </Field>
              <Field label="Township">
                <TextInput
                  value={form.township || ""}
                  onChange={(v) => setField("township", v)}
                />
              </Field>
              <Field label="SA Batch">
                <Select
                  value={form.batch || ""}
                  onChange={(v) => setField("batch", v)}
                  options={batchSelect}
                />
              </Field>
              <Field label="Gender">
                <Select
                  value={form.gender || ""}
                  onChange={(v) => setField("gender", v)}
                  options={GENDER_OPTS}
                />
              </Field>
              <Field label="Age">
                <TextInput
                  value={form.age || ""}
                  onChange={(v) => setField("age", v)}
                />
              </Field>
              <Field label="Date of Birth">
                <TextInput
                  value={form.dob || ""}
                  onChange={(v) => setField("dob", v)}
                  placeholder="YYYY-MM-DD"
                />
              </Field>
              <Field label="Pay Phone Number">
                <TextInput
                  value={form.payPhone || ""}
                  onChange={(v) => setField("payPhone", v)}
                />
              </Field>
              <Field label="Contact Phone Number">
                <TextInput
                  value={form.contactPhone || ""}
                  onChange={(v) => setField("contactPhone", v)}
                />
              </Field>
              <Field label="Email">
                <TextInput
                  value={form.email || ""}
                  onChange={(v) => setField("email", v)}
                  type="email"
                />
              </Field>
              <Field label="Education">
                <TextInput
                  value={form.education || ""}
                  onChange={(v) => setField("education", v)}
                />
              </Field>
              <Field label="Major">
                <TextInput
                  value={form.major || ""}
                  onChange={(v) => setField("major", v)}
                />
              </Field>
              <Field label="Expected Graduation Date">
                <TextInput
                  value={form.graduation || ""}
                  onChange={(v) => setField("graduation", v)}
                  placeholder="YYYY-MM-DD"
                />
              </Field>
              <Field label="Status">
                <Select
                  value={form.status || "Active"}
                  onChange={(v) => setField("status", v)}
                  options={SA_STATUS_OPTS}
                />
              </Field>
            </Grid>
          )}
          {modal !== "view" ? (
            <Field label="Address">
              <TextArea
                value={form.address || ""}
                onChange={(v) => setField("address", v)}
                rows={2}
              />
            </Field>
          ) : null}
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              {modal === "view" ? "Close" : "Cancel"}
            </Button>
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const row: Student = {
                    id: modal === "edit" ? editId : uid("s"),
                    studentId: form.studentId || nextStudentId(students),
                    name: form.name || "New Ambassador",
                    college: form.college || "",
                    region: form.region || "",
                    township: form.township || "",
                    address: form.address || "",
                    batch: form.batch || "",
                    gender: form.gender || "",
                    age: form.age || "",
                    dob: form.dob || "",
                    payPhone: form.payPhone || "",
                    contactPhone: form.contactPhone || "",
                    email: form.email || "",
                    education: form.education || "",
                    major: form.major || "",
                    graduation: form.graduation || "",
                    status: form.status || "Active",
                    ...stampAudit(form, modal === "edit"),
                  };
                  if (modal === "edit") {
                    setStudents(students.map((s) => (s.id === editId ? row : s)));
                  } else {
                    setStudents([row, ...students]);
                  }
                  closeModal();
                  flash("successfully added");
                }}
              >
                Save
              </BrandButton>
            ) : null}
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "schools" &&
      (modal === "add" || modal === "edit" || modal === "view") ? (
        <ModalShell
          title={
            modal === "view"
              ? "Partner school"
              : modal === "edit"
                ? "Edit partner school"
                : "Add partner school"
          }
          onClose={closeModal}
        >
          {modal === "view" ? (
            <Stack gap={12}>
              <ReadGrid
                pairs={[
                  ["College Name", form.college],
                  ["Region", form.region],
                  ["Total Students", form.totalStudents],
                  ["Partner Since", form.partnerSince],
                  ["Year Established", form.established],
                  ["Status", form.status],
                  ["Contact Person", form.contact],
                  ["Phone Number", form.phone],
                  ["Email", form.email],
                  ["College Address", form.address],
                  ["College Logo", form.logo],
                  ...auditPairs(form),
                ]}
              />
              <Text>{form.about}</Text>
            </Stack>
          ) : (
            <>
              <Grid columns={2} gap={12}>
                <Field label="College Name">
                  <TextInput
                    value={form.college || ""}
                    onChange={(v) => setField("college", v)}
                  />
                </Field>
                <Field label="Region">
                  <Select
                    value={form.region || ""}
                    onChange={(v) => setField("region", v)}
                    options={regionSelect}
                  />
                </Field>
                <Field label="Total Students">
                  <TextInput
                    value={form.totalStudents || ""}
                    onChange={(v) => setField("totalStudents", v)}
                  />
                </Field>
                <Field label="Partner Since">
                  <TextInput
                    value={form.partnerSince || ""}
                    onChange={(v) => setField("partnerSince", v)}
                  />
                </Field>
                <Field label="Year Established">
                  <TextInput
                    value={form.established || ""}
                    onChange={(v) => setField("established", v)}
                  />
                </Field>
                <Field label="Status">
                  <Select
                    value={form.status || "Active"}
                    onChange={(v) => setField("status", v)}
                    options={STATUS_OPTS}
                  />
                </Field>
                <Field label="Contact Person">
                  <TextInput
                    value={form.contact || ""}
                    onChange={(v) => setField("contact", v)}
                  />
                </Field>
                <Field label="Phone Number">
                  <TextInput
                    value={form.phone || ""}
                    onChange={(v) => setField("phone", v)}
                  />
                </Field>
                <Field label="Email Address">
                  <TextInput
                    value={form.email || ""}
                    onChange={(v) => setField("email", v)}
                  />
                </Field>
                <FilePick
                  label="College Logo"
                  accept="image/*"
                  value={form.logo || ""}
                  onChange={(n) => setField("logo", n)}
                />
              </Grid>
              <Field label="College Address">
                <TextInput
                  value={form.address || ""}
                  onChange={(v) => setField("address", v)}
                />
              </Field>
              <Field label="About School">
                <TextArea
                  value={form.about || ""}
                  onChange={(v) => setField("about", v)}
                  rows={3}
                />
              </Field>
            </>
          )}
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              {modal === "view" ? "Close" : "Cancel"}
            </Button>
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const row: School = {
                    id: modal === "edit" ? editId : uid("c"),
                    college: form.college || "New College",
                    region: form.region || "",
                    totalStudents: form.totalStudents || "0",
                    partnerSince: form.partnerSince || "",
                    established: form.established || "",
                    status: form.status || "Active",
                    about: form.about || "",
                    contact: form.contact || "",
                    phone: form.phone || "",
                    email: form.email || "",
                    address: form.address || "",
                    logo: form.logo || "logo.png",
                    ...stampAudit(form, modal === "edit"),
                  };
                  setSchools(
                    modal === "edit"
                      ? schools.map((s) => (s.id === editId ? row : s))
                      : [row, ...schools],
                  );
                  closeModal();
                  flash("successfully added");
                }}
              >
                Save
              </BrandButton>
            ) : null}
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "events" &&
      (modal === "add" || modal === "edit" || modal === "view") ? (
        <ModalShell
          title={
            modal === "view"
              ? "Event"
              : modal === "edit"
                ? "Edit event"
                : "Add event"
          }
          onClose={closeModal}
        >
          {modal === "view" ? (
            <ReadGrid
              pairs={[
                ["Event Title", form.title],
                ["Region", form.region],
                ["Status", form.status],
                ["Event Venue", form.venue],
                ["Event Date and Time", form.datetime],
                ["Registration Start Date", form.regStart],
                ["Registration End Date", form.regEnd],
                ["Maximum Participants", form.max],
                ["Event Summary", form.summary],
                ["Event Details", form.details],
                ["Event Cover Image", form.cover],
                ["Meeting Link", form.meeting],
              ]}
            />
          ) : (
            <>
              <Grid columns={2} gap={12}>
                <Field label="Event Title">
                  <TextInput
                    value={form.title || ""}
                    onChange={(v) => setField("title", v)}
                  />
                </Field>
                <Field label="Region">
                  <Select
                    value={form.region || ""}
                    onChange={(v) => setField("region", v)}
                    options={regionSelect}
                  />
                </Field>
                <Field label="Status">
                  <Select
                    value={form.status || "Active"}
                    onChange={(v) => setField("status", v)}
                    options={STATUS_OPTS}
                  />
                </Field>
                <Field label="Event Venue">
                  <TextInput
                    value={form.venue || ""}
                    onChange={(v) => setField("venue", v)}
                  />
                </Field>
                <Field label="Event Date and Time">
                  <TextInput
                    value={form.datetime || ""}
                    onChange={(v) => setField("datetime", v)}
                    placeholder="YYYY-MM-DD HH:MM"
                  />
                </Field>
                <Field label="Maximum Participants">
                  <TextInput
                    value={form.max || ""}
                    onChange={(v) => setField("max", v)}
                  />
                </Field>
                <Field label="Registration Start Date">
                  <TextInput
                    value={form.regStart || ""}
                    onChange={(v) => setField("regStart", v)}
                  />
                </Field>
                <Field label="Registration End Date">
                  <TextInput
                    value={form.regEnd || ""}
                    onChange={(v) => setField("regEnd", v)}
                  />
                </Field>
                <FilePick
                  label="Event Details (PDF)"
                  accept=".pdf"
                  value={form.details || ""}
                  onChange={(n) => setField("details", n)}
                />
                <FilePick
                  label="Event Cover Image"
                  accept="image/*"
                  value={form.cover || ""}
                  onChange={(n) => setField("cover", n)}
                />
              </Grid>
              <Field label="Meeting Link">
                <TextInput
                  value={form.meeting || ""}
                  onChange={(v) => setField("meeting", v)}
                  type="url"
                />
              </Field>
              <Field label="Event Summary">
                <TextArea
                  value={form.summary || ""}
                  onChange={(v) => setField("summary", v)}
                  rows={3}
                />
              </Field>
            </>
          )}
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              {modal === "view" ? "Close" : "Cancel"}
            </Button>
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const existing = events.find((e) => e.id === editId);
                  const row: EventRec = {
                    id: modal === "edit" ? editId : uid("e"),
                    title: form.title || "New Event",
                    region: form.region || "",
                    status: form.status || "Active",
                    venue: form.venue || "",
                    datetime: form.datetime || "",
                    regStart: form.regStart || "",
                    regEnd: form.regEnd || "",
                    max: form.max || "0",
                    summary: form.summary || "",
                    details: form.details || "",
                    cover: form.cover || "",
                    meeting: form.meeting || "",
                    registered: existing?.registered || 0,
                  };
                  setEvents(
                    modal === "edit"
                      ? events.map((e) => (e.id === editId ? row : e))
                      : [row, ...events],
                  );
                  closeModal();
                  flash("successfully added");
                }}
              >
                Save
              </BrandButton>
            ) : null}
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "volunteers" &&
      (modal === "add" || modal === "edit" || modal === "view") ? (
        <ModalShell
          title={
            modal === "view"
              ? "Volunteer activity"
              : modal === "edit"
                ? "Edit volunteer"
                : "Add volunteer"
          }
          onClose={closeModal}
        >
          {modal === "view" ? (
            <ReadGrid
              pairs={[
                ["Volunteer Title", form.title],
                ["Region", form.region],
                ["Status", form.status],
                ["Venue", form.venue],
                ["Volunteer Date and Time", form.datetime],
                ["Registration Start Date", form.regStart],
                ["Registration End Date", form.regEnd],
                ["Duration", form.duration],
                ["Maximum Participants", form.max],
                ["Volunteer Summary", form.summary],
                ["Volunteer Details", form.details],
                ["Cover Image", form.cover],
              ]}
            />
          ) : (
            <>
              <Grid columns={2} gap={12}>
                <Field label="Volunteer Title">
                  <TextInput
                    value={form.title || ""}
                    onChange={(v) => setField("title", v)}
                  />
                </Field>
                <Field label="Region">
                  <Select
                    value={form.region || ""}
                    onChange={(v) => setField("region", v)}
                    options={regionSelect}
                  />
                </Field>
                <Field label="Status">
                  <Select
                    value={form.status || "Active"}
                    onChange={(v) => setField("status", v)}
                    options={STATUS_OPTS}
                  />
                </Field>
                <Field label="Venue">
                  <TextInput
                    value={form.venue || ""}
                    onChange={(v) => setField("venue", v)}
                  />
                </Field>
                <Field label="Volunteer Date and Time">
                  <TextInput
                    value={form.datetime || ""}
                    onChange={(v) => setField("datetime", v)}
                  />
                </Field>
                <Field label="Duration">
                  <TextInput
                    value={form.duration || ""}
                    onChange={(v) => setField("duration", v)}
                  />
                </Field>
                <Field label="Registration Start Date">
                  <TextInput
                    value={form.regStart || ""}
                    onChange={(v) => setField("regStart", v)}
                  />
                </Field>
                <Field label="Registration End Date">
                  <TextInput
                    value={form.regEnd || ""}
                    onChange={(v) => setField("regEnd", v)}
                  />
                </Field>
                <Field label="Maximum Participants">
                  <TextInput
                    value={form.max || ""}
                    onChange={(v) => setField("max", v)}
                  />
                </Field>
                <FilePick
                  label="Volunteer Details (PDF)"
                  accept=".pdf"
                  value={form.details || ""}
                  onChange={(n) => setField("details", n)}
                />
                <FilePick
                  label="Cover Image"
                  accept="image/*"
                  value={form.cover || ""}
                  onChange={(n) => setField("cover", n)}
                />
              </Grid>
              <Field label="Volunteer Summary">
                <TextArea
                  value={form.summary || ""}
                  onChange={(v) => setField("summary", v)}
                  rows={3}
                />
              </Field>
            </>
          )}
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              {modal === "view" ? "Close" : "Cancel"}
            </Button>
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const existing = volunteers.find((v) => v.id === editId);
                  const row: Volunteer = {
                    id: modal === "edit" ? editId : uid("v"),
                    title: form.title || "New Volunteer Drive",
                    region: form.region || "",
                    status: form.status || "Active",
                    venue: form.venue || "",
                    datetime: form.datetime || "",
                    regStart: form.regStart || "",
                    regEnd: form.regEnd || "",
                    duration: form.duration || "",
                    max: form.max || "0",
                    summary: form.summary || "",
                    details: form.details || "",
                    cover: form.cover || "",
                    registered: existing?.registered || 0,
                  };
                  setVolunteers(
                    modal === "edit"
                      ? volunteers.map((v) => (v.id === editId ? row : v))
                      : [row, ...volunteers],
                  );
                  closeModal();
                  flash("successfully added");
                }}
              >
                Save
              </BrandButton>
            ) : null}
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "jobs" &&
      (modal === "add" || modal === "edit" || modal === "view") ? (
        <ModalShell
          title={
            modal === "view" ? "Job" : modal === "edit" ? "Edit job" : "Add job"
          }
          onClose={closeModal}
        >
          {modal === "view" ? (
            <Stack gap={12}>
              <ReadGrid
                pairs={[
                  ["Job Title", form.title],
                  ["Job Type", form.type],
                  ["Company Name", form.company],
                  ["Location", form.location],
                  ["Number of Vacancies", form.vacancies],
                  ["Application Start Date", form.start],
                  ["Application Deadline", form.deadline],
                  ["Job Description", form.pdf],
                  ["Job Cover Photo", form.cover],
                ]}
              />
              <Text weight="semibold">Summary</Text>
              <Text>{form.summary}</Text>
              <Text weight="semibold">Responsibilities</Text>
              <Text>{form.responsibilities}</Text>
              <Text weight="semibold">Requirements</Text>
              <Text>{form.requirements}</Text>
            </Stack>
          ) : (
            <>
              <Grid columns={2} gap={12}>
                <Field label="Job Title">
                  <TextInput
                    value={form.title || ""}
                    onChange={(v) => setField("title", v)}
                  />
                </Field>
                <Field label="Job Type">
                  <Select
                    value={form.type || "Internship"}
                    onChange={(v) => setField("type", v)}
                    options={JOB_TYPES}
                  />
                </Field>
                <Field label="Company Name">
                  <TextInput
                    value={form.company || ""}
                    onChange={(v) => setField("company", v)}
                  />
                </Field>
                <Field label="Location">
                  <TextInput
                    value={form.location || ""}
                    onChange={(v) => setField("location", v)}
                  />
                </Field>
                <Field label="Number of Vacancies">
                  <TextInput
                    value={form.vacancies || ""}
                    onChange={(v) => setField("vacancies", v)}
                  />
                </Field>
                <Field label="Application Start Date">
                  <TextInput
                    value={form.start || ""}
                    onChange={(v) => setField("start", v)}
                  />
                </Field>
                <Field label="Application Deadline">
                  <TextInput
                    value={form.deadline || ""}
                    onChange={(v) => setField("deadline", v)}
                  />
                </Field>
                <FilePick
                  label="Job Description (PDF)"
                  accept=".pdf"
                  value={form.pdf || ""}
                  onChange={(n) => setField("pdf", n)}
                />
                <FilePick
                  label="Job Cover Photo"
                  accept="image/*"
                  value={form.cover || ""}
                  onChange={(n) => setField("cover", n)}
                />
              </Grid>
              <Field label="Job Summary">
                <TextArea
                  value={form.summary || ""}
                  onChange={(v) => setField("summary", v)}
                  rows={2}
                />
              </Field>
              <Field label="Job Responsibilities">
                <TextArea
                  value={form.responsibilities || ""}
                  onChange={(v) => setField("responsibilities", v)}
                  rows={2}
                />
              </Field>
              <Field label="Job Requirements">
                <TextArea
                  value={form.requirements || ""}
                  onChange={(v) => setField("requirements", v)}
                  rows={2}
                />
              </Field>
            </>
          )}
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              {modal === "view" ? "Close" : "Cancel"}
            </Button>
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const existing = jobs.find((j) => j.id === editId);
                  const row: Job = {
                    id: modal === "edit" ? editId : uid("j"),
                    title: form.title || "New Job",
                    type: form.type || "Internship",
                    company: form.company || "KBZPay",
                    location: form.location || "",
                    vacancies: form.vacancies || "1",
                    start: form.start || "",
                    deadline: form.deadline || "",
                    summary: form.summary || "",
                    responsibilities: form.responsibilities || "",
                    requirements: form.requirements || "",
                    pdf: form.pdf || "",
                    cover: form.cover || "",
                    applicants: existing?.applicants || 0,
                  };
                  setJobs(
                    modal === "edit"
                      ? jobs.map((j) => (j.id === editId ? row : j))
                      : [row, ...jobs],
                  );
                  closeModal();
                  flash("successfully added");
                }}
              >
                Save
              </BrandButton>
            ) : null}
          </Row>
        </ModalShell>
      ) : null}

      {modal === "import" && page === "kpi" ? (
        <ModalShell title="Import KPI" onClose={closeModal}>
          <Text tone="secondary">
            Upload an Excel (.xlsx) file. Required columns: Student ID, Student
            Name, Contact Number, College Name, Attendance, Operation
            Performance, Onboarding, Social Media, Assignment, Total KPI (%).
          </Text>
          <FilePick
            label="KPI Excel file"
            accept=".xlsx,.xls"
            value={form.file || ""}
            onChange={(n) => setField("file", n)}
          />
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              disabled={!form.file}
              onClick={() => {
                setKpis(
                  kpis.map((k) =>
                    k.studentId === "SA-2026-004"
                      ? { ...k, attendance: 90, operation: 86, total: 86 }
                      : k,
                  ),
                );
                setKpiImported(
                  `${form.file} validated. 6 rows accepted, 0 rejected. KPI records updated.`,
                );
                closeModal();
                flash("successfully added");
              }}
            >
              Import KPI
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "fame" &&
      (modal === "add" || modal === "edit") ? (
        <ModalShell
          title={modal === "edit" ? "Edit Hall of Fame" : "Add Hall of Fame"}
          onClose={closeModal}
        >
          <Grid columns={2} gap={12}>
            <Field label="Student ID">
              <Select
                value={form.studentId || ""}
                onChange={(v) => {
                  const s = students.find((row) => row.studentId === v);
                  setForm({
                    ...form,
                    studentId: v,
                    name: s?.name || form.name,
                    college: s?.college || form.college,
                    batch: s?.batch || form.batch,
                  });
                }}
                options={students.map((s) => ({
                  value: s.studentId,
                  label: `${s.studentId} · ${s.name}`,
                }))}
              />
            </Field>
            <Field label="Student Name">
              <TextInput
                value={form.name || ""}
                onChange={(v) => setField("name", v)}
              />
            </Field>
            <Field label="College Name">
              <TextInput
                value={form.college || ""}
                onChange={(v) => setField("college", v)}
              />
            </Field>
            <Field label="SA Batch">
              <Select
                value={form.batch || ""}
                onChange={(v) => setField("batch", v)}
                options={batchSelect}
              />
            </Field>
            <Field label="Award Category">
              <Select
                value={form.category || ""}
                onChange={(v) => setField("category", v)}
                options={awardSelect}
              />
            </Field>
            <Field label="Award Year">
              <TextInput
                value={form.year || ""}
                onChange={(v) => setField("year", v)}
              />
            </Field>
          </Grid>
          <Field label="Award Title">
            <TextInput
              value={form.title || ""}
              onChange={(v) => setField("title", v)}
            />
          </Field>
          <Field label="Achievement Description">
            <TextArea
              value={form.description || ""}
              onChange={(v) => setField("description", v)}
              rows={3}
            />
          </Field>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              onClick={() => {
                const row: Fame = {
                  id: modal === "edit" ? editId : uid("f"),
                  studentId: form.studentId || "",
                  name: form.name || "",
                  college: form.college || "",
                  batch: form.batch || "",
                  category: form.category || "",
                  title: form.title || "New Award",
                  year: form.year || "2026",
                  description: form.description || "",
                };
                setFame(
                  modal === "edit"
                    ? fame.map((f) => (f.id === editId ? row : f))
                    : [row, ...fame],
                );
                closeModal();
                flash("successfully added");
              }}
            >
              Save
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal === "add" && page === "certificates" ? (
        <ModalShell wide title="Upload certificates (ZIP)" onClose={closeModal}>
          <Text tone="secondary">
            Organize files by Student Ambassador batch. One ZIP per batch and
            certificate category. Files are checked against that batch&apos;s
            student list.
          </Text>
          <Grid columns={2} gap={12}>
            <Field label="SA Batch">
              <Select
                value={form.batch || ""}
                onChange={(v) => {
                  const preview = form.file
                    ? simulateZip(form.file, v, students)
                    : certZipFiles;
                  if (form.file) setCertZipFiles(preview);
                  setForm({
                    ...form,
                    batch: v,
                    count: form.file
                      ? `${preview.filter((f) => f.ok).length} certificates`
                      : form.count,
                  });
                }}
                options={batchSelect}
              />
            </Field>
            <Field label="Certificate Category">
              <Select
                value={form.category || ""}
                onChange={(v) => setField("category", v)}
                options={certCatSelect}
              />
            </Field>
            <FilePick
              label="ZIP file"
              accept=".zip"
              value={form.file || ""}
              onChange={(n) => {
                const batch = form.batch || "Batch 6";
                const preview = simulateZip(n, batch, students);
                setCertZipFiles(preview);
                setForm({
                  ...form,
                  file: n,
                  count: `${preview.filter((f) => f.ok).length} certificates`,
                });
              }}
            />
            <Field label="Certificate count">
              <TextInput
                value={form.count || ""}
                onChange={(v) => setField("count", v)}
                placeholder="e.g. 64 certificates"
              />
            </Field>
          </Grid>
          {certZipFiles.length ? (
            <Stack gap={8}>
              <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                ZIP file list
              </H2>
              <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                {certZipFiles.filter((f) => f.ok).length} matched to{" "}
                {form.batch || "this batch"} ·{" "}
                {certZipFiles.filter((f) => !f.ok).length} error
                {certZipFiles.filter((f) => !f.ok).length === 1 ? "" : "s"} not in
                the batch student list
              </Text>
              <CertFileTable files={certZipFiles} />
            </Stack>
          ) : null}
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              onClick={() => {
                const batch = form.batch || "Batch 6";
                const files =
                  certZipFiles.length > 0
                    ? certZipFiles
                    : simulateZip(form.file || "certificates.zip", batch, students);
                const matched = files.filter((f) => f.ok).length;
                const errors = files.filter((f) => !f.ok).length;
                setCerts([
                  {
                    id: uid("z"),
                    batch,
                    category: form.category || "Completion",
                    file: form.file || "certificates.zip",
                    count: form.count || `${matched} certificates`,
                    uploaded: "2026-08-14",
                    files,
                  },
                  ...certs,
                ]);
                closeModal();
                flash(
                  errors
                    ? `successfully added — ${errors} file${errors === 1 ? "" : "s"} not in the batch list`
                    : "successfully added",
                );
              }}
            >
              Upload
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "banners" &&
      (modal === "add" || modal === "edit") ? (
        <ModalShell
          title={modal === "edit" ? "Edit banner" : "Add banner thumbnail"}
          onClose={closeModal}
        >
          <Grid columns={2} gap={12}>
            <Field label="Banner title">
              <TextInput
                value={form.title || ""}
                onChange={(v) => setField("title", v)}
              />
            </Field>
            <Field label="Status">
              <Select
                value={form.status || "Active"}
                onChange={(v) => setField("status", v)}
                options={STATUS_OPTS}
              />
            </Field>
            <Field label="Link">
              <TextInput
                value={form.link || ""}
                onChange={(v) => setField("link", v)}
              />
            </Field>
            <Field label="Display order">
              <TextInput
                value={form.order || ""}
                onChange={(v) => setField("order", v)}
              />
            </Field>
            <FilePick
              label="Banner thumbnail"
              accept="image/*"
              value={form.image || ""}
              onChange={(n) => setField("image", n)}
            />
          </Grid>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              onClick={() => {
                const row: Banner = {
                  id: modal === "edit" ? editId : uid("b"),
                  title: form.title || "New Banner",
                  status: form.status || "Active",
                  link: form.link || "/",
                  image: form.image || "banner.jpg",
                  order: form.order || "1",
                };
                setBanners(
                  modal === "edit"
                    ? banners.map((b) => (b.id === editId ? row : b))
                    : [row, ...banners],
                );
                closeModal();
                flash("successfully added");
              }}
            >
              Save
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      master &&
      (modal === "add" || modal === "edit") ? (
        <ModalShell
          title={modal === "edit" ? `Edit ${master.title}` : `Add ${master.title}`}
          onClose={closeModal}
        >
          <Grid columns={2} gap={12}>
            <Field label="Name">
              <TextInput
                value={form.name || ""}
                onChange={(v) => setField("name", v)}
              />
            </Field>
            <Field label={master.extraLabel}>
              <TextInput
                value={form.extra || ""}
                onChange={(v) => setField("extra", v)}
              />
            </Field>
            <Field label="Status">
              <Select
                value={form.status || "Active"}
                onChange={(v) => setField("status", v)}
                options={STATUS_OPTS}
              />
            </Field>
          </Grid>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              onClick={() => {
                const row: MasterItem = {
                  id: modal === "edit" ? editId : uid("m"),
                  name: form.name || "New item",
                  extra: form.extra || "",
                  status: form.status || "Active",
                };
                master.setItems(
                  modal === "edit"
                    ? master.items.map((i) => (i.id === editId ? row : i))
                    : [row, ...master.items],
                );
                closeModal();
                flash("successfully added");
              }}
            >
              Save
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}
    </div>
  );
}
