import { Outlet } from "react-router-dom";
import Footer from "../Pages/footer/Footer";


const Mainlayouts = () => {
    return (
        <div>

            <nav className="flex justify-between py-5 px-10 shadow-lg">
                <div>
                    <h1>Amajhon</h1>
                </div>
                <ul className="flex gap-5">
                    <li>
                        <a href="/">Home</a>

                    </li>
                    <li>
                        <a href="/products">Products</a>

                    </li>
                    <li>
                        <a href="/dashboard">Dashboard</a>

                    </li>
                </ul>
            </nav>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default Mainlayouts;