import PythonSidebar from "./Pythonsidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const PythonLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <PythonSidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default PythonLayout;