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
  Table as CanvasTable,
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

function Table({
  headers,
  rows,
  columnAlign,
  rowTone,
  framed,
  striped,
  stickyHeader,
  style,
  emptyMessage,
}: {
  headers: Parameters<typeof CanvasTable>[0]["headers"];
  rows: Parameters<typeof CanvasTable>[0]["rows"];
  columnAlign?: Parameters<typeof CanvasTable>[0]["columnAlign"];
  rowTone?: Parameters<typeof CanvasTable>[0]["rowTone"];
  framed?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  style?: Parameters<typeof CanvasTable>[0]["style"];
  emptyMessage?: Parameters<typeof CanvasTable>[0]["emptyMessage"];
}) {
  return (
    <CanvasTable
      headers={["No.", ...(headers || [])]}
      rows={(rows || []).map((row, i) => [String(i + 1), ...row])}
      columnAlign={
        columnAlign ? ["center", ...columnAlign] : undefined
      }
      rowTone={rowTone}
      framed={framed}
      striped={striped}
      stickyHeader={stickyHeader}
      style={style}
      emptyMessage={emptyMessage}
    />
  );
}

const MASTER_TITLES = [
  "SA Batch",
  "Certificate Category",
];

const DASH_TITLES = [
  "Executive Dashboard",
  "Student Dashboard",
  "Partner School Dashboard",
  "Activities Dashboard",
  "Hall of Fame Dashboard",
  "App Usage Dashboard",
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
  if (name === "chevron") {
    return (
      <svg {...common}>
        <path d="M6 9l6 6 6-6" />
      </svg>
    );
  }
  if (name === "plus") {
    return (
      <svg {...common}>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    );
  }
  if (name === "upload") {
    return (
      <svg {...common}>
        <path d="M12 21V9" />
        <path d="M7 13l5-5 5 5" />
        <path d="M4 21h16" />
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
  if (name === "pencil") {
    return (
      <svg {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    );
  }
  if (name === "trash") {
    return (
      <svg {...common}>
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg {...common}>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M10 18h4" />
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
  | "dash-usage"
  | "sa-batch"
  | "certificate-category";

type ModalMode =
  | "closed"
  | "add"
  | "edit"
  | "view"
  | "import"
  | "update-import"
  | "delete";

type Employment = {
  id: string;
  type: string;
  position: string;
  department: string;
  joinDate: string;
  endDate: string;
  current: boolean;
};

type Student = {
  id: string;
  studentId: string;
  name: string;
  college: string;
  region: string;
  township: string;
  city: string;
  currentAddress: string;
  permanentAddress: string;
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
  avatar: string;
  employment: Employment[];
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

type StudentImportInvalidRow = {
  row: number;
  studentId: string;
  reason: string;
};

type StudentImportResult = {
  total: number;
  success: number;
  skipped: number;
  fail: number;
  invalidRows: StudentImportInvalidRow[];
  accepted: Student[];
};

type School = {
  id: string;
  partnerSchoolId: string;
  college: string;
  city: string;
  township: string;
  collegeType: string;
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
  cover: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

type EventRec = {
  id: string;
  eventId: string;
  title: string;
  status: string;
  venue: string;
  eventDate: string;
  eventTime: string;
  city: string;
  township: string;
  hostName: string;
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
  volunteerId: string;
  title: string;
  status: string;
  venue: string;
  eventDate: string;
  eventTime: string;
  city: string;
  township: string;
  hostName: string;
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
  jobId: string;
  title: string;
  type: string;
  company: string;
  city: string;
  township: string;
  vacancies: string;
  start: string;
  deadline: string;
  summary: string;
  responsibilities: string;
  requirements: string;
  pdf: string;
  cover: string;
  applicants: number;
  status: string;
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
  employmentType: string;
  department: string;
  joinDate: string;
  endDate: string;
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
  source: string;
  category: string;
  linkedTitle: string;
  link: string;
  image: string;
  imageName: string;
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
type ActivityHistTab = "Volunteer" | "Event" | "Job";

type JoinRecord = {
  id: string;
  parentId: string;
  studentId: string;
  name: string;
  college: string;
  phone: string;
  email: string;
  batch: string;
  currentAddress: string;
  appliedAt: string;
  status: JoinStatus;
  remarks: string;
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
  city: string;
  currentAddress: string;
  cv: string;
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
    city: "Yangon",
    currentAddress: "No. 12, Inya Road, Kamayut",
    permanentAddress: "45 Baho Road, Sanchaung, Yangon",
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
    avatar: avatarDataUri("Aye Chan Moe", "#002c76"),
    employment: [
      {
        id: "emp-s1-1",
        type: "Intern",
        position: "Software Developer",
        department: "Digital Products",
        joinDate: "2025-03-01",
        endDate: "2026-02-28",
        current: false,
      },
      {
        id: "emp-s1-2",
        type: "Permanent",
        position: "Software Developer",
        department: "Digital Products",
        joinDate: "2026-03-01",
        endDate: "",
        current: true,
      },
    ],
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
    city: "Yangon",
    currentAddress: "Hlaing Campus Hostel B",
    permanentAddress: "No. 88, Merchant Street, Pabedan, Yangon",
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
    avatar: avatarDataUri("Min Khant Kyaw", "#1F8A65"),
    employment: [
      {
        id: "emp-s2-1",
        type: "Permanent",
        position: "Software Developer",
        department: "Engineering",
        joinDate: "2025-06-01",
        endDate: "",
        current: true,
      },
    ],
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
    city: "Mandalay",
    currentAddress: "78th Street, between 28th and 29th",
    permanentAddress: "Aung Myay Thazan, Mandalay",
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
    avatar: avatarDataUri("Su Myat Hnin", "#3B82F6"),
    employment: [
      {
        id: "emp-s3-1",
        type: "Intern",
        position: "Campus Coordinator",
        department: "Partnerships",
        joinDate: "2025-06-01",
        endDate: "2026-05-31",
        current: false,
      },
    ],
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
    city: "Yangon",
    currentAddress: "Ward 49, North Dagon",
    permanentAddress: "No. 21, Myoma Street, North Dagon, Yangon",
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
    avatar: avatarDataUri("Thura Aung", "#C62828"),
    employment: [
      {
        id: "emp-s4-1",
        type: "Permanent",
        position: "Merchant Support",
        department: "Operations",
        joinDate: "2026-02-08",
        endDate: "2026-12-31",
        current: false,
      },
    ],
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
    city: "Yangon",
    currentAddress: "UCSY Campus, Hlaing",
    permanentAddress: "No. 7, Insein Road, Hlaing, Yangon",
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
    avatar: avatarDataUri("Khin Htet Htet", "#7C3AED"),
    employment: [
      {
        id: "emp-s5-1",
        type: "Intern",
        position: "Software Developer",
        department: "Digital Products",
        joinDate: "2025-11-03",
        endDate: "2026-11-03",
        current: false,
      },
      {
        id: "emp-s5-2",
        type: "Intern",
        position: "Content Associate",
        department: "Marketing",
        joinDate: "2026-01-20",
        endDate: "",
        current: true,
      },
    ],
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
    city: "Yangon",
    currentAddress: "Pyay Road, Lanmadaw",
    permanentAddress: "No. 15, Strand Road, Lanmadaw, Yangon",
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
    avatar: avatarDataUri("Zwe Yan Naing", "#0D9488"),
    employment: [
      {
        id: "emp-s6-1",
        type: "Intern",
        position: "Content Associate",
        department: "Marketing",
        joinDate: "2026-01-20",
        endDate: "2026-07-20",
        current: false,
      },
    ],
    createdAt: "2026-01-20 11:55",
    createdBy: "Program Admin",
    updatedAt: "2026-07-28 17:02",
    updatedBy: "Program Admin",
  },
];

const SEED_SCHOOLS: School[] = [
  {
    id: "c1",
    partnerSchoolId: "PS-00001",
    college: "University of Yangon",
    city: "Yangon",
    township: "Kamayut",
    collegeType: "Public University",
    totalStudents: "18,500",
    partnerSince: "2022",
    established: "1878",
    status: "Active",
    about: "Flagship arts and science university and founding SA partner campus.",
    contact: "Daw Ni Ni Win",
    phone: "01 535 196",
    email: "partnerships@uy.edu.mm",
    address: "University Avenue, Kamayut, Yangon",
    logo: collegeLogoDataUri("UY", "#002c76"),
    cover: collegeCoverDataUri("University of Yangon", "#002c76"),
    createdAt: "2022-06-01 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-03-12 10:00",
    updatedBy: "Program Admin",
  },
  {
    id: "c2",
    partnerSchoolId: "PS-00002",
    college: "Yangon Technological University",
    city: "Yangon",
    township: "Insein",
    collegeType: "Public University",
    totalStudents: "8,200",
    partnerSince: "2023",
    established: "1924",
    status: "Active",
    about: "Engineering campus for digital payments and campus merchant outreach.",
    contact: "U Kyaw Zeya",
    phone: "01 966 3254",
    email: "industry@ytu.edu.mm",
    address: "Insein Road, Gyogone, Yangon",
    logo: collegeLogoDataUri("YTU", "#1F8A65"),
    cover: collegeCoverDataUri("Yangon Technological University", "#1F8A65"),
    createdAt: "2023-02-14 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-04-08 11:30",
    updatedBy: "Program Admin",
  },
  {
    id: "c3",
    partnerSchoolId: "PS-00003",
    college: "University of Mandalay",
    city: "Mandalay",
    township: "Maha Aung Myay",
    collegeType: "Public University",
    totalStudents: "12,400",
    partnerSince: "2022",
    established: "1925",
    status: "Active",
    about: "Upper Myanmar hub for ambassador recruitment and regional events.",
    contact: "Daw Thin Thin Aye",
    phone: "02 406 5321",
    email: "sa@mu.edu.mm",
    address: "University Drive, Maha Aung Myay, Mandalay",
    logo: collegeLogoDataUri("MU", "#3B82F6"),
    cover: collegeCoverDataUri("University of Mandalay", "#3B82F6"),
    createdAt: "2022-08-20 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-02-19 15:10",
    updatedBy: "Program Admin",
  },
  {
    id: "c4",
    partnerSchoolId: "PS-00004",
    college: "University of Computer Studies, Yangon",
    city: "Yangon",
    township: "Hlaing",
    collegeType: "Institute",
    totalStudents: "4,500",
    partnerSince: "2024",
    established: "1971",
    status: "Active",
    about: "Computer studies campus focused on fintech literacy workshops.",
    contact: "Dr. Aung Myat",
    phone: "01 664 399",
    email: "admin@ucsy.edu.mm",
    address: "No. 4, Main Road, Hlaing, Yangon",
    logo: collegeLogoDataUri("UCSY", "#0D9488"),
    cover: collegeCoverDataUri("UCSY Campus", "#0D9488"),
    createdAt: "2024-01-09 09:00",
    createdBy: "Program Admin",
    updatedAt: "2026-05-03 13:45",
    updatedBy: "Program Admin",
  },
  {
    id: "c5",
    partnerSchoolId: "PS-00005",
    college: "Dagon University",
    city: "Yangon",
    township: "North Dagon",
    collegeType: "Public University",
    totalStudents: "22,000",
    partnerSince: "2023",
    established: "1993",
    status: "Active",
    about: "Large suburban campus supporting Batch 6 ambassador recruitment.",
    contact: "Daw May Thu",
    phone: "01 581 244",
    email: "partner@dagon.edu.mm",
    address: "East Gyogone, North Dagon, Yangon",
    logo: collegeLogoDataUri("DU", "#7C3AED"),
    cover: collegeCoverDataUri("Dagon University", "#7C3AED"),
    createdAt: "2023-05-18 09:20",
    createdBy: "Program Admin",
    updatedAt: "2026-06-01 10:40",
    updatedBy: "Program Admin",
  },
  {
    id: "c6",
    partnerSchoolId: "PS-00006",
    college: "STI Myanmar University",
    city: "Yangon",
    township: "Bahan",
    collegeType: "Private University",
    totalStudents: "3,200",
    partnerSince: "2025",
    established: "1998",
    status: "Active",
    about: "Private campus partner for internship and content creator programs.",
    contact: "U Min Thu",
    phone: "09 250 880 112",
    email: "campus@stiemyanmar.edu.mm",
    address: "Bahan Township, Yangon",
    logo: collegeLogoDataUri("STI", "#C2410C"),
    cover: collegeCoverDataUri("STI Myanmar University", "#C2410C"),
    createdAt: "2025-02-10 11:00",
    createdBy: "Program Admin",
    updatedAt: "2026-07-12 14:05",
    updatedBy: "Program Admin",
  },
];

const SEED_EVENTS: EventRec[] = [
  {
    id: "e1",
    eventId: "EVT-00001",
    title: "SA Orientation Day 2026",
    status: "Active",
    venue: "Novotel Yangon Max",
    eventDate: "2026-09-12",
    eventTime: "09:00",
    city: "Yangon",
    township: "Mayangone",
    hostName: "Program Admin",
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
    eventId: "EVT-00002",
    title: "Digital Literacy Workshop",
    status: "Active",
    venue: "University of Mandalay Convocation Hall",
    eventDate: "2026-09-26",
    eventTime: "13:00",
    city: "Mandalay",
    township: "Chanayethazan",
    hostName: "Mandalay Campus Lead",
    regStart: "2026-08-20",
    regEnd: "2026-09-20",
    max: "120",
    summary: "Hands-on session on safe digital payments and campus merchant onboarding.",
    details: "Digital_Literacy_MDY.pdf",
    cover: "literacy-cover.jpg",
    meeting: "https://meet.kbzpay.com/literacy-mdy",
    registered: 120,
  },
  {
    id: "e3",
    eventId: "EVT-00003",
    title: "Campus Outreach Day",
    status: "Active",
    venue: "Naypyidaw State Academy",
    eventDate: "2026-07-18",
    eventTime: "10:00",
    city: "Naypyidaw",
    township: "Zabuthiri",
    hostName: "Central Region Coordinator",
    regStart: "2026-06-01",
    regEnd: "2026-07-10",
    max: "80",
    summary: "Closed outreach day for central region partner schools.",
    details: "Outreach_NPT.pdf",
    cover: "outreach-cover.jpg",
    meeting: "",
    registered: 76,
  },
  {
    id: "e4",
    eventId: "EVT-00004",
    title: "Regional SA Meetup",
    status: "Cancelled",
    venue: "M Gallery Hotel",
    eventDate: "2026-10-05",
    eventTime: "14:00",
    city: "Yangon",
    township: "Bahan",
    hostName: "Regional Lead",
    regStart: "2026-09-01",
    regEnd: "2026-09-30",
    max: "50",
    summary: "Regional ambassador networking and planning session.",
    details: "Regional_Meetup.pdf",
    cover: "meetup-cover.jpg",
    meeting: "",
    registered: 12,
  },
];

const SEED_VOLUNTEERS: Volunteer[] = [
  {
    id: "v1",
    volunteerId: "VLT-00001",
    title: "Community Banking Awareness",
    status: "Active",
    venue: "Bahan Township Community Hall",
    eventDate: "2026-10-04",
    eventTime: "08:30",
    city: "Yangon",
    township: "Bahan",
    hostName: "Yangon Volunteer Lead",
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
    volunteerId: "VLT-00002",
    title: "Financial Literacy Drive",
    status: "Active",
    venue: "Chanayethazan Youth Center",
    eventDate: "2026-10-18",
    eventTime: "09:00",
    city: "Mandalay",
    township: "Chanayethazan",
    hostName: "Mandalay Volunteer Lead",
    regStart: "2026-09-10",
    regEnd: "2026-08-20",
    duration: "4 hours",
    max: "30",
    summary: "Peer coaching for first-year students on budgeting and digital wallets.",
    details: "Volunteer_Literacy_MDY.pdf",
    cover: "vol-literacy.jpg",
    registered: 22,
  },
  {
    id: "v3",
    volunteerId: "VLT-00003",
    title: "Campus Clean-up Drive",
    status: "Cancelled",
    venue: "University of Yangon Main Gate",
    eventDate: "2026-09-15",
    eventTime: "07:00",
    city: "Yangon",
    township: "Kamayut",
    hostName: "Campus Operations",
    regStart: "2026-08-25",
    regEnd: "2026-09-10",
    duration: "3 hours",
    max: "25",
    summary: "Volunteer clean-up around partner-school campuses.",
    details: "Volunteer_Cleanup.pdf",
    cover: "vol-cleanup.jpg",
    registered: 8,
  },
];

const SEED_JOBS: Job[] = [
  {
    id: "j1",
    jobId: "JOB-00001",
    title: "Campus Marketing Intern",
    type: "Internship",
    company: "KBZPay",
    city: "Yangon",
    township: "Kamayut",
    vacancies: "8",
    start: "2026-08-01",
    deadline: "2026-09-15",
    summary: "Support campus campaigns, booth setup, and ambassador content.",
    responsibilities: "Run weekly campus activations; collect merchant leads; report KPIs.",
    requirements: "Current SA in good standing; strong communication; own smartphone.",
    pdf: "JD_Campus_Marketing_Intern.pdf",
    cover: "job-intern.jpg",
    applicants: 5,
    status: "Active",
  },
  {
    id: "j2",
    jobId: "JOB-00002",
    title: "Student Ambassador Coordinator",
    type: "Full-time",
    company: "KBZPay",
    city: "Yangon",
    township: "Bahan",
    vacancies: "2",
    start: "2026-08-15",
    deadline: "2026-08-20",
    summary: "Coordinate regional SA batches and partner-school relationships.",
    responsibilities: "Plan events; coach ambassadors; own monthly KPI reviews.",
    requirements: "Graduate; 1+ year campus program experience; Burmese and English.",
    pdf: "JD_SA_Coordinator.pdf",
    cover: "job-coordinator.jpg",
    applicants: 19,
    status: "Active",
  },
  {
    id: "j3",
    jobId: "JOB-00003",
    title: "Social Media Content Associate",
    type: "Part-time",
    company: "KBZPay",
    city: "Mandalay",
    township: "Chanayethazan",
    vacancies: "4",
    start: "2026-08-10",
    deadline: "2026-09-30",
    summary: "Produce short-form campus stories for KBZPay SA channels.",
    responsibilities: "Shoot and edit weekly reels; moderate comments; track reach.",
    requirements: "Portfolio of campus content; Batch 5 or 6 ambassador preferred.",
    pdf: "JD_Content_Associate.pdf",
    cover: "job-content.jpg",
    applicants: 2,
    status: "Active",
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
    currentAddress: student.currentAddress,
    appliedAt,
    status,
    remarks: "",
  };
}

function candidateCvName(student: Student) {
  const slug = student.name.replace(/\s+/g, "_");
  return `CV_${student.studentId}_${slug}.pdf`;
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
    city: student.city,
    currentAddress: student.currentAddress,
    cv: candidateCvName(student),
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
    category: "Highest Onboarding",
    title: "1st Top Highest Onboarding Award",
    year: "2025",
    employmentType: "",
    department: "",
    joinDate: "",
    endDate: "",
  },
  {
    id: "f2",
    studentId: "SA-2026-005",
    name: "Khin Htet Htet",
    college: "University of Computer Studies, Yangon",
    batch: "Batch 5",
    category: "Youth Creator",
    title: "Top View Magnet Winner",
    year: "2025",
    employmentType: "",
    department: "",
    joinDate: "",
    endDate: "",
  },
  {
    id: "f3",
    studentId: "SA-2026-001",
    name: "Aye Chan Moe",
    college: "University of Yangon",
    batch: "Batch 6",
    category: "Internship",
    title: "Internship Placement",
    year: "2026",
    employmentType: "Intern",
    department: "Digital Products",
    joinDate: "2026-03-01",
    endDate: "",
  },
  {
    id: "f4",
    studentId: "SA-2026-002",
    name: "Min Khant Kyaw",
    college: "Yangon Technological University",
    batch: "Batch 6",
    category: "Permanent",
    title: "Permanent Placement",
    year: "2026",
    employmentType: "Permanent",
    department: "Engineering",
    joinDate: "2025-06-01",
    endDate: "",
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
    title: "SA Orientation Day 2026",
    status: "Active",
    source: "Announcement",
    category: "Event Management",
    linkedTitle: "SA Orientation Day 2026",
    link: "/announcement/event-management/sa-orientation-day-2026",
    image: bannerImageDataUri("SA Orientation Day 2026", "#002c76"),
    imageName: "banner-orientation.svg",
    order: "1",
  },
  {
    id: "b2",
    title: "Campus Marketing Intern",
    status: "Active",
    source: "Announcement",
    category: "Job Management",
    linkedTitle: "Campus Marketing Intern",
    link: "/announcement/job-management/campus-marketing-intern",
    image: bannerImageDataUri("Campus Marketing Intern", "#1F8A65"),
    imageName: "banner-recruit.svg",
    order: "2",
  },
  {
    id: "b3",
    title: "Permanent Placement",
    status: "Inactive",
    source: "Hall of Fame",
    category: "Permanent",
    linkedTitle: "Permanent Placement",
    link: "/hall-of-fame/permanent/permanent-placement",
    image: bannerImageDataUri("Permanent Placement", "#0D9488"),
    imageName: "banner-fame.svg",
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
  { id: "dash-usage", label: "App Usage Dashboard", icon: "phone" },
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

const SHOW_ACTIVITY_LOG = false;

const PROGRAM_NAV_AFTER: { id: PageId; label: string; icon: string }[] = [
  { id: "kpi", label: "KPI Management", icon: "chart" },
  { id: "fame", label: "Hall of Fame", icon: "award" },
  { id: "certificates", label: "Certificate Management", icon: "file" },
  { id: "banners", label: "Banner Management", icon: "image" },
  ...(SHOW_ACTIVITY_LOG
    ? [{ id: "activity" as PageId, label: "Activity Log", icon: "log" }]
    : []),
];

const MASTER_NAV: { id: PageId; label: string; icon: string }[] = [
  { id: "sa-batch", label: "SA Batch", icon: "layers" },
  { id: "certificate-category", label: "Certificate Category", icon: "badge" },
];

const STATUS_OPTS = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const ACTIVITY_STATUS_OPTS = [
  { value: "Active", label: "Active" },
  { value: "Closed", label: "Closed" },
  { value: "Expired", label: "Expired" },
  { value: "Cancelled", label: "Cancelled" },
];

const DEMO_NOW = "2026-08-25 13:55";
const DEMO_TODAY = "2026-08-25";

type ActivityStatusInput = {
  status: string;
  eventDate: string;
  eventTime: string;
  regEnd: string;
  max: string;
  registered: number;
};

function activityDateTime(row: { eventDate: string; eventTime: string }) {
  return `${row.eventDate || ""} ${row.eventTime || ""}`.trim();
}

function displayActivityStatus(row: ActivityStatusInput) {
  if (row.status === "Cancelled") return "Cancelled";
  const when = activityDateTime(row);
  if (when && when <= DEMO_NOW) return "Expired";
  const cap = parseCount(row.max);
  if (cap > 0 && row.registered >= cap) return "Closed";
  if (row.regEnd && row.regEnd < DEMO_TODAY) return "Closed";
  return "Active";
}

function canCancelActivity(row: ActivityStatusInput) {
  if (row.status === "Cancelled") return false;
  if (displayActivityStatus(row) === "Expired") return false;
  const when = activityDateTime(row);
  return !when || when > DEMO_NOW;
}

function nextEventId(rows: EventRec[]) {
  const nums = rows.map((r) =>
    Number((r.eventId || "").replace(/\D/g, "") || "0"),
  );
  const n = Math.max(0, ...nums) + 1;
  return `EVT-${String(n).padStart(5, "0")}`;
}

function nextVolunteerId(rows: Volunteer[]) {
  const nums = rows.map((r) =>
    Number((r.volunteerId || "").replace(/\D/g, "") || "0"),
  );
  const n = Math.max(0, ...nums) + 1;
  return `VLT-${String(n).padStart(5, "0")}`;
}

function displayJobStatus(job: {
  vacancies: string;
  deadline: string;
  applicants: number;
  status?: string;
}) {
  if (job.status === "Closed") return "Closed";
  const cap = parseCount(job.vacancies);
  if (job.deadline && job.deadline < DEMO_TODAY) return "Expired";
  if (cap > 0 && job.applicants >= cap) return "Closed";
  return "Active";
}

function nextJobId(rows: Job[]) {
  const nums = rows.map((r) =>
    Number((r.jobId || "").replace(/\D/g, "") || "0"),
  );
  const n = Math.max(0, ...nums) + 1;
  return `JOB-${String(n).padStart(5, "0")}`;
}

const SA_STATUS_OPTS = [
  { value: "Active", label: "Active" },
  { value: "Blacklist", label: "Blacklist" },
];

const FAME_CATEGORY_OPTS = [
  { value: "Highest Onboarding", label: "Highest Onboarding" },
  { value: "Youth Creator", label: "Youth Creator" },
  { value: "Internship", label: "Internship" },
  { value: "Permanent", label: "Permanent" },
];

const BANNER_SOURCE_OPTS = [
  { value: "Announcement", label: "Announcement" },
  { value: "Hall of Fame", label: "Hall of Fame" },
];

const ANNOUNCE_CATEGORY_OPTS = ANNOUNCE_NAV.map((item) => ({
  value: item.label,
  label: item.label,
}));

function bannerCategoryOpts(source: string) {
  return source === "Announcement"
    ? ANNOUNCE_CATEGORY_OPTS
    : FAME_CATEGORY_OPTS;
}

function defaultBannerCategory(source: string) {
  return bannerCategoryOpts(source)[0]?.value || "";
}

function bannerLinkFor(source: string, category: string, title?: string) {
  const slug = (category || "item").toLowerCase().replace(/\s+/g, "-");
  const base =
    source === "Announcement"
      ? `/announcement/${slug}`
      : `/hall-of-fame/${slug}`;
  if (!title?.trim()) return base;
  const titleSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return titleSlug ? `${base}/${titleSlug}` : base;
}

function bannerTitleOpts(
  source: string,
  category: string,
  events: EventRec[],
  volunteers: Volunteer[],
  jobs: Job[],
  fame: Fame[],
) {
  if (source === "Hall of Fame") {
    return fame
      .filter((f) => f.category === category)
      .map((f) => ({
        value: f.title,
        label: `${f.name} · ${f.title}`,
      }));
  }
  if (category === "Event Management") {
    return events.map((e) => ({ value: e.title, label: e.title }));
  }
  if (category === "Volunteer Management") {
    return volunteers.map((v) => ({ value: v.title, label: v.title }));
  }
  if (category === "Job Management") {
    return jobs.map((j) => ({ value: j.title, label: j.title }));
  }
  return [];
}

function defaultBannerTitle(
  source: string,
  category: string,
  events: EventRec[],
  volunteers: Volunteer[],
  jobs: Job[],
  fame: Fame[],
) {
  return bannerTitleOpts(source, category, events, volunteers, jobs, fame)[0]
    ?.value;
}

const FAME_TITLE_OPTS: Record<string, { value: string; label: string }[]> = {
  "Highest Onboarding": [
    {
      value: "1st Top Highest Onboarding Award",
      label: "1st Top Highest Onboarding Award",
    },
    {
      value: "2nd Top Highest Onboarding Award",
      label: "2nd Top Highest Onboarding Award",
    },
    {
      value: "3rd Top Highest Onboarding Award",
      label: "3rd Top Highest Onboarding Award",
    },
  ],
  "Youth Creator": [
    { value: "Top View Magnet Winner", label: "Top View Magnet Winner" },
    {
      value: "Most Engaging Creator Winner",
      label: "Most Engaging Creator Winner",
    },
    {
      value: "Most Creative Content Winner",
      label: "Most Creative Content Winner",
    },
  ],
};

const EMP_TYPE_OPTS = [
  { value: "Intern", label: "Internship" },
  { value: "Permanent", label: "Permanent Employment" },
];

const COLLEGE_TYPE_OPTS = [
  { value: "Public University", label: "Public University" },
  { value: "Private University", label: "Private University" },
  { value: "Institute", label: "Institute" },
  { value: "College", label: "College" },
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

function todayIso() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function empEndLabel(endDate: string) {
  if (!endDate || endDate > todayIso()) return "Present";
  return endDate;
}

function employmentRecordStatus(endDate: string, current?: boolean) {
  if (current || !endDate || endDate > todayIso()) return "Present";
  return "Completed";
}

function employmentTypeLabel(type: string) {
  if (type === "Permanent") return "Permanent Employment";
  if (type === "Intern") return "Internship";
  return type || "—";
}

function employmentEndDisplay(endDate: string, current?: boolean) {
  if (current || !endDate) return "—";
  return endDate;
}

function normalizeEmployment(emp: Employment): Employment {
  const current = Boolean(emp.current) || !emp.endDate;
  return {
    ...emp,
    current,
    endDate: current ? "" : emp.endDate || "",
  };
}

function fameEndLabel(endDate: string) {
  if (!endDate || endDate > todayIso()) return "Present";
  return endDate;
}

function studentInitials(name: string) {
  const parts = (name || "?").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`.toUpperCase();
}

function avatarDataUri(name: string, bg: string) {
  const initials = studentInitials(name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="${bg}"/><text x="80" y="92" text-anchor="middle" fill="#ffffff" font-family="Poppins,sans-serif" font-size="52" font-weight="600">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function bannerImageDataUri(title: string, accent: string) {
  const safe = (title || "Banner")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .slice(0, 42);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="280" viewBox="0 0 640 280"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${accent}"/><stop offset="100%" stop-color="#001a4a"/></linearGradient></defs><rect width="640" height="280" fill="url(#g)"/><circle cx="520" cy="60" r="90" fill="rgba(255,255,255,0.12)"/><circle cx="580" cy="210" r="70" fill="rgba(255,255,255,0.08)"/><text x="36" y="150" fill="#ffffff" font-family="Poppins,sans-serif" font-size="28" font-weight="600">${safe}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function collegeCoverDataUri(title: string, accent: string) {
  const safe = (title || "Campus")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .slice(0, 36);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="320" viewBox="0 0 720 320"><defs><linearGradient id="c" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${accent}"/><stop offset="100%" stop-color="#0B1F4A"/></linearGradient></defs><rect width="720" height="320" fill="url(#c)"/><rect x="40" y="170" width="140" height="110" rx="6" fill="rgba(255,255,255,0.16)"/><rect x="200" y="130" width="120" height="150" rx="6" fill="rgba(255,255,255,0.2)"/><rect x="340" y="150" width="160" height="130" rx="6" fill="rgba(255,255,255,0.14)"/><circle cx="620" cy="70" r="80" fill="rgba(255,255,255,0.1)"/><text x="40" y="70" fill="#ffffff" font-family="Poppins,sans-serif" font-size="26" font-weight="600">${safe}</text><text x="40" y="102" fill="rgba(255,255,255,0.8)" font-family="Poppins,sans-serif" font-size="14">College Cover Image</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function collegeLogoDataUri(code: string, accent: string) {
  const safe = (code || "PS")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .slice(0, 6);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="16" fill="${accent}"/><text x="60" y="70" text-anchor="middle" fill="#ffffff" font-family="Poppins,sans-serif" font-size="28" font-weight="700">${safe}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function isCustomStudentPhoto(avatar?: string) {
  if (!avatar?.trim()) return false;
  // Generated initials avatars are SVG data URIs created by the system.
  if (avatar.startsWith("data:image/svg")) return false;
  if (avatar.startsWith("data:image/")) return true;
  if (avatar.startsWith("blob:") || avatar.startsWith("http")) return true;
  // Filename-only values mean a student-uploaded file was stored.
  return true;
}

function isImageSrc(value?: string) {
  if (!value) return false;
  return (
    value.startsWith("data:image") ||
    value.startsWith("blob:") ||
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("/")
  );
}

function imageDisplayName(image?: string, imageName?: string) {
  if (imageName?.trim()) return imageName.trim();
  if (!image?.trim()) return "No image";
  if (isImageSrc(image)) return "Uploaded image";
  return image;
}

function batchStudentCount(batch: string, all: Student[]) {
  if (!batch) return 0;
  return all.filter((s) => s.batch === batch).length;
}

function StudentAvatar({
  name,
  avatar,
  size,
}: {
  name: string;
  avatar?: string;
  size?: number;
}) {
  const s = size || 88;
  const src =
    avatar && avatar.startsWith("data:")
      ? avatar
      : avatarDataUri(name || "Student", BRAND);
  return (
    <img
      className="sa-avatar"
      src={src}
      alt={name ? `${name} profile photo` : "Student profile photo"}
      style={{
        width: s,
        height: s,
        borderRadius: "50%",
        objectFit: "cover",
        border: `3px solid ${WHITE}`,
        outline: `1px solid ${LINE}`,
        flexShrink: 0,
        background: SOFT,
      }}
    />
  );
}

function nextStudentId(rows: Student[]) {
  const nums = rows.map((r) => Number(r.studentId.split("-").pop() || "0"));
  const n = Math.max(0, ...nums) + 1;
  return `SA-2026-${String(n).padStart(3, "0")}`;
}

function nextPartnerSchoolId(rows: School[]) {
  const nums = rows.map((r) =>
    Number((r.partnerSchoolId || "").replace(/\D/g, "") || "0"),
  );
  const n = Math.max(0, ...nums) + 1;
  return `PS-${String(n).padStart(5, "0")}`;
}

function activityStatusTone(status: string): "success" | "neutral" {
  return status === "Active" ? "success" : "neutral";
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
  "SA ID,Student Name,College Name,Training Region,Township,City,SA Batch,Gender,Age,Date of Birth,Pay Phone Number,Contact Phone Number,Email,Education,Major,Expected Graduation Date,Current Address,Permanent Address,Status\nSA-2026-000,Sample Ambassador,University of Yangon,Yangon,Kamayut,Yangon,Batch 6,Female,21,2005-01-01,09 000 000 000,09 000 000 001,sample.sa@uy.edu.mm,Bachelor,International Relations,2027-05-15,No. 1 Sample Street,No. 2 Hometown Street,Active\n";

const STUDENT_IMPORT_REQUIRED = [
  "SA ID",
  "Student Name",
  "College Name",
  "Training Region",
  "Township",
  "City",
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
  "Current Address",
  "Permanent Address",
  "Status",
] as const;

const STUDENT_IMPORT_NOTES = [
  "Only Excel files are supported.",
  "Student ID must be unique.",
  "Required columns must not be empty.",
  "Duplicate records will be skipped.",
  "Invalid rows will appear in the Import result.",
];

function parseCsvRows(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && ch === ",") {
      row.push(cell.trim());
      cell = "";
      continue;
    }

    if (!inQuotes && (ch === "\n" || ch === "\r")) {
      if (ch === "\r" && next === "\n") i += 1;
      row.push(cell.trim());
      cell = "";
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      continue;
    }

    cell += ch;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell.trim());
    if (row.some((value) => value !== "")) rows.push(row);
  }

  return rows;
}

function normalizeImportHeader(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function studentImportColumnMap(headers: string[]) {
  const map: Record<string, number> = {};
  headers.forEach((header, index) => {
    const normalized = normalizeImportHeader(header);
    if (normalized === "sa id" || normalized === "student id") map["SA ID"] = index;
    else if (normalized === "student name") map["Student Name"] = index;
    else if (normalized === "college name") map["College Name"] = index;
    else if (normalized === "training region" || normalized === "region")
      map["Training Region"] = index;
    else if (normalized === "township") map["Township"] = index;
    else if (normalized === "city") map["City"] = index;
    else if (normalized === "sa batch" || normalized === "batch") map["SA Batch"] = index;
    else if (normalized === "gender") map["Gender"] = index;
    else if (normalized === "age") map["Age"] = index;
    else if (normalized === "date of birth" || normalized === "dob")
      map["Date of Birth"] = index;
    else if (normalized === "pay phone number" || normalized === "pay phone")
      map["Pay Phone Number"] = index;
    else if (normalized === "contact phone number" || normalized === "contact phone")
      map["Contact Phone Number"] = index;
    else if (normalized === "email") map["Email"] = index;
    else if (normalized === "education") map["Education"] = index;
    else if (normalized === "major") map["Major"] = index;
    else if (
      normalized === "expected graduation date" ||
      normalized === "graduation"
    )
      map["Expected Graduation Date"] = index;
    else if (normalized === "current address") map["Current Address"] = index;
    else if (normalized === "permanent address") map["Permanent Address"] = index;
    else if (normalized === "address") map["Current Address"] = index;
    else if (normalized === "status") map["Status"] = index;
  });
  return map;
}

function importCellValue(
  cells: string[],
  columnMap: Record<string, number>,
  column: string,
) {
  const index = columnMap[column];
  return index === undefined ? "" : (cells[index] || "").trim();
}

function importStudentRows(
  text: string,
  existingStudents: Student[],
): StudentImportResult {
  const rows = parseCsvRows(text);
  if (rows.length < 2) {
    return {
      total: 0,
      success: 0,
      skipped: 0,
      fail: 1,
      invalidRows: [
        {
          row: 1,
          studentId: "—",
          reason: "File is empty or has no data rows.",
        },
      ],
      accepted: [],
    };
  }

  const columnMap = studentImportColumnMap(rows[0]);
  const missingColumns = STUDENT_IMPORT_REQUIRED.filter(
    (column) => columnMap[column] === undefined,
  );
  if (missingColumns.length > 0) {
    return {
      total: 0,
      success: 0,
      skipped: 0,
      fail: 1,
      invalidRows: [
        {
          row: 1,
          studentId: "—",
          reason: `Missing required columns: ${missingColumns.join(", ")}.`,
        },
      ],
      accepted: [],
    };
  }

  const existingIds = new Set(
    existingStudents.map((student) => student.studentId.trim().toLowerCase()),
  );
  const seenIds = new Set<string>();
  const accepted: Student[] = [];
  const invalidRows: StudentImportInvalidRow[] = [];
  let skipped = 0;
  let fail = 0;

  for (let i = 1; i < rows.length; i += 1) {
    const cells = rows[i];
    const rowNumber = i + 1;
    const studentId = importCellValue(cells, columnMap, "SA ID");
    const name = importCellValue(cells, columnMap, "Student Name");
    const college = importCellValue(cells, columnMap, "College Name");
    const region = importCellValue(cells, columnMap, "Training Region");
    const township = importCellValue(cells, columnMap, "Township");
    const city = importCellValue(cells, columnMap, "City");
    const batch = importCellValue(cells, columnMap, "SA Batch");
    const gender = importCellValue(cells, columnMap, "Gender");
    const age = importCellValue(cells, columnMap, "Age");
    const dob = importCellValue(cells, columnMap, "Date of Birth");
    const payPhone = importCellValue(cells, columnMap, "Pay Phone Number");
    const contactPhone = importCellValue(
      cells,
      columnMap,
      "Contact Phone Number",
    );
    const email = importCellValue(cells, columnMap, "Email");
    const education = importCellValue(cells, columnMap, "Education");
    const major = importCellValue(cells, columnMap, "Major");
    const graduation = importCellValue(
      cells,
      columnMap,
      "Expected Graduation Date",
    );
    const currentAddress = importCellValue(cells, columnMap, "Current Address");
    const permanentAddress = importCellValue(
      cells,
      columnMap,
      "Permanent Address",
    );
    const status = importCellValue(cells, columnMap, "Status");

    const emptyRequired = STUDENT_IMPORT_REQUIRED.filter(
      (column) => importCellValue(cells, columnMap, column) === "",
    );
    if (emptyRequired.length > 0) {
      fail += 1;
      invalidRows.push({
        row: rowNumber,
        studentId: studentId || "—",
        reason: `Required columns empty: ${emptyRequired.join(", ")}.`,
      });
      continue;
    }

    const normalizedId = studentId.toLowerCase();
    if (existingIds.has(normalizedId) || seenIds.has(normalizedId)) {
      skipped += 1;
      continue;
    }

    seenIds.add(normalizedId);
    accepted.push({
      id: uid("s"),
      studentId,
      name,
      college,
      region,
      township,
      city,
      currentAddress,
      permanentAddress,
      batch,
      gender,
      age,
      dob,
      payPhone,
      contactPhone,
      email,
      education,
      major,
      graduation,
      status,
      avatar: avatarDataUri(name, BRAND),
      employment: [],
      ...stampAudit({}, false),
    });
  }

  return {
    total: rows.length - 1,
    success: accepted.length,
    skipped,
    fail,
    invalidRows,
    accepted,
  };
}

function updateStudentRows(
  text: string,
  existingStudents: Student[],
): StudentImportResult {
  const rows = parseCsvRows(text);
  if (rows.length < 2) {
    return {
      total: 0,
      success: 0,
      skipped: 0,
      fail: 1,
      invalidRows: [
        {
          row: 1,
          studentId: "—",
          reason: "File is empty or has no data rows.",
        },
      ],
      accepted: [],
    };
  }

  const columnMap = studentImportColumnMap(rows[0]);
  const missingColumns = STUDENT_IMPORT_REQUIRED.filter(
    (column) => columnMap[column] === undefined,
  );
  if (missingColumns.length > 0) {
    return {
      total: 0,
      success: 0,
      skipped: 0,
      fail: 1,
      invalidRows: [
        {
          row: 1,
          studentId: "—",
          reason: `Missing required columns: ${missingColumns.join(", ")}.`,
        },
      ],
      accepted: [],
    };
  }

  const byId = new Map(
    existingStudents.map((student) => [
      student.studentId.trim().toLowerCase(),
      student,
    ]),
  );
  const seenIds = new Set<string>();
  const accepted: Student[] = [];
  const invalidRows: StudentImportInvalidRow[] = [];
  let skipped = 0;
  let fail = 0;

  for (let i = 1; i < rows.length; i += 1) {
    const cells = rows[i];
    const rowNumber = i + 1;
    const studentId = importCellValue(cells, columnMap, "SA ID");
    const name = importCellValue(cells, columnMap, "Student Name");
    const college = importCellValue(cells, columnMap, "College Name");
    const region = importCellValue(cells, columnMap, "Training Region");
    const township = importCellValue(cells, columnMap, "Township");
    const city = importCellValue(cells, columnMap, "City");
    const batch = importCellValue(cells, columnMap, "SA Batch");
    const gender = importCellValue(cells, columnMap, "Gender");
    const age = importCellValue(cells, columnMap, "Age");
    const dob = importCellValue(cells, columnMap, "Date of Birth");
    const payPhone = importCellValue(cells, columnMap, "Pay Phone Number");
    const contactPhone = importCellValue(
      cells,
      columnMap,
      "Contact Phone Number",
    );
    const email = importCellValue(cells, columnMap, "Email");
    const education = importCellValue(cells, columnMap, "Education");
    const major = importCellValue(cells, columnMap, "Major");
    const graduation = importCellValue(
      cells,
      columnMap,
      "Expected Graduation Date",
    );
    const currentAddress = importCellValue(cells, columnMap, "Current Address");
    const permanentAddress = importCellValue(
      cells,
      columnMap,
      "Permanent Address",
    );
    const status = importCellValue(cells, columnMap, "Status");

    const emptyRequired = STUDENT_IMPORT_REQUIRED.filter(
      (column) => importCellValue(cells, columnMap, column) === "",
    );
    if (emptyRequired.length > 0) {
      fail += 1;
      invalidRows.push({
        row: rowNumber,
        studentId: studentId || "—",
        reason: `Required columns empty: ${emptyRequired.join(", ")}.`,
      });
      continue;
    }

    const normalizedId = studentId.toLowerCase();
    if (seenIds.has(normalizedId)) {
      skipped += 1;
      continue;
    }
    const existing = byId.get(normalizedId);
    if (!existing) {
      fail += 1;
      invalidRows.push({
        row: rowNumber,
        studentId,
        reason: "SA ID not found. Only existing students can be updated.",
      });
      continue;
    }

    seenIds.add(normalizedId);
    accepted.push({
      ...existing,
      studentId,
      name,
      college,
      region,
      township,
      city,
      currentAddress,
      permanentAddress,
      batch,
      gender,
      age,
      dob,
      payPhone,
      contactPhone,
      email,
      education,
      major,
      graduation,
      status,
      avatar: isCustomStudentPhoto(existing.avatar)
        ? existing.avatar
        : avatarDataUri(name, BRAND),
      ...stampAudit(
        {
          createdAt: existing.createdAt,
          createdBy: existing.createdBy,
          updatedAt: existing.updatedAt,
          updatedBy: existing.updatedBy,
        },
        true,
      ),
    });
  }

  return {
    total: rows.length - 1,
    success: accepted.length,
    skipped,
    fail,
    invalidRows,
    accepted,
  };
}

function formatStudentImportResult(result: StudentImportResult) {
  return `Total records: ${result.total}. Success: ${result.success}. Skipped: ${result.skipped}. Failed: ${result.fail}.`;
}

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
      role="button"
      onClick={() => downloadCsv(filename, csv)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        height: 34,
        padding: "0 14px",
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
  const blocked = value === "Blacklist";
  const cancelled = value === "Cancelled";
  const closed = value === "Closed";
  const expired = value === "Expired";
  const on = value === "Active";
  const bg = blocked
    ? "#FDECEC"
    : cancelled
      ? "#FDECEC"
      : closed
        ? "#FFF4E5"
        : expired
          ? "#F3F4F6"
          : on
            ? SOFT
            : "#F3F4F6";
  const color = blocked
    ? "#C62828"
    : cancelled
      ? "#C62828"
      : closed
        ? "#E65100"
        : expired
          ? MUTED
          : on
            ? BRAND
            : MUTED;
  return (
    <div
      className={
        blocked || cancelled
          ? "sa-status-block"
          : on
            ? "sa-status-on"
            : "sa-status-off"
      }
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 999,
        fontFamily: FONT,
        fontSize: 11,
        fontWeight: 600,
        background: bg,
        color,
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
  onImageChange,
  onFileChange,
}: {
  label: string;
  accept: string;
  value: string;
  onChange?: (name: string) => void;
  onImageChange?: (dataUrl: string, fileName: string) => void;
  onFileChange?: (file: File) => void;
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
        onChange={(e: {
          target?: { files?: Array<{ name: string } & Blob> | null };
        }) => {
          const list = e.target?.files;
          const file = list && list[0] ? list[0] : null;
          if (!file) return;
          if (onFileChange) {
            onFileChange(file as File);
            return;
          }
          if (onImageChange && accept.includes("image")) {
            const reader = new FileReader();
            reader.onload = () => {
              const result =
                typeof reader.result === "string" ? reader.result : "";
              if (result) onImageChange(result, file.name);
            };
            reader.readAsDataURL(file);
            return;
          }
          onChange?.(file.name);
        }}
      />
      {value ? (
        <Text size="small" tone="secondary">
          Selected:{" "}
          {isImageSrc(value) ? imageDisplayName(value) : value}
        </Text>
      ) : null}
    </Field>
  );
}

function SmsCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
}) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: FONT,
        fontSize: 13,
        color: INK,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e: { target?: { checked?: boolean } }) =>
          onChange(Boolean(e.target?.checked))
        }
        style={{ width: 16, height: 16, accentColor: BRAND }}
      />
      {label || "Send SMS to the students"}
    </label>
  );
}

function LockedValue({ value }: { value?: string }) {
  return (
    <Text weight="medium" style={{ fontFamily: FONT, fontSize: 13 }}>
      {value?.trim() || "—"}
    </Text>
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
  const label = children || "";
  const withPlus = /^(Add|Import)\b/i.test(label);
  return (
    <div
      className="sa-primary-btn"
      onClick={disabled ? undefined : onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: withPlus ? 8 : 0,
        height: 34,
        padding: "0 14px",
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
      {withPlus ? <LineIcon name="plus" color={WHITE} size={15} /> : null}
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

function CertFileTable({
  files,
  onReplace,
}: {
  files: CertFile[];
  onReplace?: (file: CertFile) => void;
}) {
  return (
    <div className="sa-plain-table">
      <Table
        striped
        framed={false}
        headers={[
          "File",
          "Student ID",
          "Student Name",
          "College Name",
          "SA Batch",
          "Note",
          ...(onReplace ? ["Action"] : []),
        ]}
        rows={files.map((row) => [
          row.fileName,
          row.studentId,
          row.name,
          row.college,
          row.batch,
          row.error || "—",
          ...(onReplace
            ? [
                row.ok ? (
                  <div
                    key={`${row.id}-replace`}
                    className="sa-chip-view"
                    role="button"
                    onClick={() => onReplace(row)}
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
                    <LineIcon name="upload" color={BRAND} size={14} />
                    Replace
                  </div>
                ) : (
                  "—"
                ),
              ]
            : []),
        ])}
        rowTone={files.map((row) => (row.ok ? "success" : "danger"))}
      />
    </div>
  );
}

function HeaderExportButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="sa-header-export"
      role="button"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        height: 34,
        padding: "0 14px",
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
      Export
    </div>
  );
}

function AddSplitButton({
  open,
  onToggle,
  onSingle,
  onUpload,
  onEditUpload,
  label,
  singleLabel,
  uploadLabel,
  editUploadLabel,
}: {
  open: boolean;
  onToggle: () => void;
  onSingle?: () => void;
  onUpload: () => void;
  onEditUpload?: () => void;
  label?: string;
  singleLabel?: string;
  uploadLabel?: string;
  editUploadLabel?: string;
}) {
  const buttonLabel = label || "Add";
  return (
    <div style={{ position: "relative" }}>
      <div
        className="sa-primary-btn"
        role="button"
        onClick={onToggle}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          height: 34,
          padding: "0 14px",
          borderRadius: 6,
          background: "#002c76",
          color: WHITE,
          fontFamily: FONT,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        <LineIcon name="plus" color={WHITE} size={15} />
        {buttonLabel}
        <LineIcon name="chevron" color={WHITE} size={14} />
      </div>
      {open ? (
        <div
          className="sa-drop"
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 6px)",
            zIndex: 30,
            minWidth: 188,
            padding: 6,
            borderRadius: 8,
            background: WHITE,
            border: `1px solid ${LINE}`,
            boxShadow: "0 8px 24px rgba(27, 36, 48, 0.12)",
          }}
        >
          {onSingle ? (
            <div
              className="sa-drop-item"
              role="button"
              onClick={onSingle}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 10px",
                borderRadius: 6,
                fontFamily: FONT,
                fontSize: 13,
                fontWeight: 600,
                color: INK,
                cursor: "pointer",
              }}
            >
              <LineIcon name="plus" color={BRAND} size={15} />
              {singleLabel || "Single add"}
            </div>
          ) : null}
          <div
            className="sa-drop-item"
            role="button"
            onClick={onUpload}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 10px",
              borderRadius: 6,
              fontFamily: FONT,
              fontSize: 13,
              fontWeight: 600,
              color: INK,
              cursor: "pointer",
            }}
          >
            <LineIcon name="upload" color={BRAND} size={15} />
            {uploadLabel || "Upload file"}
          </div>
          {onEditUpload ? (
            <div
              className="sa-drop-item"
              role="button"
              onClick={onEditUpload}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 10px",
                borderRadius: 6,
                fontFamily: FONT,
                fontSize: 13,
                fontWeight: 600,
                color: INK,
                cursor: "pointer",
              }}
            >
              <LineIcon name="upload" color={BRAND} size={15} />
              {editUploadLabel || "Edit upload"}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function PageIntro({
  title,
  actions,
}: {
  title: string;
  body?: string;
  actions?: Parameters<typeof Stack>[0]["children"];
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
      <Row align="center" gap={12} justify="space-between">
        <H1
          style={mergeStyle({
            color: INK,
            fontFamily: FONT,
            margin: 0,
            lineHeight: "34px",
          })}
        >
          {title}
        </H1>
        {actions}
      </Row>
      <Text size="small" tone="secondary" style={{ color: MUTED, fontFamily: FONT }}>
        KBZPay SA &gt; {section} &gt; {title}
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
  const schoolCity = tally(schools.map((s) => s.city));
  const sinceTally = tally(schools.map((s) => s.partnerSince));
  const campusHeadcount = schools.reduce((sum, s) => sum + parseCount(s.totalStudents), 0);
  const actRegions = unique([
    ...events.map((e) => e.city),
    ...volunteers.map((v) => v.city),
    ...jobs.map((j) => j.city),
  ]);
  const eventByRegion = actRegions.map((r) => events.filter((e) => e.city === r).length);
  const volByRegion = actRegions.map((r) => volunteers.filter((v) => v.city === r).length);
  const jobByRegion = actRegions.map((r) => jobs.filter((j) => j.city === r).length);
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
      when: activityDateTime(e),
      place: `${e.city} · ${e.venue}`,
      count: String(e.registered),
    })),
    ...volunteers.map((v) => ({
      kind: "Volunteer",
      title: v.title,
      when: activityDateTime(v),
      place: `${v.city} · ${v.venue}`,
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
          body="Partner campus enrollment, city coverage, and year each school joined the program."
        />
        <Grid columns={3} gap={12}>
          <DashStat label="Partner schools" value={String(schools.length)} />
          <DashStat label="Campus headcount" value={campusHeadcount.toLocaleString()} />
          <DashStat label="Cities covered" value={String(schoolCity.labels.length)} />
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
            title="Partner schools by city"
            axes="City (slices) · Share of partner schools (%)"
            caption={caption}
          >
            <PieChart
              donut
              data={schoolCity.labels.map((label, i) => ({
                label,
                value: schoolCity.data[i],
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
          caption={`${caption}. Jobs use posting city as region.`}
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

  if (page === "dash-fame") {
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

  const usageMonths = ["2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"];
  const mauSeries = [42, 58, 71, 86, 104, 128];
  const sessionSeries = [210, 286, 340, 412, 498, 612];
  const avgSessionMin = [4.2, 4.6, 5.1, 5.4, 5.8, 6.1];
  const featureUsage = [
    { label: "Home / feed", value: 312 },
    { label: "Events", value: 186 },
    { label: "Volunteer", value: 142 },
    { label: "Jobs", value: 98 },
    { label: "KPI", value: 74 },
    { label: "Hall of Fame", value: 61 },
  ];
  const platformMix = [
    { label: "Android", value: 68 },
    { label: "iOS", value: 32 },
  ];
  const usageByBatch = batchTally.labels.length
    ? batchTally
    : { labels: ["Batch 6", "Batch 5", "Batch 4"], data: [54, 41, 33] };
  const retention = [
    { label: "Day 1", value: 78 },
    { label: "Day 7", value: 52 },
    { label: "Day 30", value: 34 },
  ];
  const activeAppUsers = mauSeries[mauSeries.length - 1];
  const totalSessions = sessionSeries[sessionSeries.length - 1];
  const avgMinutes = avgSessionMin[avgSessionMin.length - 1];

  return (
    <Stack gap={16}>
      <PageIntro
        title="App Usage Dashboard"
        body="KBZPay Student Ambassador app engagement — monthly active users, sessions, feature usage, and platform mix."
      />
      <Grid columns={4} gap={12}>
        <DashStat label="Monthly active users" value={String(activeAppUsers)} />
        <DashStat label="Sessions (Aug)" value={String(totalSessions)} />
        <DashStat label="Avg. session (min)" value={String(avgMinutes)} />
        <DashStat
          label="App adoption"
          value={`${Math.min(100, Math.round((activeAppUsers / Math.max(students.length, 1)) * 100))}%`}
        />
      </Grid>
      <ChartPanel
        title="Monthly active users and sessions"
        axes="Month (x) · Active users / sessions (y)"
        caption={`${caption}. Demo app analytics for the SA mobile app.`}
      >
        <LineChart
          categories={usageMonths.map(ymLabel)}
          series={[
            { name: "Monthly active users", data: mauSeries },
            { name: "Sessions", data: sessionSeries },
          ]}
          fill
          height={240}
        />
      </ChartPanel>
      <Grid columns={2} gap={12}>
        <ChartPanel
          title="Feature usage (screen opens)"
          axes="Feature (y) · Opens in Aug 2026 (x)"
          caption={`${caption}. Count of screen opens in the SA app.`}
        >
          <BarChart
            horizontal
            categories={featureUsage.map((f) => f.label)}
            series={[{ name: "Opens", data: featureUsage.map((f) => f.value) }]}
            height={Math.max(220, featureUsage.length * 42)}
          />
        </ChartPanel>
        <ChartPanel
          title="Platform mix"
          axes="Platform (slices) · Share of active users (%)"
          caption={caption}
        >
          <PieChart donut data={platformMix} />
        </ChartPanel>
      </Grid>
      <Grid columns={2} gap={12}>
        <ChartPanel
          title="Active users by SA batch"
          axes="SA batch (x) · Active app users (y)"
          caption={`${caption}. Active users attributed to each SA batch.`}
        >
          <BarChart
            categories={usageByBatch.labels}
            series={[{ name: "Active users", data: usageByBatch.data }]}
            height={220}
          />
        </ChartPanel>
        <ChartPanel
          title="Retention"
          axes="Cohort window (x) · Retained users (%)"
          caption={`${caption}. Share of Aug new installs returning on Day 1 / 7 / 30.`}
        >
          <BarChart
            categories={retention.map((r) => r.label)}
            series={[{ name: "Retention %", data: retention.map((r) => r.value) }]}
            height={220}
          />
        </ChartPanel>
      </Grid>
      <ChartPanel
        title="Average session length"
        axes="Month (x) · Average minutes per session (y)"
        caption={caption}
      >
        <LineChart
          categories={usageMonths.map(ymLabel)}
          series={[{ name: "Avg. minutes", data: avgSessionMin }]}
          fill
          height={200}
          showValues
        />
      </ChartPanel>
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
  disabled,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <Field label={label}>
      <input
        className="sa-date"
        type="date"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          height: 32,
          padding: "0 10px",
          borderRadius: 8,
          border: `1px solid ${LINE}`,
          fontFamily: FONT,
          fontSize: 13,
          background: disabled ? "#F3F4F6" : WHITE,
          color: disabled ? MUTED : INK,
          cursor: disabled ? "not-allowed" : "text",
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
  image,
}: {
  key?: string;
  label: string;
  wide?: boolean;
  image?: string;
}) {
  if (isImageSrc(image)) {
    return (
      <img
        className="sa-thumb"
        src={image}
        alt={label}
        style={{
          width: wide ? "100%" : 36,
          height: wide ? 140 : 36,
          borderRadius: 4,
          objectFit: "cover",
          display: "block",
          background: SOFT,
          flexShrink: 0,
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: wide ? "100%" : 36,
        height: wide ? 140 : 36,
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

function BannerChip({ children }: { children?: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignSelf: "flex-start",
        padding: "3px 8px",
        borderRadius: 999,
        background: "#eef3fb",
        color: BRAND,
        fontFamily: FONT,
        fontSize: 11,
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  );
}

function BannerPreview({
  title,
  source,
  category,
  status,
  link,
  image,
  imageName,
  order,
}: {
  title?: string;
  source?: string;
  category?: string;
  status?: string;
  link?: string;
  image?: string;
  imageName?: string;
  order?: string;
}) {
  const displayTitle = title?.trim() || "Banner title";
  const displaySource = source || "Announcement";
  const displayCategory =
    category || defaultBannerCategory(displaySource);
  const displayStatus = status || "Active";
  const displayLink =
    link?.trim() ||
    bannerLinkFor(displaySource, displayCategory, displayTitle);
  const displayImageLabel = imageDisplayName(image, imageName);
  const displayOrder = order?.trim() || "1";

  return (
    <Stack gap={10}>
      <Text size="small" tone="secondary" weight="semibold">
        Preview
      </Text>
      <div
        style={{
          border: `1px solid ${LINE}`,
          borderRadius: 8,
          overflow: "hidden",
          background: WHITE,
        }}
      >
        <div
          style={{
            padding: "10px 12px",
            borderBottom: `1px solid ${LINE}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <Text size="small" weight="semibold">
            {displayTitle}
          </Text>
          <StatusMark value={displayStatus} />
        </div>
        <Stack gap={10} style={{ padding: 12 }}>
          <Thumb label={displayTitle} wide image={image} />
          <Row gap={6}>
            <BannerChip>{displaySource}</BannerChip>
            <BannerChip>{displayCategory}</BannerChip>
          </Row>
          <Text size="small" tone="secondary">
            {displayImageLabel} · order {displayOrder}
          </Text>
          <Text size="small" tone="tertiary">
            {displayLink}
          </Text>
        </Stack>
      </div>
      <Text size="small" tone="tertiary">
        Review this preview before creating the banner.
      </Text>
    </Stack>
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

function CvAttachLink({ fileName }: { fileName: string; key?: string }) {
  if (!fileName?.trim()) return "—";
  return (
    <span
      role="link"
      className="sa-cv-link"
      onClick={() => {
        const blob = new Blob([`CV attachment: ${fileName}`], {
          type: "application/pdf",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: BRAND,
        fontFamily: FONT,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        textDecoration: "underline",
        whiteSpace: "nowrap",
      }}
    >
      <LineIcon name="download" color={BRAND} size={14} />
      {fileName}
    </span>
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

function HistoryTabs({
  value,
  counts,
  onChange,
}: {
  value: ActivityHistTab;
  counts: Record<ActivityHistTab, number>;
  onChange: (tab: ActivityHistTab) => void;
}) {
  const tabs: ActivityHistTab[] = ["Volunteer", "Event", "Job"];
  return (
    <Row gap={8} align="center">
      {tabs.map((tab) => {
        const on = value === tab;
        return (
          <div
            key={tab}
            className={on ? "sa-tab-on" : "sa-tab-off"}
            onClick={() => onChange(tab)}
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
            {tab} ({counts[tab]})
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

function IconActionBtn({
  name,
  label,
  color,
  bg,
  onClick,
}: {
  key?: string;
  name: string;
  label: string;
  color: string;
  bg: string;
  onClick: () => void;
}) {
  return (
    <div
      title={label}
      onClick={onClick}
      style={{
        width: 30,
        height: 30,
        borderRadius: 6,
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <LineIcon name={name} color={color} size={14} />
    </div>
  );
}

function EmploymentTable({
  rows,
  onEdit,
  onDelete,
}: {
  rows: Employment[];
  onEdit?: (emp: Employment) => void;
  onDelete?: (emp: Employment) => void;
}) {
  if (!rows.length) {
    return (
      <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
        No employment records yet.
      </Text>
    );
  }
  const showActions = Boolean(onEdit || onDelete);
  return (
    <div className="sa-plain-table">
      <Table
        striped
        headers={[
          "Type",
          "Position",
          "Department",
          "Join Date",
          "End Date",
          "Status",
          ...(showActions ? ["Action"] : []),
        ]}
        rows={rows.map((emp) => [
          employmentTypeLabel(emp.type),
          emp.position || "—",
          emp.department || "—",
          emp.joinDate || "—",
          employmentEndDisplay(emp.endDate || "", emp.current),
          employmentRecordStatus(emp.endDate || "", emp.current),
          ...(showActions
            ? [
                <Row key={`emp-actions-${emp.id}`} gap={6}>
                  {onEdit ? (
                    <IconActionBtn
                      name="pencil"
                      label="Edit"
                      color={BRAND}
                      bg={SOFT}
                      onClick={() => onEdit(emp)}
                    />
                  ) : null}
                  {onDelete ? (
                    <IconActionBtn
                      name="trash"
                      label="Delete"
                      color="#C62828"
                      bg="#FDECEC"
                      onClick={() => onDelete(emp)}
                    />
                  ) : null}
                </Row>,
              ]
            : []),
        ])}
      />
    </div>
  );
}

export default function StudentManagementPortal() {
  const [page, setPage] = useCanvasState<PageId>("page", "students");
  if (
    (page as string) === "award-category" ||
    (page as string) === "training-region"
  ) {
    setPage("sa-batch");
  }
  if (!SHOW_ACTIVITY_LOG && page === "activity") {
    setPage("students");
  }
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
  const [cityFilter, setCityFilter] = useCanvasState("cityFilter", "All");
  const [statusFilter, setStatusFilter] = useCanvasState("statusFilter", "All");
  const [dateFrom, setDateFrom] = useCanvasState("dateFrom", "");
  const [dateTo, setDateTo] = useCanvasState("dateTo", "");
  const [advOpen, setAdvOpen] = useCanvasState("advOpen", false);
  const [kpiImported, setKpiImported] = useCanvasState("kpiImported", "");
  const [studentImportResult, setStudentImportResult] =
    useCanvasState<StudentImportResult | null>("studentImportResult", null);
  const [navOpen, setNavOpen] = useCanvasState("navOpen", true);
  const [detailId, setDetailId] = useCanvasState("detailId", "");
  const [menuId, setMenuId] = useCanvasState("menuId", "");
  const [partTab, setPartTab] = useCanvasState<JoinStatus>("partTab", "Pending");
  const [activityHistTab, setActivityHistTab] = useCanvasState<ActivityHistTab>(
    "activityHistTab",
    "Volunteer",
  );
  const [certZipFiles, setCertZipFiles] = useCanvasState<CertFile[]>(
    "certZipFiles",
    [],
  );
  const [empDraft, setEmpDraft] = useCanvasState<Employment[]>("empDraft", []);
  const [empFormOpen, setEmpFormOpen] = useCanvasState<
    "closed" | "add" | "edit"
  >("empFormOpen", "closed");
  const [empFormId, setEmpFormId] = useCanvasState("empFormId", "");
  const [empForm, setEmpForm] = useCanvasState<Record<string, string>>(
    "empForm",
    {},
  );
  const [joinActionId, setJoinActionId] = useCanvasState("joinActionId", "");
  const [joinActionStatus, setJoinActionStatus] = useCanvasState(
    "joinActionStatus",
    "",
  );
  const [joinSendSms, setJoinSendSms] = useCanvasState("joinSendSms", false);
  const [joinRemarks, setJoinRemarks] = useCanvasState("joinRemarks", "");
  const [partViewId, setPartViewId] = useCanvasState("partViewId", "");
  const [partSearch, setPartSearch] = useCanvasState("partSearch", "");
  const [partBatchFilter, setPartBatchFilter] = useCanvasState("partBatchFilter", "All");
  const [partCollegeFilter, setPartCollegeFilter] = useCanvasState(
    "partCollegeFilter",
    "All",
  );
  const [partDateFrom, setPartDateFrom] = useCanvasState("partDateFrom", "");
  const [partDateTo, setPartDateTo] = useCanvasState("partDateTo", "");
  const [partAdvOpen, setPartAdvOpen] = useCanvasState("partAdvOpen", false);
  const [activityCancelOpen, setActivityCancelOpen] = useCanvasState(
    "activityCancelOpen",
    false,
  );
  const [activityCancelMsg, setActivityCancelMsg] = useCanvasState(
    "activityCancelMsg",
    "",
  );
  const [activityCancelSms, setActivityCancelSms] = useCanvasState(
    "activityCancelSms",
    false,
  );

  const [students, setStudents] = useCanvasState<Student[]>("saStudents6", SEED_STUDENTS);
  const [schools, setSchools] = useCanvasState<School[]>("saSchools3", SEED_SCHOOLS);
  const [events, setEvents] = useCanvasState<EventRec[]>("events3", SEED_EVENTS);
  const [volunteers, setVolunteers] = useCanvasState<Volunteer[]>(
    "volunteers3",
    SEED_VOLUNTEERS,
  );
  const [jobs, setJobs] = useCanvasState<Job[]>("jobs4", SEED_JOBS);
  const [joins, setJoins] = useCanvasState<JoinRecord[]>("joins3", SEED_JOINS);
  const [candidates] = useCanvasState<JobCandidate[]>(
    "candidates3",
    SEED_CANDIDATES,
  );
  const [kpis, setKpis] = useCanvasState<KpiRow[]>("kpis", SEED_KPI);
  const [fame, setFame] = useCanvasState<Fame[]>("fame", SEED_FAME);
  const [certs, setCerts] = useCanvasState<CertPack[]>("certPacks", SEED_CERTS);
  const [banners, setBanners] = useCanvasState<Banner[]>("banners6", SEED_BANNERS);
  const [logs] = useCanvasState<ActivityLog[]>("activityLogs", SEED_ACTIVITY);
  const [batches, setBatches] = useCanvasState<MasterItem[]>("batches", SEED_BATCHES);
  const [regions] = useCanvasState<MasterItem[]>("regions", SEED_REGIONS);
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
  const cityOpts = [
    { value: "All", label: "All cities" },
    ...unique(students.map((s) => s.city).filter(Boolean)).sort().map((city) => ({
      value: city,
      label: city,
    })),
  ];
  const schoolCityOpts = [
    { value: "All", label: "All cities" },
    ...unique(schools.map((s) => s.city).filter(Boolean)).sort().map((city) => ({
      value: city,
      label: city,
    })),
  ];
  const schoolStatusOpts = [
    { value: "All", label: "All statuses" },
    ...STATUS_OPTS,
  ];
  const studentStatusOpts = [
    { value: "All", label: "All statuses" },
    ...SA_STATUS_OPTS,
  ];
  const activityStatusFilterOpts = [
    { value: "All", label: "All statuses" },
    ...ACTIVITY_STATUS_OPTS,
  ];
  const jobStatusFilterOpts = [
    { value: "All", label: "All statuses" },
    { value: "Active", label: "Active" },
    { value: "Closed", label: "Closed" },
    { value: "Expired", label: "Expired" },
  ];
  const eventCityOpts = [
    { value: "All", label: "All cities" },
    ...unique(events.map((e) => e.city).filter(Boolean))
      .sort()
      .map((city) => ({ value: city, label: city })),
  ];
  const volunteerCityOpts = [
    { value: "All", label: "All cities" },
    ...unique(volunteers.map((v) => v.city).filter(Boolean))
      .sort()
      .map((city) => ({ value: city, label: city })),
  ];
  const jobCityOpts = [
    { value: "All", label: "All cities" },
    ...unique(jobs.map((j) => j.city).filter(Boolean))
      .sort()
      .map((city) => ({ value: city, label: city })),
  ];
  const awardSelect = FAME_CATEGORY_OPTS;
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
    setEmpDraft([]);
  }

  function openAddStudent() {
    setMenuId("");
    openAdd({
      studentId: nextStudentId(students),
      name: "",
      college: schools[0]?.college || "",
      region: regions[0]?.name || "Yangon",
      township: "",
      city: "",
      currentAddress: "",
      permanentAddress: "",
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
      avatar: "",
      employment: [],
    });
  }

  function openUploadStudents() {
    setMenuId("");
    setForm({ file: "", importText: "" });
    setModal("import");
  }

  function openUpdateStudents() {
    setMenuId("");
    setForm({ file: "", importText: "" });
    setModal("update-import");
  }

  function openEdit(id: string, defaults: Record<string, string>) {
    setForm(defaults);
    setEditId(id);
    setModal("edit");
    const student = students.find((s) => s.id === id);
    setEmpDraft(
      (student?.employment || []).map((emp) => normalizeEmployment(emp)),
    );
  }

  function openDetails(id: string, defaults: Record<string, string>) {
    setForm(defaults);
    setEditId(id);
    setDetailId(id);
    setMenuId("");
    setPartTab("Pending");
    setActivityHistTab("Volunteer");
    setPartSearch("");
    setPartBatchFilter("All");
    setPartCollegeFilter("All");
    setPartDateFrom("");
    setPartDateTo("");
    setPartAdvOpen(false);
  }

  function closeDetails() {
    setDetailId("");
    setMenuId("");
    setPartTab("Pending");
    setActivityHistTab("Volunteer");
    setEmpFormOpen("closed");
    setEmpFormId("");
    setEmpForm({});
    setJoinActionId("");
    setJoinActionStatus("");
    setJoinSendSms(false);
    setJoinRemarks("");
    setPartViewId("");
    setPartSearch("");
    setPartBatchFilter("All");
    setPartCollegeFilter("All");
    setPartDateFrom("");
    setPartDateTo("");
    setPartAdvOpen(false);
    setActivityCancelOpen(false);
    setActivityCancelMsg("");
    setActivityCancelSms(false);
  }

  function openView(id: string, defaults: Record<string, string>) {
    openDetails(id, defaults);
  }

  function closeModal() {
    setModal("closed");
    if (!detailId) setEditId("");
    setCertZipFiles([]);
    setEmpDraft([]);
  }

  function setField(key: string, value: string) {
    setForm({ ...form, [key]: value });
  }

  function setEmpField(key: string, value: string) {
    setEmpForm({ ...empForm, [key]: value });
  }

  function closeEmpForm() {
    setEmpFormOpen("closed");
    setEmpFormId("");
    setEmpForm({});
  }

  function openAddEmployment() {
    setEmpFormId("");
    setEmpForm({
      type: "Intern",
      position: "",
      department: "",
      joinDate: "",
      endDate: "",
      current: "yes",
    });
    setEmpFormOpen("add");
  }

  function openEditEmployment(emp: Employment) {
    const normalized = normalizeEmployment(emp);
    setEmpFormId(emp.id);
    setEmpForm({
      type: normalized.type || "Intern",
      position: normalized.position || "",
      department: normalized.department || "",
      joinDate: normalized.joinDate || "",
      endDate: normalized.endDate || "",
      current: normalized.current ? "yes" : "no",
    });
    setEmpFormOpen("edit");
  }

  function saveEmploymentForm() {
    if (!detailId) return;
    const isCurrent = empForm.current === "yes";
    const next: Employment = normalizeEmployment({
      id: empFormOpen === "edit" && empFormId ? empFormId : uid("emp"),
      type: empForm.type || "Intern",
      position: empForm.position || "",
      department: empForm.department || "",
      joinDate: empForm.joinDate || "",
      endDate: isCurrent ? "" : empForm.endDate || "",
      current: isCurrent,
    });
    setStudents(
      students.map((s) => {
        if (s.id !== detailId) return s;
        const current = s.employment || [];
        return {
          ...s,
          employment:
            empFormOpen === "edit"
              ? current.map((row) => (row.id === next.id ? next : row))
              : [...current, next],
        };
      }),
    );
    closeEmpForm();
    flash(
      empFormOpen === "edit"
        ? "employment updated"
        : "employment successfully added",
    );
  }

  function deleteEmployment(emp: Employment) {
    if (!detailId) return;
    setStudents(
      students.map((s) =>
        s.id === detailId
          ? {
              ...s,
              employment: (s.employment || []).filter((row) => row.id !== emp.id),
            }
          : s,
      ),
    );
    flash("employment deleted");
  }

  function updateEmpDraft(index: number, key: keyof Employment, value: string | boolean) {
    setEmpDraft(
      empDraft.map((row, i) => {
        if (i !== index) return row;
        if (key === "current") {
          const current = Boolean(value);
          return { ...row, current, endDate: current ? "" : row.endDate };
        }
        return { ...row, [key]: value };
      }),
    );
  }

  function addEmpDraft() {
    setEmpDraft([
      ...empDraft,
      {
        id: uid("emp"),
        type: "Intern",
        position: "",
        department: "",
        joinDate: "",
        endDate: "",
        current: true,
      },
    ]);
  }

  function removeEmpDraft(index: number) {
    setEmpDraft(empDraft.filter((_, i) => i !== index));
  }

  function go(id: PageId) {
    setPage(id);
    setSearch("");
    setRegionFilter("All");
    setBatchFilter("All");
    setCollegeFilter("All");
    setCityFilter("All");
    setStatusFilter("All");
    setDateFrom("");
    setDateTo("");
    setAdvOpen(false);
    setModal("closed");
    setKpiImported("");
    setStudentImportResult(null);
    setDetailId("");
    setMenuId("");
    setPartTab("Pending");
    setActivityHistTab("Volunteer");
    setEmpFormOpen("closed");
    setEmpFormId("");
    setEmpForm({});
    setJoinActionId("");
    setJoinActionStatus("");
    setJoinSendSms(false);
    setJoinRemarks("");
    setPartViewId("");
    setActivityCancelOpen(false);
    setActivityCancelMsg("");
    setActivityCancelSms(false);
    if (DASH_NAV.some((item) => item.id === id)) setDashOpen(true);
    if (ANNOUNCE_NAV.some((item) => item.id === id)) setAnnounceOpen(true);
    if (MASTER_NAV.some((item) => item.id === id)) setMasterOpen(true);
  }

  const q = search.trim();

  const detailJoins = joins.filter((j) => j.parentId === detailId);
  const detailHasParticipants = detailJoins.length > 0;
  const partViewRow = partViewId
    ? joins.find((j) => j.id === partViewId)
    : undefined;
  const studentEventHistory = joins
    .filter(
      (j) =>
        j.studentId === form.studentId &&
        events.some((e) => e.id === j.parentId),
    )
    .map((j) => ({
      title: events.find((e) => e.id === j.parentId)?.title || "—",
      appliedAt: j.appliedAt,
    }))
    .sort((a, b) => a.appliedAt.localeCompare(b.appliedAt));
  const studentVolHistory = joins
    .filter(
      (j) =>
        j.studentId === form.studentId &&
        volunteers.some((v) => v.id === j.parentId),
    )
    .map((j) => ({
      title: volunteers.find((v) => v.id === j.parentId)?.title || "—",
      appliedAt: j.appliedAt,
    }))
    .sort((a, b) => a.appliedAt.localeCompare(b.appliedAt));
  const studentJobHistory = candidates
    .filter((c) => c.studentId === form.studentId)
    .map((c) => ({
      title: jobs.find((j) => j.id === c.jobId)?.title || "—",
      appliedAt: c.appliedAt,
    }))
    .sort((a, b) => a.appliedAt.localeCompare(b.appliedAt));
  const activityHistCounts: Record<ActivityHistTab, number> = {
    Volunteer: studentVolHistory.length,
    Event: studentEventHistory.length,
    Job: studentJobHistory.length,
  };
  const activityHistRows =
    activityHistTab === "Volunteer"
      ? studentVolHistory
      : activityHistTab === "Event"
        ? studentEventHistory
        : studentJobHistory;
  const detailStudent =
    page === "students" && detailId
      ? students.find((s) => s.id === detailId)
      : undefined;
  const joinCounts: Record<JoinStatus, number> = {
    Pending: detailJoins.filter((j) => j.status === "Pending").length,
    Approved: detailJoins.filter((j) => j.status === "Approved").length,
    Rejected: detailJoins.filter((j) => j.status === "Rejected").length,
    Cancelled: detailJoins.filter((j) => j.status === "Cancelled").length,
  };
  const tabJoins = detailJoins.filter((j) => j.status === partTab);
  const partQ = partSearch.trim().toLowerCase();
  const partBatchOpts = [
    { value: "All", label: "All batches" },
    ...unique(detailJoins.map((j) => j.batch).filter(Boolean))
      .sort()
      .map((batch) => ({ value: batch, label: batch })),
  ];
  const partCollegeOpts = [
    { value: "All", label: "All colleges" },
    ...unique(detailJoins.map((j) => j.college).filter(Boolean))
      .sort()
      .map((college) => ({ value: college, label: college })),
  ];
  const partAdvCount =
    Number(partBatchFilter !== "All") +
    Number(partCollegeFilter !== "All") +
    Number(!!partDateFrom) +
    Number(!!partDateTo);
  const filteredTabJoins = tabJoins.filter((j) => {
    if (partBatchFilter !== "All" && j.batch !== partBatchFilter) return false;
    if (partCollegeFilter !== "All" && j.college !== partCollegeFilter) return false;
    if (!inDateRange(j.appliedAt, partDateFrom, partDateTo)) return false;
    if (!partQ) return true;
    return (
      matches(j.studentId, partQ) ||
      matches(j.name, partQ) ||
      matches(j.college, partQ) ||
      matches(j.batch, partQ) ||
      matches(j.currentAddress, partQ)
    );
  });
  const detailActivityStatus =
    page === "events" || page === "volunteers"
      ? displayActivityStatus({
          status: form.status || "",
          eventDate: form.eventDate || "",
          eventTime: form.eventTime || "",
          regEnd: form.regEnd || "",
          max: form.max || "0",
          registered: parseCount(form.registered || "0"),
        })
      : "";
  const showActivityCancel =
    (page === "events" || page === "volunteers") &&
    canCancelActivity({
      status: form.status || "",
      eventDate: form.eventDate || "",
      eventTime: form.eventTime || "",
      regEnd: form.regEnd || "",
      max: form.max || "0",
      registered: parseCount(form.registered || "0"),
    });
  const detailCert = certs.find((c) => c.id === detailId);

  function moveJoin(
    id: string,
    status: JoinStatus,
    message: string,
    remarks?: string,
  ) {
    setJoins(
      joins.map((j) =>
        j.id === id
          ? {
              ...j,
              status,
              ...(remarks !== undefined ? { remarks } : {}),
            }
          : j,
      ),
    );
    flash(message);
  }

  function openJoinAction(
    id: string,
    status: "Approved" | "Rejected" | "Cancelled",
  ) {
    setPartViewId("");
    setJoinActionId(id);
    setJoinActionStatus(status);
    setJoinSendSms(false);
    setJoinRemarks("");
  }

  function closeJoinAction() {
    setJoinActionId("");
    setJoinActionStatus("");
    setJoinSendSms(false);
    setJoinRemarks("");
  }

  function confirmJoinAction() {
    if (!joinActionId || !joinActionStatus) return;
    const status = joinActionStatus as JoinStatus;
    const base =
      status === "Approved"
        ? "successfully approved"
        : status === "Rejected"
          ? "successfully rejected"
          : "successfully cancelled";
    moveJoin(
      joinActionId,
      status,
      joinSendSms ? `${base} · message sent to participant` : base,
      joinRemarks.trim(),
    );
    closeJoinAction();
  }

  function openActivityCancel() {
    setActivityCancelMsg("");
    setActivityCancelSms(false);
    setActivityCancelOpen(true);
  }

  function closeActivityCancel() {
    setActivityCancelOpen(false);
    setActivityCancelMsg("");
    setActivityCancelSms(false);
  }

  function confirmActivityCancel() {
    if (!detailId) return;
    const remarks = activityCancelMsg.trim();
    if (page === "events") {
      setEvents(
        events.map((e) =>
          e.id === detailId ? { ...e, status: "Cancelled" } : e,
        ),
      );
    }
    if (page === "volunteers") {
      setVolunteers(
        volunteers.map((v) =>
          v.id === detailId ? { ...v, status: "Cancelled" } : v,
        ),
      );
    }
    setJoins(
      joins.map((j) =>
        j.parentId === detailId &&
        (j.status === "Pending" || j.status === "Approved")
          ? {
              ...j,
              status: "Cancelled",
              remarks: remarks || j.remarks || "Activity cancelled",
            }
          : j,
      ),
    );
    setForm({ ...form, status: "Cancelled" });
    closeActivityCancel();
    flash(
      activityCancelSms
        ? "activity cancelled · message sent to participants"
        : "activity cancelled",
    );
  }

  const filteredStudents = students.filter((s) => {
    if (regionFilter !== "All" && s.region !== regionFilter) return false;
    if (batchFilter !== "All" && s.batch !== batchFilter) return false;
    if (collegeFilter !== "All" && s.college !== collegeFilter) return false;
    if (statusFilter !== "All" && s.status !== statusFilter) return false;
    if (!inDateRange(s.createdAt, dateFrom, dateTo)) return false;
    if (!q) return true;
    return matches(s.studentId, q) || matches(s.name, q);
  });

  const filteredSchools = schools.filter((s) => {
    if (cityFilter !== "All" && s.city !== cityFilter) return false;
    if (statusFilter !== "All" && s.status !== statusFilter) return false;
    if (!inDateRange(s.createdAt, dateFrom, dateTo)) return false;
    if (!q) return true;
    return (
      matches(s.college, q) ||
      matches(s.partnerSchoolId, q) ||
      matches(s.city, q) ||
      matches(s.township, q)
    );
  });

  const studentAdvCount =
    (batchFilter !== "All" ? 1 : 0) +
    (collegeFilter !== "All" ? 1 : 0) +
    (regionFilter !== "All" ? 1 : 0) +
    (statusFilter !== "All" ? 1 : 0) +
    (dateFrom ? 1 : 0) +
    (dateTo ? 1 : 0);

  const schoolAdvCount =
    (cityFilter !== "All" ? 1 : 0) +
    (statusFilter !== "All" ? 1 : 0) +
    (dateFrom ? 1 : 0) +
    (dateTo ? 1 : 0);

  const activityAdvCount =
    (cityFilter !== "All" ? 1 : 0) +
    (statusFilter !== "All" ? 1 : 0) +
    (dateFrom ? 1 : 0) +
    (dateTo ? 1 : 0);

  const filteredEvents = events.filter((e) => {
    const status = displayActivityStatus(e);
    if (cityFilter !== "All" && e.city !== cityFilter) return false;
    if (statusFilter !== "All" && status !== statusFilter) return false;
    if (!inDateRange(e.eventDate, dateFrom, dateTo)) return false;
    if (!q) return true;
    return matches(e.title, q);
  });

  const filteredVolunteers = volunteers.filter((v) => {
    const status = displayActivityStatus(v);
    if (cityFilter !== "All" && v.city !== cityFilter) return false;
    if (statusFilter !== "All" && status !== statusFilter) return false;
    if (!inDateRange(v.eventDate, dateFrom, dateTo)) return false;
    if (!q) return true;
    return matches(v.title, q);
  });

  const filteredJobs = jobs.filter((j) => {
    const status = displayJobStatus(j);
    if (cityFilter !== "All" && j.city !== cityFilter) return false;
    if (statusFilter !== "All" && status !== statusFilter) return false;
    if (!inDateRange(j.start, dateFrom, dateTo)) return false;
    if (!q) return true;
    return matches(j.title, q);
  });

  const detailCandidates = candidates.filter((c) => c.jobId === detailId);
  const candBatchOpts = [
    { value: "All", label: "All batches" },
    ...unique(detailCandidates.map((c) => c.batch).filter(Boolean))
      .sort()
      .map((batch) => ({ value: batch, label: batch })),
  ];
  const candCollegeOpts = [
    { value: "All", label: "All colleges" },
    ...unique(detailCandidates.map((c) => c.college).filter(Boolean))
      .sort()
      .map((college) => ({ value: college, label: college })),
  ];
  const filteredDetailCandidates = detailCandidates.filter((c) => {
    if (partBatchFilter !== "All" && c.batch !== partBatchFilter) return false;
    if (partCollegeFilter !== "All" && c.college !== partCollegeFilter) return false;
    if (!inDateRange(c.appliedAt, partDateFrom, partDateTo)) return false;
    if (!partQ) return true;
    return (
      matches(c.studentId, partQ) ||
      matches(c.name, partQ) ||
      matches(c.college, partQ) ||
      matches(c.batch, partQ)
    );
  });

  function clearAdvFilters() {
    setBatchFilter("All");
    setCollegeFilter("All");
    setRegionFilter("All");
    setCityFilter("All");
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
    "sa-batch": {
      title: "SA Batch",
      body: "Manage Student Ambassador batches used across records, certificates, and KPI imports.",
      extraLabel: "Year",
      items: batches,
      setItems: setBatches,
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
        ["City", form.city],
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
        ["Current Address", form.currentAddress],
        ["Permanent Address", form.permanentAddress],
        ["Status", form.status],
        ...auditPairs(form),
      ];
    }
    if (page === "schools") {
      return [
        ["Partner School ID", form.partnerSchoolId],
        ["College Name", form.college],
        ["City", form.city],
        ["Township", form.township],
        ["College Type", form.collegeType],
        ["Total Students", form.totalStudents],
        ["Partner Since", form.partnerSince],
        ["Year Established", form.established],
        ["Status", form.status],
        ["Contact Person", form.contact],
        ["Phone Number", form.phone],
        ["Email", form.email],
        ["College Address", form.address],
        ["College Logo", form.logo],
        ["College Cover Image", imageDisplayName(form.cover)],
        ["About School", form.about],
        ...auditPairs(form),
      ];
    }
    if (page === "events") {
      return [
        ["Event ID", form.eventId],
        ["Event Title", form.title],
        ["Status", detailActivityStatus],
        ["Event Venue", form.venue],
        ["Event Date", form.eventDate],
        ["Event Time", form.eventTime],
        ["City", form.city],
        ["Township", form.township],
        ["Host Name", form.hostName],
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
        ["Volunteer ID", form.volunteerId],
        ["Volunteer Title", form.title],
        ["Status", detailActivityStatus],
        ["Venue", form.venue],
        ["Event Date", form.eventDate],
        ["Event Time", form.eventTime],
        ["City", form.city],
        ["Township", form.township],
        ["Host Name", form.hostName],
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
        ["Job ID", form.jobId],
        ["Job Title", form.title],
        ["Status", displayJobStatus({
          vacancies: form.vacancies || "0",
          deadline: form.deadline || "",
          applicants: parseCount(form.applicants || "0"),
          status: form.status || "",
        })],
        ["Job Type", form.type],
        ["Company Name", form.company],
        ["City", form.city],
        ["Township", form.township],
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
        ...(form.category === "Internship" || form.category === "Permanent"
          ? [
              ["Choose intern or permanent", form.employmentType || "—"] as [string, string],
              ["Department", form.department || "—"] as [string, string],
              ["Join Date", form.joinDate || "—"] as [string, string],
              ["End Date", fameEndLabel(form.endDate || "")] as [string, string],
            ]
          : []),
        ...auditPairs(form),
      ];
    }
    if (page === "certificates") {
      return [
        ["SA Batch", form.batch],
        ["Certificate Category", form.category],
        ["ZIP file", form.file],
        ["Total student count", form.totalStudents || "—"],
        ["Count", form.count],
        ["Uploaded", form.uploaded],
        ...auditPairs(form),
      ];
    }
    if (page === "banners") {
      return [
        ["Banner title", form.title],
        ["Status", form.status],
        ["Source", form.source],
        ["Category", form.category],
        ["Selected title", form.linkedTitle || form.title],
        ["Thumbnail", imageDisplayName(form.image, form.imageName)],
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
          .sa-light main div.sa-template,
          .sa-light main div.sa-header-export,
          .sa-modal div.sa-template {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            background: ${WHITE} !important;
            border: 1px solid ${LINE} !important;
          }
          .sa-light main div.sa-drop {
            background: ${WHITE} !important;
            border: 1px solid ${LINE} !important;
          }
          .sa-light main div.sa-drop-item {
            color: ${INK} !important;
            -webkit-text-fill-color: ${INK} !important;
            background: transparent !important;
          }
          .sa-light main div.sa-drop-item:hover {
            color: ${BRAND} !important;
            -webkit-text-fill-color: ${BRAND} !important;
            background: ${SOFT} !important;
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
              {page === "students" ? (
                <div
                  style={{
                    background: WHITE,
                    padding: 20,
                    borderRadius: 8,
                    border: `1px solid ${LINE}`,
                  }}
                >
                  <Row align="center" gap={16}>
                    <StudentAvatar
                      name={form.name || ""}
                      avatar={form.avatar}
                      size={96}
                    />
                    <Stack gap={6}>
                      <Text weight="semibold" style={{ fontFamily: FONT, fontSize: 18 }}>
                        {form.name || "—"}
                      </Text>
                      <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                        {form.studentId || "—"} · {form.college || "—"}
                      </Text>
                      <Row gap={8} align="center">
                        <StatusMark value={form.status || "Active"} />
                        <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                          {form.batch || "—"} · {form.region || "—"}
                        </Text>
                      </Row>
                    </Stack>
                  </Row>
                </div>
              ) : null}
              <Row gap={8}>
                {page === "certificates" || page === "activity" ? null : (
                  <BrandButton
                    onClick={() => {
                      if (page === "students" && detailId) {
                        const student = students.find((s) => s.id === detailId);
                        setEmpDraft(
                          student?.employment
                            ? student.employment.map((emp) =>
                                normalizeEmployment(emp),
                              )
                            : [],
                        );
                      }
                      setModal("edit");
                    }}
                  >
                    Edit
                  </BrandButton>
                )}
                {page === "jobs" &&
                displayJobStatus({
                  vacancies: form.vacancies || "0",
                  deadline: form.deadline || "",
                  applicants: parseCount(form.applicants || "0"),
                  status: form.status || "",
                }) !== "Closed" ? (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      if (!detailId) return;
                      setJobs(
                        jobs.map((j) =>
                          j.id === detailId ? { ...j, status: "Closed" } : j,
                        ),
                      );
                      setForm({ ...form, status: "Closed" });
                      flash("vacancy closed");
                    }}
                  >
                    Close
                  </Button>
                ) : null}
                {page === "banners" || master ? (
                  <MiniAction
                    kind="reject"
                    label="Delete"
                    onClick={() => setModal("delete")}
                  />
                ) : null}
                {showActivityCancel ? (
                  <Button variant="ghost" onClick={openActivityCancel}>
                    Cancel activity
                  </Button>
                ) : null}
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
              {page === "banners" && isImageSrc(form.image) ? (
                <div
                  style={{
                    background: WHITE,
                    padding: 20,
                    borderRadius: 8,
                    border: `1px solid ${LINE}`,
                  }}
                >
                  <Stack gap={10}>
                    <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                      Banner image
                    </H2>
                    <Thumb
                      label={form.title || "Banner"}
                      wide
                      image={form.image}
                    />
                  </Stack>
                </div>
              ) : null}
              {page === "schools" && (form.cover || form.logo) ? (
                <div
                  style={{
                    background: WHITE,
                    padding: 20,
                    borderRadius: 8,
                    border: `1px solid ${LINE}`,
                  }}
                >
                  <Stack gap={12}>
                    {form.cover ? (
                      <Stack gap={10}>
                        <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                          College Cover Image
                        </H2>
                        <Thumb
                          label={form.college || "College cover"}
                          wide
                          image={form.cover}
                        />
                      </Stack>
                    ) : null}
                    {form.logo ? (
                      <Stack gap={10}>
                        <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                          College Logo
                        </H2>
                        <Thumb label={form.college || "College logo"} image={form.logo} />
                      </Stack>
                    ) : null}
                  </Stack>
                </div>
              ) : null}
              {page === "students" ? (
                <Stack gap={16}>
                  <Stack gap={10}>
                    <Row align="center">
                      <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                        Employment
                      </H2>
                      <Spacer />
                      <BrandButton onClick={openAddEmployment}>
                        Add employment
                      </BrandButton>
                    </Row>
                    <div
                      style={{
                        background: WHITE,
                        padding: 20,
                        borderRadius: 8,
                        border: `1px solid ${LINE}`,
                      }}
                    >
                      <EmploymentTable
                        rows={detailStudent?.employment || []}
                        onEdit={openEditEmployment}
                        onDelete={deleteEmployment}
                      />
                    </div>
                  </Stack>
                  <Stack gap={10}>
                    <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                      Activity history
                    </H2>
                    <HistoryTabs
                      value={activityHistTab}
                      counts={activityHistCounts}
                      onChange={setActivityHistTab}
                    />
                    {activityHistRows.length ? (
                      <div className="sa-plain-table">
                        <Table
                          striped
                          headers={["Title", "Applied Date"]}
                          rows={activityHistRows.map((row) => [
                            row.title,
                            row.appliedAt,
                          ])}
                        />
                      </div>
                    ) : (
                      <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                        No {activityHistTab.toLowerCase()} records yet.
                      </Text>
                    )}
                  </Stack>
                </Stack>
              ) : null}
              {page === "events" || page === "volunteers" ? (
                <Stack gap={12}>
                  <Row align="center">
                    <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                      Participants
                    </H2>
                    <Spacer />
                    <HeaderExportButton
                      onClick={() => flash("Participant list exported")}
                    />
                  </Row>
                  <JoinTabs
                    value={partTab}
                    counts={joinCounts}
                    onChange={setPartTab}
                  />
                  <Row gap={8} align="center">
                    <SearchField
                      value={partSearch}
                      onChange={setPartSearch}
                      placeholder="Search participants ..."
                      width={280}
                    />
                    <FilterToggle
                      open={partAdvOpen}
                      count={partAdvCount}
                      onClick={() => setPartAdvOpen(!partAdvOpen)}
                    />
                  </Row>
                  {partAdvOpen ? (
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
                            Filter by SA batch, college, and applied date
                          </Text>
                          <Spacer />
                          <div
                            className="sa-clear"
                            onClick={() => {
                              setPartBatchFilter("All");
                              setPartCollegeFilter("All");
                              setPartDateFrom("");
                              setPartDateTo("");
                            }}
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
                          <Field label="SA Batch">
                            <Select
                              value={partBatchFilter}
                              onChange={setPartBatchFilter}
                              options={partBatchOpts}
                              style={{ width: "100%" }}
                            />
                          </Field>
                          <Field label="College Name">
                            <Select
                              value={partCollegeFilter}
                              onChange={setPartCollegeFilter}
                              options={partCollegeOpts}
                              style={{ width: "100%" }}
                            />
                          </Field>
                          <DateField
                            label="From date"
                            value={partDateFrom}
                            onChange={setPartDateFrom}
                          />
                          <DateField
                            label="To date"
                            value={partDateTo}
                            onChange={setPartDateTo}
                          />
                        </Grid>
                      </Stack>
                    </div>
                  ) : null}
                  {filteredTabJoins.length ? (
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
                          "Current Address",
                          "Phone",
                          "Email",
                          "Applied",
                          "Action",
                        ]}
                        rows={filteredTabJoins.map((row) => [
                          row.studentId,
                          row.name,
                          row.college,
                          row.batch,
                          row.currentAddress?.trim() || "—",
                          row.phone,
                          row.email,
                          row.appliedAt,
                          <ViewDetailsBtn
                            key={`${row.id}-view`}
                            onClick={() => setPartViewId(row.id)}
                          />,
                        ])}
                      />
                      <TablePager total={filteredTabJoins.length} />
                    </>
                  ) : tabJoins.length ? (
                    <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                      No participants match the current search or filters.
                    </Text>
                  ) : null}
                </Stack>
              ) : null}
              {page === "jobs" && detailCandidates.length ? (
                <Stack gap={12}>
                  <Row align="center">
                    <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                      Candidates
                    </H2>
                    <Spacer />
                    <HeaderExportButton
                      onClick={() => flash("Candidate list exported")}
                    />
                  </Row>
                  <Row gap={8} align="center">
                    <SearchField
                      value={partSearch}
                      onChange={setPartSearch}
                      placeholder="Search candidates ..."
                      width={280}
                    />
                    <FilterToggle
                      open={partAdvOpen}
                      count={partAdvCount}
                      onClick={() => setPartAdvOpen(!partAdvOpen)}
                    />
                  </Row>
                  {partAdvOpen ? (
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
                            Filter by SA batch, college, and applied date
                          </Text>
                          <Spacer />
                          <div
                            className="sa-clear"
                            onClick={() => {
                              setPartBatchFilter("All");
                              setPartCollegeFilter("All");
                              setPartDateFrom("");
                              setPartDateTo("");
                            }}
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
                          <Field label="SA Batch">
                            <Select
                              value={partBatchFilter}
                              onChange={setPartBatchFilter}
                              options={candBatchOpts}
                              style={{ width: "100%" }}
                            />
                          </Field>
                          <Field label="College Name">
                            <Select
                              value={partCollegeFilter}
                              onChange={setPartCollegeFilter}
                              options={candCollegeOpts}
                              style={{ width: "100%" }}
                            />
                          </Field>
                          <DateField
                            label="From date"
                            value={partDateFrom}
                            onChange={setPartDateFrom}
                          />
                          <DateField
                            label="To date"
                            value={partDateTo}
                            onChange={setPartDateTo}
                          />
                        </Grid>
                      </Stack>
                    </div>
                  ) : null}
                  {filteredDetailCandidates.length ? (
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
                          "City",
                          "Current Address",
                          "CV Attach",
                          "Phone",
                          "Email",
                          "Applied",
                        ]}
                        rows={filteredDetailCandidates.map((row) => [
                          row.studentId,
                          row.name,
                          row.college,
                          row.batch,
                          row.city?.trim() || "—",
                          row.currentAddress?.trim() || "—",
                          <CvAttachLink key={`${row.id}-cv`} fileName={row.cv} />,
                          row.phone,
                          row.email,
                          row.appliedAt,
                        ])}
                      />
                      <TablePager total={filteredDetailCandidates.length} />
                    </>
                  ) : (
                    <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                      No candidates match the current search or filters.
                    </Text>
                  )}
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
                  <CertFileTable
                    files={detailCert.files || []}
                    onReplace={(file) => {
                      setForm({
                        ...form,
                        replaceFileId: file.id,
                        replaceStudentId: file.studentId,
                        replaceStudentName: file.name,
                        replaceCurrentFile: file.fileName,
                        replaceFile: "",
                      });
                      setModal("edit");
                    }}
                  />
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
                body="Add, view, search, filter, and export Student Ambassador records. Use Record to create a single ambassador, upload a batch file, or update existing records."
                actions={
                  <Row gap={8} align="center">
                    <TemplateButton
                      filename="SA_Student_Import_Template.csv"
                      csv={STUDENT_TEMPLATE}
                    />
                    <HeaderExportButton
                      onClick={() => flash("Student records exported")}
                    />
                    <AddSplitButton
                      label="Record"
                      open={menuId === "student-add"}
                      onToggle={() =>
                        setMenuId(menuId === "student-add" ? "" : "student-add")
                      }
                      onSingle={() => {
                        setMenuId("");
                        openAddStudent();
                      }}
                      onUpload={() => {
                        setMenuId("");
                        openUploadStudents();
                      }}
                      onEditUpload={() => {
                        setMenuId("");
                        openUpdateStudents();
                      }}
                    />
                  </Row>
                }
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
                        Filter by batch, college, training region, status, and created date
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
                      <Field label="Status">
                        <Select
                          value={statusFilter}
                          onChange={setStatusFilter}
                          options={studentStatusOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <DateField label="From date" value={dateFrom} onChange={setDateFrom} />
                      <DateField label="To date" value={dateTo} onChange={setDateTo} />
                    </Grid>
                  </Stack>
                </div>
              ) : null}
              {studentImportResult ? (
                <div
                  style={{
                    background: WHITE,
                    border: `1px solid ${LINE}`,
                    borderRadius: 8,
                    padding: 14,
                  }}
                >
                  <Stack gap={10}>
                    <Text weight="semibold" style={{ fontFamily: FONT }}>
                      Upload result
                    </Text>
                    <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                      {formatStudentImportResult(studentImportResult)}
                    </Text>
                    <Grid columns={4} gap={12}>
                      {[
                        ["Total records", studentImportResult.total],
                        ["Success", studentImportResult.success],
                        ["Skipped", studentImportResult.skipped],
                        ["Failed", studentImportResult.fail],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          style={{
                            border: `1px solid ${LINE}`,
                            borderRadius: 8,
                            padding: "10px 12px",
                            background: SOFT,
                          }}
                        >
                          <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                            {label}
                          </Text>
                          <Text weight="semibold" style={{ fontFamily: FONT, fontSize: 18 }}>
                            {value}
                          </Text>
                        </div>
                      ))}
                    </Grid>
                    {studentImportResult.invalidRows.length > 0 ? (
                      <Stack gap={6}>
                        <Text size="small" weight="medium" style={{ fontFamily: FONT }}>
                          Invalid rows
                        </Text>
                        {studentImportResult.invalidRows.map((row) => (
                          <Text
                            key={`${row.row}-${row.studentId}-${row.reason}`}
                            size="small"
                            style={{ color: MUTED, fontFamily: FONT }}
                          >
                            Row {row.row} · {row.studentId} · {row.reason}
                          </Text>
                        ))}
                      </Stack>
                    ) : null}
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
                  "City",
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
                  "Current Address",
                  "Permanent Address",
                  "Status",
                  "Action",
                ]}
                rows={filteredStudents.map((s) => [
                  s.studentId,
                  s.name,
                  s.college,
                  s.region,
                  s.township,
                  s.city,
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
                  s.currentAddress,
                  s.permanentAddress,
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
                actions={
                  <Row gap={8} align="center">
                    <HeaderExportButton
                      onClick={() => flash("Partner schools exported")}
                    />
                    <BrandButton
                      onClick={() =>
                        openAdd({
                          partnerSchoolId: nextPartnerSchoolId(schools),
                          college: "",
                          city: "",
                          township: "",
                          collegeType: COLLEGE_TYPE_OPTS[0]?.value || "Public University",
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
                          cover: "",
                        })
                      }
                    >
                      Add
                    </BrandButton>
                  </Row>
                }
              />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by college name or Partner School ID"
                  width={320}
                />
                <FilterToggle
                  open={advOpen}
                  count={schoolAdvCount}
                  onClick={() => setAdvOpen(!advOpen)}
                />
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
                        Filter by city, status, and created date
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
                      <Field label="City">
                        <Select
                          value={cityFilter}
                          onChange={setCityFilter}
                          options={schoolCityOpts}
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
                  "Partner School ID",
                  "College Name",
                  "City",
                  "Township",
                  "College Type",
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
                    s.partnerSchoolId,
                    s.college,
                    s.city,
                    s.township,
                    s.collegeType,
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
                actions={
                  <Row gap={8} align="center">
                    <HeaderExportButton
                      onClick={() => flash("Event records exported")}
                    />
                    <BrandButton
                      onClick={() =>
                        openAdd({
                          title: "",
                          eventId: nextEventId(events),
                          status: "Active",
                          venue: "",
                          eventDate: "",
                          eventTime: "",
                          city: "",
                          township: "",
                          hostName: "",
                          regStart: "",
                          regEnd: "",
                          max: "",
                          summary: "",
                          details: "",
                          cover: "",
                          meeting: "",
                          sendSms: "no",
                        })
                      }
                    >
                      Add
                    </BrandButton>
                  </Row>
                }
              />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by title"
                  width={280}
                />
                <FilterToggle
                  open={advOpen}
                  count={activityAdvCount}
                  onClick={() => setAdvOpen(!advOpen)}
                />
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
                        Filter by city, status, and event date
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
                      <Field label="City">
                        <Select
                          value={cityFilter}
                          onChange={setCityFilter}
                          options={eventCityOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <Field label="Status">
                        <Select
                          value={statusFilter}
                          onChange={setStatusFilter}
                          options={activityStatusFilterOpts}
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
                rowTone={filteredEvents.map((e) =>
                  activityStatusTone(displayActivityStatus(e)),
                )}
                headers={[
                  "Event ID",
                  "Event Title",
                  "Status",
                  "Venue",
                  "Event Date",
                  "Event Time",
                  "City",
                  "Township",
                  "Host Name",
                  "Reg. Start",
                  "Reg. End",
                  "Max",
                  "Registered",
                  "Meeting Link",
                  "Action",
                ]}
                rows={filteredEvents.map((e) => {
                  const status = displayActivityStatus(e);
                  return [
                    e.eventId,
                    e.title,
                    <StatusMark key={`${e.id}-st`} value={status} />,
                    e.venue,
                    e.eventDate,
                    e.eventTime,
                    e.city,
                    e.township,
                    e.hostName,
                    e.regStart,
                    e.regEnd,
                    e.max,
                    String(e.registered),
                    e.meeting ? "Linked" : "—",
                    <ViewDetailsBtn
                      key={`${e.id}-a`}
                      onClick={() =>
                        openDetails(e.id, {
                          ...e,
                          registered: String(e.registered),
                        })
                      }
                    />,
                  ];
                })}
              />
              <TablePager total={filteredEvents.length} />
            </>
          ) : null}

          {page === "volunteers" ? (
            <>
              <PageIntro
                title="Volunteer Management"
                body="Publish volunteer activities, control registration dates, and track participant capacity by region."
                actions={
                  <Row gap={8} align="center">
                    <HeaderExportButton
                      onClick={() => flash("Volunteer records exported")}
                    />
                    <BrandButton
                      onClick={() =>
                        openAdd({
                          title: "",
                          volunteerId: nextVolunteerId(volunteers),
                          status: "Active",
                          venue: "",
                          eventDate: "",
                          eventTime: "",
                          city: "",
                          township: "",
                          hostName: "",
                          regStart: "",
                          regEnd: "",
                          duration: "",
                          max: "",
                          summary: "",
                          details: "",
                          cover: "",
                          sendSms: "no",
                        })
                      }
                    >
                      Add
                    </BrandButton>
                  </Row>
                }
              />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by title"
                  width={280}
                />
                <FilterToggle
                  open={advOpen}
                  count={activityAdvCount}
                  onClick={() => setAdvOpen(!advOpen)}
                />
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
                        Filter by city, status, and event date
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
                      <Field label="City">
                        <Select
                          value={cityFilter}
                          onChange={setCityFilter}
                          options={volunteerCityOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <Field label="Status">
                        <Select
                          value={statusFilter}
                          onChange={setStatusFilter}
                          options={activityStatusFilterOpts}
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
                rowTone={filteredVolunteers.map((v) =>
                  activityStatusTone(displayActivityStatus(v)),
                )}
                headers={[
                  "Volunteer ID",
                  "Volunteer Title",
                  "Status",
                  "Venue",
                  "Event Date",
                  "Event Time",
                  "City",
                  "Township",
                  "Host Name",
                  "Reg. Start",
                  "Reg. End",
                  "Duration",
                  "Max",
                  "Registered",
                  "Action",
                ]}
                rows={filteredVolunteers.map((v) => {
                  const status = displayActivityStatus(v);
                  return [
                    v.volunteerId,
                    v.title,
                    <StatusMark key={`${v.id}-st`} value={status} />,
                    v.venue,
                    v.eventDate,
                    v.eventTime,
                    v.city,
                    v.township,
                    v.hostName,
                    v.regStart,
                    v.regEnd,
                    v.duration,
                    v.max,
                    String(v.registered),
                    <ViewDetailsBtn
                      key={`${v.id}-a`}
                      onClick={() =>
                        openDetails(v.id, {
                          ...v,
                          registered: String(v.registered),
                        })
                      }
                    />,
                  ];
                })}
              />
              <TablePager total={filteredVolunteers.length} />
            </>
          ) : null}

          {page === "jobs" ? (
            <>
              <PageIntro
                title="Job Management"
                body="Post and monitor job opportunities for Student Ambassadors. Track vacancies, application windows, and incoming applicants."
                actions={
                  <Row gap={8} align="center">
                    <HeaderExportButton
                      onClick={() => flash("Job records exported")}
                    />
                    <BrandButton
                      onClick={() =>
                        openAdd({
                          title: "",
                          jobId: nextJobId(jobs),
                          type: "Internship",
                          company: "KBZPay",
                          city: "",
                          township: "",
                          vacancies: "",
                          start: "",
                          deadline: "",
                          summary: "",
                          responsibilities: "",
                          requirements: "",
                          pdf: "",
                          cover: "",
                          status: "Active",
                          sendSms: "no",
                        })
                      }
                    >
                      Add
                    </BrandButton>
                  </Row>
                }
              />
              <Row gap={8} align="center">
                <SearchField
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by title"
                  width={280}
                />
                <FilterToggle
                  open={advOpen}
                  count={activityAdvCount}
                  onClick={() => setAdvOpen(!advOpen)}
                />
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
                        Filter by city, status, and apply start date
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
                      <Field label="City">
                        <Select
                          value={cityFilter}
                          onChange={setCityFilter}
                          options={jobCityOpts}
                          style={{ width: "100%" }}
                        />
                      </Field>
                      <Field label="Status">
                        <Select
                          value={statusFilter}
                          onChange={setStatusFilter}
                          options={jobStatusFilterOpts}
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
                rowTone={filteredJobs.map((j) =>
                  activityStatusTone(displayJobStatus(j)),
                )}
                headers={[
                  "Job ID",
                  "Job Title",
                  "Status",
                  "Job Type",
                  "Company",
                  "City",
                  "Township",
                  "Vacancies",
                  "Apply Start",
                  "Deadline",
                  "Applicants",
                  "Action",
                ]}
                rows={filteredJobs.map((j) => {
                  const status = displayJobStatus(j);
                  return [
                    j.jobId,
                    j.title,
                    <StatusMark key={`${j.id}-st`} value={status} />,
                    j.type,
                    j.company,
                    j.city,
                    j.township,
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
                  ];
                })}
              />
              <TablePager total={filteredJobs.length} />
            </>
          ) : null}

          {page === "kpi" ? (
            <>
              <PageIntro
                title="KPI Management"
                body="Import Student Ambassador KPI scores from Excel. The portal validates rows before updating attendance, operations, onboarding, social media, assignment, and total KPI."
                actions={
                  <Row gap={8} align="center">
                    <TemplateButton
                      filename="SA_KPI_Import_Template.csv"
                      csv={KPI_TEMPLATE}
                    />
                    <HeaderExportButton
                      onClick={() => flash("KPI records exported")}
                    />
                    <AddSplitButton
                      label="Record"
                      open={menuId === "kpi-record"}
                      onToggle={() =>
                        setMenuId(menuId === "kpi-record" ? "" : "kpi-record")
                      }
                      onUpload={() => {
                        setMenuId("");
                        setForm({ file: "" });
                        setModal("import");
                      }}
                      uploadLabel="Import KPI"
                      onEditUpload={() => {
                        setMenuId("");
                        setForm({ file: "" });
                        setModal("update-import");
                      }}
                      editUploadLabel="Edit upload"
                    />
                  </Row>
                }
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
                body="Recognize outstanding Student Ambassadors and placement outcomes by category, title, and year."
                actions={
                  <Row gap={8} align="center">
                    <HeaderExportButton
                      onClick={() => flash("Hall of Fame records exported")}
                    />
                    <BrandButton
                      onClick={() =>
                        openAdd({
                          studentId: students[0]?.studentId || "",
                          name: students[0]?.name || "",
                          college: students[0]?.college || "",
                          batch: students[0]?.batch || "",
                          category: FAME_CATEGORY_OPTS[0]?.value || "",
                          title: FAME_TITLE_OPTS["Highest Onboarding"][0]?.value || "",
                          year: "2026",
                          employmentType: "Intern",
                          department: "",
                          joinDate: "",
                          endDate: "",
                        })
                      }
                    >
                      Add
                    </BrandButton>
                  </Row>
                }
              />
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
                actions={
                  <BrandButton
                    onClick={() => {
                      const batch =
                        batches.find((b) => b.status === "Active")?.name ||
                        "Batch 6";
                      openAdd({
                        batch,
                        category: certCats[0]?.name || "Completion",
                        file: "",
                        count: "",
                        totalStudents: String(batchStudentCount(batch, students)),
                      });
                    }}
                  >
                    Upload ZIP
                  </BrandButton>
                }
              />
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
                        totalStudents: String(
                          batchStudentCount(c.batch, students),
                        ),
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
                body="Create homepage banners linked to Announcement or Hall of Fame categories."
                actions={
                  <BrandButton
                    onClick={() => {
                      const source = "Announcement";
                      const category = defaultBannerCategory(source);
                      const linkedTitle =
                        defaultBannerTitle(
                          source,
                          category,
                          events,
                          volunteers,
                          jobs,
                          fame,
                        ) || "";
                      openAdd({
                        title: linkedTitle,
                        status: "Active",
                        source,
                      category,
                      linkedTitle,
                      link: bannerLinkFor(source, category, linkedTitle),
                      image: "",
                      imageName: "",
                      order: String(banners.length + 1),
                    });
                  }}
                >
                  Add
                </BrandButton>
                }
              />
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
                          <Thumb label={b.title} wide image={b.image} />
                          <Row gap={6}>
                            <BannerChip>
                              {b.source || "Announcement"}
                            </BannerChip>
                            <BannerChip>
                              {b.category ||
                                defaultBannerCategory(
                                  b.source || "Announcement",
                                )}
                            </BannerChip>
                          </Row>
                          <Text size="small" tone="secondary">
                            {imageDisplayName(b.image, b.imageName)} · order{" "}
                            {b.order}
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

          {SHOW_ACTIVITY_LOG && page === "activity" ? (
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
              <PageIntro
                title={master.title}
                body={master.body}
                actions={
                  <BrandButton
                    onClick={() =>
                      openAdd({ name: "", extra: "", status: "Active" })
                    }
                  >
                    Add
                  </BrandButton>
                }
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
          <Stack gap={12}>
            <Text tone="secondary">
              Upload an Excel (.xlsx) file. Columns must match the student import
              template, including Current Address and Permanent Address.
            </Text>
            <TemplateButton
              filename="SA_Student_Import_Template.csv"
              csv={STUDENT_TEMPLATE}
            />
            <div
              style={{
                background: SOFT,
                border: `1px solid ${LINE}`,
                borderRadius: 8,
                padding: 12,
              }}
            >
              <Stack gap={6}>
                <Text size="small" weight="medium" style={{ fontFamily: FONT }}>
                  Validation notes
                </Text>
                {STUDENT_IMPORT_NOTES.map((note) => (
                  <Text
                    key={note}
                    size="small"
                    style={{ color: MUTED, fontFamily: FONT }}
                  >
                    · {note}
                  </Text>
                ))}
              </Stack>
            </div>
            <FilePick
              label="Excel file"
              accept=".xlsx,.xls,.csv"
              value={form.file || ""}
              onFileChange={(file) => {
                const lower = file.name.toLowerCase();
                if (
                  !lower.endsWith(".xlsx") &&
                  !lower.endsWith(".xls") &&
                  !lower.endsWith(".csv")
                ) {
                  flash("Only Excel files are supported.");
                  return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                  const result =
                    typeof reader.result === "string" ? reader.result : "";
                  setForm({ file: file.name, importText: result });
                };
                reader.readAsText(file);
              }}
            />
          </Stack>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              disabled={!form.file || !form.importText}
              onClick={() => {
                const result = importStudentRows(form.importText || "", students);
                if (result.accepted.length > 0) {
                  setStudents([...result.accepted, ...students]);
                }
                setStudentImportResult(result);
                closeModal();
                flash(
                  result.success > 0
                    ? `${result.success} student record(s) imported`
                    : "Import completed with no new records",
                );
              }}
            >
              Import
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" && page === "students" && modal === "update-import" ? (
        <ModalShell title="Update Student Ambassador records" onClose={closeModal}>
          <Stack gap={12}>
            <Text tone="secondary">
              Upload an Excel (.xlsx) file of existing students to update. Rows
              are matched by SA ID. Unknown SA IDs are rejected.
            </Text>
            <TemplateButton
              filename="SA_Student_Update_Template.csv"
              csv={STUDENT_TEMPLATE}
            />
            <div
              style={{
                background: SOFT,
                border: `1px solid ${LINE}`,
                borderRadius: 8,
                padding: 12,
              }}
            >
              <Stack gap={6}>
                <Text size="small" weight="medium" style={{ fontFamily: FONT }}>
                  Validation notes
                </Text>
                {[
                  "Only Excel files are supported.",
                  "SA ID must already exist in Student Record.",
                  "Required columns must not be empty.",
                  "Matched records will be updated.",
                  "Unknown SA IDs appear in the result as failed.",
                ].map((note) => (
                  <Text
                    key={note}
                    size="small"
                    style={{ color: MUTED, fontFamily: FONT }}
                  >
                    · {note}
                  </Text>
                ))}
              </Stack>
            </div>
            <FilePick
              label="Excel file"
              accept=".xlsx,.xls,.csv"
              value={form.file || ""}
              onFileChange={(file) => {
                const lower = file.name.toLowerCase();
                if (
                  !lower.endsWith(".xlsx") &&
                  !lower.endsWith(".xls") &&
                  !lower.endsWith(".csv")
                ) {
                  flash("Only Excel files are supported.");
                  return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                  const result =
                    typeof reader.result === "string" ? reader.result : "";
                  setForm({ file: file.name, importText: result });
                };
                reader.readAsText(file);
              }}
            />
          </Stack>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              disabled={!form.file || !form.importText}
              onClick={() => {
                const result = updateStudentRows(form.importText || "", students);
                if (result.accepted.length > 0) {
                  const updates = new Map(
                    result.accepted.map((row) => [
                      row.studentId.trim().toLowerCase(),
                      row,
                    ]),
                  );
                  setStudents(
                    students.map(
                      (student) =>
                        updates.get(student.studentId.trim().toLowerCase()) ||
                        student,
                    ),
                  );
                }
                setStudentImportResult(result);
                closeModal();
                flash(
                  result.success > 0
                    ? `${result.success} student record(s) updated`
                    : "Update completed with no changed records",
                );
              }}
            >
              Update
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
            <Stack gap={12}>
              <Row align="center" gap={14}>
                <StudentAvatar
                  name={form.name || ""}
                  avatar={form.avatar}
                  size={72}
                />
                <Stack gap={4}>
                  <Text weight="semibold" style={{ fontFamily: FONT, fontSize: 16 }}>
                    {form.name || "—"}
                  </Text>
                  <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                    {form.studentId || "—"}
                  </Text>
                </Stack>
              </Row>
              <ReadGrid
                pairs={[
                  ["SA ID", form.studentId],
                  ["Student Name", form.name],
                  ["College Name", form.college],
                  ["Training Region", form.region],
                  ["Township", form.township],
                  ["City", form.city],
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
                  ["Current Address", form.currentAddress],
                  ["Permanent Address", form.permanentAddress],
                  ["Status", form.status],
                  ...auditPairs(form),
                ]}
              />
            </Stack>
          ) : (
            <Stack gap={12}>
              <Row align="center" gap={14}>
                <StudentAvatar
                  name={form.name || ""}
                  avatar={form.avatar}
                  size={72}
                />
                <Stack gap={6}>
                  <Text size="small" weight="medium">
                    Profile photo
                  </Text>
                  <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                    Admins cannot upload a student profile photo. Use Remove
                    photo if the current image is inappropriate.
                  </Text>
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setField(
                        "avatar",
                        avatarDataUri(form.name || "Student", BRAND),
                      )
                    }
                  >
                    Remove photo
                  </Button>
                </Stack>
              </Row>
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
              <Field label="City">
                <TextInput
                  value={form.city || ""}
                  onChange={(v) => setField("city", v)}
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
            </Stack>
          )}
          {modal !== "view" ? (
            <Grid columns={2} gap={12}>
              <Field label="Current Address">
                <TextArea
                  value={form.currentAddress || ""}
                  onChange={(v) => setField("currentAddress", v)}
                  rows={2}
                />
              </Field>
              <Field label="Permanent Address">
                <TextArea
                  value={form.permanentAddress || ""}
                  onChange={(v) => setField("permanentAddress", v)}
                  rows={2}
                />
              </Field>
            </Grid>
          ) : null}
          {modal === "view" ? (
            <Stack gap={10}>
              <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                Employment
              </H2>
              <EmploymentTable
                rows={
                  students.find((s) => s.id === editId)?.employment ||
                  empDraft
                }
              />
            </Stack>
          ) : (
            <Stack gap={10}>
              <Row align="center">
                <H2 style={mergeStyle({ color: INK, fontFamily: FONT })}>
                  Employment
                </H2>
                <Spacer />
                <Button variant="ghost" onClick={addEmpDraft}>
                  Add employment
                </Button>
              </Row>
              {!empDraft.length ? (
                <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                  No employment records yet. Add one or more internship or permanent employment entries.
                </Text>
              ) : null}
              {empDraft.map((emp, index) => (
                <div
                  key={emp.id}
                  style={{
                    border: `1px solid ${LINE}`,
                    borderRadius: 8,
                    padding: 12,
                    background: WHITE,
                  }}
                >
                  <Stack gap={10}>
                    <Row align="center">
                      <Text size="small" weight="semibold">
                        Record {index + 1}
                      </Text>
                      <Spacer />
                      {empDraft.length > 1 ? (
                        <Button
                          variant="ghost"
                          onClick={() => removeEmpDraft(index)}
                        >
                          Remove
                        </Button>
                      ) : null}
                    </Row>
                    <Grid columns={2} gap={12}>
                      <Field label="Type">
                        <Select
                          value={emp.type || "Intern"}
                          onChange={(v) => updateEmpDraft(index, "type", v)}
                          options={EMP_TYPE_OPTS}
                        />
                      </Field>
                      <Field label="Position">
                        <TextInput
                          value={emp.position || ""}
                          onChange={(v) => updateEmpDraft(index, "position", v)}
                          placeholder="Software Developer"
                        />
                      </Field>
                      <Field label="Department">
                        <TextInput
                          value={emp.department || ""}
                          onChange={(v) =>
                            updateEmpDraft(index, "department", v)
                          }
                        />
                      </Field>
                      <DateField
                        label="Join Date"
                        value={emp.joinDate || ""}
                        onChange={(v) => updateEmpDraft(index, "joinDate", v)}
                      />
                      <Field label="Current">
                        <SmsCheckbox
                          checked={Boolean(emp.current)}
                          onChange={(next) =>
                            updateEmpDraft(index, "current", next)
                          }
                          label="Current employment"
                        />
                      </Field>
                      <DateField
                        label="End Date"
                        value={emp.current ? "" : emp.endDate || ""}
                        onChange={(v) => updateEmpDraft(index, "endDate", v)}
                        disabled={Boolean(emp.current)}
                      />
                    </Grid>
                  </Stack>
                </div>
              ))}
              <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                Check Current to keep the role open. End Date is disabled while
                Current is selected.
              </Text>
            </Stack>
          )}
          <Row>
            <Spacer />
            {modal !== "view" ? (
              <Button variant="ghost" onClick={closeModal}>
                Cancel
              </Button>
            ) : null}
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
                    city: form.city || "",
                    currentAddress: form.currentAddress || "",
                    permanentAddress: form.permanentAddress || "",
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
                    avatar:
                      form.avatar ||
                      avatarDataUri(form.name || "New Ambassador", BRAND),
                    employment: empDraft.map((emp) =>
                      normalizeEmployment({
                        ...emp,
                        id: emp.id || uid("emp"),
                        type: emp.type || "Intern",
                      }),
                    ),
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
                  ["Partner School ID", form.partnerSchoolId],
                  ["College Name", form.college],
                  ["City", form.city],
                  ["Township", form.township],
                  ["College Type", form.collegeType],
                  ["Total Students", form.totalStudents],
                  ["Partner Since", form.partnerSince],
                  ["Year Established", form.established],
                  ["Status", form.status],
                  ["Contact Person", form.contact],
                  ["Phone Number", form.phone],
                  ["Email", form.email],
                  ["College Address", form.address],
                  ["College Logo", form.logo],
                  ["College Cover Image", imageDisplayName(form.cover)],
                  ...auditPairs(form),
                ]}
              />
              <Text>{form.about}</Text>
            </Stack>
          ) : (
            <>
              <Grid columns={2} gap={12}>
                <Field label="Partner School ID">
                  <LockedValue value={form.partnerSchoolId} />
                </Field>
                <Field label="College Name">
                  <TextInput
                    value={form.college || ""}
                    onChange={(v) => setField("college", v)}
                  />
                </Field>
                <Field label="City">
                  <TextInput
                    value={form.city || ""}
                    onChange={(v) => setField("city", v)}
                  />
                </Field>
                <Field label="Township">
                  <TextInput
                    value={form.township || ""}
                    onChange={(v) => setField("township", v)}
                  />
                </Field>
                <Field label="College Type">
                  <Select
                    value={form.collegeType || COLLEGE_TYPE_OPTS[0]?.value || ""}
                    onChange={(v) => setField("collegeType", v)}
                    options={COLLEGE_TYPE_OPTS}
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
                  onImageChange={(dataUrl) => setField("logo", dataUrl)}
                />
                <FilePick
                  label="College Cover Image"
                  accept="image/*"
                  value={form.cover || ""}
                  onChange={(n) => setField("cover", n)}
                  onImageChange={(dataUrl) => setField("cover", dataUrl)}
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
            {modal !== "view" ? (
              <Button variant="ghost" onClick={closeModal}>
                Cancel
              </Button>
            ) : null}
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const row: School = {
                    id: modal === "edit" ? editId : uid("c"),
                    partnerSchoolId:
                      form.partnerSchoolId || nextPartnerSchoolId(schools),
                    college: form.college || "New College",
                    city: form.city || "",
                    township: form.township || "",
                    collegeType:
                      form.collegeType ||
                      COLLEGE_TYPE_OPTS[0]?.value ||
                      "Public University",
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
                    cover: form.cover || "",
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
                ["Event ID", form.eventId],
                ["Event Title", form.title],
                [
                  "Status",
                  displayActivityStatus({
                    status: form.status || "",
                    eventDate: form.eventDate || "",
                    eventTime: form.eventTime || "",
                    regEnd: form.regEnd || "",
                    max: form.max || "0",
                    registered: parseCount(form.registered || "0"),
                  }),
                ],
                ["Event Venue", form.venue],
                ["Event Date", form.eventDate],
                ["Event Time", form.eventTime],
                ["City", form.city],
                ["Township", form.township],
                ["Host Name", form.hostName],
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
              {modal === "edit" && detailHasParticipants ? (
                <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                  Participants already registered — only limited fields can be
                  edited.
                </Text>
              ) : null}
              <Grid columns={2} gap={12}>
                <Field label="Event ID">
                  <LockedValue value={form.eventId || nextEventId(events)} />
                </Field>
                <Field label="Event Title">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.title} />
                  ) : (
                    <TextInput
                      value={form.title || ""}
                      onChange={(v) => setField("title", v)}
                    />
                  )}
                </Field>
                <Field label="Status">
                  <LockedValue
                    value={displayActivityStatus({
                      status: form.status || "",
                      eventDate: form.eventDate || "",
                      eventTime: form.eventTime || "",
                      regEnd: form.regEnd || "",
                      max: form.max || "0",
                      registered: parseCount(form.registered || "0"),
                    })}
                  />
                </Field>
                <Field label="Event Venue">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.venue} />
                  ) : (
                    <TextInput
                      value={form.venue || ""}
                      onChange={(v) => setField("venue", v)}
                    />
                  )}
                </Field>
                <Field label="Event Date">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.eventDate} />
                  ) : (
                    <TextInput
                      value={form.eventDate || ""}
                      onChange={(v) => setField("eventDate", v)}
                      placeholder="YYYY-MM-DD"
                    />
                  )}
                </Field>
                <Field label="Event Time">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.eventTime} />
                  ) : (
                    <TextInput
                      value={form.eventTime || ""}
                      onChange={(v) => setField("eventTime", v)}
                      placeholder="HH:MM"
                    />
                  )}
                </Field>
                <Field label="City">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.city} />
                  ) : (
                    <TextInput
                      value={form.city || ""}
                      onChange={(v) => setField("city", v)}
                    />
                  )}
                </Field>
                <Field label="Township">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.township} />
                  ) : (
                    <TextInput
                      value={form.township || ""}
                      onChange={(v) => setField("township", v)}
                    />
                  )}
                </Field>
                <Field label="Host Name">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.hostName} />
                  ) : (
                    <TextInput
                      value={form.hostName || ""}
                      onChange={(v) => setField("hostName", v)}
                    />
                  )}
                </Field>
                <Field label="Maximum Participants">
                  <TextInput
                    value={form.max || ""}
                    onChange={(v) => setField("max", v)}
                  />
                </Field>
                <Field label="Registration Start Date">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.regStart} />
                  ) : (
                    <TextInput
                      value={form.regStart || ""}
                      onChange={(v) => setField("regStart", v)}
                    />
                  )}
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
              <SmsCheckbox
                checked={form.sendSms === "yes"}
                onChange={(next) => setField("sendSms", next ? "yes" : "no")}
              />
            </>
          )}
          <Row>
            <Spacer />
            {modal !== "view" ? (
              <Button variant="ghost" onClick={closeModal}>
                Cancel
              </Button>
            ) : null}
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const existing = events.find((e) => e.id === editId);
                  const row: EventRec = {
                    id: modal === "edit" ? editId : uid("e"),
                    eventId:
                      form.eventId ||
                      existing?.eventId ||
                      nextEventId(events),
                    title: form.title || "New Event",
                    status:
                      existing?.status === "Cancelled" ? "Cancelled" : "Active",
                    venue: form.venue || "",
                    eventDate: form.eventDate || "",
                    eventTime: form.eventTime || "",
                    city: form.city || "",
                    township: form.township || "",
                    hostName: form.hostName || "",
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
                  flash(
                    form.sendSms === "yes"
                      ? "successfully added · SMS sent to students"
                      : "successfully added",
                  );
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
                ["Volunteer ID", form.volunteerId],
                ["Volunteer Title", form.title],
                [
                  "Status",
                  displayActivityStatus({
                    status: form.status || "",
                    eventDate: form.eventDate || "",
                    eventTime: form.eventTime || "",
                    regEnd: form.regEnd || "",
                    max: form.max || "0",
                    registered: parseCount(form.registered || "0"),
                  }),
                ],
                ["Venue", form.venue],
                ["Event Date", form.eventDate],
                ["Event Time", form.eventTime],
                ["City", form.city],
                ["Township", form.township],
                ["Host Name", form.hostName],
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
              {modal === "edit" && detailHasParticipants ? (
                <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                  Participants already registered — only limited fields can be
                  edited.
                </Text>
              ) : null}
              <Grid columns={2} gap={12}>
                <Field label="Volunteer ID">
                  <LockedValue value={form.volunteerId || nextVolunteerId(volunteers)} />
                </Field>
                <Field label="Volunteer Title">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.title} />
                  ) : (
                    <TextInput
                      value={form.title || ""}
                      onChange={(v) => setField("title", v)}
                    />
                  )}
                </Field>
                <Field label="Status">
                  <LockedValue
                    value={displayActivityStatus({
                      status: form.status || "",
                      eventDate: form.eventDate || "",
                      eventTime: form.eventTime || "",
                      regEnd: form.regEnd || "",
                      max: form.max || "0",
                      registered: parseCount(form.registered || "0"),
                    })}
                  />
                </Field>
                <Field label="Venue">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.venue} />
                  ) : (
                    <TextInput
                      value={form.venue || ""}
                      onChange={(v) => setField("venue", v)}
                    />
                  )}
                </Field>
                <Field label="Event Date">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.eventDate} />
                  ) : (
                    <TextInput
                      value={form.eventDate || ""}
                      onChange={(v) => setField("eventDate", v)}
                      placeholder="YYYY-MM-DD"
                    />
                  )}
                </Field>
                <Field label="Event Time">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.eventTime} />
                  ) : (
                    <TextInput
                      value={form.eventTime || ""}
                      onChange={(v) => setField("eventTime", v)}
                      placeholder="HH:MM"
                    />
                  )}
                </Field>
                <Field label="City">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.city} />
                  ) : (
                    <TextInput
                      value={form.city || ""}
                      onChange={(v) => setField("city", v)}
                    />
                  )}
                </Field>
                <Field label="Township">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.township} />
                  ) : (
                    <TextInput
                      value={form.township || ""}
                      onChange={(v) => setField("township", v)}
                    />
                  )}
                </Field>
                <Field label="Host Name">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.hostName} />
                  ) : (
                    <TextInput
                      value={form.hostName || ""}
                      onChange={(v) => setField("hostName", v)}
                    />
                  )}
                </Field>
                <Field label="Duration">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.duration} />
                  ) : (
                    <TextInput
                      value={form.duration || ""}
                      onChange={(v) => setField("duration", v)}
                    />
                  )}
                </Field>
                <Field label="Registration Start Date">
                  {modal === "edit" && detailHasParticipants ? (
                    <LockedValue value={form.regStart} />
                  ) : (
                    <TextInput
                      value={form.regStart || ""}
                      onChange={(v) => setField("regStart", v)}
                    />
                  )}
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
              <SmsCheckbox
                checked={form.sendSms === "yes"}
                onChange={(next) => setField("sendSms", next ? "yes" : "no")}
              />
            </>
          )}
          <Row>
            <Spacer />
            {modal !== "view" ? (
              <Button variant="ghost" onClick={closeModal}>
                Cancel
              </Button>
            ) : null}
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const existing = volunteers.find((v) => v.id === editId);
                  const row: Volunteer = {
                    id: modal === "edit" ? editId : uid("v"),
                    volunteerId:
                      form.volunteerId ||
                      existing?.volunteerId ||
                      nextVolunteerId(volunteers),
                    title: form.title || "New Volunteer Drive",
                    status:
                      existing?.status === "Cancelled" ? "Cancelled" : "Active",
                    venue: form.venue || "",
                    eventDate: form.eventDate || "",
                    eventTime: form.eventTime || "",
                    city: form.city || "",
                    township: form.township || "",
                    hostName: form.hostName || "",
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
                  flash(
                    form.sendSms === "yes"
                      ? "successfully added · SMS sent to students"
                      : "successfully added",
                  );
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
                  ["Job ID", form.jobId],
                  ["Job Title", form.title],
                  [
                    "Status",
                    displayJobStatus({
                      vacancies: form.vacancies || "0",
                      deadline: form.deadline || "",
                      applicants: parseCount(form.applicants || "0"),
                      status: form.status || "",
                    }),
                  ],
                  ["Job Type", form.type],
                  ["Company Name", form.company],
                  ["City", form.city],
                  ["Township", form.township],
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
                <Field label="Job ID">
                  <LockedValue value={form.jobId || nextJobId(jobs)} />
                </Field>
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
                <Field label="City">
                  <TextInput
                    value={form.city || ""}
                    onChange={(v) => setField("city", v)}
                  />
                </Field>
                <Field label="Township">
                  <TextInput
                    value={form.township || ""}
                    onChange={(v) => setField("township", v)}
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
              <SmsCheckbox
                checked={form.sendSms === "yes"}
                onChange={(next) => setField("sendSms", next ? "yes" : "no")}
              />
            </>
          )}
          <Row>
            <Spacer />
            {modal !== "view" ? (
              <Button variant="ghost" onClick={closeModal}>
                Cancel
              </Button>
            ) : null}
            {modal !== "view" ? (
              <BrandButton
                onClick={() => {
                  const existing = jobs.find((j) => j.id === editId);
                  const row: Job = {
                    id: modal === "edit" ? editId : uid("j"),
                    jobId:
                      form.jobId || existing?.jobId || nextJobId(jobs),
                    title: form.title || "New Job",
                    type: form.type || "Internship",
                    company: form.company || "KBZPay",
                    city: form.city || "",
                    township: form.township || "",
                    vacancies: form.vacancies || "1",
                    start: form.start || "",
                    deadline: form.deadline || "",
                    summary: form.summary || "",
                    responsibilities: form.responsibilities || "",
                    requirements: form.requirements || "",
                    pdf: form.pdf || "",
                    cover: form.cover || "",
                    applicants: existing?.applicants || 0,
                    status: form.status || existing?.status || "Active",
                  };
                  setJobs(
                    modal === "edit"
                      ? jobs.map((j) => (j.id === editId ? row : j))
                      : [row, ...jobs],
                  );
                  closeModal();
                  flash(
                    form.sendSms === "yes"
                      ? "successfully added · SMS sent to students"
                      : "successfully added",
                  );
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

      {modal === "update-import" && page === "kpi" ? (
        <ModalShell title="Update KPI records" onClose={closeModal}>
          <Stack gap={12}>
            <Text tone="secondary">
              Upload an Excel (.xlsx) file of existing KPI rows to update. Rows
              are matched by Student ID.
            </Text>
            <TemplateButton
              filename="SA_KPI_Update_Template.csv"
              csv={KPI_TEMPLATE}
            />
            <FilePick
              label="KPI Excel file"
              accept=".xlsx,.xls"
              value={form.file || ""}
              onChange={(n) => setField("file", n)}
            />
          </Stack>
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
                    k.studentId === "SA-2026-001"
                      ? {
                          ...k,
                          attendance: 97,
                          operation: 90,
                          onboarding: 93,
                          social: 88,
                          assignment: 91,
                          total: 92,
                        }
                      : k,
                  ),
                );
                setKpiImported(
                  `${form.file} validated. Existing KPI records updated by Student ID.`,
                );
                closeModal();
                flash("KPI records updated");
              }}
            >
              Update
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal === "edit" && page === "kpi" ? (
        <ModalShell title="Edit KPI" onClose={closeModal}>
          <Grid columns={2} gap={12}>
            <Field label="Student ID">
              <LockedValue value={form.studentId} />
            </Field>
            <Field label="Student Name">
              <LockedValue value={form.name} />
            </Field>
            <Field label="Contact Number">
              <TextInput
                value={form.phone || ""}
                onChange={(v) => setField("phone", v)}
              />
            </Field>
            <Field label="College Name">
              <TextInput
                value={form.college || ""}
                onChange={(v) => setField("college", v)}
              />
            </Field>
            <Field label="Attendance">
              <TextInput
                value={form.attendance || ""}
                onChange={(v) => setField("attendance", v)}
              />
            </Field>
            <Field label="Operation">
              <TextInput
                value={form.operation || ""}
                onChange={(v) => setField("operation", v)}
              />
            </Field>
            <Field label="Onboarding">
              <TextInput
                value={form.onboarding || ""}
                onChange={(v) => setField("onboarding", v)}
              />
            </Field>
            <Field label="Social Media">
              <TextInput
                value={form.social || ""}
                onChange={(v) => setField("social", v)}
              />
            </Field>
            <Field label="Assignment">
              <TextInput
                value={form.assignment || ""}
                onChange={(v) => setField("assignment", v)}
              />
            </Field>
            <Field label="Total KPI (%)">
              <TextInput
                value={form.total || ""}
                onChange={(v) => setField("total", v)}
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
                const next = {
                  attendance: Number(form.attendance) || 0,
                  operation: Number(form.operation) || 0,
                  onboarding: Number(form.onboarding) || 0,
                  social: Number(form.social) || 0,
                  assignment: Number(form.assignment) || 0,
                  total: Number(form.total) || 0,
                  phone: form.phone || "",
                  college: form.college || "",
                  name: form.name || "",
                };
                setKpis(
                  kpis.map((k) =>
                    k.id === editId || k.id === detailId
                      ? { ...k, ...next }
                      : k,
                  ),
                );
                setForm({
                  ...form,
                  attendance: String(next.attendance),
                  operation: String(next.operation),
                  onboarding: String(next.onboarding),
                  social: String(next.social),
                  assignment: String(next.assignment),
                  total: String(next.total),
                });
                closeModal();
                flash("KPI updated");
              }}
            >
              Save
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
                onChange={(v) =>
                  setForm({
                    ...form,
                    category: v,
                    title: FAME_TITLE_OPTS[v]?.[0]?.value || `${v} Placement`,
                    employmentType:
                      v === "Internship"
                        ? "Intern"
                        : v === "Permanent"
                          ? "Permanent"
                          : form.employmentType || "",
                  })
                }
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
          {FAME_TITLE_OPTS[form.category || ""] ? (
            <Field label="Award Title">
              <Select
                value={form.title || ""}
                onChange={(v) => setField("title", v)}
                options={FAME_TITLE_OPTS[form.category || ""] || []}
              />
            </Field>
          ) : null}
          {form.category === "Internship" || form.category === "Permanent" ? (
            <>
              <Grid columns={2} gap={12}>
                <Field label="Choose intern or permanent">
                  <Select
                    value={form.employmentType || (form.category === "Permanent" ? "Permanent" : "Intern")}
                    onChange={(v) => setField("employmentType", v)}
                    options={EMP_TYPE_OPTS}
                  />
                </Field>
                <Field label="Departments">
                  <TextInput
                    value={form.department || ""}
                    onChange={(v) => setField("department", v)}
                  />
                </Field>
                <DateField
                  label="Join Date"
                  value={form.joinDate || ""}
                  onChange={(v) => setField("joinDate", v)}
                />
                <DateField
                  label="End Date"
                  value={form.endDate || ""}
                  onChange={(v) => setField("endDate", v)}
                />
              </Grid>
              <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                If there is no end date, the record shows Present.
              </Text>
            </>
          ) : null}
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
                  title:
                    form.category === "Internship" || form.category === "Permanent"
                      ? `${form.employmentType || form.category} Placement`
                      : form.title || "New Award",
                  year: form.year || "2026",
                  employmentType:
                    form.category === "Internship" || form.category === "Permanent"
                      ? form.employmentType || (form.category === "Permanent" ? "Permanent" : "Intern")
                      : "",
                  department:
                    form.category === "Internship" || form.category === "Permanent"
                      ? form.department || ""
                      : "",
                  joinDate:
                    form.category === "Internship" || form.category === "Permanent"
                      ? form.joinDate || ""
                      : "",
                  endDate:
                    form.category === "Internship" || form.category === "Permanent"
                      ? form.endDate || ""
                      : "",
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
                    totalStudents: String(batchStudentCount(v, students)),
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
            <Field label="Total student count">
              <LockedValue
                value={`${
                  form.totalStudents ||
                  String(batchStudentCount(form.batch || "", students))
                } students in ${form.batch || "selected batch"}`}
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
                  totalStudents: String(batchStudentCount(batch, students)),
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

      {modal === "edit" && page === "certificates" ? (
        <ModalShell title="Replace certificate" onClose={closeModal}>
          <Stack gap={12}>
            <Text tone="secondary">
              Upload a new certificate file for this student. The previous file
              will be replaced.
            </Text>
            <ReadGrid
              pairs={[
                ["Student ID", form.replaceStudentId],
                ["Student Name", form.replaceStudentName],
                ["Current file", form.replaceCurrentFile],
              ]}
            />
            <FilePick
              label="New certificate file"
              accept=".pdf"
              value={form.replaceFile || ""}
              onChange={(n) => setField("replaceFile", n)}
            />
          </Stack>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              disabled={!form.replaceFile || !form.replaceFileId}
              onClick={() => {
                if (!detailId || !form.replaceFile || !form.replaceFileId) return;
                setCerts(
                  certs.map((c) =>
                    c.id === detailId
                      ? {
                          ...c,
                          files: (c.files || []).map((f) =>
                            f.id === form.replaceFileId
                              ? {
                                  ...f,
                                  fileName: form.replaceFile,
                                  ok: true,
                                  error: "",
                                }
                              : f,
                          ),
                        }
                      : c,
                  ),
                );
                closeModal();
                flash("certificate replaced");
              }}
            >
              Replace
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {modal === "delete" && (page === "banners" || master) ? (
        <ModalShell
          title={
            master
              ? `Delete ${master.title}`
              : "Delete banner"
          }
          onClose={closeModal}
        >
          <Stack gap={12}>
            <Text>
              {master
                ? `Delete "${form.name || "this record"}"? This cannot be undone.`
                : `Delete banner "${form.title || "this banner"}"? This cannot be undone.`}
            </Text>
          </Stack>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <MiniAction
              kind="reject"
              label="Delete"
              onClick={() => {
                if (!detailId) return;
                if (page === "banners") {
                  setBanners(banners.filter((b) => b.id !== detailId));
                  closeModal();
                  closeDetails();
                  flash("banner deleted");
                  return;
                }
                if (master) {
                  master.setItems(
                    master.items.filter((item) => item.id !== detailId),
                  );
                  closeModal();
                  closeDetails();
                  flash(`${master.title.toLowerCase()} deleted`);
                }
              }}
            />
          </Row>
        </ModalShell>
      ) : null}

      {modal !== "closed" &&
      page === "banners" &&
      (modal === "add" || modal === "edit") ? (
        <ModalShell
          wide
          title={modal === "edit" ? "Edit banner" : "Add banner thumbnail"}
          onClose={closeModal}
        >
          <Grid columns={2} gap={20}>
            <Stack gap={12}>
              <Grid columns={2} gap={12}>
                <Field label="Banner title">
                  <TextInput
                    value={form.title || ""}
                    onChange={(v) => setField("title", v)}
                    placeholder="Enter banner title"
                  />
                </Field>
                <Field label="Status">
                  <Select
                    value={form.status || "Active"}
                    onChange={(v) => setField("status", v)}
                    options={STATUS_OPTS}
                  />
                </Field>
                <Field label="Source">
                  <Select
                    value={form.source || "Announcement"}
                    onChange={(v) => {
                      const category = defaultBannerCategory(v);
                      const linkedTitle =
                        defaultBannerTitle(
                          v,
                          category,
                          events,
                          volunteers,
                          jobs,
                          fame,
                        ) || "";
                      setForm({
                        ...form,
                        source: v,
                        category,
                        linkedTitle,
                        title:
                          !form.title?.trim() ||
                          form.title === form.linkedTitle
                            ? linkedTitle
                            : form.title,
                        link: bannerLinkFor(v, category, linkedTitle),
                      });
                    }}
                    options={BANNER_SOURCE_OPTS}
                  />
                </Field>
                <Field
                  label={
                    (form.source || "Announcement") === "Announcement"
                      ? "Announcement category"
                      : "Hall of Fame category"
                  }
                >
                  <Select
                    value={
                      form.category ||
                      defaultBannerCategory(form.source || "Announcement")
                    }
                    onChange={(v) => {
                      const source = form.source || "Announcement";
                      const linkedTitle =
                        defaultBannerTitle(
                          source,
                          v,
                          events,
                          volunteers,
                          jobs,
                          fame,
                        ) || "";
                      setForm({
                        ...form,
                        category: v,
                        linkedTitle,
                        title:
                          !form.title?.trim() ||
                          form.title === form.linkedTitle
                            ? linkedTitle
                            : form.title,
                        link: bannerLinkFor(source, v, linkedTitle),
                      });
                    }}
                    options={bannerCategoryOpts(
                      form.source || "Announcement",
                    )}
                  />
                </Field>
                <Field label="Select title">
                  <Select
                    value={form.linkedTitle || ""}
                    onChange={(v) => {
                      const source = form.source || "Announcement";
                      const category =
                        form.category ||
                        defaultBannerCategory(source);
                      setForm({
                        ...form,
                        linkedTitle: v,
                        title:
                          !form.title?.trim() ||
                          form.title === form.linkedTitle
                            ? v
                            : form.title,
                        link: bannerLinkFor(source, category, v),
                      });
                    }}
                    options={
                      bannerTitleOpts(
                        form.source || "Announcement",
                        form.category ||
                          defaultBannerCategory(
                            form.source || "Announcement",
                          ),
                        events,
                        volunteers,
                        jobs,
                        fame,
                      ).length
                        ? bannerTitleOpts(
                            form.source || "Announcement",
                            form.category ||
                              defaultBannerCategory(
                                form.source || "Announcement",
                              ),
                            events,
                            volunteers,
                            jobs,
                            fame,
                          )
                        : [
                            {
                              value: "",
                              label: "No titles in this category",
                            },
                          ]
                    }
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
                  onImageChange={(dataUrl, fileName) => {
                    setForm({
                      ...form,
                      image: dataUrl,
                      imageName: fileName,
                    });
                  }}
                />
              </Grid>
            </Stack>
            <BannerPreview
              title={form.title}
              source={form.source}
              category={form.category}
              status={form.status}
              link={form.link}
              image={form.image}
              imageName={form.imageName}
              order={form.order}
            />
          </Grid>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <BrandButton
              onClick={() => {
                const source = form.source || "Announcement";
                const category =
                  form.category || defaultBannerCategory(source);
                const linkedTitle =
                  form.linkedTitle?.trim() ||
                  defaultBannerTitle(
                    source,
                    category,
                    events,
                    volunteers,
                    jobs,
                    fame,
                  ) ||
                  "";
                const title =
                  form.title?.trim() || linkedTitle || "New Banner";
                const row: Banner = {
                  id: modal === "edit" ? editId : uid("b"),
                  title,
                  status: form.status || "Active",
                  source,
                  category,
                  linkedTitle,
                  link: bannerLinkFor(source, category, linkedTitle),
                  image:
                    form.image ||
                    bannerImageDataUri(title, BRAND),
                  imageName:
                    form.imageName ||
                    (form.image && !isImageSrc(form.image)
                      ? form.image
                      : "banner.svg"),
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
              {modal === "edit" ? "Save" : "Create"}
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

      {empFormOpen !== "closed" ? (
        <ModalShell
          title={
            empFormOpen === "edit" ? "Edit employment" : "Add employment"
          }
          onClose={closeEmpForm}
        >
          <Grid columns={2} gap={12}>
            <Field label="Type">
              <Select
                value={empForm.type || "Intern"}
                onChange={(v) => setEmpField("type", v)}
                options={EMP_TYPE_OPTS}
              />
            </Field>
            <Field label="Position">
              <TextInput
                value={empForm.position || ""}
                onChange={(v) => setEmpField("position", v)}
                placeholder="Software Developer"
              />
            </Field>
            <Field label="Department">
              <TextInput
                value={empForm.department || ""}
                onChange={(v) => setEmpField("department", v)}
              />
            </Field>
            <DateField
              label="Join Date"
              value={empForm.joinDate || ""}
              onChange={(v) => setEmpField("joinDate", v)}
            />
            <Field label="Current">
              <SmsCheckbox
                checked={empForm.current === "yes"}
                onChange={(next) =>
                  setEmpForm({
                    ...empForm,
                    current: next ? "yes" : "no",
                    endDate: next ? "" : empForm.endDate || "",
                  })
                }
                label="Current employment"
              />
            </Field>
            <DateField
              label="End Date"
              value={empForm.current === "yes" ? "" : empForm.endDate || ""}
              onChange={(v) => setEmpField("endDate", v)}
              disabled={empForm.current === "yes"}
            />
          </Grid>
          <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
            Check Current to keep the role open. End Date is disabled while
            Current is selected.
          </Text>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeEmpForm}>
              Cancel
            </Button>
            <BrandButton onClick={saveEmploymentForm}>
              {empFormOpen === "edit" ? "Save" : "Add"}
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {partViewRow ? (
        <ModalShell
          title="Participant details"
          onClose={() => setPartViewId("")}
        >
          <Stack gap={12}>
            <ReadGrid
              pairs={[
                ["Student ID", partViewRow.studentId],
                ["Student Name", partViewRow.name],
                ["College Name", partViewRow.college],
                ["SA Batch", partViewRow.batch],
                ["Current Address", partViewRow.currentAddress?.trim() || "—"],
                ["Phone", partViewRow.phone],
                ["Email", partViewRow.email],
                ["Applied", partViewRow.appliedAt],
                ["Status", partViewRow.status],
                ["Remarks", partViewRow.remarks?.trim() || "—"],
              ]}
            />
            {partViewRow.status === "Pending" ? (
              <Text size="small" style={{ color: MUTED, fontFamily: FONT }}>
                Approve or reject this registration. Remarks and send message
                are required in the next step.
              </Text>
            ) : null}
          </Stack>
          <Row>
            <Spacer />
            {partViewRow.status === "Pending" ? (
              <>
                <MiniAction
                  kind="reject"
                  label="Reject"
                  onClick={() =>
                    openJoinAction(partViewRow.id, "Rejected")
                  }
                />
                <MiniAction
                  kind="approve"
                  label="Approve"
                  onClick={() =>
                    openJoinAction(partViewRow.id, "Approved")
                  }
                />
              </>
            ) : null}
            {partViewRow.status === "Approved" ? (
              <MiniAction
                kind="cancel"
                label="Cancel"
                onClick={() =>
                  openJoinAction(partViewRow.id, "Cancelled")
                }
              />
            ) : null}
          </Row>
        </ModalShell>
      ) : null}

      {joinActionId ? (
        <ModalShell
          title={
            joinActionStatus === "Approved"
              ? "Approve participant"
              : joinActionStatus === "Rejected"
                ? "Reject participant"
                : "Cancel participant"
          }
          onClose={closeJoinAction}
        >
          <Stack gap={12}>
            <Text>
              {joinActionStatus === "Approved"
                ? "Confirm approval for this registration."
                : joinActionStatus === "Rejected"
                  ? "Confirm rejection for this registration."
                  : "Confirm cancellation for this participant."}
            </Text>
            <Field label="Remarks">
              <TextArea
                value={joinRemarks}
                onChange={setJoinRemarks}
                rows={3}
                placeholder="Enter remarks before confirming"
              />
            </Field>
            <SmsCheckbox
              checked={joinSendSms}
              onChange={setJoinSendSms}
              label="Send message to the participant"
            />
          </Stack>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeJoinAction}>
              Back
            </Button>
            <BrandButton onClick={confirmJoinAction}>
              {joinActionStatus === "Approved"
                ? "Approve"
                : joinActionStatus === "Rejected"
                  ? "Reject"
                  : "Cancel participant"}
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}

      {activityCancelOpen ? (
        <ModalShell
          title={
            page === "volunteers" ? "Cancel volunteer" : "Cancel event"
          }
          onClose={closeActivityCancel}
        >
          <Stack gap={12}>
            <Text>
              Cancel this activity before the event date. Pending and approved
              participants will be moved to Cancelled.
            </Text>
            <Field label="Message to participants">
              <TextArea
                value={activityCancelMsg}
                onChange={setActivityCancelMsg}
                rows={3}
                placeholder="Enter cancellation message"
              />
            </Field>
            <SmsCheckbox
              checked={activityCancelSms}
              onChange={setActivityCancelSms}
              label="Send message to the participants"
            />
          </Stack>
          <Row>
            <Spacer />
            <Button variant="ghost" onClick={closeActivityCancel}>
              Back
            </Button>
            <BrandButton onClick={confirmActivityCancel}>
              Cancel activity
            </BrandButton>
          </Row>
        </ModalShell>
      ) : null}
    </div>
  );
}
