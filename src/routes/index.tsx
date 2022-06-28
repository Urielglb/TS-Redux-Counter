import { Routes, Route } from "react-router-dom";
import App from "../views/App";
import Test from "../views/Test";

export default () => {
    return(
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/test" element={<Test/>} />
        </Routes>
    )
}