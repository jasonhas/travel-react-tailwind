import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home'
import Service from "./components/Service";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
