import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./pages/search/SearchPage.jsx";
import SinglePage from "./pages/single-page/SinglePage.jsx";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/algolia' index element={<SearchPage/>}/>
                <Route path="/algolia/:id" element={<SinglePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;