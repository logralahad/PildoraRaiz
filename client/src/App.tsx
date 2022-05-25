import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import { PublicLayout } from "./components/Public/PublicLayout";
import { Home } from "./pages/Public/Home/Home";
import { Us } from "./pages/Public/Us/Us";
import { Services } from "./pages/Public/Services/Services";
import Contact from "./pages/Public/Contact/Contact";
import Place from "./pages/Public/Place/Place";
import { Login } from "./pages/Public/Login/Login";

import { AdminTablero } from "./components/Private/AdminTablero";
import { UserDash } from "./components/Private/UserTablero";
import Layout from "./components/Layout";
import NotFound404 from "./pages/Public/404";
import { ProtectedRoute } from "./routes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        {/* Rutas publicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="nosotros" element={<Us />} />
          <Route path="servicios" element={<Services />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="instalaciones" element={<Place />} />
          {/* Por si no existe la ruta */}
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute isAdmin={true} />}>
          <Route path="admin" element={<AdminTablero />} />
        </Route>

        <Route element={<ProtectedRoute isAdmin={false} />}>
          <Route path="tablero" element={<UserDash />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
