import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import Configs from "./components/pages/Configs";
import Courses from "./components/pages/Courses";
import CourseDetail from "./components/pages/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Courses routes */}
        <Route path="/" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />         
        
        {/* Profile and Configs routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/config" element={<Configs />} />

        {/* Auth auth route */}        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
