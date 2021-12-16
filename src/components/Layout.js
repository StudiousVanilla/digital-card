import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import YearSelect from "./YearSelect";
import YearContent from "./YearContent";

const Layout = () => {


    return ( 
        <main className="flex flex-col h-screen">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<YearSelect/>}/>
                <Route path="/:year" element={<YearContent/>}/>
            </Routes>
        </BrowserRouter>
        </main>

     );
}
 
export default Layout;