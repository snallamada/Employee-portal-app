import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"
import EmployeeProfile from "./Components/Pages/EmployeeProfile"
import Leave from './Components/Pages/Leave';
import Documents from './Components/Pages/Documents';
import Payslips from './Components/Pages/Payslips';
import Queries from './Components/Pages/Queries';
import Error from './Components/Pages/Errorpage';
import AdharPDF from "./Components/assets/adharPDF.pdf"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<EmployeeProfile />} />
      <Route path="/leave" element={<Leave />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/payslips" element={<Payslips />} />
      <Route path="/queries" element={<Queries />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
      <Route path="/profile/:id" element={<EmployeeProfile />} />
      <Route path="/leave/:id" element={<Leave />} />
      <Route path="/documents/:id" element={<Documents />} />
      <Route path="/payslips/:id" element={<Payslips />} />
      <Route path="/queries/:id" element={<Queries />} />
      <Route path="/adhar" element={<AdharPDF />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
