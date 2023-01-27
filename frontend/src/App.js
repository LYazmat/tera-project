import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import CreateUser from "./components/pages/CreateUser";
import Perfil from "./components/pages/Perfil";
import Configuracoes from "./components/pages/Configuracoes";
import Cursos from "./components/pages/Cursos";
import CursoApresentacao from "./components/pages/CursoApresentacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cursos pages */}
        <Route path="/" element={<Cursos />} />
        <Route path="/curso/apresentacao/:id" element={<CursoApresentacao />} />         
        
        {/* Client create/edit rotes */}
        <Route path="/create/user/" element={<CreateUser />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/config" element={<Configuracoes />} />

        {/* Client auth route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
