import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Request from "./pages/Request";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddRequest from "./pages/AddRequest";
import EditRequest from "./pages/EditRequest";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import UserRequest from "./pages/userDashboard/UserRequest";

import DirectorRequestRejectAll from "./pages/directorDashboard/DirectorRequestRejectAll";
import DirectorPendingRequest from "./pages/directorDashboard/DirectorPendingRequest";
import DirectorAppRequest from "./pages/directorDashboard/DirectorAppRequest";



import ManagerRequest from "./pages/managerDashboard/ManagerRequest";
import ManagerRequestPending from "./pages/userDashboard/ManagerRequestPending";
import DirectorRequestPending from "./pages/userDashboard/DirectorRequestPending";
import ManagerRequestRejected from "./pages/userDashboard/ManagerRequestRejected";
import ManagerApprovedRequest from "./pages/managerDashboard/ManagerApprovedRequest";


import DirectorRequest from "./pages/directorDashboard/DirectorRequest";
import DirectorEditRequest from "./pages/directorDashboard/DirectorEditRequest";
import UserPendingRequest from "./pages/userPendingDashboard/UserPendingRequest";
import RequestReject from "./pages/userRequestReject/RequestReject";
import DirectorRequestReject from "./pages/directorDashboard/DirectorRequestRejectAll";
import ManagerReqRejected from "./pages/managerDashboard/ManagerReqRejected";


import ManagerRequestReject from "./pages/managerDashboard/ManagerRequestReject";
import DirectorRequestRejectedUser from "./pages/userDashboard/DirectorRequestRejectedUser";
import AdminRequest from "./pages/AdminRequest";



// import ManagerRequestPending from "./pages/userDashboard/ManagerRequestPending";
import DirectorRequestRejectedForUser from "./pages/userDashboard/DirectorRequestRejectedForUser";
import DirRequestPending from "./pages/managerDashboard/DirRequestPending"
import DirRequestRejected from "./pages/managerDashboard/DirRequestRejected"
import ManagerReqPending from "./pages/managerDashboard/ManagerReqPending";
// import DirRequestPending from "./pages/managerDashboard/DirRequestPending"
// import DirRequestPending from "./pages/managerDashboard/DirRequestPending"
// import DirectorRequestRejected from "./pages/directorDashboard/DirectorRequestRejected";


import StockIn from "./pages/inventory/StockIn";
import StockApprovedView from "./pages/inventory/StockApprovedView";
import StockByDetails from "./pages/inventory/StockByDetails";
import StockInUse from "./pages/inventory/StockInUse";
import AllStock from "./pages/inventory/AllStock";
import StockInCreate from "./pages/inventory/StockInCreate";
import StockInCreateView from "./pages/inventory/StockInCreateView";
import StockEdit from "./pages/inventory/StockEdit";
import ViewSingleStock from "./pages/inventory/ViewSingleStock";





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/request" element={<Request />} />
          <Route path="/request/add" element={<AddRequest />} />
          <Route path="/request/edit/:id" element={<EditRequest />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/userRequest" element={<UserRequest />} />

          <Route path="/directorRequest" element={<DirectorRequest />} />
          <Route path="/directorAppRequest" element={<DirectorAppRequest />} />
          <Route path="/directorPendingRequest" element={<DirectorPendingRequest />} />
          <Route path="/directorRequestRejectAll" element={<DirectorRequestRejectAll />} />
          <Route path="/DirectorRequestRejectedForUser" element={<DirectorRequestRejectedForUser />} />


          <Route path="/managerRequest" element={<ManagerRequest />} />
          <Route path="/managerReqPending" element={<ManagerReqPending />} />
          <Route path="/dirRequestPending" element={<DirRequestPending />} />
          <Route path="/dirRequestRejected" element={<DirRequestRejected />} />
          <Route path="/managerApprovedRequest" element={<ManagerApprovedRequest />} />
          {/* <Route path="/managerRequestRejected" element={<ManagerRequestRejected />} /> */}





          <Route path="/stockIn" element={<StockIn />} />
          <Route path="/stockApprovedView" element={<StockApprovedView />} />
          <Route path="/stockInUse" element={<StockInUse />} />
          <Route path="/stock/get/:id" element={<StockByDetails />} />
          <Route path="/allStock" element={<AllStock />} />
          <Route path="/stockInCreate" element={<StockInCreate />} />
          <Route path="/stockInCreateView" element={<StockInCreateView />} />
          <Route path="/stock/edit/:id" element={<StockEdit />} />
          <Route path="/viewSingleStock/:id" element={<ViewSingleStock />} />







          <Route path="/directorEditRequest" element={<DirectorEditRequest />} />
          <Route path="/directorRequest/edit/:id" element={<DirectorEditRequest />} />
          <Route path="/userPendingRequest" element={<UserPendingRequest />} />
          <Route path="/requestReject" element={<RequestReject />} />
          <Route path="/directorRequestReject" element={<DirectorRequestReject />} />



          <Route path="/managerRequestReject" element={<ManagerRequestReject />} />
          <Route path="/managerReqRejected" element={<ManagerReqRejected />} />
          <Route path="/adminRequest" element={<AdminRequest />} />


          




          <Route path="/managerRequestPending" element={<ManagerRequestPending />} />
          <Route path="/managerRequestRejected" element={<ManagerRequestRejected />} />
          <Route path="/directorRequestPending" element={<DirectorRequestPending />} />
          <Route path="directorRequestRejectedUser" element={<DirectorRequestRejectedUser />} />




         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
