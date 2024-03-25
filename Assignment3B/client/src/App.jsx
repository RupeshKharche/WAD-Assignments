import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./components/login.jsx";

function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route index element={<LoginComponent />}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
