import "./App.css";
import User from "./getuser/User";
import AddUser from "./adduser/AddUser";
import UpdateUser from "./updateuser/UpdateUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
