
import { BrowserRouter, Route, Routes } from "react-router";
import AuthGuard from "./Authentification/Components/AuthGuardComponent";
import Login from "./Authentification/Components/Login";
import Register from "./Authentification/Components/Register";

import Layout from "./DashboardComponents/Layout";
import Dashboard from "./DashboardComponents/Dashboar";
import ResetPasword from "./Authentification/Components/ResetPassword";


function App() {
return(
  <BrowserRouter >
   <Layout>
    <Routes>
      <Route path="/PasswordReset" element={<ResetPasword/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>}/>
    </Routes>
   </Layout>
  </BrowserRouter>
)

}

export default App;