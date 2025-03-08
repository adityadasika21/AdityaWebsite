import { lazy } from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/index";

function App() {
    
    const Blog = lazy(() => import('./views/blog/index'));
    const Project = lazy(() => import('./views/projects/index'));

    const Error = lazy(() => import('./views/error'));

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Project />} />
                <Route path="*"  element={<Error />} />
            </Routes>
        </>
    )
}

export default App
