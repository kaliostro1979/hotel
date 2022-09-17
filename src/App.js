import Slider from "./components/Slider";
import PageList from "./components/page-list/PageList";
import RoutesModule from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RoutesModule/>
    </BrowserRouter>
  );
}

export default App;
