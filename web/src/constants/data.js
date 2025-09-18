// /src/constants/data.js

// Dummy Data for States and Districts
export const states = {
  MP: ["Bhopal", "Indore"],
  Odisha: ["Bhubaneswar", "Rayagada"],
  Tripura: ["Agartala", "Udaipur"],
  Telangana: ["Hyderabad", "Warangal"],
};

// District Admin Data
export const districtAdminData = {
  performanceMetrics: [
    { title: "Pending Verifications", value: 1245, color: "bg-yellow-500" },
    { title: "Avg. Processing Time", value: "45 Days", color: "bg-blue-500" },
    { title: "Fraud Alerts", value: 12, color: "bg-red-500" },
    { title: "Top Performing Block", value: "Rayagada", color: "bg-green-500" },
  ],
  recentTasks: [
    { id: "T001", village: "Koraput", priority: "High", due: "2025-09-20", status: "Pending" },
    { id: "T002", village: "Malkangiri", priority: "Medium", due: "2025-09-22", status: "In Progress" },
    { id: "T003", village: "Nabarangpur", priority: "Low", due: "2025-09-25", status: "Pending" },
    { id: "T004", village: "Jeypore", priority: "High", due: "2025-09-21", status: "Completed" },
  ],
  fraudAlerts: [
    { id: "F01", village: "Jeypore", reason: "Overlapping Claim" },
    { id: "F02", village: "Sunabeda", reason: "Document Mismatch" },
  ],
};

// Forest Department Data
export const forestDeptData = {
  healthMetrics: [
    { title: "Forest Cover Change", value: "-0.5%", color: "bg-red-500" },
    { title: "Boundary Disputes", value: 8, color: "bg-yellow-500" },
    { title: "Verification Backlog", value: 210, color: "bg-blue-500" },
    { title: "Encroachment Alerts", value: 4, color: "bg-orange-500" },
  ],
  protectedAreas: [
    { name: "Simlipal National Park", alert: "High", status: "Active Monitoring" },
    { name: "Bhitarkanika", alert: "Low", status: "Stable" },
  ],
  deforestationData: [
    { month: 'Jan', area: 120 }, { month: 'Feb', area: 90 }, { month: 'Mar', area: 150 },
    { month: 'Apr', area: 110 }, { month: 'May', area: 180 }, { month: 'Jun', area: 200 },
  ]
};

// State Government Data
export const stateGovData = {
  statewideMetrics: [
    { title: "Total Pattas Granted", value: "1,25,430", color: "bg-green-500" },
    { title: "Overall Settlement Rate", value: "78%", color: "bg-blue-500" },
    { title: "Districts Covered", value: "30", color: "bg-indigo-500" },
    { title: "Pending Appeals", value: "4,210", color: "bg-yellow-500" },
  ],
  districtPerformance: [
    { name: "Rayagada", rate: 92, claims: 12000 },
    { name: "Koraput", rate: 85, claims: 15000 },
    { name: "Kalahandi", rate: 75, claims: 11000 },
    { name: "Bhubaneswar", rate: 68, claims: 8000 },
    { name: "Puri", rate: 62, claims: 7500 },
  ],
};

// Ministry of Tribal Affairs Data
export const ministryData = {
  nationalMetrics: [
    { title: "Total CFR Area (acres)", value: "4.2 Million", color: "bg-green-600" },
    { title: "National Settlement Rate", value: "72%", color: "bg-blue-600" },
    { title: "States Implemented", value: "18", color: "bg-purple-600" },
    { title: "Total Beneficiaries", value: "2.1 Million", color: "bg-teal-600" },
  ],
  statePerformance: [
    { name: "Odisha", rate: 88, color: "#2E7D32" },
    { name: "Madhya Pradesh", rate: 82, color: "#4CAF50" },
    { name: "Tripura", rate: 75, color: "#FF9800" },
    { name: "Telangana", rate: 68, color: "#F44336" },
    { name: "Chhattisgarh", rate: 78, color: "#00BCD4" },
    { name: "Jharkhand", rate: 71, color: "#9C27B0" },
  ],
};

// NGO / Public Data
export const schemesData = [
    {
        name: "Pradhan Mantri Van Dhan Yojana (PMVDY)",
        description: "A scheme for value addition, branding & marketing of Minor Forest Produces by establishing Van Dhan Kendras.",
        eligibility: "Tribal SHGs, registered tribal communities.",
        link: "#"
    },
    {
        name: "Eklavya Model Residential Schools (EMRS)",
        description: "Providing quality education to Scheduled Tribe (ST) children in remote areas.",
        eligibility: "ST students from Class VI to XII.",
        link: "#"
    },
    {
        name: "National Scheduled Tribes Finance and Development Corporation (NSTFDC)",
        description: "Provides financial assistance at concessional rates for income generating activities.",
        eligibility: "Scheduled Tribes with annual family income up to ₹3,00,000.",
        link: "#"
    }
];


// Map Dummy Data
export const mapData = {
  villages: [
    { name: "Village A", position: [20.2961, 85.8245], status: 'Approved', type: 'IFR' },
    { name: "Village B", position: [20.3200, 85.8500], status: 'Pending', type: 'CR' },
    { name: "Village C", position: [20.2700, 85.8000], status: 'Rejected', type: 'IFR' },
    { name: "Village D", position: [20.3150, 85.7950], status: 'Approved', type: 'CFR' },
  ],
  forests: [
    { name: "Chandaka Forest", position: [20.35, 85.75], type: 'Protected' },
    { name: "Nandankanan Zoological Park", position: [20.39, 85.82], type: 'Wildlife Corridor' },
  ],
  assets: [
      { name: "Water Body", position: [20.28, 85.84], type: 'Lake'},
      { name: "Agricultural Land", position: [20.33, 85.81], type: 'Paddy Field'},
  ],
  center: [20.2961, 85.8245], // Bhubaneswar, Odisha
  zoom: 12,
};
