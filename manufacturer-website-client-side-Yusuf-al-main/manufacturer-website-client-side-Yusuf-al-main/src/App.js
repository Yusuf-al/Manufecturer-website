import { Route, Routes } from "react-router-dom";
import Admin from "./Component/Admin";
import UserView from "./Component/UserView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Shared/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<UserView></UserView>}></Route>
        <Route path="/dashboard/*" element={<Admin></Admin>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
