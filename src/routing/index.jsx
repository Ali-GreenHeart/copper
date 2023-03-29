import { Route, Routes } from "react-router"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<div>home page</div>} />
            <Route path="/about" element={<div>about page</div>} />
        </Routes>
    )
}

export default Routing;
