import Form from "../Form";
import Table from "../Table";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation";
import Edit from "../Edit";

function App() {


    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/table" element={<Table />}></Route>
                <Route path="/edit/:id" element={<Edit />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
