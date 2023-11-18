import { Routes, Route } from "react-router-dom";
import Layout from './Layout/index'
import Page404 from './ErrorPages/404';
import About from "./About";
import Work from './Work';
import Careers from './Careers';
import Blogs from './Blog';
import Home from './Home';
const App = () => {
    const listRoutes = <Routes>
        <Route path="/" >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="work" element={<Work />} />
            <Route path="careers" element={<Careers />} />
            <Route path="*" element={<Page404 />} />
        </Route>
    </Routes>

    return <Layout RoutesPages={listRoutes} />
}

export default App;