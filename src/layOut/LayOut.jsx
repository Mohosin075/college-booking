import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/navbar/NavBar";
import Footer from "../pages/shared/footer/Footer";

const LayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;