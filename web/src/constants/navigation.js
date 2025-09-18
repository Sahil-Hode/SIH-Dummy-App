// /src/constants/navigation.js
import { RxDashboard } from 'react-icons/rx';
import { FaMapMarkedAlt, FaTasks, FaFileAlt, FaUsers, FaShieldAlt, FaTree, FaBalanceScale, FaLandmark, FaGlobe, FaBook, FaBullseye, FaHandsHelping, FaSearch, FaCommentDots } from 'react-icons/fa';

export const navLinks = {
  "District Administration": [
    { name: 'Dashboard', path: '/district-admin', icon: RxDashboard },
    { name: 'FRA Atlas', path: '/district-admin/fra-atlas', icon: FaMapMarkedAlt },
    { name: 'Asset Maps', path: '/district-admin/asset-maps', icon: FaTree },
    { name: 'DSS', path: '/district-admin/dss', icon: FaBullseye },
    { name: 'Tasks', path: '/district-admin/tasks', icon: FaTasks },
    { name: 'Reports', path: '/district-admin/reports', icon: FaFileAlt },
    { name: 'Users', path: '/district-admin/users', icon: FaUsers },
  ],
  "Forest Department": [
    { name: 'Dashboard', path: '/forest-department', icon: RxDashboard },
    { name: 'FRA Atlas', path: '/forest-department/fra-atlas', icon: FaMapMarkedAlt },
    { name: 'Asset Maps', path: '/forest-department/asset-maps', icon: FaTree },
    { name: 'Compliance', path: '/forest-department/compliance', icon: FaShieldAlt },
    { name: 'Tasks', path: '/forest-department/tasks', icon: FaTasks },
    { name: 'Reports', path: '/forest-department/reports', icon: FaFileAlt },
  ],
  "State Government": [
    { name: 'Dashboard', path: '/state-government', icon: RxDashboard },
    { name: 'FRA Atlas', path: '/state-government/fra-atlas', icon: FaGlobe },
    { name: 'Asset Maps', path: '/state-government/asset-maps', icon: FaLandmark },
    { name: 'DSS', path: '/state-government/dss', icon: FaBalanceScale },
    { name: 'Users & Admin', path: '/state-government/users', icon: FaUsers },
    { name: 'Reports', path: '/state-government/reports', icon: FaFileAlt },
  ],
  "Ministry of Tribal Affairs": [
    { name: 'Dashboard', path: '/ministry', icon: RxDashboard },
    { name: "FRA Atlas", path: "/ministry/fra-atlas", icon: FaGlobe },
    { name: "Asset Maps", path: "/ministry/asset-maps", icon: FaLandmark },
    { name: "DSS", path: "/ministry/dss", icon: FaBalanceScale },
    { name: "Reports", path: "/ministry/reports", icon: FaFileAlt },
    { name: "Users & Admin", path: "/ministry/users", icon: FaUsers },
  ],
  "NGO / Public": [
    { name: 'Map View', path: '/public', icon: FaMapMarkedAlt },
    { name: 'Schemes', path: '/public/schemes', icon: FaHandsHelping },
    { name: 'Resources', path: '/public/resources', icon: FaBook },
    { name: 'Track Application', path: '/public/track', icon: FaSearch },
    { name: 'Feedback', path: '/public/feedback', icon: FaCommentDots },
  ],
};
