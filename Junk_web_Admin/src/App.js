
import './App.css';

import Nav from './Common/Navbar/Nav';
import Footer from './Common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import Vendors from './Pages/Vendors';
import Settings from './Pages/Settings';
import Login from './Auth/Pages/Login';
import OtpVerify from './Auth/Pages/OtpVerify';
import Dashboard from './Auth/Dashboard/Dashboard';
import UploadScrap from './Pages/Scrap';
import AddScrap from './Components/Scarp/ScarapList';
import EditScrap from './Components/Scarp/EditScrap';
import ScrapDetails from './Components/Scarp/ScrapDetails';
import DashboardPage from './Pages/dashboardPage';
import VendorDetails from './Components/Vendor/VendorDetails';
import CustomerDetails from './Components/Customer/customerDetail';
import Notification from './Pages/Notification';



function App() {
  return (
    <div>

      <Routes>
        <Route path='/OtpVerify' element={<OtpVerify />} />
        <Route path='/' element={<Login />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path='/Customers' element={<Customers />} />
        <Route path="/Vendors" element={<Vendors />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/UploadScrap' element={<UploadScrap />} />
        <Route path='/AddScrap' element={<AddScrap />} />
        <Route path="/editScrap" element={<EditScrap />} />
        <Route path='/ScrapDetails' element={<ScrapDetails />} />
        <Route path='/VendorDetails' element={<VendorDetails />} />
        <Route path='/CustomerDetails' element={<CustomerDetails />} />
        <Route path='/Notification' element={<Notification/>} />
      </Routes>

    </div>

  );
}

export default App;
