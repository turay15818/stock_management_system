import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Request from "./pages/Request";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddRequest from "./pages/AddRequest";
import EditRequest from "./pages/EditRequest";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
