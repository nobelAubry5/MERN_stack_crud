import "./App.css";
import User from "./getuser/User";
import AddUser from "./adduser/AddUser"; // Correct the import and component name
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct the import

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<AddUser />} />{" "}
          {/* Correct the component name */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
