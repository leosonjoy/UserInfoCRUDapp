import "./App.css";
import UsersProvider from "./context/UsersProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/updateUser" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;
