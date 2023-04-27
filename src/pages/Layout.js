import { Outlet } from "react-router-dom";
import Footer from "components/ordinary/footer/Footer";

function Layout() {
    return <>
        <Outlet />
        <Footer />
    </>
}

export default Layout;