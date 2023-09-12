import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UpdateForm from "./components/UpdateForm";
import CreateForm from "./components/CreateForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/CreateForm/" element={<CreateForm />}>
          {" "}
        </Route>
        <Route path="/UpdateForm/:id" element={<UpdateForm />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
