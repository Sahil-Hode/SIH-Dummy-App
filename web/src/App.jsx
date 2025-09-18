import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Assuming you have this
import Login from './pages/Loginpage'; // Assuming you have this
import DashboardLayout from './layouts/DashboardLayout';

// District Admin Pages
import DADashboard from './pages/DistrictAdmin/DADashboard';
import FRAAtlas from './pages/DistrictAdmin/FRAAtlas';
import AssetMaps from './pages/DistrictAdmin/AssetMaps';
import Tasks from './pages/DistrictAdmin/Tasks';

// Forest Dept Pages
import FDDashboard from './pages/ForestDept/FDDashboard';

// State Gov Pages
import SGDashboard from './pages/StateGov/SGDashboard';

// Ministry Pages
import MOTADashboard from './pages/Ministry/MOTADashboard';

// NGO / Public Pages
import MapView from './pages/NGOPublic/MapView';
import Schemes from './pages/NGOPublic/Schemes';

// A simple placeholder for pages not fully built out
const Placeholder = ({ title }) => (
    <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <p className="mt-4 text-text-secondary">This page is under construction. Check back soon for updates!</p>
    </div>
);


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* District Admin Routes */}
      <Route path="/district-admin" element={<DashboardLayout role="District Administration" />}>
        <Route index element={<DADashboard />} />
        <Route path="fra-atlas" element={<FRAAtlas />} />
        <Route path="asset-maps" element={<AssetMaps />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="dss" element={<Placeholder title="Decision Support System" />} />
        <Route path="reports" element={<Placeholder title="Reports" />} />
        <Route path="users" element={<Placeholder title="User Management" />} />
      </Route>

      {/* Forest Department Routes */}
      <Route path="/forest-department" element={<DashboardLayout role="Forest Department" />}>
        <Route index element={<FDDashboard />} />
        <Route path="*" element={<Navigate to="/forest-department" replace />} />
      </Route>

      {/* State Government Routes */}
      <Route path="/state-government" element={<DashboardLayout role="State Government" />}>
        <Route index element={<SGDashboard />} />
        <Route path="*" element={<Navigate to="/state-government" replace />} />
      </Route>

      {/* Ministry Routes */}
      <Route path="/ministry" element={<DashboardLayout role="Ministry of Tribal Affairs" />}>
        <Route index element={<MOTADashboard />} />
        <Route path="*" element={<Navigate to="/ministry" replace />} />
      </Route>
      
      {/* NGO / Public Routes */}
      <Route path="/public" element={<DashboardLayout role="NGO / Public" />}>
         <Route index element={<MapView />} />
         <Route path="schemes" element={<Schemes />} />
         <Route path="resources" element={<Placeholder title="Resources" />} />
         <Route path="track" element={<Placeholder title="Track Application" />} />
         <Route path="feedback" element={<Placeholder title="Feedback" />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
