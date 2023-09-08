import { Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Create from "./pages/Create";
import Update from "./pages/Update";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
