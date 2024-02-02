import QueSidebar from "./QueSidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const QueLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <QueSidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default QueLayout;