import { lazy } from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/index";
import AnimatedCursor from 'react-animated-cursor';

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
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                innerStyle={{
                    backgroundColor: '#A54B0A'
                }}
                outerStyle={{
                    border: '3px solid #A54B0A'
                }}
            />
        </>
    )
}

export default App
