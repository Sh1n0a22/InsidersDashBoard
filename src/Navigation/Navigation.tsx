
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthGuard from "../features/Auth/Components/AuthGuardComponent";
import Login from "../features/Auth/Components/Login";
import Register from "../features/Auth/Components/Register";
import Dashboard from "../features/Dashboard/components/Dashboar";
import ResetPasword from "../features/Auth/Components/ResetPassword";
import TasksBoard from "../features/Todolist/components/Todolist";
import NavBar from "../sharedComponents/navbar";

function Navigation() {
return(
  <BrowserRouter basename="/">
   <NavBar>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard"/>}/>
      <Route path="/tasks" element={
        <AuthGuard>      
          <TasksBoard/>
        </AuthGuard>}/>
      <Route path="/PasswordReset" element={<ResetPasword/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>}/>
    </Routes>
   </NavBar>
  </BrowserRouter>
)

}

export default Navigation;