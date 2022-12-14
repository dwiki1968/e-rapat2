import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Layout from "./containers/Layout";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Settings from "./containers/Settings";
import DetailRapat from "./containers/DetailRapat";
import Landing from "./containers/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/rapat/:rapatId" element={<DetailRapat />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
