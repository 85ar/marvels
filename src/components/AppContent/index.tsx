import { Route, Routes } from "react-router-dom";
import Characters from "../../pages/Characters";
import Comics from "../../pages/Comics";
import NotfoundPage from "../../pages/NotfoundPage";
import Layout from "../Layout";

const AppContent = () => {
  return (
    <div className="AppContent">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="characters" element={<Characters />} />
          <Route path="comics" element={<Comics />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppContent;
