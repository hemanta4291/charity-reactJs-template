import {Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            {/* <Route path='*' element={<NoMatch />} /> */}
        </Routes>
    );
};

export default AppRouter;