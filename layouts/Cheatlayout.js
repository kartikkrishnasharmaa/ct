import Cheatsidebar from "./Cheatsidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const CheatLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <Cheatsidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default CheatLayout;