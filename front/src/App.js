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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
