import "./App.css";
import DaisyUi from "./Componants/Daisy/DaisyUi";
import Linechart from "./Componants/LineChart/Linechart";
import Navbar from "./Componants/Navbar/Navbar";
import PriceOptons from "./Componants/PriceOptions/PriceOptons";

function App() {
 

  return (
    <>
      <DaisyUi></DaisyUi>
      <Navbar></Navbar>
      <PriceOptons></PriceOptons>
      <Linechart></Linechart>
    </>
  );
}

export default App;
