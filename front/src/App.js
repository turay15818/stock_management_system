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
import ManagerRequest from "./components/managerDashboard/ManagerRequest";
import DirectorRequest from "./components/directorDashboard/DirectorRequest";
import DirectorEditRequest from "./pages/directorDashboard/DirectorEditRequest";
import UserPendingRequest from "./pages/userPendingDashboard/UserPendingRequest";
import RequestReject from "./pages/userRequestReject/RequestReject";
import DirectorRequestReject from "./pages/directorDashboard/DirectorRequestReject";
import DirectorPendingRequest from "./pages/directorDashboard/DirectorPendingRequest";
import ManagerRequestReject from "./pages/managerDashboard/ManagerRequestReject";
import DirectorRequestRejected from "./pages/userDashboard/DirectorRequestRejected";
import AdminRequest from "./pages/AdminRequest";

import ManagerRequestPending from "./pages/userDashboard/ManagerRequestPending";
import DirectorRequestPending from "./pages/userDashboard/DirectorRequestPending";
import ManagerRequestRejected from "./pages/userDashboard/ManagerRequestRejected";
// import DirectorRequestRejected from "./pages/directorDashboard/DirectorRequestRejected";


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
          <Route path="/managerRequest" element={<ManagerRequest />} />
          <Route path="/directorRequest" element={<DirectorRequest />} />
          <Route path="/directorEditRequest" element={<DirectorEditRequest />} />
          <Route path="/directorRequest/edit/:id" element={<DirectorEditRequest />} />
          <Route path="/userPendingRequest" element={<UserPendingRequest />} />
          <Route path="/requestReject" element={<RequestReject />} />
          <Route path="/directorRequestReject" element={<DirectorRequestReject />} />
          <Route path="/directorPendingRequest" element={<DirectorPendingRequest />} />
          <Route path="/managerRequestReject" element={<ManagerRequestReject />} />
          <Route path="/adminRequest" element={<AdminRequest />} />
         






          <Route path="/managerRequestPending" element={<ManagerRequestPending />} />
          <Route path="/managerRequestRejected" element={<ManagerRequestRejected />} />
          <Route path="/directorRequestPending" element={<DirectorRequestPending />} />
          <Route path="directorRequestRejected" element={<DirectorRequestRejected />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
