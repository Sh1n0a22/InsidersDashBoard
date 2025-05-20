
import { BrowserRouter, Route, Routes } from "react-router";
import AuthGuard from "./features/Auth/Components/AuthGuardComponent";
import Login from "./features/Auth/Components/Login";
import Register from "./features/Auth/Components/Register";
import Dashboard from "./features/Dashboard/components/Dashboar";
import ResetPasword from "./features/Auth/Components/ResetPassword";
import NavBar from "./layouts/navbar";
import TasksBoard from "./features/Dashboard/components/Todolist";


function App() {
return(
  <BrowserRouter >
   <NavBar>
    <Routes>
      <Route path="/tasks" element={<TasksBoard/>}/>
      <Route path="/PasswordReset" element={<ResetPasword/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>}/>
    </Routes>
   </NavBar>
  </BrowserRouter>
)

}

export default App;