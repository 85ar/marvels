import { Route, Routes } from "react-router-dom";
import Characters from "../../pages/Characters";
import Comics from "../../pages/Comics";
import Headers from "../Headers";

const AppContent = () => {
  return (
    <div className="AppContent">
      <Headers />
      <main>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppContent;
