
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import JobListing from "./pages/JobListing";
import ShortlistedReusme from "./pages/ShortlistedReusme";
import CompanyProfile from "./pages/CompanyProfile";
import Document from "./pages/Document";
import Setting from "./pages/Setting";
import SignOut from "./pages/SignOut";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
            <Route index element={<Navigate replace to="setting" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="joblisting" element={<JobListing />} />
            <Route path="resume" element={<ShortlistedReusme />} />
            <Route path="profile" element={<CompanyProfile />} />
            <Route path="document" element={<Document />} />
            <Route path="setting" element={<Setting />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="helpcenter" element={<HelpCenter />} />
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
