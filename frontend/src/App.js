import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import Configs from "./components/pages/Configs";
import Courses from "./components/pages/Courses";
import CourseDetail from "./components/pages/CourseDetail";
import Favorites from "./components/pages/Favorites";
import Enrolls from "./components/pages/Enrolls";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          {/* Courses routes */}
          <Route path="/course" element={<Courses />} />
          <Route path="/" element={<Navigate to="/course" />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route
            path="/favorite"
            element={<PrivateRoute Component={Favorites} />}
          />
          <Route
            path="/enroll"
            element={<PrivateRoute Component={Enrolls} />}
          />

          {/* Profile and Configs routes */}
          <Route
            path="/profile"
            element={<PrivateRoute Component={Profile} />}
          />
          <Route path="/config" 
            element={<PrivateRoute Component={Configs} />}/>

          {/* Register and auth routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
