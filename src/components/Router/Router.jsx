import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home"
import Product from "../../pages/Product/Product"
import Error from "../../pages/Error/Error"
import Login from "../../pages/Login/Login"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;