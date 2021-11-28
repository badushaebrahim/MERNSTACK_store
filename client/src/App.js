import "./App.css";
import Holder from "./com/Holder";
import Adduser from "./com/Adduser";
import { BrowserRouter , Routes , Route} from "react-router-dom";
//import Ima from "./Ima";
function App() {
 

  return (
        <BrowserRouter>
         <Routes>
         <Route path="/" element={<Adduser />}/>
        <Route path="/posts" element={<Holder />} />

         </Routes>
        
        </BrowserRouter>
  );
}

export default App;