import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])


export default routes